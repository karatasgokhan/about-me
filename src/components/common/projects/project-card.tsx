"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: "grid" | "list";
}

export function ProjectCard({
  project,
  index,
  variant = "grid",
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex-grow space-y-4">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          {project.link && (
            <div className="mt-6 pt-4 border-t">
              <Link
                href={project.link}
                target="_blank"
                className="text-blue-500 hover:text-blue-600 hover:underline inline-flex items-center"
              >
                View Project →
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
