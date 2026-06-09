import { CoreFeaturesSection } from "@/components/organisms/CoreFeaturesSection";
import {
  DesignMadeSimpleDataProtectionTeaserSection,
  DesignMadeSimpleInnovationSection,
  DesignMadeSimplePageHero,
} from "@/components/organisms/DesignMadeSimplePageSections";
import { FooterSection } from "@/components/organisms/FooterSection";
import { SiteHeader } from "@/components/organisms/SiteHeader";

export function DesignMadeSimplePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <DesignMadeSimplePageHero />
        <DesignMadeSimpleInnovationSection />
        <DesignMadeSimpleDataProtectionTeaserSection />
        <CoreFeaturesSection />
      </main>
      <FooterSection />
    </>
  );
}
