import { VALUES } from "@/app/data/about";
import ValueCard from "./ValueCard";

function ValuesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Nuestros Valores Corporativos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Los principios que guían nuestras decisiones y definen nuestra
            cultura empresarial.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
            ></ValueCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
