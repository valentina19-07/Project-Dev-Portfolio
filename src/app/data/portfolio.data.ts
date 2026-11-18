import { Profile, Project } from '../models/portfolio.model';

export const PROFILE: Profile = {
  fullName: 'Juan Fernando Vargas',
  role: 'Estudiante de Ingeniería de Software',
  summary:
    'Estudiante de ingeniería apasionado por el desarrollo web, la arquitectura de software y la automatización de despliegues con CI/CD.',
  skills: [
    'Trabajo en equipo',
    'Resolución de problemas',
    'Git y GitHub',
    'Pruebas unitarias',
    'CI/CD',
  ],
  languages: ['TypeScript', 'JavaScript', 'Java', 'Python', 'SQL'],
  technologies: [
    'Angular',
    'HTML5',
    'CSS3',
    'GitHub Actions',
    'GitHub Pages',
    'Node.js',
  ],
  github: 'https://github.com/valentina19-07/Project-Dev-Portfolio',
  email: 'juan.vargas03@uceva.edu.co',
};

export const PROFILE_VALEN: Profile = {
  fullName: 'Valentina Gonzales Mejia',
  role: 'Estudiante de Ingeniería de Software',
  summary:
    'Estudiante de ingeniería apasionada por el desarrollo web, la arquitectura de software y la automatización de despliegues con CI/CD.',
  skills: [
    'Trabajo en equipo',
    'Resolución de problemas',
    'Git y GitHub',
    'Pruebas unitarias',
    'CI/CD',
  ],
  languages: ['TypeScript', 'JavaScript', 'Java', 'Python', 'SQL'],
  technologies: [
    'Angular',
    'HTML5',
    'CSS3',
    'GitHub Actions',
    'GitHub Pages',
    'Node.js',
  ],
  github: 'https://github.com/valentina19-07',
  email: 'valentina.gonzalez06@uceva.edu.co',
};

export const PROFILES: Profile[] = [PROFILE_VALEN, PROFILE];

const pendingProjectMessage =
  'La información real de este proyecto se agregará cuando esté disponible.';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Dev Portfolio',
    description:
      'Portafolio digital que funciona como catálogo central de los proyectos del curso.',
    technologies: ['Angular', 'TypeScript', 'CSS', 'GitHub Actions'],
    features: [
      'Perfil profesional',
      'Catálogo de proyectos',
      'Despliegue automático en GitHub Pages',
    ],
    repoUrl:
      'https://github.com/valentina19-07/Project-Dev-Portfolio',
    demoUrl:
      'https://valentina19-07.github.io/Project-Dev-Portfolio/',
  },
  {
    id: 2,
    name: 'Proyecto 2 (pendiente de datos)',
    description: pendingProjectMessage,
    technologies: [],
    features: [],
    repoUrl: '',
    demoUrl: '',
  },
  {
    id: 3,
    name: 'Proyecto 3 (pendiente de datos)',
    description: pendingProjectMessage,
    technologies: [],
    features: [],
    repoUrl: '',
    demoUrl: '',
  },
  {
    id: 4,
    name: 'Proyecto 4 (pendiente de datos)',
    description: pendingProjectMessage,
    technologies: [],
    features: [],
    repoUrl: '',
    demoUrl: '',
  },
  {
    id: 5,
    name: 'Proyecto 5 (pendiente de datos)',
    description: pendingProjectMessage,
    technologies: [],
    features: [],
    repoUrl: '',
    demoUrl: '',
  },
];
