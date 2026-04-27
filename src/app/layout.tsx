import type { Metadata } from "next";
import { Archivo_Narrow, Inter, Sacramento } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/sections/SiteFooter";
import { siteConfig, absoluteUrl } from "@/lib/site-config";

const display = Archivo_Narrow({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const script = Sacramento({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Global Fork — A world of flavors. One place to gather.",
    template: "%s",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: "Global Fork — San Diego",
    description: siteConfig.tagline,
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og?title=Global+Fork&eyebrow=San+Diego%2C+CA&tagline=A+world+of+flavors.+One+place+to+gather.",
        width: 1200,
        height: 630,
        alt: "Global Fork — A world of flavors. One place to gather.",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

function RestaurantJsonLd() {
  const b = siteConfig.business;
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: absoluteUrl("/og"),
    address: {
      "@type": "PostalAddress",
      streetAddress: b.streetAddress,
      addressLocality: b.addressLocality,
      addressRegion: b.addressRegion,
      postalCode: b.postalCode,
      addressCountry: b.addressCountry,
    },
    ...(b.telephone ? { telephone: b.telephone } : {}),
    priceRange: b.priceRange,
    servesCuisine: b.servesCuisine,
    openingHoursSpecification: b.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: siteConfig.social.instagram
      ? [`https://instagram.com/${siteConfig.social.instagram.replace(/^@/, "")}`]
      : [],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--color-sand)] text-[var(--color-iron)]">
        <RestaurantJsonLd />
        <a href="#main" className="skip-to-content">
          Skip to content
        </a>
        <SmoothScroll>
          <SiteNav />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
