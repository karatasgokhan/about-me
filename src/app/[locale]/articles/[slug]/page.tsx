"use client";

import { motion } from "framer-motion";
import { articles } from "@/data/content";
import { PageContainer } from "@/components/layout/page-container";
import { notFound } from "next/navigation";
import Image from "next/image";
import { createSlug } from "@/lib/utils/slug";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find((a) => createSlug(a.title) === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <PageContainer>
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <div className="text-gray-600 mb-8">
              <time>{article.date}</time>
            </div>
            <div className="prose prose-lg max-w-none">
              {article.content ? (
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              ) : (
                <p>{article.excerpt}</p>
              )}
            </div>
          </motion.div>
        </article>
      </main>
    </PageContainer>
  );
}
