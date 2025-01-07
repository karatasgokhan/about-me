export interface WorkExperience {
  title: string;
  company: string;
  date: string;
  description: string;
  logo: string;
}

export interface Article {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content?: string;
}

export interface Source {
  name: string;
  icon: string;
  description: string;
  link: string;
}

export interface TravelPhoto {
  src: string;
  alt: string;
  location: string;
  description?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image?: string;
}

export interface TravelLocation {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  photos: TravelPhoto[];
}

export interface Book {
  title: string;
  author: string;
  cover: string;
  description: string;
  genre: string;
  myPerspective?: string;
  personalNotes?: {
    favoriteQuotes?: {
      quote: string;
      page?: number;
      context?: string;
    }[];
  };
}
