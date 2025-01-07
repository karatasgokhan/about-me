"use client";

import { motion } from "framer-motion";
import { ProjectsSection } from "@/components/common/projects/projects-section";
import { TechnicalSkills } from "@/components/about/technical-skills";
import { WorkExperience } from "@/components/home/work/work-experience";
import { JourneySection } from "@/components/about/journey-section";
import { PageContainer } from "@/components/layout/page-container";
import { Project } from "@/types";
import { useEffect } from "react";

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/yourusername/portfolio",
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with modern features",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    link: "https://github.com/yourusername/task-manager",
  },
];

export default function AboutPage() {
  useEffect(() => {
    if (window.location.hash === "#work-experience") {
      const element = document.getElementById("work-experience");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <PageContainer>
      <div className="container mx-auto px-4 py-8 space-y-16">
        <JourneySection />
        <div id="work-experience">
          <WorkExperience variant="full" />
        </div>
        <TechnicalSkills />
        <ProjectsSection projects={projects} title="My Projects" />
      </div>
    </PageContainer>
  );
}
