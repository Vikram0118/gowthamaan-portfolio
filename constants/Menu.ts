import { IMenuItems } from "@/interface/Menu";

export const menuItems: IMenuItems[] = [
  {
    href: "/",
    src: "/assets/svg/home.svg",
    name: "home",
    color: "#b2b2b2",
  },
  {
    href: "/projects",
    src: "/assets/svg/projects.svg",
    name: "projects",
    color: "#b2b2b2",
  },
  {
    href: "/blog",
    src: "/assets/svg/blog.svg",
    name: "blog",
    color: "#b2b2b2",
  },
  {
    href: "/standing-invitation",
    src: "/assets/svg/standing-invitation.svg",
    name: "standing-invitation",
    color: "#b2b2b2",
  },
  {
    onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    src: "/assets/svg/scrolltop.svg",
    name: "Scroll to top",
    color: "#b2b2b2",
  },
];
