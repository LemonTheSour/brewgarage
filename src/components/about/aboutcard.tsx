import Image from "next/image";
import { getImage } from "@/lib/images";
import type { AboutItem } from "@/types/types";

// Photo + story row. On wider screens the photo alternates sides.
export default function AboutCard({
  img,
  imgAlt,
  title,
  body,
  index,
}: AboutItem & { index: number }) {
  const flip = index % 2 === 1;
  return (
    <article className="grid items-center gap-6 md:grid-cols-2 md:gap-12">
      <div className={`relative aspect-[4/3] overflow-hidden rounded-sm ${flip ? "md:order-2" : ""}`}>
        <Image
          src={getImage(img)}
          placeholder="blur"
          alt={imgAlt}
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
