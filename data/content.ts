// ============================================================================
// ARCHIVO DE CONFIGURACIÓN CENTRAL DEL PORTAFOLIO
// CENTRAL PORTFOLIO CONFIGURATION FILE
// ----------------------------------------------------------------------------
// Edita únicamente este archivo para actualizar la información del sitio.
// Only edit this file to update the site's information.
// No es necesario tocar los componentes.
// ============================================================================

export type Lang = "es" | "en";

export type SkillItem = { name: string; level: number };
export type SkillCategory = {
  key: string;
  label: { es: string; en: string };
  items: SkillItem[];
};

export type Project = {
  id: string;
  name: { es: string; en: string };
  image: string;
  tech: string[];
  categories: ("web" | "mobile" | "backend" | "frontend")[];
  demoUrl?: string;
  githubUrl?: string;
  description: { es: string; en: string };
  featured?: boolean;

  // ------------------------------------------------------------------------
  // CAMPOS OPCIONALES PARA EL MODAL DE DETALLE
  // OPTIONAL FIELDS FOR THE DETAIL MODAL
  // Si no los llenas, el modal simplemente no muestra esa sección.
  // If you don't fill them, the modal just won't show that section.
  // ------------------------------------------------------------------------

  // Descripción larga y más completa que se muestra solo en el modal.
  // Longer, more complete description shown only in the modal.
  longDescription?: { es: string; en: string };

  // Imágenes adicionales para la galería (además de "image", que es la principal).
  // Additional images for the gallery (besides "image", which is the main one).
  gallery?: string[];

  // Video del proyecto. Puede ser un .mp4 local (ej: "/videos/dealva-demo.mp4")
  // o un link de YouTube embebido (ej: "https://www.youtube.com/embed/XXXXXXXXXXX").
  // Project video. Can be a local .mp4 (e.g. "/videos/dealva-demo.mp4")
  // or an embedded YouTube link (e.g. "https://www.youtube.com/embed/XXXXXXXXXXX").
  video?: string;

  // Lista de características / aportes destacados del proyecto.
  // List of highlighted features / contributions of the project.
  highlights?: { es: string[]; en: string[] };

  // Tu rol específico en el proyecto (opcional, útil si fue en equipo).
  // Your specific role in the project (optional, useful if it was a team project).
  role?: { es: string; en: string };

  // Duración o periodo del proyecto (ej: "3 meses", "Ene - Mar 2026").
  // Project duration or period (e.g. "3 months", "Jan - Mar 2026").
  duration?: string;

  // Documentos de evidencia: PDFs, reportes, capturas de Postman, diagramas, etc.
  // Evidence documents: PDFs, reports, Postman screenshots, diagrams, etc.
  // "url" puede ser una ruta local (ej: "/docs/dealva-reporte.pdf") o un link externo.
  documents?: { label: { es: string; en: string }; url: string }[];
};

export type EducationItem = {
  id: string;
  institution: string;
  degree: { es: string; en: string };
  period: { es: string; en: string };
  // Nota opcional (ej. prácticas profesionales realizadas durante este periodo).
  // Optional note (e.g. professional practicum completed during this period).
  description?: { es: string; en: string };
};

export type Certification = {
  id: string;
  title: { es: string; en: string };
  issuer: string;
  date: string;
  type: "certification" | "hackathon" | "award" | "course" | "degree";
  // Ruta al archivo real (PDF o imagen) del certificado/título. Opcional:
  // si se define, la tarjeta se puede abrir para ver/descargar el documento.
  fileUrl?: string;
};

// ---------------------------------------------------------------------------
// DOCUMENTOS DE TRABAJO / WORK DOCUMENTS
// ----------------------------------------------------------------------------
// Ejercicios, tareas, prácticas de código, etc. Cada documento tiene una
// categoría (categoryKey) que debe coincidir con el "key" definido en
// workDocumentCategories. Agrega, quita o renombra categorías libremente:
// el filtro de la sección se arma solo con base en lo que uses aquí.
// ---------------------------------------------------------------------------

// Tipo de archivo, usado para elegir el ícono correcto en la tarjeta.
export type WorkDocumentFileType =
  | "pdf"
  | "doc"
  | "zip"
  | "code"
  | "image"
  | "other";

export type WorkDocumentCategory = {
  key: string;
  label: { es: string; en: string };
};

export type WorkDocument = {
  id: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  categoryKey: string; // debe coincidir con el "key" de una WorkDocumentCategory
  fileUrl: string;
  fileType: WorkDocumentFileType;
  date?: string; // ej: "2026" o "Mar 2026"
  tech?: string[];
};

