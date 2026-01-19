"use client";

import { Section } from "@/components/layout";
import { LineChart } from "@/components/charts";
import { useI18n } from "@/lib/i18n-context";
import {
  getCountryDirection,
  getCountryDirectionQuestion,
} from "@/lib/data";
import { chartColors } from "@/lib/chart-config";
import { formatChartPeriod } from "@/lib/date-formatter";

export function CountryDirectionSection() {
  const { t, locale } = useI18n();

  const countryDirection = getCountryDirection();
  const question = getCountryDirectionQuestion(locale);

  // Transform data for LineChart
  const chartData = countryDirection.timeSeries.map((point) => ({
    period: point.period,
    wrongDirection: point.wrongDirection,
    rightDirection: point.rightDirection,
    hardToSay: point.hardToSay,
  }));

  // Define chart series with bilingual labels
  const series = [
    {
      dataKey: "rightDirection",
      name: locale === "uk" ? "Правильний напрямок" : "Right Direction",
      color: chartColors.rightDirection,
      strokeWidth: 3,
    },
    {
      dataKey: "wrongDirection",
      name: locale === "uk" ? "Неправильний шлях" : "Wrong Path",
      color: chartColors.wrongDirection,
      strokeWidth: 3,
    },
    {
      dataKey: "hardToSay",
      name: locale === "uk" ? "Важко сказати" : "Hard to say",
      color: chartColors.hardToSay,
      strokeWidth: 2,
    },
  ];

  return (
    <Section id="countryDirection" minHeight="auto" background="default">
      <div className="flex flex-col gap-10">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-gray-900 dark:text-white">
            {t("nav.countryDirection")}
          </h2>
          <p className="text-primary text-lg sm:text-xl font-medium px-4">
            {question}
          </p>
        </div>

        {/* Line Chart in Glass Card */}
        <div className="glass-card p-4 sm:p-8">
          <LineChart
            data={chartData}
            series={series}
            height={500}
            formatXAxis={(period) => formatChartPeriod(period, locale)}
            xAxisKey="period"
          />
        </div>

        {/* Statistical note */}
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-gray-500 dark:text-white/50 text-center px-4 leading-relaxed">
          {locale === "uk"
            ? "Дані на основі щомісячних опитувань. Вибірка: 1000 респондентів. U electoral data Project."
            : "Data based on monthly surveys. Sample: 1000 respondents. U electoral data Project."}
        </p>
      </div>
    </Section>
  );
}
