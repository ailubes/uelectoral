"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { chartConfig, chartColors, formatPercent } from "@/lib/chart-config";
import { ChartTooltip } from "./chart-tooltip";

export interface HorizontalBarDataPoint {
  name: string;
  current: number;
  previous: number;
  change?: number;
  isSignificant?: boolean;
}

export interface HorizontalBarChartProps {
  data: HorizontalBarDataPoint[];
  height?: number;
  currentLabel: string;
  previousLabel: string;
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
}

// Custom YAxis tick component to color the change indicators and split long labels
const CustomYAxisTick = ({ x, y, payload }: any) => {
  const text = payload.value;
  const hasUpIndicator = text.includes('↑');
  const hasDownIndicator = text.includes('↓');

  // Check if text has parentheses and split it
  const parenMatch = text.match(/^(.*?)\s*(\(.*\))$/);
  const hasParentheses = parenMatch !== null;
  
  let mainText = text;
  let parenthesesText = '';
  
  if (hasParentheses) {
    mainText = parenMatch[1];
    parenthesesText = parenMatch[2];
  }

  // Handle indicators on the main text
  const mainParts = mainText.split(/(↑|↓)/);
  const hasIndicator = mainParts.length > 1;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={4} textAnchor="end" fontSize={14} fontWeight={500}>
        {hasIndicator ? (
          <>
            <tspan fill="var(--foreground)">{mainParts[0]}</tspan>
            <tspan
              fill={mainParts[1] === '↑' ? 'var(--chart-primary)' : 'var(--accent)'}
              fontWeight={700}
            >
              {mainParts[1]}
            </tspan>
            <tspan fill="var(--foreground)">{mainParts[2]}</tspan>
          </>
        ) : (
          <tspan fill="var(--foreground)">{mainText}</tspan>
        )}
      </text>
      {parenthesesText && (
        <text x={0} y={16} dy={4} textAnchor="end" fontSize={12} fontWeight={400} fill="var(--muted-foreground)">
          {parenthesesText}
        </text>
      )}
    </g>
  );
};

export function HorizontalBarChart({
  data,
  height = 600,
  currentLabel,
  previousLabel,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
}: HorizontalBarChartProps) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px]">
        <ResponsiveContainer width="100%" height={height}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 100, left: 200, bottom: 20 }}
          >
            {showGrid && (
              <CartesianGrid
                strokeDasharray={chartConfig.grid.strokeDasharray}
                stroke={chartConfig.grid.stroke}
              />
            )}

            <XAxis
              type="number"
              tick={chartConfig.axis.style}
              stroke={chartConfig.axis.stroke}
              tickFormatter={formatPercent}
              domain={[0, 30]}
            />

            <YAxis
              type="category"
              dataKey="name"
              tick={<CustomYAxisTick />}
              stroke={chartConfig.axis.stroke}
              width={200}
            />

            {showTooltip && (
              <Tooltip
                content={<ChartTooltip formatValue={formatPercent} />}
                cursor={chartConfig.tooltip.cursor}
              />
            )}

            {showLegend && (
              <Legend
                wrapperStyle={chartConfig.legend.wrapperStyle}
              />
            )}

            <Bar
              dataKey="current"
              name={currentLabel}
              fill={chartColors.primary}
              radius={[0, 4, 4, 0]}
            />

            <Bar
              dataKey="previous"
              name={previousLabel}
              fill={chartColors.secondary}
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