// ---------------------------------------------------------------------------
// DATOS PERSONALES / PERSONAL DATA
// ---------------------------------------------------------------------------
export const personal = {
  name: "Nairda Tonantzin Morales Del Real",
  initials: "TM",
  role: {
    es: "Ingeniera en Desarrollo y Gestión de Software",
    en: "Software Development and Management Engineer",
  },
  tagline: {
    es: "Construyo aplicaciones web y móviles sólidas, desde la arquitectura de base de datos hasta interfaces interactivas.",
    en: "I build robust web and mobile applications — from database architecture down to interactive interfaces.",
  },
  location: {
    es: "Escuinapa de Hidalgo, Sinaloa, México",
    en: "Escuinapa de Hidalgo, Sinaloa, Mexico",
  },
  email: "tony4xt@gmail.com",
  phoneDisplay: "+52 695 951 3289",
  whatsappNumber: "526959513289",
  resumeUrl: "/resume.pdf",
  github: "https://github.com/TonyM-hk",
  linkedin: "https://linkedin.com/in/tonym-hk", // Enlace adaptado a tu username general
  availability: {
    es: "Disponible para residencias profesionales y proyectos",
    en: "Available for professional internships and projects",
  },
  about: {
    es: [
      "Soy estudiante de Ingeniería en Desarrollo y Gestión de Software en la Universidad Tecnológica de Escuinapa. Me especializo en la construcción de aplicaciones completas, balanceando un backend estructurado con interfaces de usuario pulidas.",
      "Cuento con experiencia liderando equipos académicos como Project Manager, coordinando desde el modelado de datos relacionales hasta el prototipado y diseño de experiencia de usuario.",
      "Me apasiona el análisis de datos para fundamentar decisiones de software, optimizar consultas de bases de datos y resolver problemas lógicos complejos a través del código.",
    ],
    en: [
      "I am a Software Development and Management Engineering student at the Universidad Tecnológica de Escuinapa. I specialize in building end-to-end applications, balancing structured backend architectures with polished user interfaces.",
      "I have experience leading academic teams as a Project Manager, coordinating everything from relational data modeling to UI/UX prototyping.",
      "I am passionate about data analysis to back up software decisions, optimizing database queries, and solving complex logical challenges through clean code.",
    ],
  },
  objectives: {
    es: "Buscando integrarme en un equipo de ingeniería como Desarrolladora Full Stack, aportando valor en el diseño de sistemas y bases de datos relacionales.",
    en: "Looking to join an engineering team as a Full Stack Developer, bringing value to system design and relational database management.",
  },
  interests: {
    es: [
      "Desarrollo Full Stack",
      "Diseño UI/UX",
      "Análisis de Datos",
      "Gestión de Proyectos TI",
      "Bases de Datos",
    ],
    en: [
      "Full Stack Development",
      "UI/UX Design",
      "Data Analysis",
      "IT Project Management",
      "Databases",
    ],
  },
};

// ---------------------------------------------------------------------------
// HABILIDADES / SKILLS
// ---------------------------------------------------------------------------
export const skillCategories: SkillCategory[] = [
  {
    key: "frontend",
    label: { es: "Frontend & Diseño", en: "Frontend & Design" },
    items: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Flutter", level: 75 },
      { name: "Figma", level: 85 },
    ],
  },
  {
    key: "backend",
    label: { es: "Backend & Análisis", en: "Backend & Analysis" },
    items: [
      { name: "PHP", level: 85 },
      { name: "Python", level: 80 },
      { name: "Pandas / NumPy", level: 75 },
      { name: "Matplotlib / Seaborn", level: 75 },
    ],
  },
  {
    key: "database",
    label: { es: "Bases de datos", en: "Databases" },
    items: [
      { name: "MySQL", level: 88 },
      { name: "PostgreSQL", level: 82 },
    ],
  },
  {
    key: "tools",
    label: { es: "Herramientas", en: "Tools" },
    items: [
      { name: "Git", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
      { name: "GitHub", level: 70 },
    ],
  },
];

