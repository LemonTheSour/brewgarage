import type { SnackMenu } from "@/types/content";

export default function SnackList({ menu, id }: { menu: SnackMenu; id?: string }) {
  return (
    <div id={id} className="scroll-mt-32 md:scroll-mt-20">
      <h3 className="border-b-2 border-ink pb-2 font-display text-3xl leading-none font-bold uppercase">
        {menu.title}
      </h3>
      <ul className="divide-y divide-ink/10">
        {menu.snacks.map((item) => (
          <li key={item} className="py-4 font-semibold">
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-4 rounded-sm border-l-4 border-brand bg-white p-4 text-sm text-ink/80">
        {menu.description}
      </p>
    </div>
  );
}
