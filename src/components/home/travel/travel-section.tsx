"use client";

import { motion } from "framer-motion";
import { tripPhotos } from "@/data/content";
import { TravelCard } from "./travel-card";

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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
        {tripPhotos.map((photo, index) => (
          <TravelCard 
            key={photo.location} 
            photo={photo} 
            index={index} 
            isLarge={index % 5 === 0}
          />
        ))}
      </div>
    </section>
  );
}
