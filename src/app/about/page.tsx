import type { Metadata } from "next";
import Hero from "@/components/ui/hero";
import Section from "@/components/ui/section";
import AboutCard from "@/components/about/about-card";
import about from "@/data/about.json";
import heroes from "@/data/page-heroes.json";

export const metadata: Metadata = {
  title: "About",
  description: "The story and people behind Brew Garage, a craft brewery in East Victoria Park.",
};

export default function AboutPage() {
  return (
    <>
      <Hero {...heroes.about} eyebrow="Our story" />
      <Section title="About us" eyebrow="The people behind the pints" width="wide">
        <div className="space-y-16 md:space-y-24">
          {about.map((card, i) => (
            <AboutCard key={card.title} {...card} reverse={i % 2 === 1} />
          ))}
        </div>
      </Section>
    </>
  );
}
