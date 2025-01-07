"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "2022/09 - Present",
    role: "Senior Frontend Developer",
    company: "Vodafone via Kafein Technology Solutions",
    description:
      "Leading the transition of a large-scale project from Angular to React to enhance performance and user experience. Spearheaded the development of a new Next.js project using Vodafone's UI framework, implementing SSR and optimizing for core web vitals. Mentored junior developers and conducted code reviews to ensure high code quality and adherence to best practices.",
  },
  {
    period: "2021/02 - 2022/09",
    role: "Frontend Developer",
    company: "A&Z Yazılım Teknolojileri A.Ş.",
    description:
      "Developed scalable internal web applications using Next.js, PuppeteerJS, TypeScript, and Redux Toolkit. Implemented i18n for multilingual support, improving the accessibility of applications for international users. Collaborated with the UX team to implement responsive designs and ensure cross-browser compatibility. Introduced and implemented automated testing practices, significantly reducing bug occurrences in production.",
  },
  {
    period: "2019/09 - 2021/02",
    role: "Junior Frontend Developer",
    company: "Güneydoğu İnteraktif Medya Ajansı",
    description:
      "Built responsive and visually appealing user interfaces using Sass, Redux, HTML, CSS, and JavaScript. Ensured cross-browser compatibility and optimized performance, resulting in a 30% improvement in page load times. Worked closely with the design team to implement pixel-perfect designs and smooth animations. Assisted in the migration of legacy jQuery codebase to modern React applications, improving maintainability and performance.",
  },
];

export function CareerSummary() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold text-center">Career Summary</h2>
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