// ---------------------------------------------------------------------------
// PROYECTOS / PROJECTS
// ---------------------------------------------------------------------------
export const projects: Project[] = [
  {
    id: "dealva-spa",
    name: {
      es: "DeAlva Spa — Gestión Administrativa",
      en: "DeAlva Spa Management App",
    },
    image: "/images/projects/spa-1.png",
    tech: ["Next", "MySQL", "JavaScript", "React"],
    categories: ["web", "backend", "frontend"],
    demoUrl: "https://example.com/dealva",
    githubUrl: "https://github.com/TonyM-hk/dealva-spa",
    featured: true,
    description: {
      es: "Aplicación web de gestión administrativa desarrollada para Evoliss México, diseñada para optimizar los flujos operativos, el control de citas y métricas internas.",
      en: "Web management application developed for Evoliss México, designed to optimize operational workflows, appointment scheduling, and internal metrics.",
    },

    // --- Contenido extendido para el modal (edita/reemplaza a tu gusto) ---
    role: {
      es: "Project Manager & Desarrolladora Full Stack",
      en: "Project Manager & Full Stack Developer",
    },
    duration: "2026",
    longDescription: {
      es: "DeAlva Spa es una plataforma administrativa completa pensada para digitalizar la operación diaria de un spa: desde el registro de citas y clientes hasta el control de servicios y métricas de rendimiento. Lideré al equipo como Project Manager, coordinando cronogramas Gantt y el modelado relacional de la base de datos en MySQL, mientras desarrollaba la interfaz con React/Next.js y los módulos clave del backend.",
      en: "DeAlva Spa is a complete administrative platform designed to digitize a spa's daily operations: from appointment and client registration to service control and performance metrics. I led the team as Project Manager, coordinating Gantt schedules and the relational database modeling in MySQL, while building the interface with React/Next.js and key backend modules.",
    },
    highlights: {
      es: [
        "Diseño de base de datos relacional en MySQL con más de 10 entidades interconectadas",
        "Sistema de agendamiento de citas con validación de disponibilidad en tiempo real",
        "Panel administrativo con métricas de ingresos y servicios más solicitados",
        "Coordinación de equipo de 4 personas con metodología ágil y cronograma Gantt",
      ],
      en: [
        "Relational database design in MySQL with 10+ interconnected entities",
        "Appointment scheduling system with real-time availability validation",
        "Admin dashboard with revenue metrics and most-requested services",
        "Coordinated a 4-person team using agile methodology and a Gantt schedule",
      ],
    },
    gallery: [
      "/images/projects/spa-2.png",
      "/images/projects/spa-3.png",
      "/images/projects/spa-4.png",
      "/images/projects/spa-5.png",
    ],
    video: "/videos/spa-demo.mp4",
    documents: [],
  },

  {
    id: "puzzle-escape",
    name: { es: "Puzzle Escape", en: "Puzzle Escape" },
    image: "/images/GAME1.png",
    tech: ["PHP", "JS", "Google"],
    categories: ["web", "frontend", "backend"],
    demoUrl: "https://example.com/puzzle",
    githubUrl: "https://github.com/TonyM-hk/puzzle-escape",
    featured: true,
    description: {
      es: "Aplicación web interactiva que integra un sistema de autenticación seguro mediante Google Sign-In para gestionar y almacenar el progreso de los usuarios.",
      en: "Interactive web application featuring a secure Google Sign-In authentication flow to manage and track user game progress.",
    },

    role: {
      es: "Desarrolladora Full Stack",
      en: "Full Stack Developer",
    },
    longDescription: {
      es: "Puzzle Escape es un juego web de acertijos con progresión guardada por usuario. Implementé la autenticación con Google Sign-In para identificar a cada jugador y persistir su avance entre sesiones, junto con una arquitectura de componentes en PHP pensada para escalar con nuevos niveles fácilmente.",
      en: "Puzzle Escape is a web-based puzzle game with per-user saved progress. I implemented Google Sign-In authentication to identify each player and persist their progress across sessions, along with a PHP component architecture designed to easily scale with new levels.",
    },
    highlights: {
      es: [
        "Autenticación segura con Google Sign-In",
        "Persistencia de progreso del usuario entre sesiones",
        "Arquitectura de componentes reutilizable para agregar niveles fácilmente",
        "Animaciones e interacciones fluidas con Framer Motion",
      ],
      en: [
        "Secure authentication with Google Sign-In",
        "User progress persistence across sessions",
        "Reusable component architecture to easily add new levels",
        "Smooth animations and interactions with Framer Motion",
      ],
    },
    gallery: ["/images/GAME1.png", "/images/GAME2.png"],
    video: "/videos/game-demo.mp4",
    documents: [],
  },

  {
    id: "gastro-app",
    name: {
      es: "Gastronomía — App Móvil de Gastronomía",
      en: "Gastronomy — Gastronomy Mobile App",
    },
    image: "/images/projects/gastro-1.png",
    tech: ["Node", "React Native", "Mongo"],
    categories: ["mobile", "backend"],
    githubUrl: "https://github.com/TonyM-hk/gastro-app",
    featured: true,
    description: {
      es: "Aplicación móvil desarrollada para la gestión del equipamiento de la carrera de Gastronomía, permitiendo administrar y consultar el inventario de equipamiento mayor y menor mediante una interfaz intuitiva.",
      en: "Mobile application developed for managing the Gastronomy program's equipment inventory, allowing users to organize and browse major and minor equipment through an intuitive interface.",
    },
    role: {
      es: "Desarrolladora Full Stack Móvil",
      en: "Full Stack Mobile Developer",
    },
    longDescription: {
      es: "Equipamiento Gastronomía es una aplicación móvil desarrollada para facilitar la gestión y consulta del inventario de la carrera de Gastronomía. Diseñé la navegación y las pantallas principales priorizando una experiencia intuitiva, permitiendo clasificar, consultar y administrar el equipamiento mayor y menor de forma eficiente, manteniendo una interfaz moderna y consistente en toda la aplicación.",
      en: "Gastronomy Equipment is a mobile application developed to simplify the management and consultation of the Gastronomy program's inventory. I designed the navigation and main screens with an intuitive user experience in mind, allowing users to organize, browse, and manage major and minor equipment efficiently while maintaining a modern and consistent interface throughout the app.",
    },
    highlights: {
      es: [
        "Gestión de inventario de equipamiento mayor y menor",
        "Consulta de información detallada de cada equipo",
        "Interfaz intuitiva para administrar y organizar el inventario",
        "Base de datos NoSQL en MongoDB con API en Node.js",
      ],
      en: [
        "Management of major and minor equipment inventory",
        "Detailed information for each equipment item",
        "Intuitive interface for managing and organizing the inventory",
        "NoSQL database in MongoDB with a Node.js API",
      ],
    },
    gallery: ["/images/projects/gastro-2.png", "/images/projects/gastro-3.png"],
    documents: [
      {
        label: {
          es: "Diseño de base de datos (PDF)",
          en: "Database design (PDF)",
        },
        url: "/docs/database/diseno-bd.pdf",
      },
    ],
  },

  {
    id: "colegio-el-molino",
    name: {
      es: "Sistema Web de Control Escolar",
      en: "School Management Web System",
    },
    image: "/images/projects/colegio-1.png",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    categories: ["web", "frontend", "backend"],
    demoUrl: "https://example.com/colegio-el-molino",
    githubUrl: "https://github.com/TonyM-hk/colegio-el-molino",
    description: {
      es: "Sistema web para el control escolar que permite gestionar asistencias y tareas del alumnado, consultar el historial académico y visualizar un ranking de grados.",
      en: "Web-based school management system for tracking student attendance and assignments, viewing academic history, and displaying grade rankings.",
    },
    role: {
      es: "Desarrolladora Full Stack",
      en: "Full Stack Developer",
    },
    longDescription: {
      es: "Sistema web construido para modernizar el control escolar del Colegio El Molino, mi propia escuela de educación básica. Permite a los docentes registrar asistencias y tareas por grupo, a la administración consultar el historial académico de cada estudiante, y muestra un ranking de grados basado en desempeño, dando visibilidad rápida del rendimiento general de la institución. El backend en PHP y MySQL centraliza la información y evita el manejo de registros en papel.",
      en: "Web system built to modernize school administration at Colegio El Molino, my own elementary/middle school. It lets teachers log attendance and assignments per group, allows staff to look up each student's academic history, and displays a grade ranking based on performance, giving quick visibility into the institution's overall results. The PHP and MySQL backend centralizes the information and replaces paper-based record keeping.",
    },
    highlights: {
      es: [
        "Registro de asistencias y tareas por grupo",
        "Historial académico consultable por estudiante",
        "Ranking de grados según desempeño académico",
        "Base de datos relacional en MySQL para centralizar la información escolar",
      ],
      en: [
        "Attendance and assignment tracking per group",
        "Searchable academic history per student",
        "Grade ranking based on academic performance",
        "Relational database in MySQL to centralize school records",
      ],
    },
    gallery: [
      "/images/projects/colegio-2.png",
      "/images/projects/colegio-3.png",
      "/images/projects/colegio-4.png",
    ],
  },

  {
    id: "pagina-cursos",
    name: {
      es: "Plataforma de Cursos en Línea",
      en: "Online Courses Platform",
    },
    image: "/images/projects/cursos-1.png",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    categories: ["web", "frontend", "backend"],
    demoUrl: "https://example.com/pagina-cursos",
    githubUrl: "https://github.com/TonyM-hk/pagina-cursos",
    description: {
      es: "Página web de presentación de cursos en línea, con tarjetas de curso, categorías y llamadas a la acción para inscripción.",
      en: "Landing page for online courses, featuring course cards, categories, and enrollment calls to action.",
    },
    role: {
      es: "Desarrolladora Full Stack",
      en: "Full Stack Developer",
    },
    longDescription: {
      es: "Landing page para promocionar cursos en línea, organizada por categorías y con tarjetas que resumen contenido, duración y modalidad de cada curso. El formulario de inscripción se procesa con PHP, guardando el interés de cada visitante para dar seguimiento posterior. El diseño prioriza jerarquía visual clara y llamadas a la acción directas para maximizar la conversión.",
      en: "Landing page to promote online courses, organized by category, with cards summarizing each course's content, duration, and format. The enrollment form is processed with PHP, storing each visitor's interest for later follow-up. The design prioritizes clear visual hierarchy and direct calls to action to maximize conversion.",
    },
    highlights: {
      es: [
        "Catálogo de cursos organizado por categorías",
        "Formulario de inscripción procesado con PHP",
        "Diseño enfocado en conversión y llamadas a la acción claras",
      ],
      en: [
        "Course catalog organized by category",
        "Enrollment form processed with PHP",
        "Design focused on conversion and clear calls to action",
      ],
    },
  },

  {
    id: "portafolio-html",
    name: {
      es: "Portafolio Personal (HTML/CSS/JS)",
      en: "Personal Portfolio (HTML/CSS/JS)",
    },
    image: "/images/projects/portafolio-html-1.png",
    tech: ["HTML", "CSS", "JavaScript"],
    categories: ["web", "frontend"],
    demoUrl: "https://example.com/portafolio-html",
    githubUrl: "https://github.com/TonyM-hk/portafolio-html",
    description: {
      es: "Portafolio web desarrollado para recopilar y presentar los proyectos, prácticas y ejercicios realizados durante el cuarto cuatrimestre, mostrando la evidencia del trabajo académico y las habilidades adquiridas en el desarrollo de software.",
      en: "Web portfolio developed to showcase the projects, assignments, and exercises completed during the fourth semester, providing evidence of academic work and demonstrating software development skills.",
    },
    role: {
      es: "Desarrolladora Frontend",
      en: "Frontend Developer",
    },
    longDescription: {
      es: "Primera versión de mi portafolio, construida con HTML, CSS y JavaScript puro como proyecto integrador del cuarto cuatrimestre. Reúne en un solo lugar los ejercicios, prácticas y proyectos desarrollados durante ese periodo, sirviendo como evidencia tangible de mi progreso técnico antes de migrar a la versión actual construida con Next.js.",
      en: "First version of my portfolio, built with vanilla HTML, CSS, and JavaScript as an integrative project for my fourth semester. It brings together the exercises, assignments, and projects developed during that period, serving as tangible evidence of my technical progress before migrating to the current Next.js version.",
    },
    highlights: {
      es: [
        "Maquetación responsiva sin frameworks, solo HTML y CSS puro",
        "Interacciones y animaciones con JavaScript vanilla",
        "Compilación de evidencias del cuarto cuatrimestre en un solo sitio",
      ],
      en: [
        "Responsive layout with no frameworks, pure HTML and CSS",
        "Interactions and animations with vanilla JavaScript",
        "Compilation of fourth-semester coursework evidence in a single site",
      ],
    },
    gallery: [
      "/images/projects/portafolio-html-2.png",
      "/images/projects/portafolio-html-3.png",
      "/images/projects/portafolio-html-4.png",
    ],
    video: "/videos/portfolio-html-demo.mp4",
  },

  {
    id: "hello-kitty-site",
    name: {
      es: "Hello Kitty — Sitio Temático",
      en: "Hello Kitty — Themed Website",
    },
    image: "/images/projects/hello-kitty-1.png",
    tech: ["HTML", "CSS", "JavaScript"],
    categories: ["web", "frontend"],
    demoUrl: "https://example.com/hello-kitty",
    githubUrl: "https://github.com/TonyM-hk/hello-kitty-site",
    description: {
      es: "Sitio web temático de práctica enfocado en maquetación creativa, animaciones CSS y composición visual sobre una identidad de marca definida.",
      en: "Practice-themed website focused on creative layout, CSS animations, and visual composition around a defined brand identity.",
    },
    role: {
      es: "Desarrolladora Frontend",
      en: "Frontend Developer",
    },
    longDescription: {
      es: "Ejercicio de maquetación creativa inspirado en la identidad visual de Hello Kitty, pensado para practicar composición, paleta de color y animaciones CSS dentro de un tema definido. El objetivo fue explorar transiciones y microinteracciones que refuercen una identidad de marca coherente en cada sección del sitio.",
      en: "Creative layout exercise inspired by the Hello Kitty visual identity, designed to practice composition, color palette, and CSS animations within a defined theme. The goal was to explore transitions and microinteractions that reinforce a consistent brand identity across every section of the site.",
    },
    highlights: {
      es: [
        "Animaciones y transiciones CSS a lo largo de todo el sitio",
        "Composición visual coherente con una identidad de marca definida",
        "Maquetación responsiva adaptada a distintos tamaños de pantalla",
      ],
      en: [
        "CSS animations and transitions throughout the site",
        "Visual composition consistent with a defined brand identity",
        "Responsive layout adapted to different screen sizes",
      ],
    },
    gallery: [
      "/images/projects/hello-kitty-2.png",
      "/images/projects/hello-kitty-3.png",
    ],
    video: "/videos/hello-kitty-demo.mp4",
  },

  {
    id: "refugio-animal",
    name: { es: "Refugio Animal — Sitio Web", en: "Animal Shelter — Website" },
    image: "/images/projects/refugio-1.png",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    categories: ["web", "frontend", "backend"],
    demoUrl: "https://example.com/refugio-animal",
    githubUrl: "https://github.com/TonyM-hk/refugio-animal",
    description: {
      es: "Sitio web para un refugio de animales, con secciones para conocer mascotas disponibles para adopción, historias y formas de ayudar.",
      en: "Website for an animal shelter, with sections to meet pets available for adoption, stories, and ways to help.",
    },
    role: {
      es: "Desarrolladora Full Stack",
      en: "Full Stack Developer",
    },
    longDescription: {
      es: "Sitio web informativo para un refugio de animales, pensado para conectar a posibles adoptantes con las mascotas disponibles. Incluye fichas de cada mascota, historias de rescate y una sección de formas de ayudar (donaciones, voluntariado). El listado de mascotas se gestiona desde un backend ligero en PHP, facilitando actualizar altas y bajas sin tocar el código.",
      en: "Informational website for an animal shelter, designed to connect potential adopters with available pets. It includes a profile for each pet, rescue stories, and a section on ways to help (donations, volunteering). The pet listing is managed through a lightweight PHP backend, making it easy to add or remove pets without touching the code.",
    },
    highlights: {
      es: [
        "Fichas individuales de mascotas disponibles para adopción",
        "Sección de historias de rescate y formas de ayudar",
        "Listado de mascotas administrable desde un backend en PHP",
      ],
      en: [
        "Individual profile pages for pets available for adoption",
        "Rescue stories and ways-to-help section",
        "Pet listing manageable through a PHP backend",
      ],
    },
    gallery: [
      "/images/projects/refugio-2.png",
      "/images/projects/refugio-3.png",
    ],
    video: "/videos/refugio-demo.mp4",
  },

  {
    id: "nba-analysis",
    name: { es: "Análisis Estadístico NBA", en: "NBA Statistical Analysis" },
    image: "/images/GAME1.png",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "JupyterLab"],
    categories: ["backend"],
    demoUrl: "https://example.com/nba",
    githubUrl: "https://github.com/TonyM-hk/nba-data-analysis",
    description: {
      es: "Proyecto de ciencia de datos enfocado en la manipulación y análisis de dataframes históricos de la NBA para evaluar la evolución e incremento de los tiros de tres puntos.",
      en: "Data science project focused on manipulation and analysis of historical NBA dataframes to evaluate the evolution and increase of three-point field goals.",
    },

    role: {
      es: "Analista de Datos",
      en: "Data Analyst",
    },
    longDescription: {
      es: "Este proyecto analiza datasets históricos de la NBA para identificar tendencias en el uso del tiro de tres puntos a lo largo de las temporadas. Utilicé Pandas para la limpieza y transformación de los datos, y Matplotlib/Seaborn para construir visualizaciones que muestran la evolución del juego moderno hacia un mayor volumen de tiros de larga distancia.",
      en: "This project analyzes historical NBA datasets to identify trends in three-point shot usage across seasons. I used Pandas for data cleaning and transformation, and Matplotlib/Seaborn to build visualizations showing the modern game's evolution toward a higher volume of long-range shots.",
    },
    highlights: {
      es: [
        "Limpieza y transformación de datasets históricos con Pandas",
        "Visualizaciones comparativas por temporada con Matplotlib y Seaborn",
        "Análisis de correlación entre volumen de tiros de tres y resultados de equipo",
        "Documentación del proceso completo en JupyterLab",
      ],
      en: [
        "Historical dataset cleaning and transformation with Pandas",
        "Season-by-season comparative visualizations with Matplotlib and Seaborn",
        "Correlation analysis between three-point volume and team outcomes",
        "Fully documented process in JupyterLab",
      ],
    },
    gallery: ["/images/project-nba.svg"],
  },
];

