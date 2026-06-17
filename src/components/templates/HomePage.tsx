import { AltraserviceSliderSection } from "@/components/organisms/AltraserviceSliderSection";
import { DataProtectionShowcaseSection } from "@/components/organisms/DataProtectionShowcaseSection";
import { FeatureSliderSection } from "@/components/organisms/FeatureSliderSection";
import { FooterSection } from "@/components/organisms/FooterSection";
import { HealthCheckSliderSection } from "@/components/organisms/HealthCheckSliderSection";
import { HealthCheckWorkflowSection } from "@/components/organisms/HealthCheckWorkflowSection";
import { HeroSection } from "@/components/organisms/HeroSection";
import { HumanTouchDetailSection } from "@/components/organisms/HumanTouchDetailSection";
import { HumanTouchShowcaseSection } from "@/components/organisms/HumanTouchShowcaseSection";
import { PricingSection } from "@/components/organisms/PricingSection";
import { SecuritySliderSection } from "@/components/organisms/SecuritySliderSection";
import { ServicesSection } from "@/components/organisms/ServicesSection";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { WhatIsSection } from "@/components/organisms/WhatIsSection";

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
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
