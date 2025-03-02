import {
  COMPANY_EXPERIENCE_YEARS,
  COMPANY_PROJECTS_COMPLETED,
} from "@/app/data/companyInfo";

function HeroStats() {
  const stats = [
    { value: `+${COMPANY_EXPERIENCE_YEARS}`, label: "Años de Experiencia" },
    { value: `+${COMPANY_PROJECTS_COMPLETED}`, label: "Proyectos Asesorados" },
  ];

  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 animate-[fadeInUp_0.5s_0.6s_ease-out_both]">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <span className="text-3xl font-bold text-secondary">
            {stat.value}
          </span>
          <span className="text-sm">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

export default HeroStats;
