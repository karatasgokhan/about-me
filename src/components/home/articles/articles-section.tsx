"use client";

import { motion } from "framer-motion";
import { articles } from "@/data/content";
import { ArticleCard } from "./article-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ArticlesSectionProps {
  variant?: "preview" | "full";
}

export function ArticlesSection({ variant = "preview" }: ArticlesSectionProps) {
  const displayedArticles =
    variant === "preview" ? articles.slice(0, 3) : articles;

  return (
    <section className="py-12">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {variant === "preview" ? "Latest Articles" : "All Articles"}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedArticles.map((article, index) => (
          <ArticleCard key={article.title} article={article} index={index} />
        ))}
      </div>
      {variant === "preview" && articles.length > 3 && (
        <div className="text-center mt-8">
          <Link href="/articles">
            <Button
              variant="outline"
              className="hover:bg-gray-100 transition-colors"
            >
              View All Articles
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}
