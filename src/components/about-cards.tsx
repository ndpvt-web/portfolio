"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef, type ReactNode } from "react";

interface Milestone {
  highlight: ReactNode;
  logo?: string;
  desc: ReactNode;
  link?: { href: string; label: string };
}

const milestones: Milestone[] = [
  {
    highlight: "$20,000",
    desc: "Spent on Claude Code API in 40 days.",
  },
  {
    highlight: "50,000+",
    desc: "users. Solely built the Mac Bridge and Browser Agent for HappyCapy AI ($10M raised). Shipped to 50,000+ users in just 3 days.",
  },
  {
    highlight: "Anthropic",
    logo: "/images/anthropic-logo.svg",
    desc: (
      <>
        I connected Claude Code to my desktop and used it for computer use.
        <br />
        Anthropic released that as a feature — 2 weeks later.
      </>
    ),
  },
  {
    highlight: "Manus AI",
    logo: "/images/manus-logo.svg",
    desc: (
      <>
        I automated iOS app builds by connecting Xcode to Claude Code through my Mac.
        <br />
        Manus AI released that as their feature — 4 days later.
      </>
    ),
  },
  {
    highlight: "15M views",
    desc: "On Reddit in 4 weeks. Organic. No ads. Built a system that reverse-engineers how ChatGPT and Perplexity decide what to recommend.",
  },
  {
    highlight: "Guest Speaker",
    desc: "HappyCapy\u2019s Hong Kong launch. $100M+ valued startup, 200+ people — VCs, investors, builders.",
  },
  {
    highlight: "AI Agency",
    desc: (
      <>
        Fully automated. No human in the loop.
        <br />
        8 agents running 24/7 — find leads, build sites, send outreach, close deals.
        <br />
        24% conversion rate.
      </>
    ),
  },
  {
    highlight: "Atlas",
    desc: (
      <>
        World&apos;s first desktop agent that learns from its own mistakes.
        <br />
        No fine-tuning. No weight changes. Every session it gets smarter.
      </>
    ),
  },
  {
    highlight: "Self-Learning Claude Code",
    desc: (
      <>
        Built a layer that hooks into every action, catches every mistake, and never repeats it.
        <br />
        514 rules learned autonomously in just a few days of use.
      </>
    ),
    link: {
      href: "https://github.com/ndpvt-web",
      label: "View on GitHub",
    },
  },
  {
    highlight: "100%",
    desc: "Scholarship at HKU.",
  },
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

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 3500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  const go = useCallback(
    (dir: "next" | "prev") => {
      if (timerRef.current) clearInterval(timerRef.current);
      dir === "next" ? next() : prev();
    },
    [next, prev]
  );

  const m = milestones[current];

  return (
    <div
      className="flex flex-col gap-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Card */}
      <div
        className="relative aspect-[4/3] rounded-2xl border-2 border-[var(--accent)]/20 flex flex-col items-center justify-center overflow-hidden select-none"
        style={{ background: "linear-gradient(135deg, var(--bg-code) 0%, var(--bg-elevated) 100%)" }}
        onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStart === null) return;
          const diff = e.changedTouches[0].clientX - touchStart;
          if (Math.abs(diff) > 40) go(diff < 0 ? "next" : "prev");
          setTouchStart(null);
        }}
      >
        {/* Left arrow */}
        <button
          onClick={() => go("prev")}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--accent)]/10 hover:bg-[var(--accent)]/20 text-[var(--accent)] transition-colors flex items-center justify-center text-xl z-10"
          aria-label="Previous"
        >
          &#8249;
        </button>

        {/* Content */}
        <div key={current} className="animate-fade-in px-14 flex flex-col items-center gap-5 max-w-[90%]">
          <span className="text-[var(--text-secondary)] font-mono tracking-widest uppercase" style={{ fontSize: "var(--text-caption)" }}>
            {String(current + 1).padStart(2, "0")} / {String(milestones.length).padStart(2, "0")}
          </span>

          {/* Highlight */}
          {m.logo ? (
            <Image
              src={m.logo}
              alt={String(m.highlight)}
              width={200}
              height={48}
              className="h-12 w-auto brightness-0 invert opacity-90"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          ) : (
            <p
              className="text-center text-[var(--accent)]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.04em",
              }}
            >
              {m.highlight}
            </p>
          )}

          {/* Description */}
          <p
            className="text-center text-[var(--text-secondary)]"
            style={{
              fontSize: "clamp(0.8125rem, 1.1vw, 1rem)",
              lineHeight: 1.6,
            }}
          >
            {m.desc}
          </p>

          {/* Optional link */}
          {m.link && (
            <a
              href={m.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors mt-1"
              style={{ fontSize: "var(--text-small)" }}
            >
              {m.link.label}
              <span aria-hidden>&#8599;</span>
            </a>
          )}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => go("next")}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--accent)]/10 hover:bg-[var(--accent)]/20 text-[var(--accent)] transition-colors flex items-center justify-center text-xl z-10"
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
            className={`h-1.5 rounded-full transition-all duration-200 ${
              i === current
                ? "bg-[var(--accent)] w-4"
                : "bg-[var(--text-secondary)]/30 hover:bg-[var(--text-secondary)]/60 w-1.5"
            }`}
            aria-label={`Go to milestone ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
