"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3/Sass",
    ],
  },
  {
    title: "UI Frameworks & Libraries",
    skills: [
      "Tailwind CSS",
      "Material-UI",
      "Styled Components",
      "Framer Motion",
    ],
  },
  {
    title: "State Management",
    skills: ["Redux", "Context API", "Zustand", "Recoil"],
  },
  {
    title: "Testing",
    skills: ["Jest", "React Testing Library", "Cypress", "Playwright"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "Webpack", "Vite", "Docker", "CI/CD"],
  },
  {
    title: "Design & UX",
    skills: ["Figma", "Adobe XD", "Responsive Design", "Accessibility"],
  },
];

export function SkillsSection() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold text-center">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
