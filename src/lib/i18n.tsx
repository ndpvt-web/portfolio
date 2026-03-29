"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import en from "@/messages/en.json";
import zhTW from "@/messages/zh-TW.json";

export type Locale = "en" | "zh-TW";

type Messages = typeof en;

const MESSAGES: Record<Locale, Messages> = {
  en,
  "zh-TW": zhTW,
};

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== "object") return path;
    current = (current as Record<string, unknown>)[key];
  }
  if (typeof current === "string") return current;
  return path;
}

export interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

export const I18nContext = createContext<I18nContextValue>({
  locale: "en",
  setLocale: () => {},
  t: (key) => key,
});

export function useI18n() {
  return useContext(I18nContext);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = localStorage.getItem("locale");
    if (stored === "zh-TW" || stored === "en") {
      setLocaleState(stored);
    }
  }, []);

  function setLocale(next: Locale) {
    setLocaleState(next);
    localStorage.setItem("locale", next);
    document.documentElement.setAttribute("lang", next);
  }

  function t(key: string): string {
    return getNestedValue(
      MESSAGES[locale] as unknown as Record<string, unknown>,
      key
    );
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}
