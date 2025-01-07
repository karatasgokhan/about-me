import { motion } from "framer-motion";
import { WorkExperience } from "@/types";
import { ExperienceCard } from "./experience-card";

interface ExperienceSectionProps {
  title?: string;
  experiences: WorkExperience[];
  variant?: "detailed" | "compact";
}

export function ExperienceSection({
  title = "Work Experience",
  experiences,
  variant = "detailed",
}: ExperienceSectionProps) {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={exp.company}
            experience={exp}
            index={index}
            variant={variant}
          />
        ))}
      </div>
    </section>
  );
}
