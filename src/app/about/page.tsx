"use client";

import { motion } from "framer-motion";
import { ProjectsSection } from "@/components/common/projects/projects-section";
import { TechnicalSkills } from "@/components/about/technical-skills";
import { WorkExperience } from "@/components/home/work/work-experience";
import { JourneySection } from "@/components/about/journey-section";
import { PageContainer } from "@/components/layout/page-container";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/content";

export default function AboutPage() {
  useEffect(() => {
    if (window.location.hash === "#work-experience") {
      const element = document.getElementById("work-experience");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const displayedProjects = projects.slice(0, 3);

  return (
    <PageContainer>
      <main className="container mx-auto px-4 py-8">
        <JourneySection />
        <div id="work-experience">
          <WorkExperience variant="full" />
        </div>
        <TechnicalSkills />
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 flex flex-col rounded-xl">
                  {project.image && (
                    <div className="relative h-48 rounded-t-xl overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-purple-600 hover:text-purple-700 transition-colors mt-auto"
                      >
                        View Project
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          {projects.length > 3 && (
            <div className="text-center mt-8">
              <Link href="/projects">
                <Button
                  variant="outline"
                  className="hover:bg-gray-100 transition-colors"
                >
                  View All Projects
                </Button>
              </Link>
            </div>
          )}
        </section>
      </main>
    </PageContainer>
  );
}
