"use client";

import { ServiceCategory } from "@/app/data/services";
import Link from "next/link";

interface HeaderSubmenuProps {
  items: ServiceCategory[];
  isOpen: boolean;
  isMobile?: boolean;
}

function HeaderSubmenu({
  items,
  isOpen,
  isMobile = false,
}: HeaderSubmenuProps) {
  if (isMobile)
    return (
      <div
        className={`pl-4 my-1 space-y-2 transition-all duration-200 ${
          isOpen ? "max-h-56 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.title}
            href={`/servicios/${item.id}`}
            className="block py-2 text-white/80 hover:text-secondary"
          >
            {item.title}
          </Link>
        ))}
      </div>
    );

  return (
    <div
      className={`absolute left-0 mt-1 w-56 origin-top-left bg-white text-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
        isOpen
          ? "transform opacity-100 scale-100"
          : "transform opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div className="py-1">
        {items.map((item) => (
          <Link
            key={item.title}
            href={`/servicios/${item.id}`}
            className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-primary transition-colors duration-200"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HeaderSubmenu;
