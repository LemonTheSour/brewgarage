import type { Snacks } from "@/types/types";

export default function Snacklist({ snacklist }: { snacklist: Snacks }) {
  return (
    <div>
      <h3 className="border-b border-neutral-300 pb-2 text-2xl font-bold">
        {snacklist.title}
      </h3>
      <p className="pt-2 text-xs text-neutral-700">{snacklist.description}</p>
      <ul>
        {snacklist.snacks.map((item) => (
          <li key={item} className="pt-3 font-bold">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
