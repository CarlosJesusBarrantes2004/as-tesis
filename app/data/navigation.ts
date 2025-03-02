import { serviceCategories } from "./services";

export const quickLinks = [
  { name: "Inicio", path: "/" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Servicios", path: "/servicios" },
  { name: "Investigación", path: "/investigacion" },
  { name: "Contacto", path: "/contacto" },
];

export const mainNavigation = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Nosotros",
    href: "/nosotros",
  },
  {
    name: "Servicios",
    href: "/servicios",
    submenu: serviceCategories,
  },
  {
    name: "Investigación",
    href: "/investigacion",
  },
  {
    name: "Contacto",
    href: "/contacto",
  },
];
