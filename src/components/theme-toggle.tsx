"use client";

import { useTheme } from "@/lib/theme";
import { ACCENT_COLORS, AccentColor } from "@/lib/theme";
import { cn } from "@/lib/utils";

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <line x1="8" y1="1" x2="8" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="13" x2="8" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="1" y1="8" x2="3" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2.93" y1="2.93" x2="4.34" y2="4.34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11.66" y1="11.66" x2="13.07" y2="13.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2.93" y1="13.07" x2="4.34" y2="11.66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11.66" y1="4.34" x2="13.07" y2="2.93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M13.5 9.5A6 6 0 0 1 6.5 2.5a6 6 0 1 0 7 7z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ACCENTS: AccentColor[] = ["orange", "cyan", "purple", "green"];

export default function ThemeToggle() {
  const { mode, accent, setMode, setAccent } = useTheme();

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
        aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
        className={cn(
          "flex items-center justify-center w-7 h-7 rounded-md",
          "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
          "hover:bg-[var(--bg-elevated)] transition-colors duration-150"
        )}
      >
        {mode === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>

      <div className="flex items-center gap-1.5" role="group" aria-label="Accent color">
        {ACCENTS.map((color) => (
          <button
            key={color}
            onClick={() => setAccent(color)}
            aria-label={`Set accent to ${color}`}
            aria-pressed={accent === color}
            className={cn(
              "w-3.5 h-3.5 rounded-full transition-all duration-150",
              accent === color ? "ring-2 ring-offset-1 ring-offset-[var(--bg-surface)] scale-110" : "opacity-60 hover:opacity-100"
            )}
            style={{
              backgroundColor: ACCENT_COLORS[color].value,
              "--tw-ring-color": ACCENT_COLORS[color].value,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
}
