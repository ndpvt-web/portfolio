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
        className="relative aspect-square rounded-2xl border-2 border-[var(--accent)]/20 flex flex-col items-center justify-center overflow-hidden select-none"
        style={{ background: "linear-gradient(135deg, var(--bg-code) 0%, var(--bg-elevated) 100%)" }}
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
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--accent)]/10 hover:bg-[var(--accent)]/20 text-[var(--accent)] transition-colors flex items-center justify-center text-xl"
          aria-label="Previous"
        >
          &#8249;
        </button>

        {/* Content */}
        <div key={current} className="animate-fade-in px-16 flex flex-col items-center gap-6">
          <span className="text-[var(--accent)] font-mono text-sm tracking-widest uppercase opacity-60">
            {String(current + 1).padStart(2, "0")} / {String(milestones.length).padStart(2, "0")}
          </span>
          <p
            className="text-center font-bold text-[var(--text-primary)]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              lineHeight: 1.4,
              letterSpacing: "-0.02em",
            }}
          >
            {milestones[current]}
          </p>
        </div>

        {/* Right arrow */}
        <button
          onClick={() => go("next")}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--accent)]/10 hover:bg-[var(--accent)]/20 text-[var(--accent)] transition-colors flex items-center justify-center text-xl"
          aria-label="Next"
        >
          &#8250;
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
