"use client";

import { motion } from "framer-motion";
import { articles } from "@/data/content";
import { PageContainer } from "@/components/layout/page-container";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from "react";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = use(params);

  const article = articles.find(
    (article) => article.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <PageContainer>
      <main className="container mx-auto px-4 py-8">
        <motion.article
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <p className="text-gray-500 mb-8">{article.date}</p>
            <p className="text-gray-600 mb-6">{article.excerpt}</p>

            {article.content ? (
              <div className="space-y-6">{article.content}</div>
            ) : (
              <div className="space-y-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            )}
          </div>
        </motion.article>
      </main>
    </PageContainer>
  );
}
