import Image from "next/image";
import Link from "next/link";
import { getImage } from "@/lib/images";
import type { FeatureItem } from "@/types/content";

// Photo card linking to another page, with its title over a dark gradient.
export default function FeatureCard({ title, blurb, image, link }: FeatureItem) {
  return (
    <Link
      href={link}
      className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-sm bg-ink md:aspect-[3/4]"
    >
      <Image
        src={getImage(image)}
        placeholder="blur"
        alt=""
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <div className="relative p-6 text-white">
        <h3 className="font-display text-4xl leading-none font-bold uppercase">{title}</h3>
        <p className="mt-2 text-white/85">{blurb}</p>
        <span className="mt-3 inline-block font-display text-lg tracking-wider text-brand uppercase">
          Find out{" "}
          <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
