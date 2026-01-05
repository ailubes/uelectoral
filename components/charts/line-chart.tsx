"use client";

import { useState, useEffect } from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { chartConfig, chartColors, formatPercent } from "@/lib/chart-config";

export interface LineChartDataPoint {
  period: string;
  [key: string]: string | number;
}

export interface LineChartSeries {
  dataKey: string;
  name: string;
  color: string;
  strokeWidth?: number;
}

export interface LineChartProps {
  data: LineChartDataPoint[];
  series: LineChartSeries[];
  height?: number;
  xAxisKey?: string;
  formatXAxis?: (value: string) => string;
  formatYAxis?: (value: number) => string;
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
}

export function LineChart({
  data,
  series,
  height = 400,
  xAxisKey = "period",
  formatXAxis,
  formatYAxis = formatPercent,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
}: LineChartProps) {
  // Track window width for responsive behavior
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Make chart height responsive: shorter on mobile
  const responsiveHeight = isMobile ? 300 : height;

  return (
    <ResponsiveContainer width="100%" height={responsiveHeight}>
      <RechartsLineChart
        data={data}
        margin={chartConfig.margin}
      >
        {showGrid && (
          <CartesianGrid
            strokeDasharray={chartConfig.grid.strokeDasharray}
            stroke={chartConfig.grid.stroke}
          />
        )}

        <XAxis
          dataKey={xAxisKey}
          tick={chartConfig.axis.style}
          stroke={chartConfig.axis.stroke}
          tickFormatter={formatXAxis}
          angle={-45}
          textAnchor="end"
          height={60}
          interval={isMobile ? "preserveStartEnd" : "preserveStart"}
        />

        <YAxis
          tick={chartConfig.axis.style}
          stroke={chartConfig.axis.stroke}
          tickFormatter={formatYAxis}
          domain={[0, 100]}
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
            wrapperStyle={{
              ...chartConfig.legend.wrapperStyle,
              paddingTop: '20px',
            }}
            iconType={chartConfig.legend.iconType}
            layout={isMobile ? 'vertical' : 'horizontal'}
          />
        )}

        {series.map((s) => (
          <Line
            key={s.dataKey}
            type="monotone"
            dataKey={s.dataKey}
            name={s.name}
            stroke={s.color}
            strokeWidth={s.strokeWidth || 2}
            dot={false}
            {...chartConfig.animation}
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}
