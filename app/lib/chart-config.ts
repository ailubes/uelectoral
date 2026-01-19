/**
 * Chart configuration for theme-aware colors and consistent styling
 */

import { formatChartPeriod } from "./date-formatter";

// Chart colors that bind to CSS variables for theme switching
export const chartColors = {
  // Primary data series (current period - Dec '25)
  primary: "var(--chart-primary, #1a7a85)", // Teal variant

  // Secondary data series (previous period - Nov '25)
  secondary: "var(--chart-secondary, #c41e3a)", // Crimson accent

  // For line charts with multiple series
  wrongDirection: "var(--chart-secondary, #c41e3a)", // Match crimson for wrong
  rightDirection: "var(--chart-primary, #1a7a85)", // Match teal for right
  hardToSay: "var(--chart-neutral, #4a5d66)", // Deep petrol variant for neutral

  // Grid and axes - use CSS variables for theme awareness
  grid: "var(--chart-grid, rgba(0, 0, 0, 0.1))",
  axis: "var(--muted-foreground, rgba(0, 0, 0, 0.6))",

  // Tooltip - use CSS variables for theme awareness
  tooltipBg: "var(--popover, rgba(255, 255, 255, 0.95))",
  tooltipBorder: "var(--border, rgba(0, 0, 0, 0.1))",
  tooltipText: "var(--foreground, #1a1a1a)",
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
    vertical: false,
  },

  // Axis configuration
  axis: {
    stroke: chartColors.axis,
    style: {
      fontSize: "12px",
      fontWeight: 500,
      fill: chartColors.axis,
      fontFamily: "var(--font-inter)",
    },
  },

  // Tooltip configuration
  tooltip: {
    contentStyle: {
      backgroundColor: chartColors.tooltipBg,
      border: `1px solid ${chartColors.tooltipBorder}`,
      borderRadius: "12px",
      backdropFilter: "blur(12px)",
      color: chartColors.tooltipText,
      fontSize: "14px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    },
    cursor: { stroke: chartColors.grid, strokeWidth: 2 },
  },

  // Legend configuration
  legend: {
    wrapperStyle: {
      fontSize: "13px",
      fontWeight: 600,
      paddingTop: "20px",
      textTransform: "uppercase" as const,
      letterSpacing: "0.05em",
    },
    iconType: "circle" as const,
  },

  // Animation
  animation: {
    animationBegin: 0,
    animationDuration: 1000,
    animationEasing: "ease-out" as const,
  },
};

// Helper: Format percentage for display
export function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}

// Re-export the formatter for convenience
export { formatChartPeriod };

