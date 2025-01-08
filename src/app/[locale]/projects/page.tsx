"use client";

import { PageContainer } from "@/components/layout/page-container";
import { ProjectGrid } from "@/components/common/projects/project-grid";
import { projects } from "@/data/content";

export default function ProjectsPage() {
  return (
    <PageContainer>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>
        <ProjectGrid projects={projects} />
      </main>
    </PageContainer>
  );
}
