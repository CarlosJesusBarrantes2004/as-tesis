"use client";

import { ServiceCategory } from "@/app/data/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ServiceCategoryCardProps {
  serviceCategory: ServiceCategory;
}

function ServiceCategoryCard({ serviceCategory }: ServiceCategoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className={`card p-6 border border-gray-100 hover-lift group ${serviceCategory.color} transition-all duration-300`}
    >
      <div className="mb-4 p-3 inline-block rounded-lg bg-white shadow-sm group-hover:shadow group-hover:bg-secondary transition-all duration-300">
        {serviceCategory.icon}
      </div>

      <h3 className="text-xl font-semibold mb-3 text-primary">
        {serviceCategory.title}
      </h3>

      <p className="text-gray-600 mb-4">{serviceCategory.description}</p>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-4 border-l-2 border-secondary mt-2 mb-4">
          <p className="text-sm font-medium text-primary mb-2">
            Servicios incluidos:
          </p>
          <ul className="space-y-1">
            {serviceCategory.services.map((service) => (
              <li key={service.id} className="text-sm text-gray-600">
                • {service.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-500 text-sm hover:text-primary"
        >
          {isExpanded ? "Mostrar menos" : "Mostrar servicios"}
        </button>

        <Link
          href={`/servicios/${serviceCategory.id}`}
          className="text-primary font-medium inline-flex items-center group-hover:text-secondary-500 transition-colors duration-300"
        >
          Conocer más{" "}
          <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight size={16} />
          </span>
        </Link>
      </div>
    </article>
  );
}

export default ServiceCategoryCard;
