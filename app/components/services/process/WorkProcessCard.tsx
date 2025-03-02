interface WorkProcessCardProps {
  step: string;
  title: string;
  description: string;
}

function WorkProcessCard({ step, title, description }: WorkProcessCardProps) {
  return (
    <div className="card bg-white p-6 hover:shadow-card transition-all duration-300">
      <div className="text-4xl font-bold text-secondary mb-4">{step}</div>
      <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default WorkProcessCard;
