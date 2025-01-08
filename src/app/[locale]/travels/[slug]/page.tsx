"use client";

import { motion } from "framer-motion";
import { tripPhotos } from "@/data/content";
import { PageContainer } from "@/components/layout/page-container";
import { notFound } from "next/navigation";
import Image from "next/image";
import { createSlug } from "@/lib/utils/slug";

interface TravelPageProps {
  params: {
    slug: string;
  };
}

export default function TravelPage({ params }: TravelPageProps) {
  const travel = tripPhotos.find((t) => createSlug(t.location) === params.slug);

  if (!travel) {
    notFound();
  }

  return (
    <PageContainer>
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Title and Description */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">{travel.location}</h1>
              {travel.description && (
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  {travel.description}
                </p>
              )}
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
              {travel.photos?.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`relative rounded-lg overflow-hidden ${
                    index === 0 || index === 3
                      ? "md:col-span-2 md:row-span-2"
                      : ""
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {photo.description && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm">{photo.description}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </article>
      </main>
    </PageContainer>
  );
}
