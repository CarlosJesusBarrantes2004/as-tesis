"use client";

import { useState } from "react";
import AcademicCategoryCard from "./AcademicCategoryCard";
import { academicCategories } from "@/app/data/areas";

function AcademicAreasSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl text-primary md:text-4xl font-bold text-primary-blue mb-4">
            Áreas Académicas
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <div className="w-20 h-1 bg-secondary-yellow mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Contamos con especialistas en diversas disciplinas para brindarte el
            mejor asesoramiento académico
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {academicCategories.map((category) => (
            <AcademicCategoryCard
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onToggle={() =>
                setActiveCategory(
                  activeCategory === category.id ? null : category.id
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AcademicAreasSection;
