"use client";

import { WorkCard } from "./work-card";
import { workExperience } from "@/data/content";

export function WorkExperience() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
      <div className="space-y-8">
        {workExperience.map((job, index) => (
          <WorkCard key={job.company} job={job} index={index} />
        ))}
      </div>
    </section>
  );
}
