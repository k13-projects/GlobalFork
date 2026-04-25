import type { Metadata } from "next";
import { Archivo_Narrow, Inter, Sacramento } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import SiteNav from "@/components/SiteNav";

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
  title: "Global Fork — A world of flavors. One place to gather.",
  description:
    "A vibrant San Diego dining destination where global flavors, craft drinks, and cultural experiences come together in one open, piazza-inspired space.",
  metadataBase: new URL("https://globalfork.example"),
  openGraph: {
    title: "Global Fork — San Diego",
    description: "A world of flavors. One place to gather.",
    type: "website",
  },
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
        <SmoothScroll />
        <SiteNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
