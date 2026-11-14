import type { MetadataRoute } from "next";
import { navLinks } from "@/lib/navigation";
import { siteUrl } from "@/lib/site";

// /sitemap.xml: every page in the site navigation, for search engines.
export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map((link) => ({
    url: new URL(link.href, siteUrl).href,
    changeFrequency: "monthly",
    priority: link.href === "/" ? 1 : 0.7,
  }));
}