// ---------------------------------------------------------------------------
// EDUCACIÓN / EDUCATION
// ---------------------------------------------------------------------------
export const education: EducationItem[] = [
  {
    id: "edu-1",
    institution: "Universidad Tecnológica de Escuinapa",
    degree: {
      es: "Ingeniería en Desarrollo y Gestión de Software",
      en: "B.Sc. in Software Development and Management Engineering",
    },
    period: { es: "2025 — Presente", en: "2025 — Present" },
  },
  {
    id: "edu-2",
    institution: "Universidad Tecnológica de Escuinapa",
    degree: {
      es: "Técnico Superior Universitario — Tecnologías de la Información, Área Desarrollo de Software Multiplataforma",
      en: "Associate Degree (TSU) — Information Technology, Multiplatform Software Development",
    },
    period: { es: "2023 — 2025", en: "2023 — 2025" },
    description: {
      es: "Prácticas profesionales para titulación en el Centro Internacional de Mazatlán: desarrollo de un módulo de punto de venta (POS) con CodeIgniter, PHP y SQLyog.",
      en: "Professional practicum for graduation at Centro Internacional de Mazatlán: developed a point-of-sale (POS) module with CodeIgniter, PHP, and SQLyog.",
    },
  },
  {
    id: "edu-3",
    institution: "CONALEP",
    degree: {
      es: "Profesional Técnico Bachiller en Informática",
      en: "Technical Baccalaureate — Computer Science",
    },
    period: { es: "2020 — 2023", en: "2020 — 2023" },
  },
  {
    id: "edu-4",
    institution: "Colegio El Molino",
    degree: {
      es: "Educación Primaria y Secundaria",
      en: "Elementary and Middle School",
    },
    period: { es: "2011 — 2020", en: "2011 — 2020" },
  },
];

