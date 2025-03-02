import { faqItems } from "@/app/data/services";
import FaqCard from "./FaqCard";

function ServicesFaqSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Preguntas Frecuentes
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Resolvemos tus dudas sobre nuestros servicios académicos
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6">
          {faqItems.map((faq, index) => (
            <FaqCard key={index} {...faq}></FaqCard>
          ))}
        </div>

        {/*<div className="text-center mt-12">
          <Link href="/faq" className="btn btn-primary">
            Ver Todas las Preguntas
          </Link>
        </div>*/}
      </div>
    </section>
  );
}

export default ServicesFaqSection;
