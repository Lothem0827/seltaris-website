import { CoreFeaturesSection } from "@/components/shared/CoreFeaturesSection";
import { FooterSection } from "@/components/layout/FooterSection";
import { MainContent } from "@/components/layout/MainContent";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CloudIntroSection } from "./sections/CloudIntroSection";
import { EncryptedCloudCardSection } from "./sections/EncryptedCloudCardSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { PrivateKeysCardSection } from "./sections/PrivateKeysCardSection";
import { PrivateKeysSection } from "./sections/PrivateKeysSection";

export function DataProtectionPage() {
  return (
    <>
      <SiteHeader />
      <MainContent>
        <HeroSection />
        <EncryptedCloudCardSection />
        <CloudIntroSection />
        <HowItWorksSection />
        <PrivateKeysCardSection />
        <PrivateKeysSection />
        <CoreFeaturesSection />
      </MainContent>
      <FooterSection />
    </>
  );
}
