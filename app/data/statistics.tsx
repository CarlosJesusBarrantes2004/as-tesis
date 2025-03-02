import { Users, BookOpen, CalendarCheck } from "lucide-react";
import React from "react";
import {
  COMPANY_AREAS,
  COMPANY_EXPERIENCE_YEARS,
  COMPANY_PROJECTS_COMPLETED,
} from "./companyInfo";

export interface Statistic {
  icon: React.ReactNode;
  count: string;
  label: string;
  description: string;
}

export const statistics: Statistic[] = [
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    count: `${COMPANY_PROJECTS_COMPLETED}`,
    label: "Estudiantes Asesorados",
    description: `Hemos ayudado a más de ${COMPANY_PROJECTS_COMPLETED} estudiantes a alcanzar sus metas académicas.`,
  },
  {
    icon: <BookOpen className="w-12 h-12 text-primary" />,
    count: `${COMPANY_AREAS}`,
    label: "Áreas de Especialización",
    description:
      "Contamos con expertos en múltiples disciplinas académicas para brindar asesoría especializada.",
  },
  {
    icon: <CalendarCheck className="w-12 h-12 text-primary" />,
    count: `${COMPANY_EXPERIENCE_YEARS}+`,
    label: "Años de Experiencia",
    description: `Más de ${COMPANY_EXPERIENCE_YEARS} años brindando servicios de alta calidad en investigación académica.`,
  },
];
