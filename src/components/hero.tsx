import Image from "next/image";
import type { ReactNode } from "react";

interface HeroProps {
  image: string;
  title: string;
  /** CSS object-position, e.g. "center" or "right top". */
  position?: string;
  /** Use for the first hero on a page so it loads immediately. */
  priority?: boolean;
  /** Render the title as the page's <h1> (default) or an <h2>. */
  as?: "h1" | "h2";
  children?: ReactNode;
}

// Full-bleed photo with a centred title. Replaces TitleCard and HomeCard,
// which built Tailwind class names from JSON (fragile, and unoptimised CSS
// background images). next/image serves resized WebP/AVIF per device.
export default function Hero({
  image,
  title,
  position = "center",
  priority = false,
  as: Heading = "h1",
  children,
}: HeroProps) {
  return (
    <section className="relative flex h-[70vh] min-h-80 items-center justify-center overflow-hidden bg-neutral-800 md:h-[calc(100vh-2rem)]">
      <Image
        src={image}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover brightness-75"
        style={{ objectPosition: position }}
      />
      <div className="relative flex flex-col items-center px-4 text-center text-white">
        <Heading className="text-4xl font-bold drop-shadow md:text-6xl">{title}</Heading>
        {children}
      </div>
    </section>
  );
}
