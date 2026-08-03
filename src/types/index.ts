export type SiteConfig = {
  name: string;
  alias?: string;
  url: string;
  title: string;
  role: string;
  bio: string;
  email: string;
  location: string;
  availability: boolean;
  availabilityText: string;
  social: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images?: string[];
  category: string;
  technologies: string[];
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  year?: number;
  client?: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: string;
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export type Experience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
};
