import { benefits } from "@/app/data/contact";
import BenefitCard from "./BenefitCard";

function BenefitsSection() {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En As-tesis nos comprometemos con tu éxito académico ofreciéndote el
            mejor asesoramiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
