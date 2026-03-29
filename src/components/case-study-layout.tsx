"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/projects";
import Section from "@/components/section";
import { TerminalBlock } from "@/components/terminal-block";
import { ScrollProgress } from "@/components/scroll-progress";
import CaseStudyNav from "@/components/case-study-nav";

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
          <div className="flex flex-wrap gap-8 mt-4">
            {cs.results.map((r) => (
              <div key={r.metric} className="flex flex-col gap-1">
                <span
                  className="font-mono font-semibold text-[var(--accent)]"
                  style={{ fontSize: "var(--text-display)" }}
                >
                  {r.value}
                </span>
                <span
                  className="font-mono text-[var(--text-tertiary)]"
                  style={{ fontSize: "var(--text-caption)" }}
                >
                  {r.metric}
                </span>
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
                  className="font-mono text-sm px-4 py-2 rounded border border-[var(--bg-border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors duration-200"
                >
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
          viewport={{ once: true, margin: "-80px" }}
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

      {/* ── APPROACH ── */}
      <Section variant="mid">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
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

      {/* ── RESULTS ── */}
      <Section variant="dark">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p
            className="font-mono text-[var(--text-tertiary)] mb-10"
            style={{ fontSize: "var(--text-caption)" }}
          >
            RESULTS
          </p>
          <div className="flex flex-wrap gap-12">
            {cs.results.map((r) => (
              <motion.div
                key={r.metric}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="flex flex-col gap-2"
              >
                <span
                  className="font-mono font-semibold text-[var(--accent)]"
                  style={{ fontSize: "var(--text-display)" }}
                >
                  {r.value}
                </span>
                <span
                  className="font-mono text-[var(--text-tertiary)]"
                  style={{ fontSize: "var(--text-caption)" }}
                >
                  {r.metric}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ── REFLECTION ── */}
      <Section variant="mid">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl"
        >
          <p
            className="font-mono text-[var(--text-tertiary)] mb-6"
            style={{ fontSize: "var(--text-caption)" }}
          >
            REFLECTION
          </p>
          <p
            className="italic text-[var(--text-secondary)] leading-relaxed"
            style={{ fontSize: "var(--text-body)" }}
          >
            &ldquo;{cs.reflection}&rdquo;
          </p>
        </motion.div>
      </Section>

      {/* ── FOOTER NAV ── */}
      <Section variant="dark" className="py-0">
        <CaseStudyNav prev={prev} next={next} />
      </Section>
    </>
  );
}
