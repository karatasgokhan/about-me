"use client";

import { motion } from "framer-motion";
import { sources } from "@/data/content";
import { SourceCard } from "./source-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SourcesSection() {
  const displayedSources = sources.slice(0, 6);

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
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSources.map((source, index) => (
            <SourceCard key={source.name} source={source} index={index} />
          ))}
        </div>
        {sources.length > 6 && (
          <div className="text-center mt-8">
            <Link href="/sources">
              <Button
                variant="outline"
                className="hover:bg-gray-100 transition-colors"
              >
                View All Sources
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
