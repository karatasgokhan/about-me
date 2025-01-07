"use client";

import { motion } from "framer-motion";
import { ArticlesSection } from "@/components/home/articles/articles-section";
import { PageContainer } from "@/components/layout/page-container";

export default function ArticlesPage() {
  return (
    <PageContainer>
      <main className="container mx-auto px-4 py-8">
        <ArticlesSection variant="full" />
      </main>
    </PageContainer>
  );
}
