"use client";

import { useEffect } from "react";

type IdleWindow = Window & {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
};

// Downloads images in the background after the current page has fully
// loaded and the browser is idle, so it never competes with what the
// visitor is looking at. Skipped when the visitor has Data Saver on.
export default function PreloadImages({ srcSets, sizes }: { srcSets: string[]; sizes: string }) {
  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (conn?.saveData) return;

    let cancelled = false;
    const run = () => {
      if (cancelled) return;
      for (const srcSet of srcSets) {
        const img = new Image();
        img.decoding = "async";
        img.sizes = sizes; // must be set before srcset so the right width is chosen
        img.srcset = srcSet;
      }
    };
    const whenIdle = () => {
      const w = window as IdleWindow;
      if (w.requestIdleCallback) w.requestIdleCallback(run, { timeout: 3000 });
      else setTimeout(run, 1500); // Safari has no requestIdleCallback
    };

    if (document.readyState === "complete") whenIdle();
    else window.addEventListener("load", whenIdle, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("load", whenIdle);
    };
  }, [srcSets, sizes]);

  return null;
}
