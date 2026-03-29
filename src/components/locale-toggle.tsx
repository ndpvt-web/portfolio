"use client";

import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function LocaleToggle() {
  const { locale, setLocale, t } = useI18n();

  function handleToggle() {
    setLocale(locale === "en" ? "zh-TW" : "en");
  }

  return (
    <button
      onClick={handleToggle}
      aria-label={`Switch language, current: ${t("meta.locale_name")}`}
      className={cn(
        "font-mono text-xs font-semibold w-7 h-7 rounded-md flex items-center justify-center",
        "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
        "hover:bg-[var(--bg-elevated)] transition-colors duration-150"
      )}
    >
      {t("meta.locale_flag")}
    </button>
  );
}
