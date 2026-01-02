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
          <CardTitle className="text-3xl md:text-4xl text-center">
            {t("nav.parliament")}
          </CardTitle>
          <p className="text-muted-foreground text-center text-lg mt-2">
            {question}
          </p>
        </CardHeader>

        <CardContent className="flex flex-col gap-6">
          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[var(--chart-primary)]" />
              <span>{currentDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[var(--accent)]" />
              <span>{previousDate}</span>
            </div>
          </div>

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
                className="gap-2"
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
          <p className="text-sm text-muted-foreground text-center">
            {locale === "uk"
              ? "Серед тих, хто визначився. Похибка вибірки не перевищує 3,1%."
              : "Among those who have decided. Sampling error does not exceed 3.1%."}
          </p>
        </CardContent>
      </Card>
    </Section>
  );
}
