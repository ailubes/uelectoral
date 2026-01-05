"use client";

import { useEffect, useState } from "react";
import { TooltipProps } from "recharts";

interface ChartTooltipProps extends TooltipProps<number, string> {
  formatValue?: (value: number) => string;
}

export function ChartTooltip({ active, payload, label, formatValue }: ChartTooltipProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme === 'dark');
    };

    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  if (!active || !payload || payload.length === 0) return null;

  // Use explicit colors based on theme
  const bgColor = isDark ? "#0F2528" : "#FFFFFF";
  const borderColor = isDark ? "#1E3A3D" : "#E5E5E5";
  const textColor = isDark ? "#FAFAFA" : "#1A1A1A";

  return (
    <div
      className="rounded-lg border px-3 py-2 shadow-md"
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
      }}
    >
      <p
        className="mb-2 font-semibold"
        style={{ color: textColor }}
      >
        {label}
      </p>
      {payload.map((entry, index) => (
        <div key={index} className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span style={{ color: textColor }}>
            {entry.name}: {formatValue ? formatValue(entry.value as number) : entry.value}
          </span>
        </div>
      ))}
    </div>
  );
}
