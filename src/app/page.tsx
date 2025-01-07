"use client";

import { PageContainer } from "@/components/layout/page-container";
import { HeroSection } from "@/components/home/hero/hero-section";
import { WorkExperience } from "@/components/home/work/work-experience";
import { ArticlesSection } from "@/components/home/articles/articles-section";
import { SourcesSection } from "@/components/home/sources/sources-section";
import { TravelSection } from "@/components/home/travel/travel-section";
import { BooksSection } from "@/components/home/books/books-section";

export default function Home() {
  return (
    <PageContainer>
      <main className="container mx-auto px-4 py-8 space-y-12 md:space-y-24 flex flex-col min-h-screen">
        <HeroSection variant="home" />
        <div className="flex-grow grid grid-cols-1 gap-12 md:gap-24">
          <WorkExperience variant="preview" />
          <ArticlesSection variant="preview" />
          <BooksSection />
          <SourcesSection />
          <TravelSection />
        </div>
      </main>
    </PageContainer>
  );
}
