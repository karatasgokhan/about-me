"use client";

import { motion } from "framer-motion";
import { favoriteBooks } from "@/data/content";
import { PageContainer } from "@/components/layout/page-container";
import Image from "next/image";
import { notFound } from "next/navigation";
import { createSlug } from "@/lib/utils/slug";

interface BookPageProps {
  params: { slug: string };
}

export default function BookPage({ params }: BookPageProps) {
  const book = favoriteBooks.find(
    (book) => createSlug(book.title) === params.slug
  );

  if (!book) {
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
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-4 space-y-2">
                <div className="bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-semibold text-center">
                  {book.genre}
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
              <p className="text-xl text-gray-600 mb-6">by {book.author}</p>

              <div className="prose max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-2">About the Book</h2>
                  <p className="text-gray-700">{book.description}</p>
                </section>

                {book.myPerspective && (
                  <section>
                    <h2 className="text-2xl font-bold mb-2">My Perspective</h2>
                    <p className="text-gray-700">{book.myPerspective}</p>
                  </section>
                )}

                {book.personalNotes?.favoriteQuotes && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Favorite Quotes</h2>
                    <div className="space-y-4">
                      {book.personalNotes.favoriteQuotes.map((quote, index) => (
                        <blockquote
                          key={index}
                          className="border-l-4 border-purple-500 pl-4 italic"
                        >
                          <p className="text-gray-700">{quote.quote}</p>
                          <div className="mt-2 text-sm text-gray-500 space-y-1 not-italic">
                            {quote.context && <p>{quote.context}</p>}
                            {quote.page && <p>Page {quote.page}</p>}
                          </div>
                        </blockquote>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        </motion.article>
      </main>
    </PageContainer>
  );
}
