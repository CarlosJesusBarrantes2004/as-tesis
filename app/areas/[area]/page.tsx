import ServiceCategoryCard from "@/app/components/services/ServiceCategoryCard";
import { academicCategories, serviceCategories } from "@/app/data/services";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface AreaPageProps {
  params: {
    area: string;
  };
}

function AreaPage({ params }: AreaPageProps) {
  const area = academicCategories.find((a) => a.id === params.area);

  if (!area) {
    notFound();
  }

  // Get services related to this academic area
  const relatedServices = serviceCategories.filter(
    (service) => service.id === area.id
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary-blue text-white py-16">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/600')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
        <div className="container-custom relative z-10">
          <Link
            href="/investigation"
            className="inline-flex items-center text-white hover:text-secondary-yellow mb-6 transition-colors"
          >
            <ChevronLeft size={20} />
            <span>Volver a Investigación</span>
          </Link>

          <div className="max-w-3xl mx-auto">
            <div
              className={`p-4 inline-block rounded-lg bg-white shadow-sm mb-6 ${area.color}`}
            >
              {area.icon}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {area.name}
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Servicios especializados y asesoramiento académico en {area.name}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
              Nuestros Servicios para {area.name}
            </h2>
            <div className="w-20 h-1 bg-secondary-yellow mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Ofrecemos asesoramiento especializado para estudiantes y
              profesionales de {area.name}
            </p>
          </div>

          {relatedServices.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedServices.map((service) => (
                <ServiceCategoryCard
                  key={service.id}
                  serviceCategory={service}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <p>
                No hay servicios disponibles para esta área académica en este
                momento.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-primary-blue mb-4">
              Carreras en {area.name}
            </h2>
            <div className="w-20 h-1 bg-secondary-yellow mx-auto mb-6"></div>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-lg p-8 max-w-3xl mx-auto">
            <ul className="space-y-3 text-gray-700">
              {area.careers.map((career, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-secondary-yellow mr-2">•</span>
                  <span>{career}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-blue to-primary-blue-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¿Necesitas ayuda con tus estudios en {area.name}?
            </h2>
            <p className="text-lg mb-8">
              Nuestros especialistas están listos para brindarte el
              asesoramiento que necesitas para alcanzar tus metas académicas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn btn-secondary">
                Solicitar información
              </button>
              <button className="btn btn-outline text-white">
                Agendar una consulta
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AreaPage;
