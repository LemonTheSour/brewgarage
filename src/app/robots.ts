import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// /robots.txt: allow all crawlers on production, and point them to the sitemap.
// Preview deployments are kept out of search results.
export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : true;
  return isProduction
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: new URL("/sitemap.xml", siteUrl).href }
    : { rules: { userAgent: "*", disallow: "/" } };
}
