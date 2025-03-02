import { TEAM } from "@/app/data/about";
import TeamMemberCard from "./TeamMemberCard";

function TeamSection() {
  return (
    <section className="py-16 bg-white" id="equipo">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Nuestro Equipo Directivo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Profesionales comprometidos con la excelencia y la innovación que
            lideran nuestra empresa hacia el éxito.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              position={member.position}
              image={member.image}
              description={member.description}
            ></TeamMemberCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
