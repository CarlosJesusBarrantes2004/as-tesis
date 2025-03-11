"use client";

import HeaderNavItem from "./HeaderNavItem";
import { mainNavigation } from "@/app/data/navigation";

interface HeaderDesktopMenuProps {
  openSubmenu: string | null;
  toggleSubmenu: (name: string) => void;
}

function HeaderDesktopMenu({
  openSubmenu,
  toggleSubmenu,
}: HeaderDesktopMenuProps) {
  return (
    <ul className="hidden lg:flex items-center space-x-1 xl:space-x-2">
      {mainNavigation.map((link) => (
        <HeaderNavItem
          key={link.name}
          name={link.name}
          href={link.href}
          submenu={link.submenu}
          openSubmenu={openSubmenu}
          toggleSubmenu={toggleSubmenu}
        ></HeaderNavItem>
      ))}
      {/**
       * <li>
        <Link href="/cotizar" className="ml-2 btn btn-secondary hover-lift">
          Cotizar
        </Link>
      </li>
       */}
    </ul>
  );
}

export default HeaderDesktopMenu;
