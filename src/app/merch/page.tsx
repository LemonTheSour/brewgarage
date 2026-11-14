import type { Metadata } from "next";
import Hero from "@/components/hero";
import Section from "@/components/section";
import Carousel from "@/components/merch/carousel";
import MerchCard from "@/components/merch/merchcard";
import heroes from "@/data/titlecards.json";
import merch from "@/data/merch.json";

export const metadata: Metadata = { title: "Merch" };

export default function Merch() {
  return (
    <>
      <Hero {...heroes.merch} eyebrow="Wear the Garage" />
      <Section title="Favourites" eyebrow="Best sellers" width="wide">
        <Carousel>
          {merch.favourites.map((item, i) => (
            <MerchCard key={i} {...item} />
          ))}
        </Carousel>
      </Section>
      <Section title="Shirts" eyebrow="The full range" width="wide" tone="paper">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {merch.shirts.map((item, i) => (
            <li key={i}>
              <MerchCard {...item} />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
