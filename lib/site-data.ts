export const SITE = {
  name: "Fix My Old Backyard",
  phone: "1-800-381-5900",
  phoneHref: "tel:+18003815900",
  email: "billd@inetzter.com",
  emailHref: "mailto:billd@inetzter.com",
  tagline: "Learn Before You Build. Fix Your Old Backyard the Right Way.",
};

export const NAV_LINKS = [
  { href: "/guides", label: "Guides" },
  { href: "/driveways", label: "Driveways & Front Yards" },
  { href: "/decks", label: "Decks & Coatings" },
  { href: "/patio-covers", label: "Patio Covers" },
  { href: "/bbq-islands", label: "BBQ Islands" },
  { href: "/pool-remodels", label: "Pool Remodels" },
  { href: "/blog", label: "Articles" },
  { href: "/3d-design", label: "3-D Design" },
];

// The BBQing with Billy book. The buy button goes to bbqingwithbilly.com,
// which holds the current checkout link (Payhip or Shopify).
export const BOOK = {
  title: "Backyard Design and BBQing with Billy",
  tagline: "Build it right. Cook it right. Then pour yourself a drink.",
  cover: "/images/bbq-book-cover.jpg",
  url: "https://bbqingwithbilly.com/?ref=fmob",
  price: "$19.95",
  regularPrice: "$39.95",
  points: [
    "6 design chapters: planning, surfaces, patio covers, outdoor kitchens, features, finishing touches",
    "175+ recipes for the grill, smoker, griddle and pizza oven",
    "Real job photos, real costs, and the mistakes to avoid",
  ],
};

// Fix My Old guides. Add a buyUrl (Payhip link) when a guide goes on sale;
// until then the card shows "Coming soon" with an email-me link.
export type Guide = {
  number: number;
  title: string;
  subtitle: string;
  cover?: string;
  pages?: string;
  price: string;
  buyUrl?: string;
  topics: string[];
};

export const GUIDES: Guide[] = [
  {
    number: 1,
    title: "The Outdoor Kitchen Guide",
    subtitle: "Planning, Appliances & Building It Right",
    cover: "/images/guide-outdoor-kitchen.jpg",
    pages: "23 pages",
    price: "$12.95",
    buyUrl: "https://payhip.com/b/op25v",
    topics: ["Costs", "Layout", "Appliances", "Permits", "Checklist"],
  },
  {
    number: 2,
    title: "The Patio Cover Guide",
    subtitle: "Shade, Style & Building It Right",
    cover: "/images/guide-patio-cover.jpg",
    pages: "19 pages",
    price: "$14.95",
    topics: ["Costs", "Cover types", "Permits", "Fans & lights", "Checklist"],
  },
  {
    number: 3,
    title: "The Landscaping Guide",
    subtitle: "Coming next in the series",
    price: "$14.95",
    topics: ["Plants", "Irrigation", "Turf", "Lighting"],
  },
  {
    number: 4,
    title: "The Pool Remodel Guide",
    subtitle: "Coming next in the series",
    price: "$14.95",
    topics: ["Resurfacing", "Coping", "Decking", "Equipment"],
  },
];

export const DESIGN_OFFER = {
  price: "$125",
  revisions: 2,
  emailHref:
    "mailto:billd@inetzter.com?subject=3-D%20Backyard%20Design%20Request&body=Name%3A%0AProject%20address%20(city)%3A%0APhone%3A%0AWhat%20you%20want%20to%20build%3A%0AApprox.%20yard%20size%3A%0A%0APlease%20attach%203-5%20photos%20of%20your%20yard.",
};
