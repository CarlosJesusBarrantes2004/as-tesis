import { Clock, Mail, MapPin, Phone } from "lucide-react";
import FooterHeading from "../../ui/FooterHeading";
import {
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_HOURS,
  COMPANY_PHONE,
} from "@/app/data/companyInfo";

function FooterContact() {
  return (
    <div>
      <FooterHeading>Información de Contacto</FooterHeading>
      <ul className="space-y-3">
        <li className="flex items-start">
          <Clock className="mr-3 text-secondary flex-shrink-0 mt-1" size={18} />
          <div>
            <p className="font-medium">Horario de Atención</p>
            <p className="text-gray-400 text-sm">{COMPANY_HOURS.WEEKDAYS}</p>
            <p className="text-gray-400 text-sm">{COMPANY_HOURS.SATURDAY}</p>
          </div>
        </li>
        <li className="flex items-center">
          <Phone className="mr-3 text-secondary flex-shrink-0" size={18} />
          <a
            href={`tel:${COMPANY_PHONE}`}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            {COMPANY_PHONE}
          </a>
        </li>
        <li className="flex items-center">
          <Mail className="mr-3 text-secondary flex-shrink-0" size={18} />
          <a
            href={`mailto:${COMPANY_EMAIL}`}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            {COMPANY_EMAIL}
          </a>
        </li>
        <li className="flex items-start">
          <MapPin
            className="mr-3 text-secondary flex-shrink-0 mt-1"
            size={18}
          />
          <p className="text-gray-400">{COMPANY_ADDRESS}</p>
        </li>
      </ul>
    </div>
  );
}

export default FooterContact;
