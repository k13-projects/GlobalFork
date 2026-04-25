import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookings — Global Fork",
  description:
    "From birthdays to big celebrations, GLOBAL FORK is the perfect place to gather. Tell us about your event for parties of 15 or more.",
  openGraph: {
    title: "Bookings — Global Fork",
    description: "We love a special occasion. Book your next event.",
    images: ["/og?title=Book+Your+Event&eyebrow=Bookings&tagline=From+birthdays+to+big+celebrations.&tone=%23b08539"],
  },
};

export default function BookingsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
