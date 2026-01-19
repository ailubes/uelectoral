"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { getBilingualText, getMetadata } from "@/lib/data";
import { Section } from "@/components/layout";

const NAVIGATION_LINKS = [
  { id: "home", labelKey: "nav.home" },
  { id: "about", labelKey: "nav.about" },
  { id: "methodology", labelKey: "nav.methodology" },
  { id: "countryDirection", labelKey: "nav.countryDirection" },
  { id: "president", labelKey: "nav.president" },
  { id: "parliament", labelKey: "nav.parliament" },
];

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: Twitter,
  },
];

export function FooterSection() {
  const { t, locale } = useI18n();
  const metadata = getMetadata();

  return (
    <footer className="bg-[#052025] border-t border-white/10">
      <Section
        id="footer"
        background="none"
        className="!py-16"
        contained={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/logo-dark.png"
                alt="Uelectoral.data Logo"
                width={512}
                height={100}
                className="w-auto h-12"
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              {locale === "uk"
                ? "Платформа для аналізу електоральних даних України"
                : "Platform for analyzing Ukrainian electoral data"}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/60 hover:bg-[#008E83] hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              {locale === "uk" ? "Навігація" : "Navigation"}
            </h3>
            <ul className="space-y-3">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              {locale === "uk" ? "Контакти" : "Contact"}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#008E83] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@infosapiens.com.ua"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  info@infosapiens.com.ua
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#008E83] flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+380441234567"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  +38 (044) 123-45-67
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#008E83] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/60">
                  {locale === "uk"
                    ? "м. Київ, Україна"
                    : "Kyiv, Ukraine"}
                </p>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              {locale === "uk" ? "Компанія" : "Company"}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {metadata.source.name}
                </Link>
              </li>
              <li>
                <a
                  href={metadata.source.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {locale === "uk" ? "Веб-сайт" : "Website"}
                </a>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {locale === "uk" ? "Політика приватності" : "Privacy Policy"}
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {locale === "uk" ? "Умови використання" : "Terms of Use"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>
            {locale === "uk"
              ? `© ${new Date().getFullYear()} U Electoral Data. Усі права захищені.`
              : `© ${new Date().getFullYear()} U Electoral Data. All rights reserved.`}
          </p>
          <p>
            {locale === "uk"
              ? "Підготовлено Info Sapiens"
              : "Prepared by Info Sapiens"}
          </p>
        </div>
      </Section>
    </footer>
  );
}
