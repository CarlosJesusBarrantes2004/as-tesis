import {
  Lightbulb,
  Clock4,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import {
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_HOURS,
  COMPANY_PHONE,
} from "./companyInfo";

export const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Dirección",
    content: COMPANY_ADDRESS,
  },
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    title: "Teléfono",
    content: COMPANY_PHONE,
  },
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: "Correo electrónico",
    content: COMPANY_EMAIL,
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Horario de atención",
    content: COMPANY_HOURS,
  },
];

export const benefits = [
  {
    icon: <Lightbulb className="h-8 w-8 text-primary"></Lightbulb>,
    title: "Experiencia académica",
    description:
      "Nuestro equipo está formado por profesionales con amplia experiencia en investigación y redacción académica.",
  },
  {
    icon: <Clock4 className="h-8 w-8 text-primary"></Clock4>,
    title: "Atención personalizada",
    description:
      "Adaptamos nuestros servicios a tus necesidades específicas y te acompañamos en cada etapa del proceso.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary"></ShieldCheck>,
    title: "Garantía de calidad",
    description:
      "Nos comprometemos a entregar trabajos de alta calidad académica que cumplan con los estándares más exigentes.",
  },
];
