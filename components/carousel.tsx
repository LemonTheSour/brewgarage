"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Carousel({
  children: slides,
}: Readonly<{ children: React.ReactNode[] }>) {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr == 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr == slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="w-5/6 relative overflow-hidden">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 25}%)` }}
      >
        {slides}
      </div>
      <div className="flex justify-between items-center absolute inset-0">
        <button onClick={prev} className="mb-16 rounded-full shadow bg-white">
          <Icon icon="material-symbols:chevron-left" width="30" height="30" />
        </button>
        <button onClick={next} className="mb-16 rounded-full shadow bg-white">
          <Icon icon="material-symbols:chevron-right" width="30" height="30" />
        </button>
      </div>
    </div>
  );
}
