"use client";

import { motion } from "framer-motion";
import { sources } from "@/data/content";
import { PageContainer } from "@/components/layout/page-container";
import Link from "next/link";

export default function SourcesPage() {
  return (
    <PageContainer>
      <main className="container mx-auto px-4 py-8">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center">
            Sources I Follow
          </h1>
          <div className="grid gap-6">
            {sources.map((source, index) => (
              <motion.div
                key={source.name}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{source.icon}</div>
                  <div className="flex-1">
                    <Link
                      href={source.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-semibold hover:text-purple-600 transition-colors"
                    >
                      {source.name}
                    </Link>
                    <p className="text-gray-600 mt-2">{source.description}</p>
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
