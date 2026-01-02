"use client";

import { Section } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n-context";
import { getMethodology, getBilingualText, getCurrentSurvey, getPreviousSurvey } from "@/lib/data";
import { Phone, Users, Target, TrendingUp } from "lucide-react";

export function MethodologySection() {
  const { t, locale } = useI18n();
  const methodology = getMethodology();
  const currentSurvey = getCurrentSurvey();
  const previousSurvey = getPreviousSurvey();

  const methodologyItems = [
    {
      icon: Phone,
      title: getBilingualText(methodology.method.title, locale),
      description: methodology.method.details
        ? `${getBilingualText(methodology.method.value, locale)}. ${getBilingualText(methodology.method.details, locale)}`
        : getBilingualText(methodology.method.value, locale),
    },
    {
      icon: Users,
      title: getBilingualText(methodology.targetAudience.title, locale),
      description: getBilingualText(methodology.targetAudience.value, locale),
    },
    {
      icon: Target,
      title: getBilingualText(methodology.sample.title, locale),
      description: getBilingualText(methodology.sample.value, locale),
    },
    {
      icon: TrendingUp,
      title: getBilingualText(methodology.marginOfError.title, locale),
      description: getBilingualText(methodology.marginOfError.text, locale),
    },
  ];

  return (
    <Section id="methodology" minHeight="auto" background="default">
      <div className="flex flex-col gap-8">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("nav.methodology")}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            {locale === "uk"
              ? `${currentSurvey.displayDate.uk} та ${previousSurvey.displayDate.uk}`
              : `${currentSurvey.displayDate.en} and ${previousSurvey.displayDate.en}`}
          </p>
        </div>

        {/* Methodology grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {methodologyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index}>
                <CardContent className="flex flex-col gap-4 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
