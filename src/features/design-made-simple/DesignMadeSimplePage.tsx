import { CoreFeaturesSection } from "@/components/shared/CoreFeaturesSection";
import { FooterSection } from "@/components/layout/FooterSection";
import { MainContent } from "@/components/layout/MainContent";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroSection } from "./sections/HeroSection";
import { InnovationSection } from "./sections/InnovationSection";

export function DesignMadeSimplePage() {
  return (
    <>
      <SiteHeader />
      <MainContent>
        <HeroSection />
        <InnovationSection />
        <CoreFeaturesSection />
      </MainContent>
      <FooterSection />
    </>
  );
}
