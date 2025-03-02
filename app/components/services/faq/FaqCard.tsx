interface FaqCardProps {
  question: string;
  answer: string;
}

function FaqCard({ question, answer }: FaqCardProps) {
  return (
    <div className="card bg-gray-50 p-6 hover:shadow-card transition-all duration-300">
      <h3 className="text-xl font-semibold mb-3 text-primary">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}

export default FaqCard;
