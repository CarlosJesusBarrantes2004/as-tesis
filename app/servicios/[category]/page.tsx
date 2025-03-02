import RelatedCategories from "@/app/components/services/RelatedCategories";
import ServiceDetailCard from "@/app/components/services/ServiceDetailCard";
import { serviceCategories } from "@/app/data/services";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ServiceCategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function ServiceCategoryPage({
  params,
}: ServiceCategoryPageProps) {
  const category = (await params).category;
  const existsCategory = serviceCategories.find((c) => c.id === category);

  if (!existsCategory) notFound();

  const relatedCategories = serviceCategories
    .filter((c) => c.id !== category)
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
        <span className="text-primary font-medium">{existsCategory.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-16">
        <div
          className={`inline-block p-4 rounded-lg ${existsCategory.color} mb-4`}
        >
          {existsCategory.icon}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          {existsCategory.title}
        </h1>
        <div className="w-20 h-1 bg-secondary mb-6"></div>
        <p className="text-lg text-gray-600 max-w-3xl">
          {existsCategory.description}
        </p>
      </div>

      {/* Services */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {existsCategory.services.map((service) => (
          <ServiceDetailCard
            key={service.id}
            service={service}
            categoryColor={existsCategory.color}
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
