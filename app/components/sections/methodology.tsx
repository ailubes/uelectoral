"use client";

import { Section } from "@/components/layout";
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
    <Section id="methodology" minHeight="auto" background="graph-paper">
      <div className="flex flex-col gap-12">
        {/* Section header */}
        <div className="text-center space-y-4 animate-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-gradient-brand">
            {t("nav.methodology")}
          </h2>
          <p className="text-primary text-lg sm:text-xl font-medium font-mono">
            {locale === "uk"
              ? `${currentSurvey.displayDate.uk} та ${previousSurvey.displayDate.uk}`
              : `${currentSurvey.displayDate.en} and ${previousSurvey.displayDate.en}`}
          </p>
        </div>

        {/* Methodology grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {methodologyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="data-card group">
                <div className="p-6 sm:p-8 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-xl bg-[#008E83]/15 flex items-center justify-center border border-[#008E83]/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(147,229,214,0.3)]">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-700 dark:text-white/70 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
