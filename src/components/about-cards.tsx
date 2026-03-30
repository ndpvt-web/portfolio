"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const milestones = [
  { highlight: "$20,000", desc: "spent on Claude Code API in 40 days" },
  { highlight: "50,000+", desc: "users shipped to at HappyCapy AI ($10M raised)" },
  { highlight: "2 weeks later", desc: "Anthropic released my desktop computer use as their feature" },
  { highlight: "4 days later", desc: "Manus AI released my iOS build automation as their feature" },
  { highlight: "15M views", desc: "on Reddit in 4 weeks. Organic. No ads." },
  { highlight: "$100M+", desc: "startup. Guest speaker at HappyCapy\u2019s Hong Kong launch. 200+ people." },
  { highlight: "24%", desc: "conversion. Autonomous AI agency. 8 agents, 24/7. No human." },
  { highlight: "Atlas", desc: "Desktop agent that learns from its own mistakes. No fine-tuning." },
  { highlight: "514 rules", desc: "learned autonomously. Self-learning layer on Claude Code." },
  { highlight: "100%", desc: "scholarship at HKU" },
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
        <div key={current} className="animate-fade-in px-16 flex flex-col items-center gap-4">
          <span className="text-[var(--text-secondary)] font-mono tracking-widest uppercase" style={{ fontSize: "var(--text-caption)" }}>
            {String(current + 1).padStart(2, "0")} / {String(milestones.length).padStart(2, "0")}
          </span>
          <p
            className="text-center text-[var(--accent)]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
            }}
          >
            {milestones[current].highlight}
          </p>
          <p
            className="text-center text-[var(--text-secondary)]"
            style={{
              fontSize: "clamp(0.875rem, 1.2vw, 1.0625rem)",
              lineHeight: 1.5,
              maxWidth: "85%",
            }}
          >
            {milestones[current].desc}
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

    </div>
  );
}
