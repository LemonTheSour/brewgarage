"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Khand } from "next/font/google";
import { Icon } from "@iconify/react";

const khand = Khand({
  subsets: ["latin"],
  weight: "400",
});

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
  { name: "Jobs", href: "/jobs" },
  { name: "Merch", href: "/merch" },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className="flex items-end justify-between">
      <div
        className={`space-x-6 ml-4 lg:text-5xl mt-8 ml-16 ${khand.className}`}
      >
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");
          return (
            <Link
              className={
                isActive ? "font-bold border-b-4 px-2" : "border-w-4 px-2"
              }
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="flex space-x-5 pr-12">
        <Icon icon="ri:instagram-line" width="50" height="50" />
        <Icon icon="gg:facebook" width="50" height="50" />
        <Icon icon="iconamoon:email-light" width="50" height="50" />
      </div>
    </div>
  );
}
