"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FC } from "react";

export const HeroSection: FC = () => {
  return (
    <motion.section
      className="text-center space-y-6 py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
        Gökhan KARATAŞ
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
        A passionate web developer with a keen eye for design and a love for
        creating intuitive, user-friendly experiences.
      </p>
      <Button
        size="lg"
        className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        More About Me
      </Button>
    </motion.section>
  );
};
