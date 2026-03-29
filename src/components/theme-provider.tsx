"use client";

import { useState, useEffect, useCallback } from "react";
import { ThemeContext, type ThemeMode, type AccentColor } from "@/lib/theme";

const STORAGE_MODE_KEY = "theme-mode";
const STORAGE_ACCENT_KEY = "theme-accent";

const DEFAULT_MODE: ThemeMode = "dark";
const DEFAULT_ACCENT: AccentColor = "orange";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setModeState] = useState<ThemeMode>(DEFAULT_MODE);
  const [accent, setAccentState] = useState<AccentColor>(DEFAULT_ACCENT);

  useEffect(() => {
    const storedMode = localStorage.getItem(STORAGE_MODE_KEY) as ThemeMode | null;
    const storedAccent = localStorage.getItem(STORAGE_ACCENT_KEY) as AccentColor | null;

    const resolvedMode = storedMode ?? DEFAULT_MODE;
    const resolvedAccent = storedAccent ?? DEFAULT_ACCENT;

    setModeState(resolvedMode);
    setAccentState(resolvedAccent);

    document.documentElement.setAttribute("data-theme", resolvedMode);
    document.documentElement.setAttribute("data-accent", resolvedAccent);
  }, []);

  const setMode = useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
    localStorage.setItem(STORAGE_MODE_KEY, newMode);
    document.documentElement.setAttribute("data-theme", newMode);
  }, []);

  const setAccent = useCallback((newAccent: AccentColor) => {
    setAccentState(newAccent);
    localStorage.setItem(STORAGE_ACCENT_KEY, newAccent);
    document.documentElement.setAttribute("data-accent", newAccent);
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, accent, setMode, setAccent }}>
      {children}
    </ThemeContext.Provider>
  );
}
