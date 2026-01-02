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
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 20, right: 100, left: 20, bottom: 20 }}
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
          tick={chartConfig.axis.style}
          stroke={chartConfig.axis.stroke}
          width={180}
        />

        {showTooltip && (
          <Tooltip
            contentStyle={chartConfig.tooltip.contentStyle}
            cursor={chartConfig.tooltip.cursor}
            formatter={(value: number | undefined) => value !== undefined ? formatPercent(value) : ""}
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
  );
}
