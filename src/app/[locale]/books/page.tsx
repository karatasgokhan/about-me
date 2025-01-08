"use client";

import { motion } from "framer-motion";
import { favoriteBooks } from "@/data/content";
import { PageContainer } from "@/components/layout/page-container";
import { BookCard } from "@/components/home/books/book-card";

export default function BooksPage() {
  return (
    <PageContainer>
      <main className="container mx-auto px-4 py-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center">
            Books I Recommend
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteBooks.map((book, index) => (
              <BookCard key={book.title} book={book} index={index} />
            ))}
          </div>
        </motion.div>
      </main>
    </PageContainer>
  );
}
