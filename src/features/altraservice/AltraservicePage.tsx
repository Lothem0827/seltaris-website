import { CoreFeaturesSection } from "@/components/shared/CoreFeaturesSection";
import { FooterSection } from "@/components/layout/FooterSection";
import { MainContent } from "@/components/layout/MainContent";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BuiltForSpeedSection } from "./sections/BuiltForSpeedSection";
import { EngineeringSection } from "./sections/EngineeringSection";
import { EngineSection } from "./sections/EngineSection";
import { HeroSection } from "./sections/HeroSection";
import { MicroserviceSection } from "./sections/MicroserviceSection";

export function AltraservicePage() {
  return (
    <>
      <SiteHeader />
      <MainContent>
        <HeroSection />
        <EngineeringSection />
        <EngineSection />
        <MicroserviceSection />
        <BuiltForSpeedSection />
        <CoreFeaturesSection />
      </MainContent>
      <FooterSection />
    </>
  );
}
