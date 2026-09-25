export type PropertyType =
  | "Apartment"
  | "Villa"
  | "Chalet"
  | "Twin House"
  | "Townhouse"
  | "Penthouse"
  | "Studio"
  | "Office";

export interface Property {
  id: string;
  name: string;
  compound: string;
  area: "North Coast" | "New Cairo" | "Sheikh Zayed" | "Dubai" | "Ain Sokhna";
  developer: string;
  type: PropertyType;
  beds: number;
  baths: number;
  sizeSqm: number;
  priceBand: "Under 10M EGP" | "10–20M EGP" | "20–40M EGP" | "40M+ EGP" | "POA Dubai";
  image: string;
  note: string;
}

export interface Development {
  id: string;
  name: string;
  corridor: string;
  developer: string;
  character: string;
  image: string;
}

export interface CoastStop {
  km: string;
  name: string;
  character: string;
  compounds: string[];
}

export interface EditorialItem {
  tag: string;
  date: string;
  title: string;
  excerpt: string;
}

// All place / developer / service names below are taken from public pages on element-realestate.com.
// No specific unit prices, availability counts or awards are claimed — bands mirror the site's own filter bands.
export const properties: Property[] = [
  {
    id: "marassi-chalet",
    name: "Sea-facing chalet row",
    compound: "Marassi",
    area: "North Coast",
    developer: "Emaar",
    type: "Chalet",
    beds: 3,
    baths: 3,
    sizeSqm: 185,
    priceBand: "20–40M EGP",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=70",
    note: "North gate, marina walk distance"
  },
  {
    id: "soul-villa",
    name: "Dune-line standalone",
    compound: "Soul",
    area: "North Coast",
    developer: "Emaar",
    type: "Villa",
    beds: 5,
    baths: 6,
    sizeSqm: 420,
    priceBand: "40M+ EGP",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=70",
    note: "Ras El Hekma bay front"
  },
  {
    id: "hacienda-twin",
    name: "Palm-court twin house",
    compound: "Hacienda Bay",
    area: "North Coast",
    developer: "Palm Hills",
    type: "Twin House",
    beds: 4,
    baths: 4,
    sizeSqm: 280,
    priceBand: "20–40M EGP",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=70",
    note: "Golf edge, private garden"
  },
  {
    id: "newcairo-apt",
    name: "Park-overlooking apartment",
    compound: "New Cairo",
    area: "New Cairo",
    developer: "Sodic",
    type: "Apartment",
    beds: 3,
    baths: 3,
    sizeSqm: 195,
    priceBand: "10–20M EGP",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=70",
    note: "Ready corridor, park view"
  },
  {
    id: "zayed-pent",
    name: "West-crown penthouse",
    compound: "Sheikh Zayed",
    area: "Sheikh Zayed",
    developer: "Ora",
    type: "Penthouse",
    beds: 4,
    baths: 4,
    sizeSqm: 310,
    priceBand: "20–40M EGP",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=70",
    note: "Roof terrace, zayed skyline"
  },
  {
    id: "dubai-onebed",
    name: "Serviced one-bedroom",
    compound: "Dubai Lagoons corridor",
    area: "Dubai",
    developer: "DAMAC",
    type: "Apartment",
    beds: 1,
    baths: 2,
    sizeSqm: 62,
    priceBand: "POA Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=70",
    note: "Post-handover plan corridor"
  }
];

export const developments: Development[] = [
  {
    id: "marassi",
    name: "Marassi",
    corridor: "Sidi Abdelrahman · km 129",
    developer: "Emaar",
    character: "Marina, golf and address beach — the Coast's most liquid resale market.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=70"
  },
  {
    id: "soul",
    name: "Soul",
    corridor: "Ras El Hekma · km 185",
    developer: "Emaar",
    character: "Low, luminous, bay-first planning on the clearest water of the Sahel.",
    image:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1400&q=70"
  },
  {
    id: "hekma-phase",
    name: "Ras El Hekma corridor",
    corridor: "Mountain View · Hyde Park releases",
    developer: "Multiple developers",
    character: "Where priority allocations open first to registered Element buyers.",
    image:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1400&q=70"
  },
  {
    id: "west",
    name: "West Cairo",
    corridor: "Sheikh Zayed · New Zayed",
    developer: "Ora · Sodic · Hyde Park",
    character: "Villa streets, schools and club edges — lived-in luxury, year-round.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=70"
  }
];

export const coastStops: CoastStop[] = [
  {
    km: "km 2–60",
    name: "Alexandria → Borg",
    character: "City coast, weekend rhythm.",
    compounds: ["Montaza edge", "King Mariout"]
  },
  {
    km: "km 60–125",
    name: "Sidi Krir → Hacienda",
    character: "First bays, family compounds.",
    compounds: ["Hacienda Bay", "Hacienda Red"]
  },
  {
    km: "km 125–165",
    name: "Marassi → Amwaj",
    character: "Marina heart of the Sahel.",
    compounds: ["Marassi", "Amwaj", "Soul (east)"]
  },
  {
    km: "km 165–210",
    name: "Ras El Hekma",
    character: "White water, new masterplans.",
    compounds: ["Soul", "Mountain View", "Hyde Park corridor"]
  },
  {
    km: "km 210+",
    name: "Sidi Heneish",
    character: "Quiet headland, low density.",
    compounds: ["Caesar", "Samou Bay edge"]
  }
];

export const editorial: EditorialItem[] = [
  {
    tag: "Market",
    date: "June 2026",
    title: "Sahel primary cleared faster than any season since 2019",
    excerpt:
      "As reported on element-realestate.com — breakdown by developer, sub-region and unit type."
  },
  {
    tag: "Allocation",
    date: "June 2026",
    title: "Priority access before public launch",
    excerpt: "Registered Element buyers see selected phases weeks before general release."
  },
  {
    tag: "West Cairo",
    date: "May 2026",
    title: "220-acre West Cairo masterplan enters Sheikh Zayed",
    excerpt: "Mixed-use community with school and retail spine — registration now open."
  },
  {
    tag: "Finance",
    date: "May 2026",
    title: "Mortgage rates move — what it changes on a real payment plan",
    excerpt: "Bank vs developer plans, worked through on a typical New Cairo ticket."
  }
];

export const contact = {
  hotline: "17488",
  telHref: "tel:17488",
  whatsapp: "+20 124 009 6954",
  whatsappHref: "https://wa.me/201240096954",
  email: "hello@element-realestate.com",
  hubs: ["New Cairo", "Sheikh Zayed", "Dubai"],
  promise: "An Element consultant for that exact project replies within two hours."
};

export const services = [
  {
    title: "Buy with the compound specialist",
    body: "You are routed to the consultant who actually knows the compound — floor, phase, wind, resale depth.",
    meta: "Search · Compare · Reserve"
  },
  {
    title: "Sell at a defensible number",
    body: "Instant estimate from live comparables, then a resale plan priced to move — not to sit.",
    meta: "Valuation · Listing · Closing"
  },
  {
    title: "Drive the Coast",
    body: "Alexandria to Sidi Heneish pinned on real geography. Fly the shoreline before you drive it.",
    meta: "Orbit view · True coordinates"
  },
  {
    title: "Gulf buying desk",
    body: "Flip the catalogue to SAR, AED or USD. Floor plans and payment plans handled from Cairo.",
    meta: "Dubai · DAMAC · Emaar · Sobha"
  }
];
