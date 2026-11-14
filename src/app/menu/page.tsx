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

const jump = [
  { label: "Beer", href: "#beer" },
  { label: "Red", href: "#red-wine" },
  { label: "White", href: "#white-wine" },
  { label: "Pizza", href: "#food" },
  { label: "Snacks", href: "#snacks" },
];

export default function Menu() {
  return (
    <>
      <Hero {...heroes.menu} eyebrow="Eat & drink" />

      {/* Sticky jump bar: sits under the fixed phone header (top-12). */}
      <nav
        aria-label="Menu sections"
        className="sticky top-12 z-30 border-b border-black/10 bg-white/95 backdrop-blur md:top-0"
      >
        <ul className="no-scrollbar mx-auto flex max-w-3xl gap-2 overflow-x-auto px-5 py-3">
          {jump.map((j) => (
            <li key={j.href}>
              <a
                href={j.href}
                className="block rounded-full border border-ink/20 px-4 py-1 font-display text-lg uppercase tracking-wider whitespace-nowrap transition-colors hover:border-brand hover:bg-brand"
              >
                {j.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Section title="Drinks" eyebrow="On tap & by the glass">
        <Pricelist id="beer" pricelist={beer} />
        <Pricelist id="red-wine" pricelist={redwine} />
        <Pricelist id="white-wine" pricelist={whitewine} />
      </Section>
      <Section id="food" title="Food" eyebrow="From the kitchen" tone="paper">
        <FoodList foodlist={food} />
        <Snacklist id="snacks" snacklist={snacks} />
      </Section>
    </>
  );
}
