"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { countUp } from "@/lib/utils";

interface Stat {
  raw: number | null;
  prefix?: string;
  suffix?: string;
  label: string;
  display: string; // fallback / non-numeric display
}

const STATS: Stat[] = [
  { raw: 25, suffix: "M+", label: "organic views", display: "25M+" },
  { raw: 50, suffix: "K+", label: "users served", display: "50K+" },
  { raw: null, label: "HK Launch", display: "Guest Speaker" },
  { raw: null, label: "AI Research", display: "Empirical" },
];

function StatItem({ stat }: { stat: Stat }) {
  const [value, setValue] = useState(stat.raw !== null ? 0 : null);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    if (stat.raw === null) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          countUp(stat.raw!, 1500, (v) => setValue(v));
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [stat.raw]);

  const displayValue =
    stat.raw !== null && value !== null
      ? `${value}${stat.suffix ?? ""}`
      : stat.display;

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 min-w-[140px] px-6">
      <span
        className="font-mono text-[var(--accent)] font-semibold"
        style={{ fontSize: "var(--text-display)" }}
      >
        {displayValue}
      </span>
      <span className="font-mono text-[var(--text-tertiary)]" style={{ fontSize: "var(--text-caption)" }}>
        {stat.label}
      </span>
    </div>
  );
}

export default function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full bg-[var(--bg-surface)] border-y border-[var(--bg-border)]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 overflow-x-auto">
        <div className="flex items-center justify-around md:justify-center md:gap-0 min-w-max md:min-w-0 w-full">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <StatItem stat={stat} />
              {i < STATS.length - 1 && (
                <div className="hidden md:block w-px h-8 bg-[var(--bg-border)]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
