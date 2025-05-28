"use client";

import Link from "next/link";
import { Khand } from "next/font/google";
import { Icon } from "@iconify/react";

interface SidebarProps {
  expanded: boolean;
  setExpanded: () => void;
}
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

export default function Sidebar({ expanded, setExpanded }: SidebarProps) {
  return (
    <div
      className={`flex flex-col justify-start items-center align-middle bg-black h-screen overflow-hidden transition-all absolute z-2 text-white ${
        expanded ? "w-full" : "w-0"
      }`}
    >
      <button onClick={() => setExpanded()} className="self-end pr-2 absolute">
        <Icon icon="pajamas:hamburger" width="30" height="30" />
      </button>

      <div></div>

      <div
        className={`flex flex-col text-3xl lg:text-5xl mt-8 ml-2 pb-4 ${khand.className}`}
      >
        {navLinks.map((link) => {
          return (
            <Link
              className="overflow-hidden transition-all pb-4"
              href={link.href}
              key={link.name}
              onClick={() => setExpanded()}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      <div className="w-1/2 border-b-1 border-white pb-6" />

      <div className="flex space-x-8 pt-1 pt-6">
        <a className="hover:text-pink-600" href="www.youtube.com">
          <Icon icon="ri:instagram-line" width="40" height="40" />
        </a>
        <a className="hover:text-blue-600">
          <Icon icon="gg:facebook" width="40" height="40" />
        </a>
        <a className="hover:text-lime-500">
          <Icon icon="iconamoon:email-light" width="40" height="40" />
        </a>
      </div>

      <div className="w-1/2 border-b-1 border-white pb-6" />

      <div className="flex flex-col text-xl pt-6">
        <div className="flex justify-center items-center pb-4">
          <Icon icon="mdi:location" width="40" height="40" />
          <div className="pl-2">20 Millford St, East Vic Park</div>
        </div>
        <div className="flex items-center">
          <Icon icon="mingcute:phone-fill" width="40" height="40" />
          <div className="pl-2">0486 035 890</div>
        </div>
      </div>
    </div>
  );
}
