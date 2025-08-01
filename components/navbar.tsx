"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Khand } from "next/font/google";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Sidebar from "./sidebar";
import Infobar from "./infobar";
import Image from "next/image";

const khand = Khand({
  subsets: ["latin"],
  weight: "400",
});

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
  { name: "Merch", href: "/merch" },
  { name: "Jobs", href: "/jobs" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  {
    if (window.innerWidth > 750) {
      // Return desktop size navbar
      return (
        <div className="flex flex-col">
          <Infobar />
          <div className="flex items-end justify-between w-full absolute z-2 pt-4 text-white z-99">
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
              <a className="hover:text-pink-600" href="www.youtube.com">
                <Icon icon="ri:instagram-line" width="50" height="50" />
              </a>
              <a className="hover:text-blue-600">
                <Icon icon="gg:facebook" width="50" height="50" />
              </a>
              <a className="hover:text-lime-500">
                <Icon icon="iconamoon:email-light" width="50" height="50" />
              </a>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        // Return phone sized navbar
        <div>
          <div className="grid grid-cols-3 grid-rows-1 w-full bg-black h-12 text-white fixed z-50">
            <div className="flex col-start-2 items-center justify-center">
              <Image
                src="/images/BrewGarage_Logo.png"
                alt={"Test"}
                width={50}
                height={50}
              />
            </div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="pr-2 grid col-span-1 justify-self-end self-center"
            >
              <Icon icon="pajamas:hamburger" width="30" height="30" />
            </button>
          </div>
          <Sidebar expanded={expanded} setExpanded={() => setExpanded(false)} />
        </div>
      );
    }
  }
}
