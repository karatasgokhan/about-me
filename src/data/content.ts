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
  {
    name: "React Newsletter",
    icon: "⚛️",
    description:
      "Weekly React news, articles, and tips covering the latest in React development.",
    link: "https://reactnewsletter.com",
  },
  {
    name: "Frontend Focus",
    icon: "🎯",
    description:
      "A weekly newsletter with the latest frontend news, articles, and tutorials.",
    link: "https://frontendfoc.us",
  },
  {
    name: "Web.dev",
    icon: "🌐",
    description:
      "Guidance and updates from Google's web platform team on modern web development.",
    link: "https://web.dev",
  },
  {
    name: "Next.js Blog",
    icon: "▲",
    description:
      "Official blog covering Next.js updates, features, and best practices.",
    link: "https://nextjs.org/blog",
  },
  {
    name: "TypeScript Weekly",
    icon: "📘",
    description:
      "Weekly newsletter featuring TypeScript news, tips, and advanced techniques.",
    link: "https://typescript-weekly.com",
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

export const travelLocations: TravelLocation[] = [
  {
    id: "paris-france",
    name: "Paris, France",
    description:
      "The City of Light captivates with its elegant architecture, world-renowned cuisine, and timeless charm. From the iconic Eiffel Tower to the charming streets of Montmartre, every corner tells a story of art, history, and romance.",
    coverImage:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
        alt: "Eiffel Tower at sunset",
        location: "Eiffel Tower",
        description:
          "The iconic symbol of Paris, especially beautiful during sunset",
      },
      {
        src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
        alt: "Champs-Élysées",
        location: "Champs-Élysées",
        description:
          "The most famous avenue in Paris, lined with luxury shops and cafes",
      },
      {
        src: "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?auto=format&fit=crop&w=800&q=80",
        alt: "Notre-Dame Cathedral",
        location: "Notre-Dame",
        description:
          "The historic Gothic cathedral, a masterpiece of French architecture",
      },
      {
        src: "https://images.unsplash.com/photo-1581262208435-41726149a759?auto=format&fit=crop&w=800&q=80",
        alt: "Louvre Museum",
        location: "The Louvre",
        description: "World's largest art museum, home to the Mona Lisa",
      },
      {
        src: "https://images.unsplash.com/photo-1551887196-72e32bfc7bf3?auto=format&fit=crop&w=800&q=80",
        alt: "Montmartre",
        location: "Montmartre",
        description:
          "Artistic neighborhood with the stunning Sacré-Cœur Basilica",
      },
      {
        src: "https://images.unsplash.com/photo-1597910037310-7dd8ddb93e24?auto=format&fit=crop&w=800&q=80",
        alt: "Palace of Versailles",
        location: "Versailles",
        description: "The opulent royal château and gardens",
      },
      {
        src: "https://images.unsplash.com/photo-1511739172509-0e5da94c7726?auto=format&fit=crop&w=800&q=80",
        alt: "Arc de Triomphe",
        location: "Arc de Triomphe",
        description: "Historic monument honoring those who fought for France",
      },
      {
        src: "https://images.unsplash.com/photo-1574857035028-5a91e3494469?auto=format&fit=crop&w=800&q=80",
        alt: "Seine River",
        location: "Seine River",
        description: "The heart of Paris, perfect for romantic boat cruises",
      },
      {
        src: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&w=800&q=80",
        alt: "Palais Garnier",
        location: "Opera House",
        description:
          "The magnificent Paris Opera House, inspiration for Phantom of the Opera",
      },
      {
        src: "https://images.unsplash.com/photo-1590928536252-138bacdb83ed?auto=format&fit=crop&w=800&q=80",
        alt: "Luxembourg Gardens",
        location: "Luxembourg Gardens",
        description:
          "Beautiful palace gardens perfect for a Parisian afternoon",
      },
    ],
  },
  {
    id: "swiss-alps",
    name: "Swiss Alps",
    description:
      "A majestic mountain range offering breathtaking views, world-class skiing, and charming alpine villages. The Swiss Alps combine natural beauty with luxury and adventure.",
    coverImage:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&w=800&q=80",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&w=800&q=80",
        alt: "Mountain view",
        location: "Swiss Alps",
        description: "Panoramic view of snow-capped peaks",
      },
    ],
  },
  {
    id: "bali-indonesia",
    name: "Bali, Indonesia",
    description:
      "A tropical paradise that blends spiritual tranquility with stunning natural beauty. From pristine beaches to ancient temples, Bali offers a unique cultural experience.",
    coverImage:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
        alt: "Beach sunset",
        location: "Bali",
        description: "Spectacular sunset view over the Indian Ocean",
      },
    ],
  },
  {
    id: "tokyo-japan",
    name: "Tokyo, Japan",
    description:
      "A city where ultra-modern technology meets ancient traditions. Tokyo's vibrant culture, innovative cuisine, and fascinating contrasts create an unforgettable urban experience.",
    coverImage:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
        alt: "Tokyo skyline",
        location: "Tokyo",
        description: "Modern Tokyo skyline at night",
      },
    ],
  },
  {
    id: "nairobi-kenya",
    name: "Nairobi, Kenya",
    description:
      "The gateway to Africa's wildlife wonders. Nairobi combines urban sophistication with incredible natural experiences and opportunities to see amazing wildlife.",
    coverImage:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
        alt: "Safari animals",
        location: "Nairobi",
        description: "Wildlife in their natural habitat",
      },
    ],
  },
  {
    id: "reykjavik-iceland",
    name: "Reykjavik, Iceland",
    description:
      "A land of fire and ice, where natural wonders abound. From the Northern Lights to geothermal springs, Iceland offers otherworldly experiences.",
    coverImage:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
        alt: "Northern Lights",
        location: "Reykjavik",
        description: "The magical Northern Lights display",
      },
    ],
  },
  {
    id: "rome-italy",
    name: "Rome, Italy",
    description:
      "The Eternal City, where ancient history meets modern life. Rome's architecture, art, and cuisine create an immersive journey through time.",
    coverImage:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
        alt: "Colosseum",
        location: "Rome",
        description: "The iconic Colosseum at sunset",
      },
    ],
  },
  {
    id: "queensland-australia",
    name: "Queensland, Australia",
    description:
      "Home to the Great Barrier Reef and stunning coastal landscapes. Queensland offers unique marine life experiences and beautiful tropical settings.",
    coverImage:
      "https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?auto=format&fit=crop&w=800&q=80",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?auto=format&fit=crop&w=800&q=80",
        alt: "Great Barrier Reef",
        location: "Queensland",
        description: "The vibrant marine life of the Great Barrier Reef",
      },
    ],
  },
];
