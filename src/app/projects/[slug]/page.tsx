import { projects, getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";
import CaseStudyLayout from "@/components/case-study-layout";

export function generateStaticParams() {
  return projects
    .filter((p) => p.tier === 1 || p.tier === 2)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.name} | Nivesh Dandyan`,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || !project.caseStudy) notFound();

  const caseStudyProjects = projects.filter((p) => p.caseStudy);
  const idx = caseStudyProjects.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? caseStudyProjects[idx - 1] : undefined;
  const next =
    idx < caseStudyProjects.length - 1
      ? caseStudyProjects[idx + 1]
      : undefined;

  return <CaseStudyLayout project={project} prev={prev} next={next} />;
}
