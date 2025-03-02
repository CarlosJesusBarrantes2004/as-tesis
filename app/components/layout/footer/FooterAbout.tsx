import Image from "next/image";
import SocialLinks from "../../ui/SocialLinks";
import {
  COMPANY_EXPERIENCE_YEARS,
  COMPANY_PROJECTS_COMPLETED,
} from "@/app/data/companyInfo";

function FooterAbout() {
  return (
    <div className="space-y-4">
      <div className="relative w-40 h-16 mb-4">
        <Image
          src="/images/logo-as-tesis.png"
          alt="Logo de As-Tesis"
          fill
          className="object-contain"
        />
      </div>
      <p className="text-gray-400 max-w-xs">
        Más de {COMPANY_EXPERIENCE_YEARS} años de experiencia brindando asesoría
        académica profesional con más de {COMPANY_PROJECTS_COMPLETED} proyectos
        exitosos.
      </p>
      <SocialLinks></SocialLinks>
    </div>
  );
}

export default FooterAbout;
