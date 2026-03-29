import type { Project } from "@/data/projects";
import ProjectCard from "./project-card";

interface BentoGridProps {
  projects: Project[];
}

export default function BentoGrid({ projects }: BentoGridProps) {
  const tier1 = projects.filter((p) => p.tier === 1);
  const tier2 = projects.filter((p) => p.tier === 2);
  const tier3 = projects.filter((p) => p.tier === 3);

  return (
    <div className="max-w-[1200px] mx-auto w-full">
      {/* Tier 1 — hero cards, first 2 span 2 cols each */}
      {tier1.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-4 lg:mb-6">
          {tier1.slice(0, 2).map((project) => (
            <div key={project.slug} className="col-span-1 lg:col-span-2">
              <ProjectCard project={project} variant="hero" />
            </div>
          ))}
          {tier1.slice(2).map((project) => (
            <div key={project.slug} className="col-span-1">
              <ProjectCard project={project} variant="hero" />
            </div>
          ))}
        </div>
      )}

      {/* Tier 2 — notable cards */}
      {tier2.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-4 lg:mb-6">
          {tier2.map((project) => (
            <div key={project.slug} className="col-span-1">
              <ProjectCard project={project} variant="notable" />
            </div>
          ))}
        </div>
      )}

      {/* Tier 3 — compact list */}
      {tier3.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {tier3.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="compact" />
          ))}
        </div>
      )}
    </div>
  );
}
