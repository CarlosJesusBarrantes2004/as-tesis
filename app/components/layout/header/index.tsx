"use client";

import { useScrollPosition } from "@/app/hooks/useScrollPosition";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import HeaderLogo from "./HeaderLogo";
import HeaderDesktopMenu from "./HeaderDesktopMenu";
import HeaderMobileMenu from "./HeaderMobileMenu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const scrolled = useScrollPosition(20);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  const toggleSubmenu = (name: string) =>
    setOpenSubmenu(openSubmenu === name ? null : name);

  return (
    <header
      className={`w-full sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-2"
          : "bg-primary py-4"
      } ${isOpen || openSubmenu ? "" : "overflow-hidden"}`}
    >
      <div className="container-custom mx-auto">
        <nav className="flex justify-between items-center">
          <HeaderLogo></HeaderLogo>

          {/* Botón de menú móvil */}
          <button
            className="lg:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <Menu size={24} /> : <Menu size={24} />}
          </button>

          {/* Menú Desktop */}
          <HeaderDesktopMenu
            openSubmenu={openSubmenu}
            toggleSubmenu={toggleSubmenu}
          ></HeaderDesktopMenu>
        </nav>

        {/* Menú móvil */}
        <HeaderMobileMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          openSubmenu={openSubmenu}
          toggleSubmenu={toggleSubmenu}
        ></HeaderMobileMenu>
      </div>
    </header>
  );
}

export default Header;
