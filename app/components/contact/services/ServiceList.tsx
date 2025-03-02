import { serviceCategories } from "@/app/data/services";

function ServiceList() {
  return (
    <div className="card p-6 md:p-8 animate-fade-in">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Nuestros servicios
      </h2>
      <ul className="space-y-3">
        {serviceCategories.map((service, index) => (
          <li key={index} className="flex items-center">
            <span className="h-2 w-2 bg-secondary rounded-full mr-3"></span>
            <span className="text-gray-700">{service.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
