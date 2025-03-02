import { Statistic } from "@/app/data/statistics";

interface StatCardProps {
  stat: Statistic;
}

function StatCard({ stat }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
      <div className="mx-auto mb-4 inline-block p-3 bg-blue-50 rounded-full">
        {stat.icon}
      </div>
      <h3 className="text-3xl font-bold text-primary-blue mb-2">
        {stat.count}
      </h3>
      <h4 className="text-lg font-semibold text-gray-800 mb-3">{stat.label}</h4>
      <p className="text-gray-600">{stat.description}</p>
    </div>
  );
}

export default StatCard;
