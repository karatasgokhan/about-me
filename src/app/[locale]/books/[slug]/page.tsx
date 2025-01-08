"use client";

import { motion } from "framer-motion";
import { favoriteBooks } from "@/data/content";
import { PageContainer } from "@/components/layout/page-container";
import { notFound } from "next/navigation";
import Image from "next/image";
import { createSlug } from "@/lib/utils/slug";

interface BookPageProps {
  params: {
    slug: string;
  };
}

export default function BookPage({ params }: BookPageProps) {
  const book = favoriteBooks.find((b) => createSlug(b.title) === params.slug);

  if (!book) {
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
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3">
                <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
                <p className="text-xl text-gray-600 mb-2">by {book.author}</p>
                <p className="text-purple-600 mb-6">{book.genre}</p>
                <div className="prose prose-lg max-w-none mb-6">
                  <p>{book.description}</p>
                </div>
                <div className="space-y-6">
                  {book.myPerspective && (
                    <div>
                      <h2 className="text-2xl font-bold mb-3">
                        My Perspective
                      </h2>
                      <p className="text-gray-600">{book.myPerspective}</p>
                    </div>
                  )}
                  {book.personalNotes?.favoriteQuotes && (
                    <div>
                      <h2 className="text-2xl font-bold mb-3">
                        Favorite Quotes
                      </h2>
                      <div className="space-y-4">
                        {book.personalNotes.favoriteQuotes.map(
                          (quote, index) => (
                            <blockquote
                              key={index}
                              className="border-l-4 border-purple-200 pl-4 py-2 bg-purple-50/50 rounded-r"
                            >
                              <p className="text-gray-700 italic">
                                "{quote.quote}"
                              </p>
                              {quote.context && (
                                <p className="text-sm text-gray-500 mt-2">
                                  Context: {quote.context}
                                </p>
                              )}
                              {quote.page && (
                                <p className="text-sm text-gray-500">
                                  Page: {quote.page}
                                </p>
                              )}
                            </blockquote>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </article>
      </main>
    </PageContainer>
  );
}
