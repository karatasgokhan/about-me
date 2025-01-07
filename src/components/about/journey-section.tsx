"use client";

import { motion } from "framer-motion";

export function JourneySection() {
  return (
    <motion.section
      className="max-w-3xl mx-auto text-center space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6">My Journey in Web Development</h2>
      <motion.p
        className="text-lg text-gray-600 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        My passion for web development began during my university years, where I
        discovered the power of creating interactive and meaningful digital
        experiences. Since then, I've been on an exciting journey of continuous
        learning and growth, embracing new technologies and best practices in
        the ever-evolving world of web development.
      </motion.p>
      <motion.p
        className="text-lg text-gray-600 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Throughout my career, I've focused on building user-centric applications
        that combine clean code with intuitive design. I'm particularly
        passionate about React and the modern JavaScript ecosystem, always
        striving to create efficient, scalable, and maintainable solutions.
      </motion.p>
    </motion.section>
  );
}
