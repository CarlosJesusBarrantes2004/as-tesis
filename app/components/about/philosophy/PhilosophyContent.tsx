import { PHILOSOPHY_CONTENT } from "@/app/data/about";

interface PhilosophyContentProps {
  activeTab: "mission" | "vision" | "values";
}

function PhilosophyContent({ activeTab }: PhilosophyContentProps) {
  if (activeTab === "mission")
    return (
      <div className="animate-fade-in">
        <h3 className="text-xl font-semibold mb-4 text-primary">
          {PHILOSOPHY_CONTENT.mission.title}
        </h3>
        <p className="text-gray-700">{PHILOSOPHY_CONTENT.mission.content}</p>
      </div>
    );

  if (activeTab === "vision")
    return (
      <div className="animate-fade-in">
        <h3 className="text-xl font-semibold mb-4 text-primary">
          {PHILOSOPHY_CONTENT.vision.title}
        </h3>
        <p className="text-gray-700">{PHILOSOPHY_CONTENT.vision.content}</p>
      </div>
    );

  return (
    <div className="animate-fade-in">
      <h3 className="text-xl font-semibold mb-4 text-primary">
        {PHILOSOPHY_CONTENT.values.title}
      </h3>
      <ul className="space-y-2 text-gray-700">
        {PHILOSOPHY_CONTENT.values.values.map((value, index) => (
          <li key={index} className="flex items-start">
            <span className="text-secondary mr-2">✓</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhilosophyContent;
