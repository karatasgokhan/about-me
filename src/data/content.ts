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
    title: "Optimizing Next.js Performance with SSR and ISR",
    date: "June 5, 2023",
    excerpt:
      "A deep dive into how server-side rendering (SSR) and incremental static regeneration (ISR) can enhance performance in Next.js applications.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mastering Jest and Cypress for Frontend Testing",
    date: "May 10, 2023",
    excerpt:
      "Explore advanced Jest and Cypress techniques for creating highly reliable and scalable frontend tests.",
    image:
      "https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Building Scalable UI Components with Styled-Components",
    date: "April 18, 2023",
    excerpt:
      "Learn how to create scalable, reusable, and theme-friendly UI components with Styled-Components in modern frontend development.",
    image:
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
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
