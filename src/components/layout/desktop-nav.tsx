"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActivePath, navLinks } from "@/lib/navigation";
import Socials from "@/components/ui/socials";

// Page links + social icons, laid over the top of each page's hero photo.
// Shown from the md breakpoint (768px) up; phones use MobileMenu instead.
export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Site"
      className="absolute inset-x-0 top-8 z-40 hidden items-end justify-between px-8 pt-6 text-white md:flex lg:px-16"
    >
      <ul className="flex gap-4 font-display text-3xl uppercase tracking-wide lg:gap-6 lg:text-4xl">
        {navLinks.map((link) => {
          const active = isActivePath(pathname, link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`border-b-4 px-1 pb-1 drop-shadow transition-colors ${
                  active ? "border-brand font-semibold" : "border-transparent hover:border-white/70"
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <Socials size={30} className="drop-shadow lg:gap-6" />
    </nav>
  );
}
