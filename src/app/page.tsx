import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";
import Section, { SectionTitle } from "@/components/section";
import Hours from "@/components/hours";
import { PinIcon, PhoneIcon } from "@/components/icons";
import home from "@/data/home.json";
import { mapsHref, phoneHref, site } from "@/lib/site";
import { btnDark, btnOutline, btnPrimary } from "@/lib/ui";

export default function Home() {
  return (
    <>
      <Hero {...home.hero} eyebrow="East Vic Park" size="full">
        <p className="mt-5 font-display text-2xl tracking-wider uppercase md:text-3xl">
          {site.tagline}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/menu" className={btnPrimary}>
            See the menu
          </Link>
          <Link href="#visit" className={btnOutline}>
            Visit us
          </Link>
        </div>
      </Hero>

      {/* Intro strip */}
      <section className="bg-ink text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-12 md:flex-row md:justify-between md:py-14">
          <p className="max-w-xl text-center text-lg leading-relaxed text-white/85 md:text-left md:text-xl">
            {home.intro}
          </p>
          <div className="shrink-0 border-l-4 border-brand pl-5">
            <p className="mb-1 font-display text-xl tracking-[0.2em] text-brand uppercase">Open</p>
            <Hours />
          </div>
        </div>
      </section>

      {/* Beer / Food / Merch cards */}
      <Section title="What's on tap" eyebrow="Come for a pint" width="wide">
        <ul className="grid gap-5 md:grid-cols-3">
          {home.features.map((f) => (
            <li key={f.title}>
              <Link
                href={f.link}
                className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-sm bg-ink md:aspect-[3/4]"
              >
                <Image
                  src={f.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="relative p-6 text-white">
                  <h3 className="font-display text-4xl leading-none font-bold uppercase">{f.title}</h3>
                  <p className="mt-2 text-white/85">{f.blurb}</p>
                  <span className="mt-3 inline-block font-display text-lg tracking-wider text-brand uppercase">
                    Find out <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Visit us */}
      <Section id="visit" tone="paper" width="wide">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src={home.visit.image}
              alt="The Brew Garage beer garden"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionTitle eyebrow="Find us" align="left">Visit the Garage</SectionTitle>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center gap-3">
                <PinIcon size={24} className="shrink-0 text-brand-dark" /> {site.address}
              </li>
              <li>
                <a href={phoneHref} className="flex items-center gap-3 hover:underline">
                  <PhoneIcon size={24} className="shrink-0 text-brand-dark" /> {site.phone}
                </a>
              </li>
            </ul>
            <Hours className="mt-6 max-w-xs text-lg" />
            <a href={mapsHref} target="_blank" rel="noopener noreferrer" className={`${btnDark} mt-8`}>
              Get directions
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
