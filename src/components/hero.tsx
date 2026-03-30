"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

function MilestoneRow({ accent, logo, logoAlt, last, children }: {
  accent?: string;
  logo?: string;
  logoAlt?: string;
  last?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`grid items-start gap-x-5 py-2.5 ${last ? "" : "border-b border-white/[0.06]"}`}
      style={{ gridTemplateColumns: "100px 1fr" }}
    >
      <div className="flex items-center justify-end pt-px">
        {logo ? (
          <Image
            src={logo}
            alt={logoAlt || ""}
            width={90}
            height={18}
            className="h-[14px] w-auto brightness-0 invert opacity-70"
            style={{ filter: "brightness(0) invert(1)", maxWidth: "100px" }}
          />
        ) : (
          <span
            className="font-bold text-[var(--accent)] font-mono text-right w-full whitespace-nowrap"
            style={{ fontSize: "0.85rem" }}
          >
            {accent}
          </span>
        )}
      </div>
      <span
        className="text-[var(--text-secondary)]"
        style={{ fontSize: "0.85rem", lineHeight: 1.6 }}
      >
        {children}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--bg-base)]">
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="hero-gradient-1 absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="hero-gradient-2 absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-violet-500/12 blur-[100px]" />
        <div className="hero-gradient-3 absolute bottom-[15%] left-[30%] w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[110px]" />
      </div>

      <style>{`
        @keyframes gradientShift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 30px) scale(0.97); }
        }
        .hero-gradient-1 { animation: gradientShift 8s ease-in-out infinite; }
        .hero-gradient-2 { animation: gradientShift 8s ease-in-out infinite 2.5s; }
        .hero-gradient-3 { animation: gradientShift 8s ease-in-out infinite 5s; }
      `}</style>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-10 md:gap-14 items-start">
          {/* Left: Photo + Name + Buttons */}
          <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col gap-5">
            {/* Photo */}
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[var(--bg-code)] border border-[var(--bg-border)]">
              <div className="absolute top-3 left-3 flex gap-1.5 z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <Image
                src="/images/nivesh-speaking.jpg"
                alt="Nivesh Dandyan speaking at HappyCapy Hong Kong launch event"
                fill
                className="object-cover object-center"
                sizes="340px"
                priority
              />
            </div>

            {/* Name + Title */}
            <div className="flex flex-col gap-1">
              <h1
                className="font-semibold text-[var(--text-primary)]"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", letterSpacing: "-0.03em" }}
              >
                Nivesh Dandyan
              </h1>
              <p className="font-mono text-[var(--text-secondary)]" style={{ fontSize: "var(--text-small)" }}>
                AI Agent Architect &middot; India &amp; Hong Kong
              </p>
            </div>

            {/* CTA + Social */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="px-5 py-2 rounded-lg bg-[var(--accent)] text-white font-semibold text-sm hover:bg-[var(--accent-hover)] transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="px-5 py-2 rounded-lg border border-[var(--bg-border)] text-[var(--text-primary)] font-semibold text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 font-mono" style={{ fontSize: "var(--text-caption)" }}>
              <a href="https://linkedin.com/in/niveshdandyan" target="_blank" rel="noopener noreferrer" className="text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/ndpvt-web" target="_blank" rel="noopener noreferrer" className="text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors">
                GitHub
              </a>
              <a href="mailto:niveshdandyan@gmail.com" className="text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors">
                Email
              </a>
            </div>
          </motion.div>

          {/* Right: All milestones visible at once */}
          <motion.div custom={0.15} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col gap-4 pt-2">
            <h2
              className="font-bold text-[var(--text-primary)] mb-1"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 2vw, 1.5rem)", letterSpacing: "-0.02em" }}
            >
              What I&apos;ve built
            </h2>

            <div className="flex flex-col">
              <MilestoneRow accent="$20,000">
                Spent on Claude Code API in 40 days.
              </MilestoneRow>

              <MilestoneRow accent="50,000+">
                users. Solely built the Mac Bridge and Browser Agent for HappyCapy AI ($10M raised). Shipped in just 3 days.
              </MilestoneRow>

              <MilestoneRow logo="/images/anthropic-logo.svg" logoAlt="Anthropic">
                I connected Claude Code to my desktop for computer use. Anthropic released that as a feature — 2 weeks later.
              </MilestoneRow>

              <MilestoneRow logo="/images/manus-logo.svg" logoAlt="Manus AI">
                I automated iOS app builds via Xcode + Claude Code. Manus AI released that as their feature — 4 days later.
              </MilestoneRow>

              <MilestoneRow accent="15M views">
                On Reddit in 4 weeks. Organic. No ads. Built a system that reverse-engineers how ChatGPT and Perplexity decide what to recommend.
              </MilestoneRow>

              <MilestoneRow accent="Speaker">
                HappyCapy&apos;s Hong Kong launch. $100M+ valued startup, 200+ people — VCs, investors, builders.
              </MilestoneRow>

              <MilestoneRow accent="AI Agency">
                Fully automated. No human in the loop. 8 agents, 24/7 — find leads, build sites, outreach, close deals. 24% conversion.
              </MilestoneRow>

              <MilestoneRow accent="Atlas">
                World&apos;s first desktop agent that learns from its own mistakes. No fine-tuning. Every session it gets smarter.
              </MilestoneRow>

              <MilestoneRow accent="514 rules">
                Self-learning Claude Code layer. Hooks into every action, catches every mistake, never repeats it.{" "}
                <a href="https://github.com/ndpvt-web" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">
                  GitHub ↗
                </a>
              </MilestoneRow>

              <MilestoneRow accent="100%" last>
                Scholarship at HKU.
              </MilestoneRow>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
