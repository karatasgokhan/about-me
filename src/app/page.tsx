"use client";

import { PageContainer } from "@/components/layout/page-container";
import { HeroSection } from "@/components/home/hero/hero-section";
import { WorkExperience } from "@/components/home/work/work-experience";
import { ArticlesSection } from "@/components/home/articles/articles-section";
import { SourcesSection } from "@/components/home/sources/sources-section";
import { TravelSection } from "@/components/home/travel/travel-section";

export default function Home() {
  return (
    <PageContainer>
      <main className="container mx-auto px-4 py-8 space-y-24 flex flex-col min-h-screen">
        <HeroSection variant="home" />
        <div className="flex-grow grid grid-cols-1 gap-24">
          <WorkExperience variant="preview" />
          <ArticlesSection />
          <SourcesSection />
          <TravelSection />
        </div>
      </main>
    </PageContainer>
  );
}
