import { phoneInternational, site, siteUrl, socialProfiles } from "@/lib/site";

// schema.org description of the business as JSON-LD. Search engines use it for
// rich results (address, opening hours, phone) and to link the site to its
// Google Business Profile and social accounts.
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Brewery",
    name: site.name,
    description: site.description,
    url: siteUrl.href,
    image: new URL("/og-image.jpg", siteUrl).href,
    logo: new URL("/icons/icon-512.png", siteUrl).href,
    telephone: phoneInternational,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street.streetAddress,
      addressLocality: site.street.suburb,
      addressRegion: site.street.state,
      postalCode: site.street.postcode,
      addressCountry: "AU",
    },
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: h.opens,
      closes: h.closes,
    })),
    hasMenu: new URL("/menu", siteUrl).href,
    servesCuisine: ["Pizza", "Craft beer"],
    ...(socialProfiles.length ? { sameAs: socialProfiles } : {}),
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so the JSON can never close the script tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
