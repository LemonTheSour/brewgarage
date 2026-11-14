import Image from "next/image";
import { getImage } from "@/lib/images";
import type { MerchItem } from "@/types/content";

export default function MerchCard({ title, price, image }: MerchItem) {
  return (
    <article className="group h-full overflow-hidden rounded-sm bg-white shadow-sm">
      <div className="relative aspect-[3/4]">
        <Image
          src={getImage(image)}
          placeholder="blur"
          alt={title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-3">
        <h3 className="font-display text-xl leading-tight font-semibold uppercase">{title}</h3>
        <p className="font-semibold text-brand-dark">{price}</p>
      </div>
    </article>
  );
}
