import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FlyerSection from "@/components/home/FlyerSection";
import IntroSection from "@/components/home/IntroSection";
import EventsTeaser from "@/components/home/EventsTeaser";
import { BASE_URL, ORG_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kreisjugendfeuerwehr Starnberg",
  description: ORG_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kreisjugendfeuerwehr Starnberg",
    description: ORG_DESCRIPTION,
    url: BASE_URL,
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FlyerSection />
      <IntroSection />
      <EventsTeaser />
    </>
  );
}
