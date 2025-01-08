"use client";

import { motion } from "framer-motion";
import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { createSlug } from "@/lib/utils/slug";
import { useLocale } from "next-intl";

interface ArticleCardProps {
  article: Article;
  index: number;
}

export function ArticleCard({ article, index }: ArticleCardProps) {
  const locale = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/${locale}/articles/${createSlug(article.title)}`}>
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-48">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">{article.title}</h3>
            <p className="text-gray-600 mb-4">{article.excerpt}</p>
            <time className="text-sm text-gray-500">{article.date}</time>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
