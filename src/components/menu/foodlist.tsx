import type { FoodList as FoodListData } from "@/types/types";

export default function FoodList({ foodlist }: { foodlist: FoodListData }) {
  return (
    <div className="mb-8">
      <h3 className="mb-2 border-b border-neutral-300 pb-2 text-2xl font-bold">
        {foodlist.title}
      </h3>
      <ul>
        {foodlist.foodList.map((item) => (
          <li key={item.title} className="flex justify-between gap-4 py-3">
            <div>
              <p className="font-bold">{item.title}</p>
              <p className="text-sm text-neutral-700">{item.description}</p>
            </div>
            <span className="font-bold">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
