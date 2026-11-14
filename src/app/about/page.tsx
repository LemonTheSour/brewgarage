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
      <Hero {...heroes.about} priority />
      <Section title="ABOUT US" wide>
        <div className="grid gap-6 lg:grid-cols-3">
          {about.map((card) => (
            <AboutCard key={card.title} {...card} />
          ))}
        </div>
      </Section>
    </>
  );
}
