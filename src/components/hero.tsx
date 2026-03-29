"use client";

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

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--bg-base)]">
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
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .chevron-bounce { animation: bounce 2s ease-in-out infinite; }
      `}</style>

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
        {/* Availability badge */}
        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[var(--text-caption)] font-mono bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent)]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            Available for consulting
          </span>
        </motion.div>

        {/* Name */}
        <motion.p
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-[var(--font-display)] text-[var(--text-display)] font-semibold text-[var(--text-primary)]"
          style={{ fontSize: "var(--text-display)" }}
        >
          Nivesh Dandyan
        </motion.p>

        {/* Title */}
        <motion.p
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-mono text-[var(--text-secondary)]"
          style={{ fontSize: "var(--text-heading)" }}
        >
          AI Agent Architect
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap gap-4 justify-center mt-2"
        >
          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-semibold text-sm hover:bg-[var(--accent-hover)] transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 rounded-lg border border-[var(--bg-border)] text-[var(--text-primary)] font-semibold text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            Contact
          </Link>
        </motion.div>

        {/* Location */}
        <motion.p
          custom={0.6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-mono text-[var(--text-caption)] text-[var(--text-tertiary)]"
        >
          India &amp; Hong Kong
        </motion.p>
      </div>

      {/* Bouncing chevron */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 chevron-bounce text-[var(--text-tertiary)]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
