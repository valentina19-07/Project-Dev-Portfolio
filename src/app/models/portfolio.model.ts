export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  features: string[];
  repoUrl: string;
  demoUrl: string;
}

export interface Profile {
  fullName: string;
  role: string;
  summary: string;
  skills: string[];
  languages: string[];
  technologies: string[];
  github: string;
  email: string;
}
