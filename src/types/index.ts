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
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}
