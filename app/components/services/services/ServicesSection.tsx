"use client";

import { useState } from "react";
import ServiceFilter from "../ServiceFilter";
import { serviceCategories } from "@/app/data/services";
import ServiceCategoryCard from "../ServiceCategoryCard";

function ServicesSection() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filteredServices = selectedFilter
    ? serviceCategories.filter((service) => service.id === selectedFilter)
    : serviceCategories;

  return (
    <section id="servicios" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Brindamos apoyo integral para tu desarrollo académico con servicios
            especializados que garantizan la calidad de tu investigación.
          </p>
        </div>

        <ServiceFilter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredServices.map((serviceCategory) => (
            <ServiceCategoryCard
              key={serviceCategory.id}
              serviceCategory={serviceCategory}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
