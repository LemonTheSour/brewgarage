// Business details shown across the site: name, address, hours, contacts.
// Edit them here and every page picks them up. Navigation is in navigation.ts.

export const site = {
  name: "Brew Garage",
  tagline: "Craft beer · Wine · Pizza",
  description: "Neighbourhood craft brewery in East Victoria Park, WA.",
  address: "20 Milford St, East Victoria Park WA 6101",
  mapsQuery: "Brew Garage, 20 Milford St, East Victoria Park WA 6101",
  phone: "0486 035 890",
  hours: [
    { day: "Thursday", time: "4 – 10pm" },
    { day: "Friday", time: "1 – 10pm" },
    { day: "Saturday", time: "12 – 10pm" },
  ],
  // TODO: add the real profile URLs. Empty values render as plain icons.
  socials: {
    instagram: "",
    facebook: "",
    email: "",
  },
} as const;

export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;

export const phoneHref = `tel:${site.phone.replace(/\s+/g, "")}`;
