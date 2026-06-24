import { CoreFeaturesSection } from "@/components/shared/CoreFeaturesSection";
import { FooterSection } from "@/components/layout/FooterSection";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroSection } from "./sections/HeroSection";
import { NextStepsSection } from "./sections/NextStepsSection";
import { OverviewSection } from "./sections/OverviewSection";

export function HealthCheckReportPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <OverviewSection />
        <NextStepsSection />
        <CoreFeaturesSection />
      </main>
      <FooterSection />
    </>
  );
}
