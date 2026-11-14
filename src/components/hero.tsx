import Image from "next/image";
import type { ReactNode } from "react";

interface HeroProps {
  image: string;
  title: string;
  /** Small amber line above the title. */
  eyebrow?: string;
  /** CSS object-position, e.g. "center" or "right top". */
  position?: string;
  /** "full" fills the screen (home page); "page" is shorter (inner pages). */
  size?: "full" | "page";
  children?: ReactNode;
}

// Full-bleed photo with a big condensed title. Always the first thing on a
// page, so the image is loaded with priority.
export default function Hero({
  image,
  title,
  eyebrow,
  position = "center",
  size = "page",
  children,
}: HeroProps) {
  const height =
    size === "full"
      ? "h-[calc(100vh-3rem)] min-h-[32rem] md:h-[calc(100vh-2rem)]"
      : "h-[55vh] min-h-80 md:h-[70vh]";

  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden bg-ink ${height}`}
    >
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
      {/* Darken top (behind the desktop nav) and bottom for legible text. */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70" />

      <div className="relative flex flex-col items-center px-6 pt-10 text-center text-white md:pt-24">
        {eyebrow && <p className="font-display text-lg uppercase tracking-[0.3em] text-brand md:text-xl">{eyebrow}</p>}
        <h1 className="font-display text-6xl leading-none font-bold uppercase tracking-wide drop-shadow-lg md:text-8xl lg:text-9xl">
          {title}
        </h1>
        <span className="mt-4 block h-1 w-16 bg-brand" aria-hidden="true" />
        {children}
      </div>
    </section>
  );
}
