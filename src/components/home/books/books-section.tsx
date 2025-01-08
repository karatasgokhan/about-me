"use client";

import { motion } from "framer-motion";
import { favoriteBooks } from "@/data/content";
import { BookCard } from "./book-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";

export function BooksSection() {
  const locale = useLocale();
  const displayedBooks = favoriteBooks.slice(0, 3);

  return (
    <section className="py-12">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Books I Recommend
      </motion.h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedBooks.map((book, index) => (
            <BookCard key={book.title} book={book} index={index} />
          ))}
        </div>
        {favoriteBooks.length > 3 && (
          <div className="text-center mt-8">
            <Link href={`/${locale}/books`}>
              <Button
                variant="outline"
                className="hover:bg-gray-100 transition-colors"
              >
                View All Books
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
