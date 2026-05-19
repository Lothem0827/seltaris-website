import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AltraserviceSection } from "@/components/sections/AltraserviceSection";
import { FeaturesIntroSection } from "@/components/sections/FeaturesIntroSection";
import { BusinessSliderSection } from "@/components/sections/BusinessSliderSection";
import { HealthCheckSection } from "@/components/sections/HealthCheckSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HumanTouchSection } from "@/components/sections/HumanTouchSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CustomerStoriesSection } from "@/components/sections/CustomerStoriesSection";
import { DataToolsDifferenceSection } from "@/components/sections/DataToolsDifferenceSection";
import { OurServicesPlansSection } from "@/components/sections/OurServicesPlansSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhatIsSection } from "@/components/sections/WhatIsSection";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <WhatIsSection />
        <ServicesSection />
        <BusinessSliderSection />
        <HumanTouchSection />
        <FeaturesIntroSection />
        <AltraserviceSection />
        <SecuritySection />
        <HealthCheckSection />
        <DataToolsDifferenceSection />
        <CustomerStoriesSection />
        <TestimonialsSection />
        <OurServicesPlansSection />
      </main>
      <SiteFooter />
    </>
  );
}
