export type PropertyType =
  | "Apartment"
  | "Villa"
  | "Chalet"
  | "Twin House"
  | "Townhouse"
  | "Penthouse"
  | "Studio"
  | "Office";

export interface IndexEntry {
  no: string;
  name: string;
  corridor: string;
  developer: string;
  area: "North Coast" | "New Cairo" | "Sheikh Zayed" | "Dubai";
  image: string;
  line: string;
}

export interface Chapter {
  no: string;
  name: string;
  developer: string;
  location: string;
  area: string;
  statement: string;
  frames: { src: string; alt: string }[];
  facts: { label: string; value: string }[];
}

export interface CoastStop {
  km: string;
  name: string;
  character: string;
  compounds: string[];
  image: string;
}

export interface Story {
  tag: string;
  date: string;
  title: string;
  excerpt: string;
}

export interface CalEvent {
  date: string;
  title: string;
  place: string;
}

// Factual base: names, places, developers, services and figures below are taken
// from public pages on element-realestate.com (home, /sell, /contact, /coast,
// news & events). No unit prices, availability, awards or returns are claimed.
export const contact = {
  hotline: "17488",
  telHref: "tel:17488",
  whatsappDisplay: "+20 124 009 6954",
  whatsappHref: "https://wa.me/201240096954",
  whatsappHours: "Every day · 9am – 9pm",
  email: "hello@element-realestate.com",
  hubs: ["New Cairo", "Sheikh Zayed", "Dubai"],
  callbackNote:
    "An Element consultant for that exact project replies within two hours."
};

export const deskStats = [
  { value: "6,580+", label: "Live market listings priced" },
  { value: "753", label: "Compounds tracked" },
  { value: "Weekly", label: "Price data refresh" }
];

export const sellPoints = [
  "Active buyers across Egypt and the GCC",
  "Zero listing fees",
  "Photography that sells the unit",
  "One consultant, end to end"
];

export const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2100&q=70",
    alt: "White sand bay on the North Coast",
    place: "Marassi",
    coord: "km 129 · Sidi Abdelrahman"
  },
  {
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2100&q=70",
    alt: "Modern villa at dusk",
    place: "Soul",
    coord: "Ras El Hekma · km 185"
  },
  {
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2100&q=70",
    alt: "Dubai marina skyline",
    place: "Downtown Dubai",
    coord: "Gulf buying desk"
  }
];

export const indexEntries: IndexEntry[] = [
  {
    no: "01",
    name: "Marassi",
    corridor: "Sidi Abdelrahman · km 129",
    developer: "Emaar",
    area: "North Coast",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=65",
    line: "Marina, golf and the address beach."
  },
  {
    no: "02",
    name: "Soul",
    corridor: "Ras El Hekma · km 185",
    developer: "Emaar",
    area: "North Coast",
    image:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1200&q=65",
    line: "Bay-first planning on clear water."
  },
  {
    no: "03",
    name: "Hacienda Bay",
    corridor: "Sidi Abdelrahman · km 143",
    developer: "Palm Hills",
    area: "North Coast",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=65",
    line: "Palm courts, golf edge, family rhythm."
  },
  {
    no: "04",
    name: "West Cairo",
    corridor: "Sheikh Zayed · New Zayed",
    developer: "Ora · Sodic · Hyde Park",
    area: "Sheikh Zayed",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=65",
    line: "Villa streets lived in year-round."
  },
  {
    no: "05",
    name: "New Cairo",
    corridor: "Fifth Settlement · park districts",
    developer: "Sodic · Misr Italia · Ora",
    area: "New Cairo",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=65",
    line: "Park-facing apartments, ready corridors."
  },
  {
    no: "06",
    name: "Dubai Corridor",
    corridor: "Lagoons · Downtown · serviced stock",
    developer: "DAMAC · Emaar · Sobha",
    area: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=65",
    line: "Handled from Cairo, priced in AED."
  }
];

