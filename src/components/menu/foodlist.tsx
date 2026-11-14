import type { FoodList as FoodListData } from "@/types/types";

export default function FoodList({ foodlist }: { foodlist: FoodListData }) {
  return (
    <div className="mb-12">
      <h3 className="border-b-2 border-ink pb-2 font-display text-3xl leading-none font-bold uppercase">
        {foodlist.title}
      </h3>
      <ul className="divide-y divide-ink/10">
        {foodlist.foodList.map((item) => (
          <li key={item.title} className="flex justify-between gap-6 py-4">
            <div>
              <p className="font-semibold uppercase tracking-wide">{item.title}</p>
              <p className="mt-1 text-sm text-ink/70">{item.description}</p>
            </div>
            <span className="font-semibold tabular-nums">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
