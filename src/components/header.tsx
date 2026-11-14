"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isActivePath, navLinks, phoneHref, site } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon, PinIcon } from "./icons";
import Socials from "./socials";

// One header for every screen size. Which layout shows is decided by CSS
// breakpoints (md = 768px), so it renders on the server, never flashes, and
// adapts live when the window is resized or a phone is rotated.
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the drawer whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // While the drawer is open: lock page scroll and close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header>
      {/* ---------- Desktop / tablet ---------- */}
      <div className="hidden md:block">
        <div className="flex h-8 items-center justify-center gap-12 bg-ink text-sm tracking-wide text-white">
          <span>{site.address}</span>
          <a href={phoneHref} className="hover:underline">
            {site.phone}
          </a>
        </div>
        <nav
          aria-label="Main"
          className="absolute inset-x-0 top-8 z-40 flex items-end justify-between px-8 pt-6 text-white lg:px-16"
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
                      active
                        ? "border-brand font-semibold"
                        : "border-transparent hover:border-white/70"
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
      </div>

      {/* ---------- Phone ---------- */}
      <div className="fixed inset-x-0 top-0 z-50 flex h-12 items-center justify-center bg-ink text-white md:hidden">
        <Link href="/" aria-label={`${site.name} home`}>
          <Image
            src="/images/BrewGarage_Logo.png"
            alt=""
            width={64}
            height={48}
            priority
            className="h-10 w-auto"
          />
        </Link>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="absolute right-1 p-2"
        >
          <MenuIcon size={30} />
        </button>
      </div>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        className={`fixed inset-0 z-[60] flex flex-col items-center overflow-y-auto bg-ink pb-10 text-white transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="self-end p-3"
        >
          <CloseIcon size={30} />
        </button>

        <nav aria-label="Mobile">
          <ul className="flex flex-col items-center gap-3 font-display text-5xl uppercase tracking-wide">
            {navLinks.map((link) => {
              const active = isActivePath(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={active ? "font-semibold text-brand" : "hover:text-brand"}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <hr className="my-6 w-2/3 border-white/20" />
        <Socials size={36} className="gap-8" />
        <hr className="my-6 w-2/3 border-white/20" />

        <address className="flex flex-col gap-4 text-lg not-italic">
          <span className="flex items-center gap-2">
            <PinIcon size={28} /> {site.address}
          </span>
          <a href={phoneHref} className="flex items-center gap-2">
            <PhoneIcon size={28} /> {site.phone}
          </a>
        </address>
      </div>
    </header>
  );
}
