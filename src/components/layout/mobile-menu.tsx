"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { isActivePath, navLinks } from "@/lib/navigation";
import { phoneHref, site } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon, PinIcon } from "@/components/ui/icons";
import Socials from "@/components/ui/socials";

// Phone header bar (logo + menu button) and the full-screen menu it opens.
// Hidden from the md breakpoint (768px) up, where DesktopNav takes over.
export default function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const openButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  // Close whenever the page changes.
  useEffect(() => setOpen(false), [pathname]);

  // Move keyboard focus into the menu when it opens, and back to the menu
  // button when it closes, so keyboard and screen-reader users don't get lost.
  useEffect(() => {
    if (open) closeButton.current?.focus();
    else if (wasOpen.current) openButton.current?.focus();
    wasOpen.current = open;
  }, [open]);

  // While open: stop the page behind from scrolling, and close on Escape.
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
    <div className="md:hidden">
      <div className="fixed inset-x-0 top-0 z-50 flex h-12 items-center justify-center bg-ink text-white">
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
          ref={openButton}
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
        className={`fixed inset-0 z-[60] flex flex-col items-center overflow-y-auto bg-ink pb-10 text-white transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          ref={closeButton}
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
            <PinIcon size={28} className="shrink-0" /> {site.address}
          </span>
          <a href={phoneHref} className="flex items-center gap-2">
            <PhoneIcon size={28} className="shrink-0" /> {site.phone}
          </a>
        </address>
      </div>
    </div>
  );
}
