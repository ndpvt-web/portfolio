"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AboutCards from "@/components/about-cards";

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

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left: Photo + Name + Info */}
          <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col gap-6">
            {/* Photo */}
            <div className="relative w-full aspect-[3/4] max-h-[420px] rounded-xl overflow-hidden bg-[var(--bg-code)] border border-[var(--bg-border)]">
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
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Name + Title */}
            <div className="flex flex-col gap-2">
              <h1
                className="font-semibold text-[var(--text-primary)]"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em" }}
              >
                Nivesh Dandyan
              </h1>
              <p className="font-mono text-[var(--text-secondary)]" style={{ fontSize: "var(--text-body)" }}>
                AI Agent Architect
              </p>
              <p className="font-mono text-[var(--text-tertiary)]" style={{ fontSize: "var(--text-small)" }}>
                India &amp; Hong Kong
              </p>
            </div>

            {/* CTA + Social */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white font-semibold text-sm hover:bg-[var(--accent-hover)] transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="px-5 py-2.5 rounded-lg border border-[var(--bg-border)] text-[var(--text-primary)] font-semibold text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 font-mono" style={{ fontSize: "var(--text-small)" }}>
              <a href="https://linkedin.com/in/niveshdandyan" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/ndpvt-web" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                GitHub
              </a>
              <a href="mailto:niveshdandyan@gmail.com" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                Email
              </a>
            </div>
          </motion.div>

          {/* Right: Milestone Cards */}
          <motion.div custom={0.2} initial="hidden" animate="visible" variants={fadeUp}>
            <AboutCards />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