export const courses: { es: string; en: string }[] = [
  { es: "Gestión de Proyectos de TI", en: "IT Project Management" },
  {
    es: "Modelado y Administración de Bases de Datos",
    en: "Database Modeling and Administration",
  },
  {
    es: "Análisis Científico de Datos con Python",
    en: "Scientific Data Analysis with Python",
  },
];

// Habilidades blandas / cognitivas desarrolladas a lo largo de tu formación.
// Soft / cognitive skills developed throughout your education.
// "icon" debe coincidir con una de las claves definidas en el componente Education.
export type SoftSkill = {
  icon: "puzzle" | "calculator" | "lightbulb" | "users" | "message" | "shuffle" | "sparkles" | "clock" | "search" | "rocket";
  title: { es: string; en: string };
  description: { es: string; en: string };
};

export const softSkills: SoftSkill[] = [
  {
    icon: "puzzle",
    title: { es: "Resolución de problemas", en: "Problem solving" },
    description: {
      es: "Encuentro soluciones prácticas ante obstáculos técnicos y lógicos.",
      en: "I find practical solutions to technical and logical obstacles.",
    },
  },
  {
    icon: "calculator",
    title: { es: "Pensamiento lógico-matemático", en: "Logical-mathematical thinking" },
    description: {
      es: "Analizo patrones y estructuro la lógica detrás de cada problema.",
      en: "I analyze patterns and structure the logic behind each problem.",
    },
  },
  {
    icon: "lightbulb",
    title: { es: "Pensamiento crítico", en: "Critical thinking" },
    description: {
      es: "Evalúo información y decisiones desde distintos ángulos.",
      en: "I evaluate information and decisions from multiple angles.",
    },
  },
  {
    icon: "users",
    title: { es: "Trabajo en equipo", en: "Teamwork" },
    description: {
      es: "Colaboro y coordino con otros para lograr un objetivo común.",
      en: "I collaborate and coordinate with others toward a shared goal.",
    },
  },
  {
    icon: "message",
    title: { es: "Comunicación efectiva", en: "Effective communication" },
    description: {
      es: "Explico ideas técnicas de forma clara a cualquier audiencia.",
      en: "I explain technical ideas clearly to any audience.",
    },
  },
  {
    icon: "shuffle",
    title: { es: "Adaptabilidad", en: "Adaptability" },
    description: {
      es: "Me ajusto rápido a nuevas herramientas, retos y contextos.",
      en: "I adapt quickly to new tools, challenges, and contexts.",
    },
  },
  {
    icon: "sparkles",
    title: { es: "Creatividad", en: "Creativity" },
    description: {
      es: "Propongo ideas originales para resolver problemas complejos.",
      en: "I come up with original ideas to solve complex problems.",
    },
  },
  {
    icon: "clock",
    title: { es: "Gestión del tiempo", en: "Time management" },
    description: {
      es: "Organizo prioridades para cumplir con los plazos establecidos.",
      en: "I organize priorities to meet established deadlines.",
    },
  },
  {
    icon: "search",
    title: { es: "Atención al detalle", en: "Attention to detail" },
    description: {
      es: "Detecto inconsistencias y errores antes de que escalen.",
      en: "I catch inconsistencies and errors before they escalate.",
    },
  },
  {
    icon: "rocket",
    title: { es: "Aprendizaje continuo", en: "Continuous learning" },
    description: {
      es: "Busco constantemente nuevas tecnologías y mejores prácticas.",
      en: "I constantly seek out new technologies and best practices.",
    },
  },
];

