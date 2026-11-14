import Link from "next/link";
import Hero from "@/components/ui/hero";
import Section from "@/components/ui/section";
import IntroStrip from "@/components/home/intro-strip";
import FeatureCard from "@/components/home/feature-card";
import VisitSection from "@/components/home/visit-section";
import home from "@/data/home.json";
import { site } from "@/lib/site";
import { btnOutline, btnPrimary } from "@/lib/styles";

export default function HomePage() {
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

      <IntroStrip intro={home.intro} />

      <Section title="What's on tap" eyebrow="Come for a pint" width="wide">
        <ul className="grid gap-5 md:grid-cols-3">
          {home.features.map((feature) => (
            <li key={feature.title}>
              <FeatureCard {...feature} />
            </li>
          ))}
        </ul>
      </Section>

      <VisitSection id="visit" image={home.visit.image} />
    </>
  );
}
