import { statistics } from "@/app/data/statistics";
import StatCard from "./StatCard";

function StatisticsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestros Resultados en Números
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            La excelencia académica respaldada por cifras que demuestran nuestro
            compromiso con la calidad.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {statistics.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
