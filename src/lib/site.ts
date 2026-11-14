// Single source of truth for business details shown across the site.
// Fill in the social/email links below and every page picks them up.

export const site = {
  name: "Brew Garage",
  description:
    "Craft brewery, wine and wood-fired pizza in East Victoria Park.",
  address: "20 Millford St, East Vic Park",
  phone: "0486 035 890",
  hours: [
    { day: "Thursday", time: "4 – 10pm" },
    { day: "Friday", time: "1 – 10pm" },
    { day: "Saturday", time: "12 – 10pm" },
  ],
  // TODO: add the real profile URLs / address. Empty values render as plain icons.
  socials: {
    instagram: "",
    facebook: "",
    email: "",
  },
} as const;

export const phoneHref = `tel:${site.phone.replace(/\s+/g, "")}`;

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
  { name: "Merch", href: "/merch" },
  { name: "Jobs", href: "/jobs" },
] as const;

export function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
