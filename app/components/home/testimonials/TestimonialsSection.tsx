import { testimonials } from "@/app/data/testimonials";
import TestimonialCard from "./TestimonialCard";
import { Star } from "lucide-react";

function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <div className="w-20 h-1 bg-secondary-yellow mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Conoce las experiencias de quienes confiaron en nosotros para lograr
            el éxito en sus proyectos académicos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-primary-blue">
            <span className="mr-2 text-primary-blue font-semibold">4.9</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-secondary-yellow fill-secondary-yellow"
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">de 250+ reseñas</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
