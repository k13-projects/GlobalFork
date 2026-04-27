import Hero from "@/components/sections/Hero";
import Tagline from "@/components/sections/Tagline";
import ElementOrbit from "@/components/sections/ElementOrbit";
import About from "@/components/sections/About";
import Vendors from "@/components/sections/Vendors";
import Events from "@/components/sections/Events";
import EventsRender from "@/components/sections/EventsRender";
import Bookings from "@/components/sections/Bookings";
import Visit from "@/components/sections/Visit";
import Follow from "@/components/sections/Follow";

export default function Home() {
  return (
    <>
      <Hero />
      <Tagline />
      <ElementOrbit />
      <About />
      <Vendors />
      <Events />
      <EventsRender />
      <Bookings />
      <Visit />
      <Follow />
    </>
  );
}
