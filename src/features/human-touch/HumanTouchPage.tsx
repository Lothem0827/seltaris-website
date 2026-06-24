import { FooterSection } from "@/components/layout/FooterSection";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AltraserviceTeaserSection } from "./sections/AltraserviceTeaserSection";
import { GeographicSection } from "./sections/GeographicSection";
import { HeroSection } from "./sections/HeroSection";
import { IntuitionSection } from "./sections/IntuitionSection";
import { OptiSourceSection } from "./sections/OptiSourceSection";
import { SmallDetailsSection } from "./sections/SmallDetailsSection";
import { UnverifiedSection } from "./sections/UnverifiedSection";

export function HumanTouchPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <IntuitionSection />
        <SmallDetailsSection />
        <GeographicSection />
        <UnverifiedSection />
        <OptiSourceSection />
        <AltraserviceTeaserSection />
      </main>
      <FooterSection />
    </>
  );
}
