import { Foodlist } from "@/types/types";

interface FoodListProps {
  foodlist: Foodlist;
}

export default function FoodList({ foodlist }: FoodListProps) {
  return (
    <div className="w-5/6">
      <div className="font-bold text-2xl pb-2">{foodlist.title}</div>
      {foodlist.foodList.map((item, index) => (
        <div key={index} className="pb-4">
          <div className="font-bold">{item.title}</div>
          <div>{item.description}</div>
          <div className="font-bold">{item.price}</div>
        </div>
      ))}
    </div>
  );
}
