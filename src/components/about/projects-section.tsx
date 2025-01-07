"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured online store built with Next.js and Stripe, featuring server-side rendering and a headless CMS. Implemented advanced filtering, sorting, and pagination for product listings, resulting in a 40% increase in user engagement.",
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
  },
  {
    title: "Task Management App",
    description:
      "A React-based productivity tool with drag-and-drop functionality and real-time updates. Integrated with various third-party APIs for calendar synchronization and implemented a custom notification system to improve user productivity.",
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio site showcasing my projects and skills, built with Next.js and Tailwind CSS. Optimized for performance with lazy loading, image optimization, and efficient animations, achieving a perfect Lighthouse score.",
    image: "/placeholder.svg?height=200&width=400",
    link: "#",
  },
];

export function ProjectsSection() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full flex flex-col">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button variant="link" className="p-0 h-auto text-purple-600">
                  View Project
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
