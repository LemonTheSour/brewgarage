// Business details shown across the site: name, address, hours, contacts.
// Edit them here and every page picks them up. Navigation is in navigation.ts.

const street = {
  streetAddress: "20 Milford St",
  suburb: "East Victoria Park",
  state: "WA",
  postcode: "6101",
} as const;

export const site = {
  name: "Brew Garage",
  tagline: "Craft beer · Wine · Pizza",
  description: "Neighbourhood craft brewery in East Victoria Park, WA.",
  street,
  address: `${street.streetAddress}, ${street.suburb} ${street.state} ${street.postcode}`,
  phone: "0486 035 890",
  // `opens`/`closes` are 24-hour times for search engines; `time` is what visitors see.
  hours: [
    { day: "Thursday", time: "4 – 10pm", opens: "16:00", closes: "22:00" },
    { day: "Friday", time: "1 – 10pm", opens: "13:00", closes: "22:00" },
    { day: "Saturday", time: "12 – 10pm", opens: "12:00", closes: "22:00" },
  ],
  // TODO: add the real profile URLs. Empty values render as plain icons.
  socials: {
    instagram: "",
    facebook: "",
    email: "",
  },
} as const;

// The site's public address, used for canonical URLs, the sitemap and share
// previews. Set NEXT_PUBLIC_SITE_URL (e.g. https://brewgarage.com.au) once the
// domain is live; until then Vercel's production URL is used.
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
);

export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.name}, ${site.address}`,
)}`;

export const phoneHref = `tel:${site.phone.replace(/\s+/g, "")}`;

/** Phone number in international format, e.g. +61486035890. */
export const phoneInternational = `+61${site.phone.replace(/\s+/g, "").replace(/^0/, "")}`;

export const socialProfiles = [site.socials.instagram, site.socials.facebook].filter(Boolean);
