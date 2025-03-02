interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

function ValueCard({ icon, title, description, index }: ValueCardProps) {
  return (
    <div
      className="bg-gray-50 rounded-xl p-6 shadow-soft hover-lift transition-all hover:shadow-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default ValueCard;
