/** Language-independent facts. Source of truth: the LinkedIn profile. */

export const locales = ["en", "tr"] as const;
export type Locale = (typeof locales)[number];

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const person = {
  name: "Gökhan Karataş",
  /** Leave a link empty to hide it. */
  links: {
    email: "gokhankaratas650@gmail.com",
    linkedin: "https://www.linkedin.com/in/g%C3%B6khan-karata%C5%9F/",
    github: "https://github.com/karatasgokhan",
  },
} as const;

export type EntryId = "bsc" | "gulenayva" | "msc" | "atez" | "vodafone";

export type Entry = {
  id: EntryId;
  kind: "work" | "edu";
  /** "YYYY-MM" */
  start: string;
  /** "YYYY-MM", or null while ongoing */
  end: string | null;
  /** Show years only (the source gives no months) */
  yearsOnly?: boolean;
  stack: string[];
};

/** Chronological, so the chart reads as a staircase. */
export const entries: Entry[] = [
  { id: "bsc", kind: "edu", start: "2014-09", end: "2018-06", yearsOnly: true, stack: [] },
  {
    id: "gulenayva",
    kind: "work",
    start: "2018-05",
    end: "2021-02",
    stack: ["HTML", "CSS", "Sass", "JavaScript", "React", "Redux"],
  },
  { id: "msc", kind: "edu", start: "2020-09", end: "2023-06", yearsOnly: true, stack: [] },
  {
    id: "atez",
    kind: "work",
    start: "2021-02",
    end: "2022-09",
    stack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Ant Design",
      "Carbon",
      "Jest",
      "Cypress",
      "Puppeteer",
    ],
  },
  {
    id: "vodafone",
    kind: "work",
    start: "2022-09",
    end: null,
    stack: ["React", "Next.js", "SSR", "NestJS", "styled-components", "Jest", "REST APIs"],
  },
];

export const careerStart = "2018-05";
export const axisStartYear = 2014;
