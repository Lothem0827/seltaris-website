import { FooterSection } from "@/components/layout/FooterSection";
import { MainContent } from "@/components/layout/MainContent";
import { SiteHeader } from "@/components/layout/SiteHeader";
import {
  AltraserviceSliderSection,
  DataProtectionShowcaseSection,
  FeatureSliderSection,
  HealthCheckSliderSection,
  HealthCheckWorkflowSection,
  HumanTouchDetailSection,
  HumanTouchShowcaseSection,
  PricingSection,
  SecuritySliderSection,
} from "./lazy-sections";
import { HeroSection } from "./sections/HeroSection";
import { HomeTrustedSection } from "./sections/HomeTrustedSection";
import { ServicesSection } from "./sections/ServicesSection";
import { WhatIsSection } from "./sections/WhatIsSection";

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <MainContent sectionReveal={false}>
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
      </MainContent>
      <FooterSection />
    </>
  );
}
