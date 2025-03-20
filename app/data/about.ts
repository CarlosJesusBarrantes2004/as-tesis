export const VALUES = [
  {
    icon: "🌟",
    title: "Compromiso",
    description:
      "Nos involucramos en cada trabajo con responsabilidad y dedicación",
  },
  {
    icon: "🤝",
    title: "Ética",
    description:
      "Actuamos con integridad, garantizando originalidad y respeto por la investigación.",
  },
  {
    icon: "💡",
    title: "Calidad",
    description: "Ofrecemos asesoría con los más altos estándares académicos.",
  },
  {
    icon: "🌍",
    title: "Innovación",
    description:
      "Nos adaptamos a nuevas metodologías y herramientas para mejorar nuestros servicios.",
  },
  {
    icon: "📚",
    title: "Orientación al cliente",
    description:
      "Brindamos atención personalizada para satisfacer las necesidades de cada estudiante o profesional.",
  },
];

export const TEAM = [
  {
    name: "María Rodríguez",
    position: "CEO",
    image: "/images/ceo.jpg",
    description:
      "Con más de 15 años de experiencia en el sector, lidera nuestra visión empresarial.",
  },
  {
    name: "Carlos González",
    position: "Director de Operaciones",
    image: "/images/operaciones.jpg",
    description:
      "Experto en optimización de procesos y gestión de equipos multidisciplinares.",
  },
  {
    name: "Laura Martínez",
    position: "Directora de Marketing",
    image: "/images/marketing.jpg",
    description:
      "Especialista en estrategias digitales y posicionamiento de marca.",
  },
  {
    name: "Javier López",
    position: "Director Tecnológico",
    image: "/images/tecnologico.jpg",
    description:
      "Innovador tecnológico con amplia experiencia en desarrollo de soluciones.",
  },
];

export const HISTORY_TIMELINE = [
  {
    id: 1,
    period: "Los inicios (2010)",
    description:
      "Fundada por un grupo de emprendedores apasionados por la tecnología, nuestra empresa comenzó con un objetivo claro: crear soluciones innovadoras que marcaran la diferencia.",
  },
  {
    id: 2,
    period: "Crecimiento (2015)",
    description:
      "Tras varios años de éxito en proyectos locales, expandimos nuestras operaciones a nivel nacional, duplicando nuestro equipo y ampliando nuestra cartera de servicios.",
  },
  {
    id: 3,
    period: "Innovación (2020)",
    description:
      "Implementamos un departamento dedicado a la investigación y desarrollo, lo que nos permitió crear soluciones tecnológicas pioneras en el sector.",
  },
  {
    id: 4,
    period: "Actualidad (2024)",
    description:
      "Hoy, somos líderes en nuestro sector, con presencia internacional y un equipo multidisciplinar comprometido con la excelencia y la satisfacción del cliente.",
  },
];

export const PHILOSOPHY_CONTENT = {
  mission: {
    title: "Nuestra Misión",
    content:
      "Brindar asesoría académica especializada en la elaboración de tesis, tesinas y proyectos de investigación, garantizando calidad, ética y cumplimiento de los estándares académicos. Nos enfocamos en acompañar a nuestros clientes en cada etapa del proceso investigativo, facilitando su éxito académico y profesional.",
  },
  vision: {
    title: "Nuestra Visión",
    content:
      "Ser la empresa líder en asesoría de tesis en Perú, reconocida por nuestra excelencia, innovación y compromiso con la educación. Aspiramos a expandir nuestros servicios y contribuir al desarrollo de investigaciones que aporten valor a la sociedad y al conocimiento científico.",
  },
  values: {
    title: "Nuestros Valores",
    values: VALUES.map((value) => value.title),
  },
};
