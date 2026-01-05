"use client";

import { TooltipProps } from "recharts";

interface ChartTooltipProps extends TooltipProps<number, string> {
  formatValue?: (value: number) => string;
}

export function ChartTooltip({ active, payload, label, formatValue }: ChartTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div
      className="rounded-lg border px-3 py-2 shadow-md"
      style={{
        backgroundColor: "var(--background-card)",
        borderColor: "var(--chart-grid)",
      }}
    >
      <p
        className="mb-2 font-semibold"
        style={{ color: "var(--foreground)" }}
      >
        {label}
      </p>
      {payload.map((entry, index) => (
        <div key={index} className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span style={{ color: "var(--foreground)" }}>
            {entry.name}: {formatValue ? formatValue(entry.value as number) : entry.value}
          </span>
        </div>
      ))}
    </div>
  );
}
