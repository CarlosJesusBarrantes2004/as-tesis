import { Testimonial } from "@/app/data/testimonials";
import { Star } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="relative w-14 h-14 mr-4 rounded-full overflow-hidden">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-lg text-primary-blue">
              {testimonial.name}
            </h4>
            <p className="text-gray-600 text-sm">{testimonial.role}</p>
          </div>
        </div>
        <div className="flex">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className="text-secondary-yellow fill-secondary-yellow"
            />
          ))}
        </div>
      </div>

      <blockquote className="text-gray-700 italic mb-4">
        &quot;{testimonial.quote}&quot;
      </blockquote>

      <p className="text-xs text-gray-500">{testimonial.university}</p>
    </div>
  );
}

export default TestimonialCard;
