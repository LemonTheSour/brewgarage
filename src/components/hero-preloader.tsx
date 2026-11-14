import { getImageProps } from "next/image";
import { getImage } from "@/lib/images";
import home from "@/data/home.json";
import heroes from "@/data/titlecards.json";
import PreloadImages from "./preload-images";

// Warms the browser cache with every page's hero photo, so moving between
// pages shows the hero straight away instead of loading it on arrival.
//
// getImageProps() builds exactly the same srcSet that <Hero> renders (same
// image, `fill`, sizes="100vw", default quality), so the browser picks the
// same file it will later need and reuses it from cache.
export default function HeroPreloader() {
  const paths = [home.hero.image, ...Object.values(heroes).map((h) => h.image)];
  const srcSets = [...new Set(paths)].map(
    (path) =>
      getImageProps({ src: getImage(path), alt: "", fill: true, sizes: "100vw" }).props
        .srcSet ?? "",
  );
  return <PreloadImages srcSets={srcSets.filter(Boolean)} sizes="100vw" />;
}
