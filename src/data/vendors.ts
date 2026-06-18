export type Vendor = {
  slug: string;
  name: string;
  blurb: string;
  longBlurb: string;
  handle: string;
  cuisine: string;
  signature: string;
  origin: string;
  /** Placeholder hue from the palette; used as the base layer behind cover. */
  tone: string;
  /** Real vendor cover photo (supplied by the vendors, June 2026). */
  cover?: string;
  /** Tailwind object-position utility for the cover (default centered). Use
   *  e.g. "object-bottom" when the important part of the photo (a logo) sits at
   *  an edge and should survive the object-cover crop. */
  coverPosition?: string;
};

export const VENDORS: Vendor[] = [
  {
    slug: "moto-pizza",
    name: "MOTO Pizza",
    cuisine: "Pizza",
    origin: "Seattle, WA",
    handle: "@motopizzashop",
    signature: "“Odd pizza” — Detroit, NY, Roman, and Filipino crossovers",
    blurb:
      "First out-of-state outpost for Seattle's acclaimed “odd pizza” — Detroit, NY, and Roman styles meet Filipino influences.",
    longBlurb:
      "MOTO Pizza built its reputation in Seattle by refusing to pick a lane. Detroit-style edges, New York foldability, Roman al taglio, and bright Filipino flavor crossovers share a menu that earns them the name “odd pizza.” Global Fork is their first out-of-state outpost — a chance to see what happens when this restless creativity meets a San Diego plaza.",
    tone: "var(--color-clay-deep)",
    cover: "/photos/vendors/moto-pizza.jpg",
    // Logo sits at the bottom of the photo — anchor to bottom, crop from top.
    coverPosition: "object-bottom",
  },
  {
    slug: "cosmos-burger",
    name: "Cosmos Burger",
    cuisine: "Burgers",
    origin: "California",
    handle: "@burger.cosmos",
    signature: "Spicy Jam Burger · Monkey Fries",
    blurb:
      "Burgers built on bold flavor combinations. Home of the signature Spicy Jam Burger and the iconic Monkey Fries.",
    longBlurb:
      "Cosmos Burger is built around a single principle: bold flavor combinations done with serious ingredients. The Spicy Jam Burger and Monkey Fries are the headliners, but every plate gets the same care. Premium, unfussy, and confident — exactly the kind of food this plaza is here to gather around.",
    tone: "var(--color-spicy)",
    cover: "/photos/vendors/cosmos-burger.jpg",
    // Cover is a baked 5:4 crop (exact fit in the grid). In the wider 16:9 modal
    // it crops top/bottom — anchor to bottom so the board + bun bases survive and
    // the crop comes off the ceiling instead.
    coverPosition: "object-bottom",
  },
  {
    slug: "la-vida",
    name: "La Vida",
    cuisine: "Healthy · Bowls · Smoothies",
    origin: "San Diego, CA",
    handle: "@lavida.sandiego",
    signature: "All-day smoothies, salads, wraps, bowls",
    blurb:
      "San Diego’s healthy food brand where health meets happiness all day — smoothies, salads, wraps, bowls.",
    longBlurb:
      "La Vida was born in San Diego on the belief that eating well shouldn't feel like an obligation. Smoothies, salads, wraps, bowls — fresh ingredients, generous portions, and flavor that makes the healthy choice feel like the obvious one. Open early, open late, on the move with you.",
    tone: "var(--color-grove)",
    cover: "/photos/vendors/la-vida.jpg",
  },
  {
    slug: "lobster-lab",
    name: "Lobster Lab",
    cuisine: "Seafood · Lobster",
    origin: "Carlsbad, CA",
    handle: "@lobsterlab.us",
    signature: "Lobster Grilled Cheese · Yelp #1 Lobster Roll, San Diego 2024",
    blurb:
      "Carlsbad seafood concept serving the famed Lobster Grilled Cheese. Yelp’s #1 Lobster Roll in San Diego, 2024.",
    longBlurb:
      "Lobster Lab took the lobster roll seriously enough that Yelp named theirs the #1 in San Diego in 2024. The Lobster Grilled Cheese is the move that turned heads first — buttery, generous, and worth the drive from Carlsbad. They're bringing that same obsession with the basics to the plaza.",
    tone: "var(--color-tide)",
    cover: "/photos/vendors/lobster-lab.jpg",
  },
  {
    slug: "handels-ice-cream",
    name: "Handel’s Ice Cream",
    cuisine: "Ice Cream",
    origin: "Tradition",
    handle: "@handlesicecream",
    signature: "Handcrafted, made fresh daily",
    blurb:
      "Handcrafted ice cream rooted in tradition — fresh, high-quality flavors made daily for joyful moments.",
    longBlurb:
      "Handel's Ice Cream is the kind of place where the recipe hasn't changed because it doesn't need to. Handcrafted, fresh-made daily, and built on flavors that earn their permanent residency on the menu. The end-of-meal handshake — and reason kids drag their parents back across the plaza.",
    tone: "var(--color-misty)",
    cover: "/photos/vendors/handels-ice-cream.jpg",
  },
  {
    slug: "prik-ki-nu-thai-cuisine",
    name: "Prik Ki Nū Thai Cuisine",
    cuisine: "Thai",
    origin: "Tradition",
    handle: "@t.s.k_thaistylekitchen",
    signature: "Authentic Thai · everyday dining",
    blurb:
      "Authentic Thai flavors in a vibrant kitchen — fresh ingredients, bold recipes, warm everyday dining.",
    longBlurb:
      "Prik Ki Nū Thai Cuisine runs on fresh ingredients and bold, unmuddled recipes. Tradition without nostalgia — food that's been refined enough to feel everyday but never simplified into something it isn't. Vibrant, warm, and the section of the menu you'll keep coming back to.",
    tone: "var(--color-harvey)",
    cover: "/photos/vendors/prik-ki-nu-thai.jpg",
  },
];

export function getVendor(slug: string): Vendor | undefined {
  return VENDORS.find((v) => v.slug === slug);
}
