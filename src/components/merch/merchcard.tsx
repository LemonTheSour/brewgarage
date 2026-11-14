import Image from "next/image";
import type { MerchItem } from "@/types/types";

export default function MerchCard({ title, price, img }: MerchItem) {
  return (
    <article className="h-full overflow-hidden rounded-md bg-white shadow-md">
      <div className="relative aspect-[3/4]">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="p-2">
        <h3 className="text-sm font-bold sm:text-base">{title}</h3>
        <p>{price}</p>
      </div>
    </article>
  );
}
