import Image from "next/image";
import type { AboutItem } from "@/types/types";

export default function AboutCard({ img, imgAlt, title, body }: AboutItem) {
  return (
    <article className="overflow-hidden rounded-md bg-white shadow-md">
      <div className="relative aspect-[4/3]">
        <Image
          src={img}
          alt={imgAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 80vw, 100vw"
          className="object-cover"
        />
      </div>
      <h3 className="p-4 pb-2 text-2xl font-bold">{title}</h3>
      <p className="p-4 pt-0">{body}</p>
    </article>
  );
}
