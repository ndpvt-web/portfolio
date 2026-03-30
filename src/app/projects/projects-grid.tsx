"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SearchBar from "@/components/search-bar";
import ProjectCard from "@/components/project-card";
import Section from "@/components/section";
import type { Project } from "@/data/projects";

interface ProjectsGridProps {
  projects: Project[];
}

function matchesQuery(project: Project, query: string): boolean {
  const q = query.toLowerCase();
  return (
    project.name.toLowerCase().includes(q) ||
    project.tagline.toLowerCase().includes(q) ||
    project.description.toLowerCase().includes(q) ||
    project.categories.some((c) => c.includes(q))
  );
}

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" as const },
  }),
};

interface TierSectionProps {
  title: string;
  projects: Project[];
  variant: "hero" | "notable" | "compact";
  gridClass: string;
  sectionVariant: "dark" | "mid";
  indexOffset: number;
}

function TierSection({ title, projects, variant, gridClass, sectionVariant, indexOffset }: TierSectionProps) {
  if (projects.length === 0) return null;
  return (
    <Section variant={sectionVariant}>
      <h2 className="font-mono text-[var(--text-tertiary)] text-xs uppercase tracking-widest mb-6">
        {title}
      </h2>
      <div className={gridClass}>
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            custom={indexOffset + i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={fadeIn}
          >
            <ProjectCard project={project} variant={variant} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [query, setQuery] = useState("");

  const tier1 = projects.filter((p) => p.tier === 1);
  const tier2 = projects.filter((p) => p.tier === 2);
  const tier3 = projects.filter((p) => p.tier === 3);

  const isSearching = query.trim().length > 0;
  const filtered = isSearching ? projects.filter((p) => matchesQuery(p, query.trim())) : [];

  return (
    <>
      {/* Header section */}
      <Section variant="dark">
        <div className="flex flex-col gap-4 mb-8">
          <h1
            className="font-display font-bold text-[var(--text-primary)]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
          >
            Projects
          </h1>
          <p className="text-[var(--text-secondary)] max-w-xl" style={{ fontSize: "var(--text-body)" }}>
            A selection of shipped AI systems, tools, and experiments.
          </p>
        </div>
        <SearchBar value={query} onChange={setQuery} placeholder="Search by name, tag, or category..." />

        {/* Search results */}
        {isSearching && (
          <div className="mt-10">
            {filtered.length === 0 ? (
              <p className="font-mono text-[var(--text-tertiary)] text-sm">No projects match &quot;{query}&quot;.</p>
            ) : (
              <>
                <p className="font-mono text-[var(--text-tertiary)] text-xs uppercase tracking-widest mb-6">
                  {filtered.length} result{filtered.length !== 1 ? "s" : ""}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filtered.map((project, i) => (
                    <motion.div
                      key={project.slug}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={fadeIn}
                    >
                      <ProjectCard
                        project={project}
                        variant={project.tier === 1 ? "hero" : project.tier === 2 ? "notable" : "compact"}
                      />
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </Section>

      {/* Tiered sections — hidden during search */}
      {!isSearching && (
        <>
          <TierSection
            title="Featured"
            projects={tier1}
            variant="hero"
            gridClass="grid grid-cols-1 sm:grid-cols-2 gap-6"
            sectionVariant="mid"
            indexOffset={0}
          />
          <TierSection
            title="Notable"
            projects={tier2}
            variant="notable"
            gridClass="grid grid-cols-1 sm:grid-cols-2 gap-5"
            sectionVariant="dark"
            indexOffset={tier1.length}
          />
          <TierSection
            title="More Projects"
            projects={tier3}
            variant="compact"
            gridClass="grid grid-cols-1 gap-1"
            sectionVariant="mid"
            indexOffset={tier1.length + tier2.length}
          />
        </>
      )}
    </>
  );
}
