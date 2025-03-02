import Image from "next/image";

interface TeamMemberCardProps {
  name: string;
  position: string;
  image: string;
  description: string;
}

function TeamMemberCard({
  name,
  position,
  image,
  description,
}: TeamMemberCardProps) {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all group">
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        ></Image>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <p className="text-white text-sm">{description}</p>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-primary">{name}</h3>
        <p className="text-secondary font-medium">{position}</p>
      </div>
    </div>
  );
}

export default TeamMemberCard;
