import type { Metadata } from "next";
import Hero from "@/components/hero";
import Section from "@/components/section";
import Pricelist from "@/components/menu/pricelist";
import FoodList from "@/components/menu/foodlist";
import Snacklist from "@/components/menu/snacklist";
import heroes from "@/data/titlecards.json";
import beer from "@/data/beer.json";
import redwine from "@/data/redwine.json";
import whitewine from "@/data/whitewine.json";
import food from "@/data/food.json";
import snacks from "@/data/snacks.json";

export const metadata: Metadata = { title: "Menu" };

export default function Menu() {
  return (
    <>
      <Hero {...heroes.menu} priority />
      <Section title="DRINKS">
        {[beer, redwine, whitewine].map((list) => (
          <Pricelist key={list.title} pricelist={list} />
        ))}
      </Section>
      <Section title="FOOD" className="pt-0">
        <FoodList foodlist={food} />
        <Snacklist snacklist={snacks} />
      </Section>
    </>
  );
}
