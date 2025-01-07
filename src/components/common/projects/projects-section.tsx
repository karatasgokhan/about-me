import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";
import { Project } from "@/types";

interface ProjectsSectionProps {
  title?: string;
  projects: Project[];
  variant?: "grid" | "list";
}

export function ProjectsSection({
  title = "Featured Projects",
  projects,
  variant = "grid",
}: ProjectsSectionProps) {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <div
        className={`grid ${
          variant === "grid" ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"
        } gap-6`}
      >
        {projects?.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            variant={variant}
          />
        ))}
      </div>
    </section>
  );
}
