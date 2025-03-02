import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface LinkWithIconProps {
  href: string;
  children: React.ReactNode;
}

function LinkWithIcon({ href, children }: LinkWithIconProps) {
  return (
    <li className="transition-transform duration-300 hover:translate-x-1">
      <Link
        href={href}
        className="flex items-center text-gray-400 hover:text-secondary"
      >
        <ChevronRight size={16} className="mr-2" />
        <span>{children}</span>
      </Link>
    </li>
  );
}

export default LinkWithIcon;
