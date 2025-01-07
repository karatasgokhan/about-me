"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-6"
    >
      <h1 className="text-[40px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
        About Me
      </h1>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        A passionate web developer with over 5 years of experience, specializing
        in creating intuitive and responsive web applications using modern
        JavaScript frameworks.
      </p>
      <Button
        asChild
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <Link href="/">Back to Home</Link>
      </Button>
    </motion.section>
  );
}
