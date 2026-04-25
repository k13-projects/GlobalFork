import type { Metadata } from "next";
import { Archivo_Narrow, Inter, Sacramento } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/sections/SiteFooter";

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
  description:
    "A vibrant San Diego dining destination where global flavors, craft drinks, and cultural experiences come together in one open, piazza-inspired space.",
  metadataBase: new URL("https://globalfork.example"),
  openGraph: {
    title: "Global Fork — San Diego",
    description: "A world of flavors. One place to gather.",
    type: "website",
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--color-sand)] text-[var(--color-iron)]">
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
