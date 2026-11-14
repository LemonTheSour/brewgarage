import type { Metadata } from "next";
import Hero from "@/components/hero";
import Section from "@/components/section";
import AboutCard from "@/components/about/aboutcard";
import about from "@/data/about.json";
import heroes from "@/data/titlecards.json";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <>
      <Hero {...heroes.about} eyebrow="Our story" />
      <Section title="About us" eyebrow="The people behind the pints" width="wide">
        <div className="space-y-16 md:space-y-24">
          {about.map((card, i) => (
            <AboutCard key={card.title} {...card} index={i} />
          ))}
        </div>
      </Section>
    </>
  );
}
