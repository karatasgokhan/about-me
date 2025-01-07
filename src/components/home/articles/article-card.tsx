"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { createSlug } from "@/lib/utils/slug";

interface ArticleCardProps {
  article: Article;
  index: number;
}

export function ArticleCard({ article, index }: ArticleCardProps) {
  const slug = createSlug(article.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/articles/${slug}`}>
        <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-48 w-full">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2">{article.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{article.date}</p>
            <p className="text-gray-600 flex-grow">{article.excerpt}</p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
