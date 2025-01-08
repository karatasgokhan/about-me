"use client";

import { motion } from "framer-motion";
import { ProjectsSection } from "@/components/common/projects/projects-section";
import { TechnicalSkills } from "@/components/about/technical-skills";
import { WorkExperience } from "@/components/home/work/work-experience";
import { JourneySection } from "@/components/about/journey-section";
import { PageContainer } from "@/components/layout/page-container";
import { useEffect } from "react";
import { ProjectGrid } from "@/components/common/projects/project-grid";
import { projects } from "@/data/content";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  useEffect(() => {
    if (window.location.hash === "#work-experience") {
      const element = document.getElementById("work-experience");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <PageContainer>
      <main className="container mx-auto px-4 py-8">
        <JourneySection />
        <div id="work-experience">
          <WorkExperience variant="full" />
        </div>
        <TechnicalSkills />
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
          <ProjectGrid projects={projects} limit={3} />
          <div className="text-center mt-8">
            <Link href="/projects">
              <Button variant="outline">View All Projects</Button>
            </Link>
          </div>
        </section>
      </main>
    </PageContainer>
  );
}
