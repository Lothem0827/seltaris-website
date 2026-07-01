import { CoreFeaturesSection } from "@/components/shared/CoreFeaturesSection";
import { FooterSection } from "@/components/layout/FooterSection";
import { MainContent } from "@/components/layout/MainContent";
import { SiteHeader } from "@/components/layout/SiteHeader";
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
      <MainContent>
        <HeroSection />
        <IntuitionSection />
        <SmallDetailsSection />
        <GeographicSection />
        <UnverifiedSection />
        <OptiSourceSection />
        <CoreFeaturesSection />
      </MainContent>
      <FooterSection />
    </>
  );
}
