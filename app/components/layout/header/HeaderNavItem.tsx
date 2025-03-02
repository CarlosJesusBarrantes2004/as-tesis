"use client";

import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ServiceCategory } from "@/app/data/services";
import HeaderSubmenu from "./HeaderSubmenu";

interface HeaderNavItemProps {
  name: string;
  href: string;
  submenu?: ServiceCategory[];
  isMobile?: boolean;
  openSubmenu: string | null;
  toggleSubmenu: (name: string) => void;
}

function HeaderNavItem({
  name,
  href,
  submenu,
  isMobile,
  openSubmenu,
  toggleSubmenu,
}: HeaderNavItemProps) {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(`/${path}`);

  if (isMobile)
    return (
      <li>
        {submenu ? (
          <div>
            <button
              onClick={() => toggleSubmenu(name)}
              className="flex justify-between items-center w-full text-white font-medium py-2"
            >
              {name}
              <ChevronDown
                size={16}
                className={`ml-1 transition-transform duration-300 ${
                  openSubmenu === name ? "rotate-180" : ""
                }`}
              />
            </button>
            <HeaderSubmenu
              items={submenu}
              isOpen={openSubmenu === name}
              isMobile={true}
            ></HeaderSubmenu>
          </div>
        ) : (
          <Link
            href={href}
            className={`block py-2 text-white font-medium ${
              isActive(href) ? "nav-link-active" : ""
            }`}
          >
            {name}
          </Link>
        )}
      </li>
    );

  return (
    <li className="relative">
      {submenu ? (
        <div className="relative group">
          <button
            onClick={() => toggleSubmenu(name)}
            className={`nav-link group flex items-center ${
              isActive(href) ? "nav-link-active" : ""
            }`}
            aria-expanded={openSubmenu === name}
          >
            {name}
            <ChevronDown
              size={16}
              className={`ml-1 transition-transform duration-300 ${
                openSubmenu === name ? "rotate-180" : ""
              }`}
            />
          </button>
          <HeaderSubmenu
            items={submenu}
            isOpen={openSubmenu === name}
          ></HeaderSubmenu>
        </div>
      ) : (
        <Link
          href={href}
          className={`nav-link ${isActive(href) ? "nav-link-active" : ""}`}
        >
          {name}
        </Link>
      )}
    </li>
  );
}

export default HeaderNavItem;
