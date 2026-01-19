"use client";

import { Section } from "@/components/layout";
import Image from "next/image";
import { useI18n } from "@/lib/i18n-context";
import { getBilingualText, getMetadata } from "@/lib/data";
import { ArrowRight, ChevronDown } from "lucide-react";

const createSeededRandom = (seed: number) => () => {
  const next = Math.sin(seed++) * 10000;
  return next - Math.floor(next);
};

const HERO_PARTICLES = (() => {
  const rand = createSeededRandom(42);
  return Array.from({ length: 18 }, () => ({
    left: `${(rand() * 100).toFixed(2)}%`,
    top: `${(60 + rand() * 40).toFixed(2)}%`,
    animationDelay: `${(rand() * 15).toFixed(2)}s`,
    animationDuration: `${(18 + rand() * 10).toFixed(2)}s`,
  }));
})();

export function HeroSection() {
  const { locale } = useI18n();
  const metadata = getMetadata();

  return (
    <Section
      id="home"
      minHeight="screen"
      background="none"
      className="!py-0 -mt-16 h-screen text-white flex flex-col justify-center relative overflow-hidden bg-[#052025]"
      contained={false}
    >
      {/* Layer 1: Base image with Ken Burns animation */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/images/hero-bg.png"
          alt="Hero Background"
          fill
          sizes="100vw"
          className="object-cover animate-hero-ken-burns"
          priority
          quality={85}
        />
      </div>

      {/* Layer 2: Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#052025]/90 via-[#0a3a42]/80 to-[#052025]/95"></div>

      {/* Layer 3: Scan lines texture */}
      <div
        className="absolute inset-0 z-0 texture-scanlines opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
        }}
      />

      {/* Layer 4: Radial vignette */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#052025_70%)]"></div>

      {/* Layer 5: Animated dot pattern */}
      <div
        className="absolute inset-0 z-0 pattern-dots opacity-[0.04] animate-pattern-drift pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(147,229,214,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating Particles */}
      {HERO_PARTICLES.map((style, i) => (
        <div
          key={`hero-particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-[#93E5D6]/40 animate-particle pointer-events-none"
          style={style}
        />
      ))}

      {/* Main content */}
      <div className="max-w-[1120px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        <div className="max-w-4xl">
          {/* Pre-title marker */}
          <div className="flex items-center gap-3 mb-6 animate-reveal">
            <div className="h-px w-12 bg-[#008E83]" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#93E5D6]/70">
              {locale === "uk" ? "Електоральна аналітика" : "Electoral Analytics"}
            </span>
          </div>

          {/* Split headline for drama */}
          <h1 className="font-heading animate-reveal delay-100">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-[-0.02em] font-black text-white drop-shadow-2xl">
              U electoral
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-[-0.02em] font-black text-white drop-shadow-2xl">
              data<span className="text-[#008E83]">.</span>
            </span>
          </h1>

          {/* Subtitle - project full title */}
          <p className="mt-8 text-lg md:text-xl lg:text-2xl text-white/60 max-w-2xl leading-relaxed font-light animate-reveal delay-200">
            {getBilingualText(metadata.project.fullTitle, locale)}
          </p>

          {/* CTA Button with Glow */}
          <button 
            onClick={() => document.getElementById("countryDirection")?.scrollIntoView({ behavior: "smooth" })}
            className="group btn-glow inline-flex items-center gap-4 bg-[#008E83] hover:bg-[#007369] text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 border border-[#3AB8AD] mt-10 animate-reveal delay-300"
          >
            <span>{locale === "uk" ? "ДИВИТИСЬ" : "VIEW"}</span>
            <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
          </button>

          {/* Credit Line */}
          <div className="text-sm md:text-base text-white/40 leading-relaxed font-light border-l-2 border-[#008E83]/50 pl-6 mt-12 animate-reveal delay-400">
            <span>
              {locale === "uk" ? "Підготовлено " : "Prepared by "}
              <span className="font-semibold text-white/60 uppercase tracking-wider">{metadata.source.name}</span>
              <br className="sm:hidden" />
              {locale === "uk" ? " на замовлення " : " for "}
              <span className="font-semibold text-white/60 uppercase tracking-wider">{getBilingualText(metadata.commissioner.name, locale)}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator at Bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-subtle flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-mono">
          {locale === "uk" ? "Прокрутіть" : "Scroll"}
        </span>
        <ChevronDown className="w-5 h-5 text-white/40" />
      </div>
    </Section>
  );
}