export const chapters: Chapter[] = [
  {
    no: "01",
    name: "Marassi",
    developer: "Emaar",
    location: "Sidi Abdelrahman · North Coast · km 129",
    area: "North Coast",
    statement: "The marina opens the day. The address beach closes it.",
    frames: [
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=70",
        alt: "Marassi bay and beachfront"
      },
      {
        src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=70",
        alt: "Waterfront villa exterior"
      }
    ],
    facts: [
      { label: "Shoreline", value: "Marina · golf · address beach" },
      { label: "Stock", value: "Chalets · villas · apartments" },
      { label: "Desk", value: "EGP · USD · SAR · AED" }
    ]
  },
  {
    no: "02",
    name: "Soul",
    developer: "Emaar",
    location: "Ras El Hekma · North Coast · km 185",
    area: "North Coast",
    statement: "Low lines, white water — the quiet side of the Sahel.",
    frames: [
      {
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1800&q=70",
        alt: "Turquoise bay at Ras El Hekma"
      },
      {
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=70",
        alt: "Contemporary residence with pool"
      }
    ],
    facts: [
      { label: "Water", value: "The clearest bay of the Coast" },
      { label: "Stock", value: "Chalets · twin houses · standalones" },
      { label: "Access", value: "Registered-buyer previews" }
    ]
  },
  {
    no: "03",
    name: "West Cairo",
    developer: "Ora · Sodic · Hyde Park",
    location: "Sheikh Zayed · New Zayed",
    area: "Sheikh Zayed",
    statement: "Schools, clubs and villa streets — luxury with a weekday.",
    frames: [
      {
        src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1800&q=70",
        alt: "Villa street in West Cairo"
      },
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=70",
        alt: "Refined residential interior"
      }
    ],
    facts: [
      { label: "Setting", value: "Schools · clubs · retail spine" },
      { label: "Stock", value: "Villas · penthouses · apartments" },
      { label: "Rhythm", value: "Year-round, not seasonal" }
    ]
  }
];

export const coastStops: CoastStop[] = [
  {
    km: "km 02",
    name: "Alexandria",
    character: "The city coast. Weekend rhythm, corniche light.",
    compounds: ["Montaza edge", "King Mariout"],
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=65"
  },
  {
    km: "km 90",
    name: "Hacienda",
    character: "First proper bays. Palm courts and family compounds.",
    compounds: ["Hacienda Bay", "Hacienda Red"],
    image:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=65"
  },
  {
    km: "km 129",
    name: "Marassi",
    character: "The marina heart. Golf fairways meet the address beach.",
    compounds: ["Marassi", "Amwaj"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=65"
  },
  {
    km: "km 185",
    name: "Ras El Hekma",
    character: "White water. New masterplans on the clearest bay.",
    compounds: ["Soul", "Mountain View", "Hyde Park corridor"],
    image:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1200&q=65"
  },
  {
    km: "km 230",
    name: "Sidi Heneish",
    character: "The quiet headland. Low density, long horizon.",
    compounds: ["Caesar", "Samou Bay edge"],
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=65"
  }
];

export const stories: Story[] = [
  {
    tag: "Market",
    date: "June 2026",
    title: "Sahel closes the season above last summer",
    excerpt:
      "Primary inventory along the North Coast cleared faster than any season since 2019 — the breakdown by developer and sub-region, as published by Element."
  },
  {
    tag: "Allocation",
    date: "June 2026",
    title: "Ras El Hekma previews open to registered buyers first",
    excerpt:
      "Selected phases reach Element-registered buyers before public launch — the list is the access."
  },
  {
    tag: "West Cairo",
    date: "May 2026",
    title: "A 220-acre masterplan enters Sheikh Zayed",
    excerpt:
      "Mixed-use community with school and retail spine. Registration now open through the network."
  },
  {
    tag: "Finance",
    date: "May 2026",
    title: "Mortgage rates move. Payment plans answer.",
    excerpt:
      "What the rate cut actually changes on a financed unit — and where developer plans still win."
  }
];

export const calendar: CalEvent[] = [
  {
    date: "Sep 11–12",
    title: "Binghatti Dubai Investment Expo",
    place: "JW Marriott, Fifth Settlement"
  },
  {
    date: "Aug 01–02",
    title: "Sahel open-house weekend",
    place: "Marassi north gate"
  },
  {
    date: "Jun 26–28",
    title: "Dubai property showcase",
    place: "Nile Ritz-Carlton · DAMAC · Emaar · Sobha"
  }
];
