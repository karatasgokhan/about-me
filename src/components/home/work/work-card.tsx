import { motion } from "framer-motion";
import { WorkExperience } from "@/types";
import Image from "next/image";

interface WorkCardProps {
  job: WorkExperience;
  index: number;
}

export function WorkCard({ job, index }: WorkCardProps) {
  return (
    <motion.div
      className="flex items-center"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="w-1/4 text-right pr-8">
        <p className="text-lg font-semibold text-gray-600">{job.date}</p>
      </div>
      <div className="w-3/4 pl-8 border-l-2 border-gray-200 py-4">
        <h3 className="text-xl font-bold">{job.title}</h3>
        <p className="text-lg text-gray-600">{job.company}</p>
        <p className="mt-2 text-gray-700 line-clamp-2">{job.description}</p>
      </div>
    </motion.div>
  );
}
