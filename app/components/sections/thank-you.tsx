"use client";

import { Section } from "@/components/layout";
import { useI18n } from "@/lib/i18n-context";
import { getBilingualText, getMetadata } from "@/lib/data";

const createSeededRandom = (seed: number) => () => {
  const next = Math.sin(seed++) * 10000;
  return next - Math.floor(next);
};

const THANK_YOU_PARTICLES = (() => {
  const rand = createSeededRandom(84);
  return Array.from({ length: 12 }, () => ({
    left: `${(10 + rand() * 80).toFixed(2)}%`,
    animationDelay: `${(rand() * 12).toFixed(2)}s`,
    animationDuration: `${(20 + rand() * 8).toFixed(2)}s`,
  }));
})();

export function ThankYouSection() {
  const { locale } = useI18n();
  const metadata = getMetadata();

  return (
    <Section
      id="thank-you"
      minHeight="screen"
      background="gradient-hero"
      className="text-white flex items-center justify-center relative overflow-hidden bg-[#052025]"
      contained={false}
      showRadialOverlay={true}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {THANK_YOU_PARTICLES.map((style, i) => (
          <div
            key={`thank-you-particle-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#93E5D6]/30 animate-particle"
            style={style}
          />
        ))}
      </div>

      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-8 md:gap-12 relative z-10 animate-fade-in-up">
        {/* Decorative element */}
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-[#008E83] to-[#93E5D6] rounded-full animate-reveal"></div>

        {/* Thank you message */}
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter text-gradient-brand animate-reveal delay-100">
          {locale === "uk" ? "Дякуємо!" : "Thank you!"}
        </h2>

        <p className="text-xl md:text-3xl font-medium opacity-80 max-w-3xl mx-auto leading-tight animate-reveal delay-200">
          {getBilingualText(metadata.project.fullTitle, locale)}
        </p>

        {/* Partner credits */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 mt-10 animate-reveal delay-300">
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-heading font-bold text-[#93E5D6]">{metadata.source.name}</span>
            <span className="text-xs uppercase tracking-[0.2em] font-bold opacity-40">
              {locale === "uk" ? "Дослідницька компанія" : "Research Company"}
            </span>
          </div>

          <div className="hidden sm:block h-12 w-px bg-white/10"></div>

          <div className="flex flex-col gap-2">
            <span className="text-2xl font-heading font-bold text-[#93E5D6]">{getBilingualText(metadata.commissioner.name, locale)}</span>
            <span className="text-xs uppercase tracking-[0.2em] font-bold opacity-40">
              {locale === "uk" ? "Замовник" : "Client"}
            </span>
          </div>
        </div>

        {/* CTA Link back to start */}
        <div className="mt-12 animate-reveal delay-400">
          <a href="#home" className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-all duration-300 hover:text-[#93E5D6]">
            <span>{locale === "uk" ? "Повернутись на початок" : "Back to Top"}</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
