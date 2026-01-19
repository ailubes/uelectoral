"use client";

import { useState } from "react";
import { Section } from "@/components/layout";
import { HorizontalBarChart } from "@/components/charts";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n-context";
import {
  getPresidentialQuestion,
  getCurrentDisplayDate,
  getPreviousDisplayDate,
  transformPresidentialForChart,
} from "@/lib/data";
import { ChevronDown, ChevronUp } from "lucide-react";

export function PresidentialElectionSection() {
  const { t, locale } = useI18n();
  const [showAll, setShowAll] = useState(false);

  const question = getPresidentialQuestion(locale);
  const currentDate = getCurrentDisplayDate(locale);
  const previousDate = getPreviousDisplayDate(locale);

  const allCandidates = transformPresidentialForChart(locale);
  const displayedCandidates = showAll ? allCandidates : allCandidates.slice(0, 10);

  return (
    <Section id="president" minHeight="auto" background="default">
      <div className="glass-card">
        <div className="p-6 sm:p-10 flex flex-col gap-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-gray-900 dark:text-white">
              {t("nav.president")}
            </h2>
            <p className="text-primary text-lg sm:text-xl font-medium max-w-4xl mx-auto">
              {question}
            </p>
          </div>

          {/* Chart */}
          <div className="w-full">
            <HorizontalBarChart
              data={displayedCandidates}
              currentLabel={currentDate}
              previousLabel={previousDate}
              height={displayedCandidates.length * 50 + 100}
            />
          </div>

          {/* Expand/Collapse Button */}
          {allCandidates.length > 10 && (
            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
                className="gap-2 w-full sm:w-auto border-border hover:bg-muted bg-transparent text-gray-900 dark:text-white"
              >
                {showAll ? (
                  <>
                    <ChevronUp className="h-4 w-4" />
                    {locale === "uk" ? "Показати менше" : "Show less"}
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" />
                    {locale === "uk"
                      ? `Показати всіх (${allCandidates.length})`
                      : `Show all (${allCandidates.length})`}
                  </>
                )}
              </Button>
            </div>
          )}

          {/* Statistical Note */}
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.15em] font-bold text-gray-500 dark:text-white/50 text-center pt-8 border-t border-border px-4">
            <p className="leading-relaxed">
              {locale === "uk"
                ? "Опитування проведено 17-26 грудня 2025 року методом телефонного інтерв'ю CATI. Вибірка: 1000 респондентів віком 18+. Теоретична похибка не перевищує 3,1% з вірогідністю 0,95."
                : "Survey conducted December 17-26, 2025 via CATI telephone interview. Sample: 1000 respondents aged 18+. Theoretical margin of error does not exceed 3.1% with 0.95 confidence."}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
