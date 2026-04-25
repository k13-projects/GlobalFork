import Image from "next/image";
import ElementIcon from "../ElementIcon";
import PatternOverlay from "../PatternOverlay";
import ScriptAccent from "../ScriptAccent";
import DiagonalCut from "../DiagonalCut";

type Vendor = {
  slug: string;
  name: string;
  blurb: string;
  handle: string;
  /** Placeholder image hue from the palette — replaced with real photography later. */
  tone: string;
};

const VENDORS: Vendor[] = [
  {
    slug: "moto-pizza",
    name: "MOTO Pizza",
    blurb:
      "First out-of-state outpost for Seattle's acclaimed “odd pizza” — Detroit, NY, and Roman styles meet Filipino influences.",
    handle: "@motopizzashop",
    tone: "var(--color-clay-deep)",
  },
  {
    slug: "cosmos-burger",
    name: "Cosmos Burger",
    blurb:
      "Burgers built on bold flavor combinations. Home of the signature Spicy Jam Burger and the iconic Monkey Fries.",
    handle: "@burger.cosmos",
    tone: "var(--color-spicy)",
  },
  {
    slug: "la-vida",
    name: "La Vida",
    blurb:
      "San Diego’s healthy food brand where health meets happiness all day — smoothies, salads, wraps, bowls.",
    handle: "@lavida.sandiego",
    tone: "var(--color-grove)",
  },
  {
    slug: "lobster-lab",
    name: "Lobster Lab",
    blurb:
      "Carlsbad seafood concept serving the famed Lobster Grilled Cheese. Yelp’s #1 Lobster Roll in San Diego, 2024.",
    handle: "@lobsterlab.us",
    tone: "var(--color-tide)",
  },
  {
    slug: "handels-ice-cream",
    name: "Handel’s Ice Cream",
    blurb:
      "Handcrafted ice cream rooted in tradition — fresh, high-quality flavors made daily for joyful moments.",
    handle: "@handlesicecream",
    tone: "var(--color-misty)",
  },
  {
    slug: "thai-style-kitchen",
    name: "Thai Style Kitchen",
    blurb:
      "Authentic Thai flavors in a vibrant kitchen — fresh ingredients, bold recipes, warm everyday dining.",
    handle: "@t.s.k_thaistylekitchen",
    tone: "var(--color-harvey)",
  },
];

export default function Vendors() {
  return (
    <section
      id="vendors"
      aria-label="Our Vendors"
      className="relative overflow-hidden bg-[var(--color-clay)] px-8 pt-24 pb-32 text-[var(--color-sand)]"
    >
      <PatternOverlay name="earth-white" size={520} opacity={0.1} />

      <div className="relative mx-auto max-w-7xl">
        <header className="flex flex-col items-center text-center">
          <ElementIcon name="community" variant="light" size={62} />
          <h2 className="mt-5 font-display text-4xl uppercase tracking-[0.08em] md:text-5xl">
            Our Vendors
          </h2>
        </header>

        <ul className="mt-14 grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
          {VENDORS.map((v) => (
            <li
              key={v.slug}
              className="group relative aspect-[4/3] overflow-hidden bg-[var(--color-iron-soft)]"
            >
              {/* Placeholder photo block — solid tone + subtle pattern, swapped for real photography later. */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ background: v.tone }}
              />
              <Image
                aria-hidden
                src="/brand/patterns/earth-white.png"
                alt=""
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover opacity-15 mix-blend-overlay"
              />
              <div className="absolute inset-0 flex flex-col justify-end gap-1 bg-gradient-to-t from-[var(--color-iron)]/85 via-[var(--color-iron)]/30 to-transparent p-6 text-[var(--color-sand)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <h3 className="font-display text-xl uppercase tracking-wide">
                  {v.name}
                </h3>
                <p className="text-sm leading-snug opacity-90">{v.blurb}</p>
                <span className="mt-1 font-script text-lg text-[var(--color-harvey)]">
                  {v.handle}
                </span>
              </div>
              <div className="absolute bottom-3 left-4 font-display text-sm uppercase tracking-wider text-[var(--color-sand)] transition-opacity group-hover:opacity-0">
                {v.name}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-start pl-4">
          <ScriptAccent
            name="where-taste-travels"
            width={360}
            variant="cream"
            className="opacity-90"
          />
        </div>
      </div>

      <DiagonalCut to="var(--color-sand)" height={80} />
    </section>
  );
}
