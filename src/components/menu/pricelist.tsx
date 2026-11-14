import type { DrinkList } from "@/types/types";

// Drinks table: name + description on the left, two size/price columns.
export default function Pricelist({ pricelist, id }: { pricelist: DrinkList; id?: string }) {
  const cols = "grid grid-cols-[1fr_4.5rem_4.5rem] gap-x-3 sm:grid-cols-[1fr_7rem_7rem]";
  return (
    <div id={id} className="mb-12 scroll-mt-32 last:mb-0 md:scroll-mt-20">
      <div className={`${cols} items-end border-b-2 border-ink pb-2`}>
        <h3 className="font-display text-3xl leading-none font-bold uppercase">{pricelist.title}</h3>
        <span className="text-center text-xs font-semibold uppercase tracking-wide text-ink/60">{pricelist.size1}</span>
        <span className="text-center text-xs font-semibold uppercase tracking-wide text-ink/60">{pricelist.size2}</span>
      </div>
      <ul className="divide-y divide-ink/10">
        {pricelist.itemList.map((item, i) => (
          <li key={i} className={`${cols} py-4`}>
            <div>
              <p className="font-semibold uppercase tracking-wide">{item.itemTitle}</p>
              <p className="mt-1 text-sm text-ink/70">{item.itemDescription}</p>
              <p className="mt-2 inline-block rounded-sm bg-brand/20 px-2 py-0.5 text-xs font-semibold">{item.itemABV}</p>
            </div>
            <span className="text-center font-semibold tabular-nums">{item.priceSmall}</span>
            <span className="text-center font-semibold tabular-nums">{item.priceLarge}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
