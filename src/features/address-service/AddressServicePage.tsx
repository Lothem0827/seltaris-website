import { CoreFeaturesSection } from "@/components/shared/CoreFeaturesSection";
import { FooterSection } from "@/components/layout/FooterSection";
import { MainContent } from "@/components/layout/MainContent";
import { SiteHeader } from "@/components/layout/SiteHeader";
import type { AddressServicePageContent } from "./types";
import { AddressServicePageProvider } from "./AddressServicePageContext";
import {
  AddressServicePageDataQualitySection,
  AddressServicePageHero,
  AddressServicePageOverviewSection,
  AddressServicePagePerformanceSection,
  AddressServicePagePricingSection,
  AddressServicePageSectionNav,
  AddressServicePageSecuritySection,
  AddressServicePageWhatsIncludedSection,
} from "./AddressServicePageSections";

export function AddressServicePage({
  content,
}: {
  content: AddressServicePageContent;
}) {
  return (
    <AddressServicePageProvider content={content}>
      <SiteHeader />
      <MainContent>
        <AddressServicePageHero />
        <AddressServicePageSectionNav />
        <AddressServicePageOverviewSection />
        <AddressServicePageWhatsIncludedSection />
        <AddressServicePageDataQualitySection />
        <AddressServicePagePerformanceSection />
        <AddressServicePageSecuritySection />
        <AddressServicePagePricingSection />
        <CoreFeaturesSection />
      </MainContent>
      <FooterSection />
    </AddressServicePageProvider>
  );
}