// ---------------------------------------------------------------------------
// LOGROS / ACHIEVEMENTS
// ---------------------------------------------------------------------------
export const achievements: Certification[] = [
  // --- Títulos ---
  {
    id: "c1",
    title: {
      es: "Técnico Superior Universitario — Tecnologías de la Información, Desarrollo de Software Multiplataforma",
      en: "Associate Degree — Information Technology, Multiplatform Software Development",
    },
    issuer: "Universidad Tecnológica de Escuinapa",
    date: "2025",
    type: "degree",
    fileUrl: "/certificates/titulo-tsu-tecnologias-informacion.jpg",
  },
  {
    id: "c8",
    title: {
      es: "Profesional Técnico-Bachiller en Informática — Acta de Titulación",
      en: "Technical Baccalaureate in Computer Science — Graduation Certificate",
    },
    issuer: "CONALEP Escuinapa",
    date: "2023",
    type: "degree",
    fileUrl: "/certificates/conalep-acta-titulacion.jpg",
  },

  // --- Reconocimientos ---
  {
    id: "c2",
    title: {
      es: "1er lugar de aprovechamiento académico — Generación 2023-2025",
      en: "1st place academic achievement — 2023-2025 Class",
    },
    issuer: "Universidad Tecnológica de Escuinapa",
    date: "2025",
    type: "award",
    fileUrl: "/certificates/reconocimiento-primer-lugar.jpg",
  },
  {
    id: "c9",
    title: {
      es: "Mérito Académico — Carrera de Informática, Generación 2020-2023",
      en: "Academic Merit — Computer Science, 2020-2023 Class",
    },
    issuer: "CONALEP Sinaloa",
    date: "2023",
    type: "award",
    fileUrl: "/certificates/conalep-reconocimiento-merito-academico.jpg",
  },

  // --- Certificaciones ---
  {
    id: "c3",
    title: {
      es: "Introduction to Generative AI",
      en: "Introduction to Generative AI",
    },
    issuer: "Google Cloud / Coursera",
    date: "2026",
    type: "certification",
    fileUrl: "/certificates/coursera-generative-ai.pdf",
  },

  // --- Cursos ---
  {
    id: "c4",
    title: {
      es: "Desarrollo Web Completo: HTML5, CSS3, JS, AJAX, PHP y MySQL",
      en: "Complete Web Development: HTML5, CSS3, JS, AJAX, PHP and MySQL",
    },
    issuer: "Udemy",
    date: "2025",
    type: "course",
    fileUrl: "/certificates/udemy-desarrollo-web-completo.pdf",
  },
  {
    id: "c5",
    title: { es: "Curso de Front-end", en: "Front-end Course" },
    issuer: "Udemy / Softradis",
    date: "2025",
    type: "course",
    fileUrl: "/certificates/udemy-frontend.pdf",
  },
  {
    id: "c6",
    title: { es: "Python", en: "Python" },
    issuer: "Santander Open Academy",
    date: "2026",
    type: "course",
    fileUrl: "/certificates/santander-python.pdf",
  },
  {
    id: "c7",
    title: {
      es: "Introducción a la Ciencia de Datos",
      en: "Introduction to Data Science",
    },
    issuer: "Santander Open Academy",
    date: "2026",
    type: "course",
    fileUrl: "/certificates/santander-ciencia-de-datos.pdf",
  },
  {
    id: "c10",
    title: {
      es: "Herramientas Básicas de Ofimática en el Contexto Laboral",
      en: "Basic Office Software Tools in the Workplace",
    },
    issuer: "CONALEP",
    date: "2023",
    type: "course",
    fileUrl: "/certificates/conalep-constancia-ofimatica.jpg",
  },
];

