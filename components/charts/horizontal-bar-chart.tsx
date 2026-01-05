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

// Custom YAxis tick component to color the change indicators
const CustomYAxisTick = ({ x, y, payload }: any) => {
  const text = payload.value;
  const hasUpIndicator = text.includes('↑');
  const hasDownIndicator = text.includes('↓');

  if (hasUpIndicator || hasDownIndicator) {
    // Split text and indicator
    const parts = text.split(/(↑|↓)/);

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={4} textAnchor="end" fontSize={14} fontWeight={500}>
          <tspan fill="var(--foreground)">{parts[0]}</tspan>
          <tspan
            fill={hasUpIndicator ? 'var(--chart-primary)' : 'var(--accent)'}
            fontWeight={700}
          >
            {parts[1]}
          </tspan>
        </text>
      </g>
    );
  }

  return (
    <text x={x} y={y} dy={4} textAnchor="end" fontSize={14} fontWeight={500} fill="var(--foreground)">
      {text}
    </text>
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
            margin={{ top: 20, right: 100, left: 120, bottom: 20 }}
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
              width={180}
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
