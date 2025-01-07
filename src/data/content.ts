// Type definitions
interface WorkExperience {
  title: string;
  company: string;
  date: string;
  description: string;
  logo: string;
}

interface Article {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content?: string;
}

interface Source {
  name: string;
  icon: string;
  description: string;
  link: string;
}

interface TripPhoto {
  src: string;
  alt: string;
  location: string;
}

export const workExperience: WorkExperience[] = [
  {
    title: "Frontend Developer",
    company: "Vodafone via Kafein Technology Solutions",
    date: "2022/09 – Present",
    description:
      "Leading the transition of a large-scale project from Angular to React to enhance performance and user experience. Spearheaded the development of a new Next.js project using Vodafone’s UI framework. Implemented SSR to optimize loading speeds and responsiveness. Focused on performance improvements using Styled-Components. Wrote comprehensive unit tests using Jest. Collaborated closely with backend teams to ensure smooth API integration.",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=VOD",
  },
  {
    title: "Frontend Developer",
    company: "Atez Yazılım Teknolojileri A.Ş.",
    date: "2021/02 – 2022/09",
    description:
      "Developed scalable internal web applications using Next.js, Puppeteer, TypeScript, and Redux Toolkit. Implemented i18n for multilingual support. Created modern UI components with Tailwind CSS and Carbon Design System. Automated UI tests using Jest and Cypress to enhance deployment efficiency and reduce production errors.",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=ATEZ",
  },
  {
    title: "Frontend Developer",
    company: "Gülenayva İnteraktif Medya Ajansı",
    date: "2019/09 – 2021/02",
    description:
      "Built responsive and visually appealing user interfaces using Sass, Redux, HTML, CSS, and JavaScript. Ensured cross-browser compatibility and optimized performance. Improved SEO by implementing lazy loading techniques and WebP image formats in React applications.",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=GUL",
  },
];

export const articles: Article[] = [
  {
    title: "Building Modern Web Applications with Next.js",
    date: "2024-01-05",
    excerpt:
      "A comprehensive guide to building scalable applications using Next.js and React",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    content: `
      // Add your full article content here
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua...
    `,
  },
  {
    title: "State Management in React: A Deep Dive",
    date: "2023-12-15",
    excerpt:
      "Exploring different state management solutions in React applications",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    content: `
      // Add your full article content here
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua...
    `,
  },
  {
    title: "Mastering TypeScript in Frontend Development",
    date: "2023-12-01",
    excerpt:
      "Best practices and advanced techniques for TypeScript in frontend projects",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80",
    content: `
      // Add your full article content here
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua...
    `,
  },
  {
    title: "The Power of Tailwind CSS in Modern Web Design",
    date: "2023-11-20",
    excerpt:
      "How Tailwind CSS revolutionizes the way we style web applications",
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&q=80",
    content: `
      // Add your full article content here
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua...
    `,
  },
  {
    title: "Optimizing Performance in React Applications",
    date: "2023-11-10",
    excerpt: "Practical strategies for improving React application performance",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    content: `
      // Add your full article content here
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua...
    `,
  },
  {
    title: "Building Accessible Web Applications",
    date: "2023-11-01",
    excerpt: "A guide to implementing web accessibility in modern applications",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    content: `
      // Add your full article content here
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua...
    `,
  },
];

export const sources: Source[] = [
  {
    name: "CSS-Tricks",
    icon: "📚",
    description:
      "Tips, Tricks, and Techniques on using CSS, animations, and frontend performance optimizations.",
    link: "https://css-tricks.com",
  },
  {
    name: "Smashing Magazine",
    icon: "🔨",
    description:
      "High-quality articles on UI/UX, design patterns, and frontend development.",
    link: "https://www.smashingmagazine.com",
  },
  {
    name: "Dev.to",
    icon: "💻",
    description:
      "A constructive and inclusive social network for software developers.",
    link: "https://dev.to",
  },
  {
    name: "Testing JavaScript by Kent C. Dodds",
    icon: "📝",
    description:
      "An advanced guide to JavaScript testing with Jest, Cypress, and RTL.",
    link: "https://testingjavascript.com",
  },
  {
    name: "JavaScript Weekly",
    icon: "📅",
    description:
      "A newsletter covering the latest news and updates in the JavaScript ecosystem.",
    link: "https://javascriptweekly.com",
  },
];

export const tripPhotos: TripPhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
    alt: "Eiffel Tower",
    location: "Paris, France",
  },
  {
    src: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&w=800&q=80",
    alt: "Mountain view",
    location: "Swiss Alps",
  },
  {
    src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    alt: "Beach sunset",
    location: "Bali, Indonesia",
  },
  {
    src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
    alt: "Tokyo skyline",
    location: "Tokyo, Japan",
  },
  {
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    alt: "Safari animals",
    location: "Nairobi, Kenya",
  },
  {
    src: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
    alt: "Northern Lights",
    location: "Reykjavik, Iceland",
  },
  {
    src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
    alt: "Colosseum",
    location: "Rome, Italy",
  },
  {
    src: "https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?auto=format&fit=crop&w=800&q=80",
    alt: "Great Barrier Reef",
    location: "Queensland, Australia",
  },
];
