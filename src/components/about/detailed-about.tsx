"use client";

import { motion } from "framer-motion";

export function DetailedAbout() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-bold text-center">
        My Journey in Web Development
      </h2>
      <div className="space-y-6 text-gray-700">
        <p>
          My passion for web development began during my university years when I
          first discovered the power of creating interactive websites. What
          started as a hobby quickly turned into a career path that I've been
          pursuing with enthusiasm for over half a decade.
        </p>
        <p>
          Throughout my journey, I've had the opportunity to work on a diverse
          range of projects, from small business websites to large-scale
          enterprise applications. This variety has allowed me to develop a
          versatile skill set and adapt to different technologies and
          methodologies.
        </p>
        <p>
          I specialize in frontend development, with a focus on React and its
          ecosystem. I'm particularly passionate about creating performant,
          accessible, and user-friendly interfaces. I believe that great web
          applications not only look good but also provide an excellent user
          experience across all devices and platforms.
        </p>
        <p>
          In recent years, I've become increasingly interested in the
          intersection of design and development. I enjoy collaborating closely
          with designers to bring their visions to life, while also contributing
          my own ideas to improve the overall user experience.
        </p>
        <p>
          Outside of my professional work, I'm an active member of the web
          development community. I regularly attend meetups and conferences, and
          I've recently started giving back by mentoring junior developers and
          contributing to open-source projects.
        </p>
        <p>
          As the web continues to evolve, I'm excited to keep learning and
          growing as a developer. I'm particularly interested in exploring
          emerging technologies like WebAssembly and Progressive Web Apps, which
          I believe will shape the future of web development.
        </p>
      </div>
    </motion.section>
  );
}
