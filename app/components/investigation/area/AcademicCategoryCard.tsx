"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

interface AcademicCategoryCardProps {
  category: {
    id: string;
    name: string;
    careers: string[];
    color: string;
    icon: React.ReactNode;
  };
  isActive: boolean;
  onToggle: () => void;
}

function AcademicCategoryCard({
  category,
  isActive,
  onToggle,
}: AcademicCategoryCardProps) {
  return (
    <div
      className={`card bg-white p-6 border border-gray-100 hover:shadow-md transition-all duration-300 ${category.color}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 inline-block rounded-lg bg-white shadow-sm">
          {category.icon}
        </div>
        <button
          onClick={onToggle}
          className="text-gray-500 hover:text-primary transition-colors"
        >
          {isActive ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      <h3 className="text-xl font-semibold mb-2 text-primary">
        {category.name}
      </h3>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mt-4 space-y-1 text-sm text-gray-600 pl-1">
          {category.careers.map((career, index) => (
            <li key={index} className="py-1">
              • {career}
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={`/investigacion/${category.id}`}
        className="mt-4 text-primary hover:text-secondary-500 font-medium text-sm inline-block"
      >
        Ver todos los servicios para {category.name}
      </Link>
    </div>
  );
}

export default AcademicCategoryCard;
