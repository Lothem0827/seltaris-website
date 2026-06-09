import {
  DataProtectionCloudIntroSection,
  DataProtectionDesignTeaserSection,
  DataProtectionEncryptedCloudCardSection,
  DataProtectionHowItWorksSection,
  DataProtectionPageHero,
  DataProtectionPrivateKeysSection,
} from "@/components/organisms/DataProtectionPageSections";
import { CoreFeaturesSection } from "@/components/organisms/CoreFeaturesSection";
import { FooterSection } from "@/components/organisms/FooterSection";
import { SiteHeader } from "@/components/organisms/SiteHeader";

export function DataProtectionPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <DataProtectionPageHero />
        <DataProtectionEncryptedCloudCardSection />
        <DataProtectionCloudIntroSection />
        <DataProtectionHowItWorksSection />
        <DataProtectionPrivateKeysSection />
        <CoreFeaturesSection />
        <DataProtectionDesignTeaserSection />
      </main>
      <FooterSection />
    </>
  );
}
