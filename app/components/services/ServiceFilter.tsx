import { serviceCategories } from "@/app/data/services";

interface ServiceFilterProps {
  selectedFilter: string | null;
  setSelectedFilter: (filter: string | null) => void;
}

function ServiceFilter({
  selectedFilter,
  setSelectedFilter,
}: ServiceFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
      <button
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          selectedFilter === null
            ? "bg-primary text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
        onClick={() => setSelectedFilter(null)}
      >
        Todos
      </button>

      {serviceCategories.map((category) => (
        <button
          key={category.id}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedFilter === category.id
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
          onClick={() => setSelectedFilter(category.id)}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
}

export default ServiceFilter;
