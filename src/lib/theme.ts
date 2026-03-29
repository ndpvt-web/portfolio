"use client";

import { createContext, useContext } from "react";

export type ThemeMode = "dark" | "light";
export type AccentColor = "orange" | "cyan" | "purple" | "green";

export interface ThemeContextValue {
  mode: ThemeMode;
  accent: AccentColor;
  setMode: (mode: ThemeMode) => void;
  setAccent: (accent: AccentColor) => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  mode: "dark",
  accent: "orange",
  setMode: () => {},
  setAccent: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export const ACCENT_COLORS = {
  orange: { value: "#f97316", soft: "rgba(249,115,22,0.15)", hover: "#fb923c" },
  cyan: { value: "#06b6d4", soft: "rgba(6,182,212,0.15)", hover: "#22d3ee" },
  purple: { value: "#8b5cf6", soft: "rgba(139,92,246,0.15)", hover: "#a78bfa" },
  green: { value: "#22c55e", soft: "rgba(34,197,94,0.15)", hover: "#4ade80" },
} as const;
