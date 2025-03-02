"use client";

import { mainNavigation } from "@/app/data/navigation";
import Link from "next/link";
import { X } from "lucide-react";
import { useEffect } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNavItem from "./HeaderNavItem";

interface HeaderMobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  openSubmenu: string | null;
  toggleSubmenu: (name: string) => void;
}

function HeaderMobileMenu({
  isOpen,
  setIsOpen,
  openSubmenu,
  toggleSubmenu,
}: HeaderMobileMenuProps) {
  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <div
      className={`lg:hidden fixed inset-0 z-50 bg-primary h-screen overflow-y-auto transform transition-transform duration-300 ease-in-out !backdrop-blur-none ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-white/10">
        <HeaderLogo onClick={() => setIsOpen(false)} />
        <button
          className="text-white p-2"
          onClick={() => setIsOpen(false)}
          aria-label="Cerrar menú"
        >
          <X size={24} />
        </button>
      </div>
      <ul className="flex flex-col p-4 space-y-4">
        {mainNavigation.map((link) => (
          <HeaderNavItem
            key={link.name}
            name={link.name}
            href={link.href}
            submenu={link.submenu}
            isMobile={true}
            openSubmenu={openSubmenu}
            toggleSubmenu={toggleSubmenu}
          />
        ))}
        <li className="pt-4 mt-4 border-t border-white/10">
          <Link
            href="/cotizar"
            className="block w-full py-3 text-center text-gray-900 font-semibold bg-secondary rounded-md hover:bg-secondary-500 transition-colors duration-300"
          >
            Cotizar
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HeaderMobileMenu;
