import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Hero from "@/components/ui/hero";
import Section from "@/components/ui/section";
import Carousel from "@/components/merch/carousel";
import MerchCard from "@/components/merch/merch-card";
import heroes from "@/data/page-heroes.json";
import merch from "@/data/merch.json";

export const metadata: Metadata = pageMetadata({
  title: "Merch",
  description: "Brew Garage tees, caps and more.",
  path: "/merch",
});

export default function MerchPage() {
  return (
    <>
      <Hero {...heroes.merch} eyebrow="Wear the Garage" />
      <Section title="Favourites" eyebrow="Best sellers" width="wide">
        <Carousel label="Favourite merch">
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
