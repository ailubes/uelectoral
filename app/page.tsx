"use client";

import { Navbar } from "@/components/navigation";
import {
  HeroSection,
  AboutSection,
  MethodologySection,
  CountryDirectionSection,
  PresidentialElectionSection,
  ParliamentaryElectionSection,
  ThankYouSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Add top padding to account for fixed navbar */}
      <div className="pt-16">
        <HeroSection />
        <AboutSection />
        <MethodologySection />
        <CountryDirectionSection />
        <PresidentialElectionSection />
        <ParliamentaryElectionSection />
        <ThankYouSection />
      </div>
    </>
  );
}
