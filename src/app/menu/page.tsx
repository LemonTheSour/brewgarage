import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Hero from "@/components/ui/hero";
import Section from "@/components/ui/section";
import JumpNav from "@/components/menu/jump-nav";
import DrinkList from "@/components/menu/drink-list";
import FoodList from "@/components/menu/food-list";
import SnackList from "@/components/menu/snack-list";
import heroes from "@/data/page-heroes.json";
import beer from "@/data/beer.json";
import redWine from "@/data/red-wine.json";
import whiteWine from "@/data/white-wine.json";
import food from "@/data/food.json";
import snacks from "@/data/snacks.json";

export const metadata: Metadata = pageMetadata({
  title: "Menu",
  description: "Craft beer, red and white wine, pizza and snacks at Brew Garage.",
  path: "/menu",
});

const sections = [
  { label: "Beer", href: "#beer" },
  { label: "Red", href: "#red-wine" },
  { label: "White", href: "#white-wine" },
  { label: "Pizza", href: "#food" },
  { label: "Snacks", href: "#snacks" },
] as const;

export default function MenuPage() {
  return (
    <>
      <Hero {...heroes.menu} eyebrow="Eat & drink" />
      <JumpNav label="Menu sections" links={sections} />

      <Section title="Drinks" eyebrow="On tap & by the glass">
        <DrinkList id="beer" menu={beer} />
        <DrinkList id="red-wine" menu={redWine} />
        <DrinkList id="white-wine" menu={whiteWine} />
      </Section>
      <Section id="food" title="Food" eyebrow="From the kitchen" tone="paper">
        <FoodList menu={food} />
        <SnackList id="snacks" menu={snacks} />
      </Section>
    </>
  );
}
