"use client";

import { motion } from "framer-motion";
import { tripPhotos } from "@/data/content";
import Image from "next/image";
import Link from "next/link";
import { createSlug } from "@/lib/utils/slug";

export function TravelSection() {
  return (
    <section className="py-12">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Travels
      </motion.h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {tripPhotos.map((photo, index) => (
            <Link
              key={photo.location}
              href={`/travels/${createSlug(photo.location)}`}
              className={`relative block rounded-lg overflow-hidden ${
                index === 0 || index === 3 || index === 6
                  ? "md:col-span-2 md:row-span-2"
                  : ""
              }`}
            >
              <motion.div
                className="relative w-full h-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={
                    index === 0 || index === 3 || index === 6
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  priority={index < 4}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-lg font-semibold">
                    {photo.location}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