// ---------------------------------------------------------------------------
// DATOS DE workDocuments
// ---------------------------------------------------------------------------
export const workDocumentCategories: WorkDocumentCategory[] = [
  { key: "java", label: { es: "Java", en: "Java" } },
  { key: "database", label: { es: "Bases de Datos", en: "Databases" } },
  { key: "python", label: { es: "Python", en: "Python" } },
  { key: "web", label: { es: "Web", en: "Web" } },
];

export const workDocuments: WorkDocument[] = [
  {
    id: "bd-universidad",
    title: {
      es: "Base de Datos — Sistema Universitario",
      en: "Database — University System",
    },
    description: {
      es: "Diseño y documentación de una base de datos relacional para la gestión de información universitaria.",
      en: "Design and documentation of a relational database for managing university information.",
    },
    categoryKey: "database",
    fileUrl: "/docs/database/bd-universidad.pdf",
    fileType: "pdf",
    date: "2025",
    tech: ["MySQL", "Modelado ER"],
  },
  {
    id: "bd-creditos",
    title: {
      es: "Base de Datos — Sistema de Créditos",
      en: "Database — Credit System",
    },
    description: {
      es: "Modelado de una base de datos para el control y seguimiento de créditos, incluyendo sus entidades y relaciones principales.",
      en: "Database modeling for tracking and managing credits, including its main entities and relationships.",
    },
    categoryKey: "database",
    fileUrl: "/docs/database/bd-creditos.pdf",
    fileType: "pdf",
    date: "2025",
    tech: ["MySQL", "Modelado ER"],
  },
  {
    id: "consultas-bd-creditos",
    title: {
      es: "Consultas SQL — Base de Datos de Créditos",
      en: "SQL Queries — Credit Database",
    },
    description: {
      es: "Conjunto de consultas SQL (JOINs, filtros, agregaciones) aplicadas sobre la base de datos de créditos.",
      en: "Set of SQL queries (JOINs, filters, aggregations) applied to the credits database.",
    },
    categoryKey: "database",
    fileUrl: "/docs/database/consultas-bd-creditos.pdf",
    fileType: "pdf",
    date: "2025",
    tech: ["SQL", "MySQL"],
  },
  {
    id: "consultas-bd-zoo",
    title: {
      es: "Consultas SQL — Base de Datos de un Zoológico",
      en: "SQL Queries — Zoo Database",
    },
    description: {
      es: "Ejercicios de consultas SQL sobre una base de datos temática de un zoológico, practicando joins, subconsultas y funciones de agregación.",
      en: "SQL query exercises on a zoo-themed database, practicing joins, subqueries, and aggregate functions.",
    },
    categoryKey: "database",
    fileUrl: "/docs/database/consultas-bd-zoo.pdf",
    fileType: "pdf",
    date: "2025",
    tech: ["SQL", "MySQL"],
  },
  {
    id: "diseno-bd",
    title: {
      es: "Diseño de Base de Datos — App de Inventario Gastronómico",
      en: "Database Design — Restaurant Inventory App",
    },
    description: {
      es: "Modelado entidad-relación y normalización para la base de datos de una aplicación móvil de gestión de inventario de equipamiento gastronómico.",
      en: "Entity-relationship modeling and normalization for the database behind a mobile app for managing restaurant equipment inventory.",
    },
    categoryKey: "database",
    fileUrl: "/docs/database/diseno-bd.pdf",
    fileType: "pdf",
    date: "2025",
    tech: ["Modelado ER", "Normalización"],
  },
  {
    id: "mongodb-1",
    title: { es: "Introducción a MongoDB", en: "Introduction to MongoDB" },
    description: {
      es: "Ejercicios prácticos de bases de datos no relacionales con MongoDB: colecciones, documentos y operaciones CRUD.",
      en: "Practical exercises on non-relational databases with MongoDB: collections, documents, and CRUD operations.",
    },
    categoryKey: "database",
    fileUrl: "/docs/database/mongodb-1.pdf",
    fileType: "pdf",
    date: "2025",
    tech: ["MongoDB", "NoSQL"],
  },
];
