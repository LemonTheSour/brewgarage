// Every photo the site uses, imported statically.
//
// Static imports let Next.js read each image's size at build time and
// generate a tiny blurred preview (blurDataURL). Components use that with
// `placeholder="blur"`, so a photo appears instantly as a soft preview and
// sharpens when the full image arrives, instead of popping in from blank.
//
// Data files keep plain paths like "/images/pizza.jpg"; getImage() maps
// them to the imported image. Add new photos here when you add them to
// public/images.
import type { StaticImageData } from "next/image";

import brewGarage from "../../public/images/Brew-Garage.png";
import contact from "../../public/images/contact.jpg";
import grapes from "../../public/images/grapes.jpg";
import greatMerch from "../../public/images/Great_merch.jpg";
import homeBrew from "../../public/images/home_brew.jpg";
import merch2 from "../../public/images/Merch2.jpg";
import nibbles from "../../public/images/nibbles.jpg";
import outdoors from "../../public/images/outdoors.jpg";
import pizza from "../../public/images/pizza.jpg";
import tanks from "../../public/images/tanks.jpg";
import tanksPour from "../../public/images/tanks-pour.jpg";
import theCrew from "../../public/images/the_crew.jpg";

const images: Record<string, StaticImageData> = {
  "/images/Brew-Garage.png": brewGarage,
  "/images/contact.jpg": contact,
  "/images/grapes.jpg": grapes,
  "/images/Great_merch.jpg": greatMerch,
  "/images/home_brew.jpg": homeBrew,
  "/images/Merch2.jpg": merch2,
  "/images/nibbles.jpg": nibbles,
  "/images/outdoors.jpg": outdoors,
  "/images/pizza.jpg": pizza,
  "/images/tanks.jpg": tanks,
  "/images/tanks-pour.jpg": tanksPour,
  "/images/the_crew.jpg": theCrew,
};

export function getImage(path: string): StaticImageData {
  const img = images[path];
  if (!img) {
    throw new Error(`Image "${path}" is not registered in src/lib/images.ts`);
  }
  return img;
}
