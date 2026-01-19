"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale } from "@/types/locale";
import ukMessages from "@/messages/uk.json";
import enMessages from "@/messages/en.json";

type Messages = typeof ukMessages;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  messages: Messages;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const messages: Record<Locale, Messages> = {
  uk: ukMessages,
  en: enMessages,
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("uk"); // Default to Ukrainian
  const [mounted, setMounted] = useState(false);

  // Load locale from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored && (stored === "uk" || stored === "en")) {
      setLocaleState(stored);
    }
    setMounted(true);
  }, []);

  // Save locale to localStorage when changed
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  // Translation function with nested key support (e.g., "nav.home")
  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = messages[locale];

    for (const k of keys) {
      value = value?.[k];
    }

    return typeof value === "string" ? value : key;
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, messages: messages[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
