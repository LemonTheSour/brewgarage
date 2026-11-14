import Image from "next/image";
import { getImage } from "@/lib/images";
import type { AboutItem } from "@/types/content";

// Photo + story row. `reverse` puts the photo on the right on wider screens.
export default function AboutCard({
  image,
  imageAlt,
  title,
  body,
  reverse = false,
}: AboutItem & { reverse?: boolean }) {
  return (
    <article className="grid items-center gap-6 md:grid-cols-2 md:gap-12">
      <div className={`relative aspect-[4/3] overflow-hidden rounded-sm ${reverse ? "md:order-2" : ""}`}>
        <Image
          src={getImage(image)}
          placeholder="blur"
          alt={imageAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="font-display text-4xl leading-none font-bold uppercase md:text-5xl">{title}</h3>
        <p className="mt-4 text-lg leading-relaxed text-ink/80">{body}</p>
      </div>
    </article>
  );
}
