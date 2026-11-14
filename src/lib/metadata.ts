import type { Metadata } from "next";
import { site } from "./site";

// Builds a page's metadata: title, description, canonical URL and the Open
// Graph / X share card. Next.js doesn't copy a page's title into its share
// card, and a page that sets its own Open Graph details stops inheriting the
// root share image, so every page goes through this helper.

const shareImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Brew Garage: the bar with copper lights and barrels, with the hop logo and the words Craft beer, Wine, Pizza, East Vic Park.",
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: `/${string}`;
}): Metadata {
  const shareTitle = title ? `${title} | ${site.name}` : site.name;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_AU",
      siteName: site.name,
      url: path,
      title: shareTitle,
      description,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [shareImage],
    },
  };
}
