"use client";

import { Section } from "@/components/layout";
import { useI18n } from "@/lib/i18n-context";
import { getCurrentDisplayDate, getBilingualText, getMetadata } from "@/lib/data";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const { locale } = useI18n();

  const metadata = getMetadata();
  const displayDate = getCurrentDisplayDate(locale);

  return (
    <Section
      id="home"
      minHeight="screen"
      background="gradient-hero"
      className="text-white flex items-center justify-center relative"
      contained={false}
    >
      {/* Main content */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-6 md:gap-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          {getBilingualText(metadata.project.fullTitle, locale)}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
          {getBilingualText(metadata.project.name, locale)}
        </p>

        <p className="text-base md:text-lg opacity-75">
          {displayDate}
        </p>

        {/* Partner info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm md:text-base opacity-75 mt-4">
          <span>{locale === "uk" ? "Підготовлено" : "Prepared by"} {metadata.source.name}</span>
          <span className="hidden sm:inline">•</span>
          <span>{locale === "uk" ? "на замовлення" : "for"} {getBilingualText(metadata.commissioner.name, locale)}</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 opacity-50" />
      </div>
    </Section>
  );
}
