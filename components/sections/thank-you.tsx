"use client";

import { Section } from "@/components/layout";
import { useI18n } from "@/lib/i18n-context";
import { getBilingualText, getMetadata } from "@/lib/data";

export function ThankYouSection() {
  const { locale } = useI18n();
  const metadata = getMetadata();

  return (
    <Section
      id="thank-you"
      minHeight="screen"
      background="gradient-hero"
      className="text-white flex items-center justify-center"
      contained={false}
    >
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-6 md:gap-8">
        {/* Thank you message */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          {locale === "uk" ? "Дякуємо!" : "Thank you!"}
        </h2>

        <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
          {getBilingualText(metadata.project.fullTitle, locale)}
        </p>

        {/* Partner credits */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-base md:text-lg opacity-75 mt-8">
          <div className="flex flex-col gap-1">
            <span className="font-semibold">{metadata.source.name}</span>
            <span className="text-sm opacity-75">
              {locale === "uk" ? "Дослідницька компанія" : "Research Company"}
            </span>
          </div>
          <span className="hidden sm:inline text-2xl">×</span>
          <div className="flex flex-col gap-1">
            <span className="font-semibold">{getBilingualText(metadata.commissioner.name, locale)}</span>
            <span className="text-sm opacity-75">
              {locale === "uk" ? "Замовник" : "Client"}
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
