"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { translations, type Translations } from "@/lib/translations";
import type { Lang } from "@/data/content";

type LanguageContextValue = {
  lang: Lang;
  t: Translations;
  toggleLanguage: () => void;
  setLanguage: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "portfolio-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "es" || stored === "en") {
      setLang(stored);
      return;
    }
    const browserLang = window.navigator.language?.toLowerCase().startsWith("en") ? "en" : "es";
    setLang(browserLang);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      t: translations[lang],
      toggleLanguage: () => setLang((prev) => (prev === "es" ? "en" : "es")),
      setLanguage: (next: Lang) => setLang(next),
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
