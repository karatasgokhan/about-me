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

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
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

export const favoriteBooks: Book[] = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    cover:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80",
    description:
      "A handbook of agile software craftsmanship that has helped countless developers write better code.",
    genre: "Software Development",
    subject: "Software Craftsmanship and Code Quality",
    myPerspective:
      "This book completely changed my approach to writing code. While some examples might be dated, the core principles about writing clean, maintainable code are timeless. It helped me understand that code is read far more often than it is written, and therefore readability should be a top priority.",
    dateRead: "2023-06-15",
    rating: 5,
    personalNotes: {
      favoriteQuotes: [
        {
          quote:
            "Clean code always looks like it was written by someone who cares.",
          page: 14,
        },
        {
          quote: "The only way to go fast is to go well.",
          context: "On the importance of maintaining code quality",
          page: 48,
        },
      ],
      keyTakeaways: [
        "Write small, focused functions that do one thing well",
        "Choose descriptive names that reveal intent",
        "Keep classes small and single-purpose",
        "Tests are as important as the code they test",
        "Code should read like well-written prose",
      ],
      personalThoughts:
        "This book challenged my assumptions about what constitutes 'good code'. While I initially focused on making code work, I now understand the importance of making it readable and maintainable. The author's emphasis on treating code as a craft rather than just a technical skill resonated deeply with me.",
      readingNotes:
        "Chapter 2 on meaningful names completely changed how I approach variable naming. The section about function organization helped me break down complex methods into simpler ones. The testing chapter introduced me to the concept of TDD, which I started practicing immediately. Found the case studies particularly helpful in seeing the principles applied to real code.",
    },
  },
  {
    title: "The Pragmatic Programmer",
    author: "David Thomas, Andrew Hunt",
    cover:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    description:
      "A guide to becoming a better programmer through practical examples and pragmatic advice.",
    genre: "Software Development",
    link: "https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052",
  },
  {
    title: "Design Patterns",
    author: "Erich Gamma et al.",
    cover:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=800&q=80",
    description:
      "The classic book on design patterns in software development, known as the 'Gang of Four' book.",
    genre: "Software Architecture",
    link: "https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612",
  },
  {
    title: "Refactoring",
    author: "Martin Fowler",
    cover:
      "https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&w=800&q=80",
    description:
      "A detailed guide to improving the design of existing code through refactoring techniques.",
    genre: "Software Development",
    link: "https://www.amazon.com/Refactoring-Improving-Design-Existing-Code/dp/0201485672",
  },
  {
    title: "Domain-Driven Design",
    author: "Eric Evans",
    cover:
      "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&w=800&q=80",
    description:
      "Tackling complexity in the heart of software by connecting the implementation to an evolving model.",
    genre: "Software Architecture",
    link: "https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215",
  },
  {
    title: "Test Driven Development",
    author: "Kent Beck",
    cover:
      "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?auto=format&fit=crop&w=800&q=80",
    description:
      "A comprehensive guide to writing better software through test-driven development practices.",
    genre: "Software Testing",
    link: "https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530",
  },
  {
    title: "The Clean Coder",
    author: "Robert C. Martin",
    cover:
      "https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&w=800&q=80",
    description:
      "A code of conduct for professional programmers, focusing on discipline, standards, and ethics.",
    genre: "Professional Development",
    link: "https://www.amazon.com/Clean-Coder-Conduct-Professional-Programmers/dp/0137081073",
  },
  {
    title: "Working Effectively with Legacy Code",
    author: "Michael Feathers",
    cover:
      "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&w=800&q=80",
    description:
      "Strategies and techniques for dealing with large, untested legacy code bases.",
    genre: "Software Development",
    link: "https://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052",
  },
  {
    title: "Patterns of Enterprise Application Architecture",
    author: "Martin Fowler",
    cover:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    description:
      "A comprehensive guide to enterprise software architecture patterns and practices.",
    genre: "Software Architecture",
    link: "https://www.amazon.com/Patterns-Enterprise-Application-Architecture-Martin/dp/0321127420",
  },
  {
    title: "Building Microservices",
    author: "Sam Newman",
    cover:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80",
    description:
      "Designing fine-grained systems and understanding the world of distributed architecture.",
    genre: "Software Architecture",
    link: "https://www.amazon.com/Building-Microservices-Designing-Fine-Grained-Systems/dp/1491950358",
  },
];

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "A modern portfolio website built with Next.js 14, featuring server components, dynamic routing, and smooth animations. Implements responsive design and accessibility best practices.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
    ],
    link: "https://github.com/yourusername/portfolio",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "E-commerce Dashboard",
    description:
      "A comprehensive admin dashboard for managing online stores. Features include real-time analytics, inventory management, and order processing with payment integration.",
    technologies: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Docker",
    ],
    link: "https://github.com/yourusername/ecommerce-dashboard",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI Task Manager",
    description:
      "An intelligent task management application that uses AI to prioritize and categorize tasks. Includes natural language processing for task creation and smart scheduling.",
    technologies: [
      "Vue.js",
      "Python",
      "FastAPI",
      "TensorFlow",
      "PostgreSQL",
      "Redis",
    ],
    link: "https://github.com/yourusername/ai-task-manager",
    image:
      "https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Real-time Chat Platform",
    description:
      "A scalable chat application supporting multiple rooms, file sharing, and video calls. Implements WebSocket for real-time communication and WebRTC for video features.",
    technologies: [
      "React",
      "Socket.io",
      "WebRTC",
      "Express",
      "MongoDB",
      "AWS S3",
    ],
    link: "https://github.com/yourusername/chat-platform",
    image:
      "https://images.unsplash.com/photo-1461532257246-777de18cd58b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "DevOps Pipeline Tool",
    description:
      "A CI/CD pipeline visualization and management tool. Helps teams monitor deployments, track build status, and manage infrastructure configurations.",
    technologies: [
      "Angular",
      "TypeScript",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "GraphQL",
    ],
    link: "https://github.com/yourusername/devops-pipeline",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mobile Fitness App",
    description:
      "A cross-platform fitness application with workout tracking, meal planning, and progress visualization. Includes social features and integration with fitness devices.",
    technologies: [
      "React Native",
      "Redux",
      "Node.js",
      "Firebase",
      "GraphQL",
      "D3.js",
    ],
    link: "https://github.com/yourusername/fitness-app",
    image:
      "https://images.unsplash.com/photo-1461773518188-b3e86f98242f?auto=format&fit=crop&w=800&q=80",
  },
];
