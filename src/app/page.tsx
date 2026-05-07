"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
// import EventDetails from "@/components/sections/EventDetails";
// import RSVPForm from "@/components/sections/RSVPForm";
// import Footer from "@/components/sections/Footer";

const BackgroundDecor = dynamic(() => import("@/components/sections/BackgroundDecor"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative">
      {/* <BackgroundDecor /> */}
      <Hero />
      {/* <EventDetails /> */}
      {/* <RSVPForm /> */}
      {/* <Footer /> */}
    </main>
  );
}
