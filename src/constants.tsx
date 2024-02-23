import { Icon } from "@iconify/react";

import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Photo Sessions",
    path: "/photo-sessions",
  },
  {
    title: "Proyectos",
    path: "/proyectos",

    submenu: true,
    subMenuItems: [
      { title: "Todos", path: "/proyectos" },
      { title: "Audiovisuales", path: "/proyectos/audiovisuales" },
      { title: "Fotografía", path: "/proyectos/fotografia" },
    ],
  },
  {
    title: "Contacto",
    path: "/contacto",
  }
];
