import type { Snacks } from "@/types/types";

export default function Snacklist({ snacklist, id }: { snacklist: Snacks; id?: string }) {
  return (
    <div id={id} className="scroll-mt-32 md:scroll-mt-20">
      <h3 className="border-b-2 border-ink pb-2 font-display text-3xl leading-none font-bold uppercase">
        {snacklist.title}
      </h3>
      <ul className="divide-y divide-ink/10">
        {snacklist.snacks.map((item) => (
          <li key={item} className="py-4 font-semibold">
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-4 rounded-sm border-l-4 border-brand bg-white p-4 text-sm text-ink/80">
        {snacklist.description}
      </p>
    </div>
  );
}
