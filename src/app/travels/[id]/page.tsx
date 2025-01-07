"use client";

import { motion } from "framer-motion";
import { travelLocations, tripPhotos } from "@/data/content";
import { PageContainer } from "@/components/layout/page-container";
import Image from "next/image";
import { notFound } from "next/navigation";
import { createSlug } from "@/lib/utils/slug";

interface TravelDetailPageProps {
  params: { id: string };
}

export default function TravelDetailPage({ params }: TravelDetailPageProps) {
  const { id } = params;

  // Find the travel photo first
  const photo = tripPhotos.find((photo) => createSlug(photo.location) === id);

  // Find the corresponding location data
  const location = travelLocations.find((loc) => createSlug(loc.name) === id);

  if (!photo || !location) {
    notFound();
  }

  return (
    <PageContainer>
      <main className="container mx-auto px-4 py-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">{location.name}</h1>
          <p className="text-lg text-gray-600 mb-8">{location.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {location.photos.map((photo, index) => (
              <motion.div
                key={photo.src}
                className={`relative rounded-lg overflow-hidden ${
                  index === 0 || index === 3 || index === 6
                    ? "md:col-span-2 md:row-span-2"
                    : ""
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-300 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white text-lg font-semibold">
                      {photo.location}
                    </p>
                    {photo.description && (
                      <p className="text-white/80 text-sm mt-1">
                        {photo.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </PageContainer>
  );
}
