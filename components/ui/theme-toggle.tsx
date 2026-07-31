"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme-context";
import { useLanguage } from "@/context/language-context";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t.misc.toggleTheme}
      title={t.misc.toggleTheme}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-primary hover:text-primary dark:border-line-dark dark:text-paper dark:hover:border-primary-400 dark:hover:text-primary-400"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Sun className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
