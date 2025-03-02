import { contactInfo } from "@/app/data/contact";
import InfoCard from "./InfoCard";

function ContactInfo() {
  return (
    <div className="card p-6 md:p-8 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        Información de contacto
      </h2>

      <div className="space-y-6">
        {contactInfo.map((item, index) => (
          <InfoCard
            key={index}
            icon={item.icon}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;
