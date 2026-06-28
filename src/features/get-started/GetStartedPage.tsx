import { GetStartedHeader } from "@/components/layout/GetStartedHeader";
import { FooterSection } from "@/components/layout/FooterSection";
import { GetStartedHeroSection } from "./sections/GetStartedHeroSection";
import { GetStartedPricingSection } from "./sections/GetStartedPricingSection";
import { GetStartedTabSection } from "./sections/GetStartedTabSection";
import { GetStartedTrustedSection } from "./sections/GetStartedTrustedSection";

export function GetStartedPage() {
  return (
    <>
      <GetStartedHeader />
      <main>
        <GetStartedHeroSection />
        <GetStartedTrustedSection />
        <GetStartedTabSection />
        <GetStartedPricingSection />
      </main>
      <FooterSection />
    </>
  );
}
