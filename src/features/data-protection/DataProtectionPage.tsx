import { CoreFeaturesSection } from "@/components/shared/CoreFeaturesSection";
import { FooterSection } from "@/components/layout/FooterSection";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CloudIntroSection } from "./sections/CloudIntroSection";
import { DesignTeaserSection } from "./sections/DesignTeaserSection";
import { EncryptedCloudCardSection } from "./sections/EncryptedCloudCardSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { PrivateKeysCardSection } from "./sections/PrivateKeysCardSection";
import { PrivateKeysSection } from "./sections/PrivateKeysSection";

export function DataProtectionPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <EncryptedCloudCardSection />
        <CloudIntroSection />
        <HowItWorksSection />
        <PrivateKeysCardSection />
        <PrivateKeysSection />
        <CoreFeaturesSection />
        <DesignTeaserSection />
      </main>
      <FooterSection />
    </>
  );
}
