"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { workExperience } from "@/data/content";
import { WorkCard } from "./work-card";

interface WorkExperienceProps {
  variant?: "preview" | "full";
}

export function WorkExperience({ variant = "full" }: WorkExperienceProps) {
  const experiences =
    variant === "preview" ? [workExperience[0]] : workExperience;

  return (
    <section className="py-12">
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </motion.h2>
      <div className="space-y-8">
        {experiences.map((job, index) => (
          <WorkCard key={`${job.company}-${index}`} job={job} index={index} />
        ))}
      </div>
      {variant === "preview" && (
        <div className="text-center mt-8">
          <Link href="/about#work-experience">
            <Button
              variant="outline"
              className="hover:bg-gray-100 transition-colors"
            >
              View All Experience
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}
