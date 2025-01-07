import { motion } from "framer-motion";
import { WorkExperience } from "@/types";
import Image from "next/image";

interface ExperienceCardProps {
  experience: WorkExperience;
  index: number;
  variant: "detailed" | "compact";
}

export function ExperienceCard({
  experience,
  index,
  variant,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="grid grid-cols-[200px_1fr] gap-8"
    >
      <div>
        <p className="text-gray-600">{experience.date}</p>
        {variant === "detailed" && experience.logo && (
          <div className="relative w-12 h-12 mt-2">
            <Image
              src={experience.logo}
              alt={experience.company}
              fill
              className="rounded-full"
            />
          </div>
        )}
      </div>
      <div>
        <h3 className="text-xl font-bold">{experience.title}</h3>
        <p className="text-gray-600 mb-2">{experience.company}</p>
        <p className="text-gray-700">{experience.description}</p>
      </div>
    </motion.div>
  );
}
