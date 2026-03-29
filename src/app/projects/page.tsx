import { projects } from "@/data/projects";
import ProjectsGrid from "./projects-grid";

export const metadata = { title: "Projects | Nivesh Dandyan" };

export default function ProjectsPage() {
  return <ProjectsGrid projects={projects} />;
}
