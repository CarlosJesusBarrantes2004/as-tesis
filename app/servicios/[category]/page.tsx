import RelatedCategories from "@/app/components/services/RelatedCategories";
import ServiceDetailCard from "@/app/components/services/ServiceDetailCard";
import { serviceCategories } from "@/app/data/services";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ServiceCategoryPageProps {
  params: { category: string };
}

export default function ServiceCategoryPage({
  params,
}: ServiceCategoryPageProps) {
  const category = serviceCategories.find((c) => c.id === params.category);

  if (!category) {
    notFound();
  }

  const relatedCategories = serviceCategories
    .filter((c) => c.id !== params.category)
    .slice(0, 3);

  return (
    <div className="container-custom py-16 md:py-24">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center text-sm text-gray-500">
        <Link
          href="/servicios"
          className="hover:text-primary flex items-center"
        >
          <ChevronLeft size={16} className="mr-1" />
          Todos los servicios
        </Link>
        <span className="mx-2">/</span>
        <span className="text-primary font-medium">{category.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-16">
        <div className={`inline-block p-4 rounded-lg ${category.color} mb-4`}>
          {category.icon}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          {category.title}
        </h1>
        <div className="w-20 h-1 bg-secondary mb-6"></div>
        <p className="text-lg text-gray-600 max-w-3xl">
          {category.description}
        </p>
      </div>

      {/* Services */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {category.services.map((service) => (
          <ServiceDetailCard
            key={service.id}
            service={service}
            categoryColor={category.color}
          />
        ))}
      </div>

      {/* Related categories */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Servicios relacionados
        </h2>
        <RelatedCategories categories={relatedCategories} />
      </div>
    </div>
  );
}
