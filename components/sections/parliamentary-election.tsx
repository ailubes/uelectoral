"use client";

import { useState } from "react";
import { Section } from "@/components/layout";
import { HorizontalBarChart } from "@/components/charts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n-context";
import {
  getParliamentaryQuestion,
  getBilingualText,
  getCurrentDisplayDate,
  getPreviousDisplayDate,
  transformParliamentaryForChart,
} from "@/lib/data";
import { ChevronDown, ChevronUp } from "lucide-react";

export function ParliamentaryElectionSection() {
  const { t, locale } = useI18n();
  const [showAll, setShowAll] = useState(false);

  const question = getParliamentaryQuestion(locale);
  const currentDate = getCurrentDisplayDate(locale);
  const previousDate = getPreviousDisplayDate(locale);

  const allParties = transformParliamentaryForChart(locale);
  const displayedParties = showAll ? allParties : allParties.slice(0, 10);

  return (
    <Section id="parliament" minHeight="auto" background="default">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl text-center">
            {t("nav.parliament")}
          </CardTitle>
          <p className="text-muted-foreground text-center text-base sm:text-lg mt-2">
            {question}
          </p>
        </CardHeader>

        <CardContent className="flex flex-col gap-6">
          {/* Chart */}
          <div className="w-full">
            <HorizontalBarChart
              data={displayedParties}
              currentLabel={currentDate}
              previousLabel={previousDate}
              height={displayedParties.length * 50 + 100}
            />
          </div>

          {/* Expand/Collapse Button */}
          {allParties.length > 10 && (
            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
                className="gap-2 w-full sm:w-auto"
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
                      ? `Показати всіх (${allParties.length})`
                      : `Show all (${allParties.length})`}
                  </>
                )}
              </Button>
            </div>
          )}

          {/* Statistical Note */}
          <div className="text-xs sm:text-sm text-muted-foreground text-center pt-4 border-t px-2">
            <p className="leading-relaxed">
              {locale === "uk"
                ? "Опитування проведено 17-26 грудня 2025 року методом телефонного інтерв'ю CATI. Вибірка: 1000 респондентів віком 18+. Теоретична похибка не перевищує 3,1% з вірогідністю 0,95."
                : "Survey conducted December 17-26, 2025 via CATI telephone interview. Sample: 1000 respondents aged 18+. Theoretical margin of error does not exceed 3.1% with 0.95 confidence."}
            </p>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
