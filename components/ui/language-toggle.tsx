"use client";

import { useLanguage } from "@/context/language-context";

export default function LanguageToggle() {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t.misc.toggleLanguage}
      title={t.misc.toggleLanguage}
      className="flex h-9 items-center gap-1 rounded-full border border-line px-3 font-mono text-xs font-medium text-ink transition-colors hover:border-primary hover:text-primary dark:border-line-dark dark:text-paper dark:hover:border-primary-400 dark:hover:text-primary-400"
    >
      <span className={lang === "es" ? "text-primary dark:text-primary-400" : "opacity-45"}>ES</span>
      <span aria-hidden="true" className="opacity-30">/</span>
      <span className={lang === "en" ? "text-primary dark:text-primary-400" : "opacity-45"}>EN</span>
    </button>
  );
}
