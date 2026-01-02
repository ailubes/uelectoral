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
      <div className="flex flex-col gap-8">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("nav.countryDirection")}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-4xl mx-auto px-4">
            {question}
          </p>
        </div>

        {/* Line Chart */}
        <div className="w-full">
          <LineChart
            data={chartData}
            series={series}
            height={500}
            formatXAxis={(period) => formatChartPeriod(period, locale)}
            xAxisKey="period"
          />
        </div>

        {/* Statistical note */}
        <p className="text-xs sm:text-sm text-muted-foreground text-center px-4 leading-relaxed">
          {locale === "uk"
            ? "Дані на основі щомісячних опитувань. Вибірка: 1000 респондентів."
            : "Data based on monthly surveys. Sample: 1000 respondents."}
        </p>
      </div>
    </Section>
  );
}
