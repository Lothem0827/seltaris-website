import { CoreFeaturesSection } from "@/components/shared/CoreFeaturesSection";
import { FooterSection } from "@/components/layout/FooterSection";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { DataProtectionTeaserSection } from "./sections/DataProtectionTeaserSection";
import { HeroSection } from "./sections/HeroSection";
import { InnovationSection } from "./sections/InnovationSection";

export function DesignMadeSimplePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <InnovationSection />
        <DataProtectionTeaserSection />
        <CoreFeaturesSection />
      </main>
      <FooterSection />
    </>
  );
}
