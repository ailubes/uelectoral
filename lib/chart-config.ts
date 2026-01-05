/**
 * Chart configuration for theme-aware colors and consistent styling
 */

import { formatChartPeriod } from "./date-formatter";

// Chart colors that bind to CSS variables for theme switching
export const chartColors = {
  // Primary data series (current period)
  primary: "var(--chart-primary)",

  // Secondary data series (previous period)
  secondary: "var(--chart-secondary)",

  // For line charts with multiple series
  wrongDirection: "#C12745", // Red
  rightDirection: "#2A919C", // Teal
  hardToSay: "#A8A8A8", // Gray

  // Grid and axes
  grid: "var(--chart-grid)",
  axis: "var(--foreground)",

  // Tooltip
  tooltipBg: "var(--background-card)",
  tooltipBorder: "var(--chart-grid)",
  tooltipText: "var(--foreground)",
};

// Common chart configuration
export const chartConfig = {
  // Responsive container props
  container: {
    width: "100%",
    height: 400,
  },

  // Margin for charts (mobile-friendly)
  margin: {
    top: 20,
    right: 10,
    left: 10,
    bottom: 60,
  },

  // Grid configuration
  grid: {
    strokeDasharray: "3 3",
    stroke: chartColors.grid,
  },

  // Axis configuration
  axis: {
    stroke: chartColors.axis,
    style: {
      fontSize: "14px",
      fontWeight: 500,
      fill: chartColors.axis
    },
  },

  // Tooltip configuration
  tooltip: {
    contentStyle: {
      backgroundColor: chartColors.tooltipBg,
      border: `1px solid ${chartColors.tooltipBorder}`,
      borderRadius: "8px",
      color: chartColors.tooltipText,
      fontSize: "14px",
    },
    cursor: { stroke: chartColors.grid },
  },

  // Legend configuration
  legend: {
    wrapperStyle: {
      fontSize: "14px",
      fontWeight: 500,
    },
    iconType: "line" as const,
  },

  // Animation
  animation: {
    animationBegin: 0,
    animationDuration: 800,
    animationEasing: "ease-in-out" as const,
  },
};

// Helper: Format percentage for display
export function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}

// Re-export the formatter for convenience
export { formatChartPeriod };
