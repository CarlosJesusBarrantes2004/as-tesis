import { Check } from "lucide-react";
import Link from "next/link";

interface ServiceDetailCardProps {
  service: {
    id: string;
    name: string;
    description: string;
    price?: string;
  };
  categoryColor: string;
}

function ServiceDetailCard({ service, categoryColor }: ServiceDetailCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className={`${categoryColor} px-6 py-4 border-b border-gray-100`}>
        <h3 className="text-xl font-semibold text-primary">{service.name}</h3>
      </div>

      <div className="p-6 flex flex-col">
        <p className="text-gray-600 mb-6">{service.description}</p>

        <div className="space-y-3">
          <div className="flex items-start">
            <Check className="w-5 h-5 text-secondary-500 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-gray-700">Entrega en tiempo acordado</span>
          </div>
          <div className="flex items-start">
            <Check className="w-5 h-5 text-secondary-500 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-gray-700">
              Asesoramiento por especialistas
            </span>
          </div>
          <div className="flex items-start">
            <Check className="w-5 h-5 text-secondary-500 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-gray-700">
              Revisiones sin costo adicional
            </span>
          </div>
        </div>

        {service.price && (
          <div className="mt-6 font-semibold text-primary">
            Desde {service.price}
          </div>
        )}

        <Link
          href={"/contacto"}
          className="mt-6 w-full py-3 bg-primary hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-300 flex justify-center "
        >
          Solicitar información
        </Link>
      </div>
    </div>
  );
}

export default ServiceDetailCard;
