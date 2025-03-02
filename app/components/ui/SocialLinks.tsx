import { Facebook, Linkedin, Youtube, type LucideIcon } from "lucide-react";
import { socialLinks } from "@/app/data/social";

const iconMap: Record<string, LucideIcon> = {
  Facebook,
  Youtube,
  Linkedin,
};

function SocialLinks() {
  return (
    <div className="flex space-x-4 pt-2">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-primary text-white p-2 rounded-full transition-colors duration-300"
            aria-label={link.name}
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
