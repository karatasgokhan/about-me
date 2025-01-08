"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/content";
import { ProjectCard } from "./project-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";

export function ProjectsSection({
  variant = "preview",
}: {
  variant?: "preview" | "full";
}) {
  const locale = useLocale();
  const displayedProjects =
    variant === "preview" ? projects.slice(0, 3) : projects;

  return (
    <section className="py-12">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        {variant === "preview" && projects.length > 3 && (
          <div className="text-center mt-8">
            <Link href={`/${locale}/projects`}>
              <Button
                variant="outline"
                className="hover:bg-gray-100 transition-colors"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
