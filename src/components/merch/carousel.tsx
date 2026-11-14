"use client";

import { useRef, type ReactNode } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";

// Swipeable row of cards with previous/next buttons. Wraps around at either end.
export default function Carousel({ label, children }: { label: string; children: ReactNode[] }) {
  const track = useRef<HTMLUListElement>(null);

  const scroll = (dir: -1 | 1) => {
    const el = track.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const atStart = el.scrollLeft <= 4;
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else if (dir === -1 && atStart) el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    else el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  const btn =
    "absolute top-1/3 z-10 rounded-full bg-ink/80 p-1 text-white shadow-md transition hover:bg-brand hover:text-ink";

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label} className="relative">
      <ul
        ref={track}
        className="no-scrollbar flex snap-x snap-mandatory scroll-px-1 gap-4 overflow-x-auto px-1 py-2"
      >
        {children.map((child, i) => (
          <li
            key={i}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${children.length}`}
            className="w-[calc((100%-1rem)/2)] shrink-0 snap-start sm:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/4)]"
          >
            {child}
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => scroll(-1)} aria-label="Previous items" className={`${btn} -left-2`}>
        <ChevronLeftIcon size={28} />
      </button>
      <button type="button" onClick={() => scroll(1)} aria-label="Next items" className={`${btn} -right-2`}>
        <ChevronRightIcon size={28} />
      </button>
    </div>
  );
}
