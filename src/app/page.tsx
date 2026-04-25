import Hero from "@/components/sections/Hero";
import Tagline from "@/components/sections/Tagline";
import About from "@/components/sections/About";
import Vendors from "@/components/sections/Vendors";
import Events from "@/components/sections/Events";
import EventsRender from "@/components/sections/EventsRender";
import Bookings from "@/components/sections/Bookings";
import Visit from "@/components/sections/Visit";
import Follow from "@/components/sections/Follow";
import SiteFooter from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <Tagline />
      <About />
      <Vendors />
      <Events />
      <EventsRender />
      <Bookings />
      <Visit />
      <Follow />
      <SiteFooter />
    </>
  );
}
