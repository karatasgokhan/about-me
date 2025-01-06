"use client";

import { motion } from "framer-motion";
import { sources } from "@/data/content";
import { SourceCard } from "./source-card";

export function SourcesSection() {
  return (
    <section className="py-12">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Sources I Follow
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sources.map((source, index) => (
          <SourceCard key={source.name} source={source} index={index} />
        ))}
      </div>
    </section>
  );
}
