import { ServiceCategory } from "@/app/data/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface RelatedCategoriesProps {
  categories: ServiceCategory[];
}

function RelatedCategories({ categories }: RelatedCategoriesProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/servicios/${category.id}`}
          className={`p-6 ${category.color} rounded-lg hover:shadow-md transition-all duration-300 group`}
        >
          <div className="flex items-center mb-3">
            <div className="mr-3">{category.icon}</div>
            <h3 className="text-lg font-semibold text-primary">
              {category.title}
            </h3>
          </div>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {category.description}
          </p>

          <div className="text-primary font-medium inline-flex items-center group-hover:text-secondary-500 transition-colors duration-300">
            Ver servicios{" "}
            <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={16} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default RelatedCategories;
