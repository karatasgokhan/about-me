"use client";

import { motion } from "framer-motion";
import { articles } from "@/data/content";
import { ArticleCard } from "./article-card";

export function ArticlesSection() {
  return (
    <section className="py-12">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Latest Articles
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <ArticleCard key={article.title} article={article} index={index} />
        ))}
      </div>
    </section>
  );
}
