import { CoreFeaturesSection } from "@/components/shared/CoreFeaturesSection";
import { FooterSection } from "@/components/layout/FooterSection";
import { MainContent } from "@/components/layout/MainContent";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroSection } from "./sections/HeroSection";
import { NextStepsSection } from "./sections/NextStepsSection";
import { OverviewSection } from "./sections/OverviewSection";

export function HealthCheckReportPage() {
  return (
    <>
      <SiteHeader />
      <MainContent>
        <HeroSection />
        <OverviewSection />
        <NextStepsSection />
        <CoreFeaturesSection />
      </MainContent>
      <FooterSection />
    </>
  );
}
