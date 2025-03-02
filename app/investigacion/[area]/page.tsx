"use client";

import { academicCategories } from "@/app/data/areas";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function AreaPage() {
  const params = useParams<{ area: string }>();
  const [area, setArea] = useState<string>("");

  useEffect(() => {
    if (params.area) {
      setArea(params.area);
    }
  }, [params]);

  const category = academicCategories.find((cat) => cat.id === area);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-4">
        <h2 className="text-2xl font-bold text-gray-700">
          Área de investigación no encontrada
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-custom">
        <div className={`p-8 rounded-lg shadow-md ${category.color}`}>
          <div className="flex items-center gap-4">
            {category.icon}
            <h1 className="text-3xl font-bold text-gray-800">
              {category.name}
            </h1>
          </div>
          <p className="mt-4 text-gray-600 text-lg">
            Explora proyectos y tesis en el área de {category.name}.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Carreras Relacionadas
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.careers.map((career, index) => (
              <li
                key={index} // Usar índice como clave si no hay un identificador único
                className="p-4 bg-white shadow rounded-lg border border-gray-200"
              >
                {career}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AreaPage;
