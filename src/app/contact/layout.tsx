import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Global Fork",
  description:
    "Reach out for general inquiries, vendor opportunities, or careers. Food, culture, and community come together here.",
  openGraph: {
    title: "Contact — Global Fork",
    description: "Let’s connect.",
    images: ["/og?title=Let%27s+Connect&eyebrow=Contact&tagline=Food%2C+culture%2C+and+community+come+together+here."],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
