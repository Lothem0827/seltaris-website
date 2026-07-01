import { GetStartedHeader } from "@/components/layout/GetStartedHeader";
import { FooterSection } from "@/components/layout/FooterSection";
import { MainContent } from "@/components/layout/MainContent";
import { GetStartedHeroSection } from "./sections/GetStartedHeroSection";
import { GetStartedPricingSection } from "./sections/GetStartedPricingSection";
import { GetStartedTabSection } from "./sections/GetStartedTabSection";
import { GetStartedTrustedSection } from "./sections/GetStartedTrustedSection";

export function GetStartedPage() {
  return (
    <>
      <GetStartedHeader />
      <MainContent>
        <GetStartedHeroSection />
        <GetStartedTrustedSection />
        <GetStartedTabSection />
        <GetStartedPricingSection />
      </MainContent>
      <FooterSection />
    </>
  );
}
