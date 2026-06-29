import { FooterSection } from "@/components/layout/FooterSection";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AltraserviceSliderSection } from "./sections/AltraserviceSliderSection";
import { DataProtectionShowcaseSection } from "./sections/DataProtectionShowcaseSection";
import { FeatureSliderSection } from "./sections/FeatureSliderSection";
import { HealthCheckSliderSection } from "./sections/HealthCheckSliderSection";
import { HealthCheckWorkflowSection } from "./sections/HealthCheckWorkflowSection";
import { HeroSection } from "./sections/HeroSection";
import { HomeTrustedSection } from "./sections/HomeTrustedSection";
import { HumanTouchDetailSection } from "./sections/HumanTouchDetailSection";
import { HumanTouchShowcaseSection } from "./sections/HumanTouchShowcaseSection";
import { PricingSection } from "./sections/PricingSection";
import { SecuritySliderSection } from "./sections/SecuritySliderSection";
import { ServicesSection } from "./sections/ServicesSection";
import { WhatIsSection } from "./sections/WhatIsSection";

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <HomeTrustedSection />
        <WhatIsSection />
        <ServicesSection />
        <FeatureSliderSection />
        <HumanTouchShowcaseSection />
        <HumanTouchDetailSection />
        <AltraserviceSliderSection />
        <DataProtectionShowcaseSection />
        <SecuritySliderSection />
        <HealthCheckWorkflowSection />
        <HealthCheckSliderSection />
        <PricingSection />
      </main>
      <FooterSection />
    </>
  );
}
