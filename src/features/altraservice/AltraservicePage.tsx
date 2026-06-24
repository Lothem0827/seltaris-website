import { CoreFeaturesSection } from "@/components/shared/CoreFeaturesSection";
import { FooterSection } from "@/components/layout/FooterSection";
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
      <main>
        <HeroSection />
        <EngineeringSection />
        <EngineSection />
        <MicroserviceSection />
        <BuiltForSpeedSection />
        <CoreFeaturesSection />
      </main>
      <FooterSection />
    </>
  );
}
