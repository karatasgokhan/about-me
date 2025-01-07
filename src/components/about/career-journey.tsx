"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "2022/09 - Present",
    role: "Frontend Developer",
    company: "Vodafone via Kafein Technology Solutions",
    description:
      "Leading the transition of a large-scale project from Angular to React to enhance performance and user experience. Spearheaded the development of a new Next.js project using Vodafone's UI framework.",
  },
  {
    period: "2021/02 - 2022/09",
    role: "Frontend Developer",
    company: "A&Z Yazılım Teknolojileri A.Ş.",
    description:
      "Developed scalable internal web applications using Next.js, PuppeteerJS, TypeScript, and Redux Toolkit. Implemented i18n for multilingual support.",
  },
  {
    period: "2019/09 - 2021/02",
    role: "Frontend Developer",
    company: "Güneydoğu İnteraktif Medya Ajansı",
    description:
      "Built responsive and visually appealing user interfaces using Sass, Redux, HTML, CSS, and JavaScript. Ensured cross-browser compatibility and optimized performance.",
  },
];

export function CareerJourney() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold text-center">Career Journey</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="grid grid-cols-[200px_1fr] gap-8"
          >
            <div>
              <p className="text-gray-600">{exp.period}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <p className="text-gray-600 mb-2">{exp.company}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
