"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Paris Bridge at Night",
    location: "Paris, France",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Mountain Peak",
    location: "Swiss Alps",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Japanese Temple",
    location: "Kyoto, Japan",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Tokyo Streets",
    location: "Tokyo, Japan",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Safari Sunset",
    location: "Kenya",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Northern Lights",
    location: "Iceland",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Roman Colosseum",
    location: "Rome, Italy",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Coastal Beach",
    location: "Australia",
  },
];

export function PersonalInterests() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold text-center">Travel Photography</h2>
      <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className={`relative overflow-hidden rounded-lg ${
              photo.span || ""
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-semibold">{photo.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
