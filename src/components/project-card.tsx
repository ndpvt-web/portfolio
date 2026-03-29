"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  variant: "hero" | "notable" | "compact";
  className?: string;
}

function HeroCard({ project, className }: { project: Project; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn("group relative h-full", className)}
    >
      <Link
        href={`/projects/${project.slug}`}
        className={cn(
          "block h-full rounded-xl border border-[var(--bg-border)] bg-[var(--bg-surface)]",
          "p-6 flex flex-col gap-4",
          "hover:border-[var(--accent)] transition-colors duration-200",
          "hover:shadow-[0_0_24px_rgba(var(--accent-rgb,249,115,22),0.15)]"
        )}
      >
        {/* Screenshot placeholder */}
        <div className="rounded-lg bg-[var(--bg-code)] border border-[var(--bg-border)] aspect-video flex items-center justify-center">
          <span className="font-mono text-[var(--text-tertiary)]" style={{ fontSize: "var(--text-caption)" }}>
            {project.screenshots[0] ? project.name : "[ preview ]"}
          </span>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <h3 className="font-semibold text-[var(--text-primary)]" style={{ fontSize: "var(--text-heading)" }}>
            {project.name}
          </h3>
          <p className="text-[var(--text-secondary)]" style={{ fontSize: "var(--text-body)" }}>
            {project.tagline}
          </p>
          <div className="mt-auto pt-2">
            <span className="font-mono text-[var(--accent)] font-semibold text-lg">
              {project.keyMetric.value}
            </span>
            <span className="font-mono text-[var(--text-tertiary)] ml-2" style={{ fontSize: "var(--text-caption)" }}>
              {project.keyMetric.label}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function NotableCard({ project, className }: { project: Project; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn("group relative h-full", className)}
    >
      <Link
        href={`/projects/${project.slug}`}
        className={cn(
          "block h-full rounded-xl border border-[var(--bg-border)] bg-[var(--bg-surface)]",
          "p-5 flex flex-col gap-3",
          "hover:border-[var(--accent)] transition-colors duration-200"
        )}
      >
        <div className="rounded-md bg-[var(--bg-code)] border border-[var(--bg-border)] aspect-video flex items-center justify-center">
          <span className="font-mono text-[var(--text-tertiary)]" style={{ fontSize: "var(--text-caption)" }}>
            {project.screenshots[0] ?? "[ preview ]"}
          </span>
        </div>
        <div className="flex flex-col gap-1.5 flex-1">
          <h3 className="font-semibold text-[var(--text-primary)] text-base">{project.name}</h3>
          <p className="text-[var(--text-secondary)] text-sm line-clamp-2">{project.tagline}</p>
          <div className="mt-auto pt-1">
            <span className="font-mono text-[var(--accent)] font-semibold">
              {project.keyMetric.value}
            </span>
            <span className="font-mono text-[var(--text-tertiary)] ml-2" style={{ fontSize: "var(--text-caption)" }}>
              {project.keyMetric.label}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function CompactCard({ project, className }: { project: Project; className?: string }) {
  const githubUrl = project.github[0]
    ? `https://github.com/${project.github[0].owner}/${project.github[0].repo}`
    : `/projects/${project.slug}`;

  return (
    <motion.div
      whileHover={{ backgroundColor: "var(--bg-elevated)" }}
      transition={{ duration: 0.15 }}
      className={cn(
        "group flex items-center justify-between gap-4",
        "px-4 py-3 rounded-lg border border-transparent",
        "hover:border-[var(--bg-border)] transition-colors",
        className
      )}
    >
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="font-semibold text-[var(--text-primary)] text-sm truncate">{project.name}</span>
        <span className="text-[var(--text-tertiary)] text-xs truncate">{project.tagline}</span>
      </div>
      <Link
        href={githubUrl}
        target={project.github[0] ? "_blank" : undefined}
        rel={project.github[0] ? "noopener noreferrer" : undefined}
        className="shrink-0 text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors"
        aria-label={`View ${project.name}`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  );
}

export default function ProjectCard({ project, variant, className }: ProjectCardProps) {
  if (variant === "hero") return <HeroCard project={project} className={className} />;
  if (variant === "notable") return <NotableCard project={project} className={className} />;
  return <CompactCard project={project} className={className} />;
}
