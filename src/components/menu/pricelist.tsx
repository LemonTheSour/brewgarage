import type { DrinkList } from "@/types/types";

// Drinks table: name + description on the left, two size/price columns.
export default function Pricelist({ pricelist }: { pricelist: DrinkList }) {
  const cols = "grid grid-cols-[1fr_4.5rem_4.5rem] gap-x-3 sm:grid-cols-[1fr_7rem_7rem]";
  return (
    <div className="mb-8">
      <div className={`${cols} items-end border-b border-neutral-300 pb-2`}>
        <h3 className="text-2xl font-bold">{pricelist.title}</h3>
        <span className="text-center text-xs font-bold sm:text-sm">{pricelist.size1}</span>
        <span className="text-center text-xs font-bold sm:text-sm">{pricelist.size2}</span>
      </div>
      <ul>
        {pricelist.itemList.map((item, i) => (
          <li key={i} className={`${cols} py-3`}>
            <div>
              <p className="font-bold">{item.itemTitle}</p>
              <p className="text-sm text-neutral-700">{item.itemDescription}</p>
              <p className="text-sm font-bold">{item.itemABV}</p>
            </div>
            <span className="text-center">{item.priceSmall}</span>
            <span className="text-center">{item.priceLarge}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
