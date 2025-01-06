import { motion } from "framer-motion";
import { Source } from "@/types";

interface SourceCardProps {
  source: Source;
  index: number;
}

export function SourceCard({ source, index }: SourceCardProps) {
  return (
    <motion.a
      href={source.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="w-12 h-12 flex items-center justify-center text-2xl">
        {source.icon}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold">{source.name}</h3>
        <p className="text-sm text-gray-600">{source.description}</p>
      </div>
    </motion.a>
  );
}
