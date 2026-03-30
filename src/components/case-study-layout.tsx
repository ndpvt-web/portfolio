"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import Section from "@/components/section";
import { TerminalBlock } from "@/components/terminal-block";
import { ScrollProgress } from "@/components/scroll-progress";
import CaseStudyNav from "@/components/case-study-nav";
import MermaidDiagram from "@/components/mermaid-diagram";

interface CaseStudyLayoutProps {
  project: Project;
  prev?: Project;
  next?: Project;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
} as const;

export default function CaseStudyLayout({
  project,
  prev,
  next,
}: CaseStudyLayoutProps) {
  const cs = project.caseStudy!;

  const approachLines = cs.approach
    .split(". ")
    .filter(Boolean)
    .map((s, i) => (i === 0 ? `$ ${s}.` : `> ${s}.`));

  return (
    <>
      <ScrollProgress />

      {/* ── HERO ── */}
      <Section variant="dark" className="min-h-screen flex items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8"
        >
          {project.restricted && (
            <span className="inline-block font-mono text-xs px-3 py-1 rounded border border-[var(--accent)] text-[var(--accent)] w-fit">
              NDA: Architecture details restricted
            </span>
          )}

          <h1
            className="font-bold text-[var(--text-primary)]"
            style={{ fontSize: "var(--text-display)" }}
          >
            {project.name}
          </h1>
          <p
            className="text-[var(--text-secondary)] max-w-2xl"
            style={{ fontSize: "var(--text-heading)" }}
          >
            {project.tagline}
          </p>

          {/* Hero stats */}
          <div className="flex flex-wrap gap-8 md:gap-12 mt-4">
            {cs.results.map((r, i) => (
              <div key={r.metric} className="flex gap-12 items-stretch">
                {i > 0 && (
                  <div className="hidden md:block w-px self-stretch bg-[var(--bg-border)]" />
                )}
                <div className="flex flex-col gap-1 min-w-[120px]">
                  <span
                    className="font-mono font-semibold text-[var(--accent)]"
                    style={{ fontSize: "var(--text-title)" }}
                  >
                    {r.value}
                  </span>
                  <span
                    className="font-mono text-[var(--text-tertiary)]"
                    style={{ fontSize: "var(--text-small)" }}
                  >
                    {r.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub links */}
          {project.github.length > 0 && (
            <div className="flex gap-3 flex-wrap">
              {project.github.map((g) => (
                <Link
                  key={g.repo}
                  href={`https://github.com/${g.owner}/${g.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm px-4 py-2 rounded border border-[var(--bg-border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors duration-200"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  {g.repo} &rarr;
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </Section>

      {/* ── PROBLEM ── */}
      <Section variant="dark">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="max-w-3xl"
        >
          <p
            className="font-mono text-[var(--text-tertiary)] mb-4"
            style={{ fontSize: "var(--text-caption)" }}
          >
            THE PROBLEM
          </p>
          <p
            className="text-[var(--text-primary)] font-bold leading-snug"
            style={{ fontSize: "var(--text-title)" }}
          >
            {cs.problem}
          </p>
        </motion.div>
      </Section>

      {/* ── ARCHITECTURE ── */}
      {cs.architectureMermaid && (
        <Section variant="mid">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            <p
              className="font-mono text-[var(--text-tertiary)] mb-6"
              style={{ fontSize: "var(--text-caption)" }}
            >
              ARCHITECTURE
            </p>
            <div className="rounded-xl border border-[var(--bg-border)] bg-[var(--bg-code)] p-6 overflow-x-auto">
              <MermaidDiagram chart={cs.architectureMermaid} className="flex justify-center [&_svg]:max-w-full" />
            </div>
          </motion.div>
        </Section>
      )}

      {/* ── APPROACH ── */}
      <Section variant="mid">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="max-w-3xl"
        >
          <p
            className="font-mono text-[var(--text-tertiary)] mb-6"
            style={{ fontSize: "var(--text-caption)" }}
          >
            THE APPROACH
          </p>
          <TerminalBlock lines={approachLines} showDots />
        </motion.div>
      </Section>

      {/* ── SCREENSHOTS ── */}
      {project.screenshots.length > 0 && (
        <Section variant="mid">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            <p
              className="font-mono text-[var(--text-tertiary)] mb-6"
              style={{ fontSize: "var(--text-caption)" }}
            >
              SCREENSHOTS
            </p>
            <div className="flex flex-col gap-6">
              {project.screenshots.map((src) => (
                <div
                  key={src}
                  className="rounded-xl border border-[var(--bg-border)] overflow-hidden bg-[var(--bg-code)]"
                >
                  <Image
                    src={src}
                    alt={`${project.name} screenshot`}
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </Section>
      )}

      {/* ── IMPACT ── */}
      {cs.impact && (
        <Section variant="mid">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="max-w-3xl"
          >
            <p
              className="font-mono text-[var(--text-tertiary)] mb-4"
              style={{ fontSize: "var(--text-caption)" }}
            >
              IMPACT
            </p>
            <p
              className="text-[var(--text-primary)] font-semibold leading-relaxed"
              style={{ fontSize: "var(--text-body)" }}
            >
              {cs.impact}
            </p>
          </motion.div>
        </Section>
      )}

      {/* ── TECH / CATEGORIES ── */}
      <Section variant="dark">
        <div className="flex flex-wrap gap-2">
          {project.categories.map(cat => (
            <span key={cat} className="font-mono text-xs px-3 py-1 rounded-full border border-[var(--bg-border)] text-[var(--text-secondary)]">
              {cat}
            </span>
          ))}
        </div>
      </Section>

      {/* ── FOOTER NAV ── */}
      <Section variant="dark" className="py-0">
        <CaseStudyNav prev={prev} next={next} />
      </Section>
    </>
  );
}
