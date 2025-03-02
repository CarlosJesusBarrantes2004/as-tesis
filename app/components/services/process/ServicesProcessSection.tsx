import { workProcess } from "@/app/data/services";
import WorkProcessCard from "./WorkProcessCard";

function ServicesProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestro Proceso de Trabajo
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Metodología profesional que asegura resultados de calidad en cada
            proyecto académico
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workProcess.map((item, index) => (
            <WorkProcessCard key={index} {...item}></WorkProcessCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesProcessSection;
