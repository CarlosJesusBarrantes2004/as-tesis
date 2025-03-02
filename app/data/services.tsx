import React from "react";
import {
  BarChart2,
  BookMarked,
  FileCode,
  FileText,
  Presentation,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  services: ServiceItem[];
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price?: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "tesis",
    title: "Asesoría de Tesis",
    description:
      "Orientación especializada en todas las fases de tu investigación académica, desde la elección del tema hasta la defensa.",
    icon: <BookMarked className="w-10 h-10 text-primary" />,
    color: "bg-blue-50",
    services: [
      {
        id: "proyecto-informe",
        name: "Tesis (Proyecto + Informe)",
        description:
          "Desarrollo completo de tu tesis, incluyendo la elaboración del proyecto y el informe final bajo estrictos estándares académicos.",
      },
      {
        id: "preparacion-sustentacion",
        name: "Preparación de sustentación",
        description:
          "Orientación personalizada para prepararte adecuadamente para la defensa de tu tesis ante el jurado académico.",
      },
      {
        id: "simulacion-sustentacion",
        name: "Simulación de sustentación",
        description:
          "Sesiones prácticas simulando el entorno real de sustentación para fortalecer tu confianza y habilidades expositivas.",
      },
      {
        id: "revision-avances",
        name: "Revisión de avances",
        description:
          "Evaluación continua de tu progreso con retroalimentación detallada para mejorar la calidad de tu investigación.",
      },
      {
        id: "revision-sistematica",
        name: "Revisión Sistemática",
        description:
          "Análisis exhaustivo de la literatura científica disponible sobre tu tema de investigación.",
      },
      {
        id: "suficiencia-profesional",
        name: "Suficiencia profesional",
        description:
          "Asesoría para elaborar trabajos de suficiencia profesional cumpliendo con los requisitos académicos específicos.",
      },
    ],
  },
  {
    id: "redaccion",
    title: "Redacción Académica",
    description:
      "Elaboración y revisión de documentos académicos con estándares internacionales de citación y estructuración.",
    icon: <FileText className="w-10 h-10 text-primary" />,
    color: "bg-yellow-50",
    services: [
      {
        id: "articulo-cientifico",
        name: "Artículo Científico",
        description:
          "Redacción y estructuración de artículos para revistas científicas y académicas siguiendo normas internacionales.",
      },
      {
        id: "citacion-normas",
        name: "Citación (NORMAS)",
        description:
          "Aplicación correcta de normas de citación (APA, Vancouver, Chicago, etc.) en tus documentos académicos.",
      },
      {
        id: "parafraseo",
        name: "Parafraseo",
        description:
          "Reformulación de textos manteniendo el significado original para mejorar la originalidad de tu trabajo.",
      },
      {
        id: "plan-negocios",
        name: "Plan de Negocios",
        description:
          "Desarrollo de planes de negocio estructurados para proyectos empresariales y académicos.",
      },
    ],
  },
  {
    id: "presentacion",
    title: "Presentación y Verificación",
    description:
      "Herramientas y servicios para optimizar la presentación y originalidad de tu trabajo académico.",
    icon: <Presentation className="w-10 h-10 text-primary" />,
    color: "bg-green-50",
    services: [
      {
        id: "diapositivas",
        name: "Diapositivas",
        description:
          "Diseño profesional de presentaciones visuales para sustentar tu trabajo académico de manera efectiva.",
      },
      {
        id: "turnitin",
        name: "Turnitin",
        description:
          "Verificación de originalidad mediante software especializado para prevenir problemas de plagio.",
      },
    ],
  },
  {
    id: "estadistica",
    title: "Análisis Estadístico",
    description:
      "Procesamiento y análisis de datos con software especializado para validar tus hipótesis de investigación.",
    icon: <BarChart2 className="w-10 h-10 text-primary" />,
    color: "bg-purple-50",
    services: [
      {
        id: "procesamiento-estadistico",
        name: "Procesamiento estadístico",
        description:
          "Tratamiento de datos cuantitativos utilizando software especializado como SPSS, R, STATA, entre otros.",
      },
    ],
  },
  {
    id: "proyectos",
    title: "Proyectos Especiales",
    description:
      "Desarrollo de trabajos académicos especializados adaptados a requisitos institucionales específicos.",
    icon: <FileCode className="w-10 h-10 text-primary" />,
    color: "bg-red-50",
    services: [
      {
        id: "proyecto-instituto",
        name: "Proyecto de Instituto",
        description:
          "Elaboración de proyectos adaptados a los requerimientos específicos de institutos técnicos y tecnológicos.",
      },
    ],
  },
];

export const workProcess = [
  {
    step: "01",
    title: "Consulta Inicial",
    description:
      "Evaluamos tus necesidades académicas y establecemos objetivos claros",
  },
  {
    step: "02",
    title: "Planificación",
    description:
      "Diseñamos una estrategia personalizada según tu proyecto y plazos",
  },
  {
    step: "03",
    title: "Desarrollo",
    description:
      "Trabajamos con metodologías probadas y comunicación constante",
  },
  {
    step: "04",
    title: "Entrega y Revisión",
    description:
      "Garantizamos tu satisfacción con revisiones hasta la aprobación final",
  },
];

export const faqItems = [
  {
    question:
      "¿Cuál es el tiempo promedio para completar una asesoría de tesis?",
    answer:
      "El tiempo varía según el alcance del proyecto, pero generalmente trabajamos con plazos de 2 a 4 meses para una tesis completa, adaptándonos a tus necesidades académicas específicas.",
  },
  {
    question: "¿Cómo garantizan la originalidad de los trabajos?",
    answer:
      "Todos nuestros documentos pasan por herramientas de detección de plagio antes de ser entregados, garantizando contenido 100% original y adecuado a los estándares académicos.",
  },
  {
    question: "¿Trabajan con todos los estilos de citación académica?",
    answer:
      "Sí, nuestro equipo está especializado en todos los formatos estándar incluyendo APA, MLA, Chicago, Vancouver, Harvard y otros específicos según los requerimientos de tu institución.",
  },
  {
    question: "¿Ofrecen apoyo posterior a la entrega final?",
    answer:
      "Absolutamente. Incluimos un período de revisiones gratuitas y estamos disponibles para apoyarte en la defensa o presentación de tu trabajo académico.",
  },
];
