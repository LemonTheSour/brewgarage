// Site navigation: the pages shown in the header, mobile menu and footer.

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
  { name: "Merch", href: "/merch" },
  { name: "Jobs", href: "/jobs" },
] as const;

/** True when `href` is the current page (or a parent of it). */
export function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
