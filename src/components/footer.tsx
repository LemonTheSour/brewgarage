import Image from "next/image";
import Link from "next/link";
import { mapsHref, navLinks, phoneHref, site } from "@/lib/site";
import Hours from "./hours";
import Socials from "./socials";

const heading = "mb-3 font-display text-xl uppercase tracking-[0.2em] text-brand";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/BrewGarage_Logo.png"
            alt={site.name}
            width={80}
            height={60}
            className="h-14 w-auto"
          />
          <p className="mt-3 font-display text-3xl font-bold uppercase tracking-wide">{site.name}</p>
          <p className="text-white/70">{site.tagline}</p>
        </div>

        <div>
          <h2 className={heading}>Visit</h2>
          <p>{site.address}</p>
          <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-white/70 underline-offset-4 hover:text-brand hover:underline">
            Get directions
          </a>
          <a href={phoneHref} className="mt-3 block whitespace-nowrap hover:text-brand">
            {site.phone}
          </a>
        </div>

        <div>
          <h2 className={heading}>Hours</h2>
          <Hours className="max-w-56 text-white/90" />
        </div>

        <div>
          <h2 className={heading}>Explore</h2>
          <ul className="grid grid-cols-2 gap-y-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
          <Socials size={26} className="mt-5" />
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-sm text-white/50">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
