import type { JSX } from "react";
import {
  CallToActionSection,
  CapabilitiesSection,
  FooterSection,
  HeroSection,
  ImpactSection,
  JourneySection,
  TestimonialSection,
} from "@/app/(site)/components";

export default function Home(): JSX.Element {
  return (
    <main className="page-shell">
      <HeroSection />
      <JourneySection />
      <CapabilitiesSection />
      <ImpactSection />
      <TestimonialSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
}
