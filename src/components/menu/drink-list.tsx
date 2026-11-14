import type { DrinkMenu } from "@/types/content";

// Drinks table: name + description on the left, two size/price columns.
const columns = "grid grid-cols-[1fr_4.5rem_4.5rem] gap-x-3 sm:grid-cols-[1fr_7rem_7rem]";

export default function DrinkList({ menu, id }: { menu: DrinkMenu; id?: string }) {
  return (
    <div id={id} className="mb-12 scroll-mt-32 last:mb-0 md:scroll-mt-20">
      <div className={`${columns} items-end border-b-2 border-ink pb-2`}>
        <h3 className="font-display text-3xl leading-none font-bold uppercase">{menu.title}</h3>
        <span className="text-center text-xs font-semibold uppercase tracking-wide text-ink/60">{menu.size1}</span>
        <span className="text-center text-xs font-semibold uppercase tracking-wide text-ink/60">{menu.size2}</span>
      </div>
      <ul className="divide-y divide-ink/10">
        {menu.itemList.map((item, i) => (
          <li key={i} className={`${columns} py-4`}>
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
