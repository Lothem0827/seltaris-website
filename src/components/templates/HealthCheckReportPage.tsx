import { CoreFeaturesSection } from "@/components/organisms/CoreFeaturesSection";
import {
  HealthCheckReportNextStepsSection,
  HealthCheckReportOverviewSection,
  HealthCheckReportPageHero,
} from "@/components/organisms/HealthCheckReportPageSections";
import { FooterSection } from "@/components/organisms/FooterSection";
import { SiteHeader } from "@/components/organisms/SiteHeader";

export function HealthCheckReportPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HealthCheckReportPageHero />
        <HealthCheckReportOverviewSection />
        <HealthCheckReportNextStepsSection />
        <CoreFeaturesSection />
      </main>
      <FooterSection />
    </>
  );
}
