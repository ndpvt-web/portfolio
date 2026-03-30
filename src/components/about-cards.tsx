"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const milestones = [
  "$20,000 on Claude Code API in 40 days.",
  "Built Mac Bridge & Browser Agent at HappyCapy AI ($10M raised). Shipped to 50,000+ users.",
  "Connected Claude Code to my desktop for computer use \u2014 Anthropic released that as a feature 2 weeks later.",
  "Automated iOS builds via Xcode + Claude Code \u2014 Manus AI released that as their feature 4 days later.",
  "15 million Reddit views in 4 weeks. Organic. No ads.",
  "Guest speaker at HappyCapy\u2019s Hong Kong launch. $100M+ valued startup, 200+ people.",
  "Autonomous AI agency. 8 agents, 24/7, 24% conversion. No human in the loop.",
  "Building Atlas \u2014 desktop agent that learns from its own mistakes. No fine-tuning.",
  "Self-learning layer on Claude Code. 514 rules learned autonomously in days.",
  "Studying at HKU on a 100% scholarship.",
];

export default function AboutCards() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % milestones.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + milestones.length) % milestones.length);
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 3500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  // Reset timer on manual navigation
  const go = useCallback(
    (dir: "next" | "prev") => {
      if (timerRef.current) clearInterval(timerRef.current);
      dir === "next" ? next() : prev();
    },
    [next, prev]
  );

  return (
    <div
      className="flex flex-col gap-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Card */}
      <div
        className="relative border border-[var(--border-subtle)] rounded-xl px-6 py-8 min-h-[120px] flex items-center justify-center overflow-hidden select-none"
        style={{ background: "var(--bg-code)" }}
        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStart === null) return;
          const diff = e.changedTouches[0].clientX - touchStart;
          if (Math.abs(diff) > 40) {
            go(diff < 0 ? "next" : "prev");
          }
          setTouchStart(null);
        }}
      >
        {/* Left arrow */}
        <button
          onClick={() => go("prev")}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors text-lg px-1"
          aria-label="Previous"
        >
          &lsaquo;
        </button>

        {/* Content */}
        <p
          key={current}
          className="text-center text-[var(--text-primary)] font-medium px-6 animate-fade-in"
          style={{ fontSize: "var(--text-body)", lineHeight: 1.6 }}
        >
          {milestones[current]}
        </p>

        {/* Right arrow */}
        <button
          onClick={() => go("next")}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors text-lg px-1"
          aria-label="Next"
        >
          &rsaquo;
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5">
        {milestones.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (timerRef.current) clearInterval(timerRef.current);
              setCurrent(i);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
              i === current
                ? "bg-[var(--accent)] w-4"
                : "bg-[var(--text-secondary)]/30 hover:bg-[var(--text-secondary)]/60"
            }`}
            aria-label={`Go to milestone ${i + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <p className="text-center text-[var(--text-secondary)] font-mono" style={{ fontSize: "var(--text-small)" }}>
        {current + 1} / {milestones.length}
      </p>
    </div>
  );
}
