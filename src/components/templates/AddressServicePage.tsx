import { CoreFeaturesSection } from "@/components/organisms/CoreFeaturesSection";
import { AddressServicePageProvider } from "@/components/organisms/AddressServicePageContext";
import {
  AddressServicePageDataQualitySection,
  AddressServicePageHero,
  AddressServicePageOverviewSection,
  AddressServicePagePerformanceSection,
  AddressServicePagePricingSection,
  AddressServicePageSectionNav,
  AddressServicePageSecuritySection,
  AddressServicePageWhatsIncludedSection,
} from "@/components/organisms/AddressServicePageSections";
import { FooterSection } from "@/components/organisms/FooterSection";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import type { AddressServicePageContent } from "@/lib/types/address-service-page";

export function AddressServicePage({
  content,
}: {
  content: AddressServicePageContent;
}) {
  return (
    <AddressServicePageProvider content={content}>
      <SiteHeader />
      <main>
        <AddressServicePageHero />
        <AddressServicePageSectionNav />
        <AddressServicePageOverviewSection />
        <AddressServicePageWhatsIncludedSection />
        <AddressServicePageDataQualitySection />
        <AddressServicePagePerformanceSection />
        <AddressServicePageSecuritySection />
        <AddressServicePagePricingSection />
        <CoreFeaturesSection />
      </main>
      <FooterSection />
    </AddressServicePageProvider>
  );
}
