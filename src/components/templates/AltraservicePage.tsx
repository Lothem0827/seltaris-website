import {
  AltraserviceBuiltForSpeedSection,
  AltraserviceEngineeringSection,
  AltraserviceEngineSection,
  AltraserviceMicroserviceSection,
  AltraservicePageHero,
} from "@/components/organisms/AltraservicePageSections";
import { CoreFeaturesSection } from "@/components/organisms/CoreFeaturesSection";
import { FooterSection } from "@/components/organisms/FooterSection";
import { SiteHeader } from "@/components/organisms/SiteHeader";

export function AltraservicePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <AltraservicePageHero />
        <AltraserviceEngineeringSection />
        <AltraserviceEngineSection />
        <AltraserviceMicroserviceSection />
        <AltraserviceBuiltForSpeedSection />
        <CoreFeaturesSection />
      </main>
      <FooterSection />
    </>
  );
}
