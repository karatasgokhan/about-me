"use client";

import { motion } from "framer-motion";
import { Book } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { createSlug } from "@/lib/utils/slug";

interface BookCardProps {
  book: Book;
  index: number;
}

export function BookCard({ book, index }: BookCardProps) {
  const slug = createSlug(book.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/books/${slug}`}>
        <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-[200px]">
            <Image
              src={book.cover}
              alt={book.title}
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">{book.title}</h3>
            <p className="text-sm text-gray-500 mb-2">by {book.author}</p>
            <p className="text-xs text-purple-600 mb-3">{book.genre}</p>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {book.description}
            </p>
            <span className="text-sm text-purple-600 hover:text-purple-700 transition-colors">
              Read More →
            </span>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
