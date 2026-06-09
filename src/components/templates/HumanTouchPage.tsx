import { FooterSection } from "@/components/organisms/FooterSection";
import {
  HumanTouchAltraserviceTeaserSection,
  HumanTouchGeographicSection,
  HumanTouchIntuitionSection,
  HumanTouchOptiSourceSection,
  HumanTouchPageHero,
  HumanTouchSmallDetailsSection,
  HumanTouchUnverifiedSection,
} from "@/components/organisms/HumanTouchPageSections";
import { SiteHeader } from "@/components/organisms/SiteHeader";

export function HumanTouchPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HumanTouchPageHero />
        <HumanTouchIntuitionSection />
        <HumanTouchSmallDetailsSection />
        <HumanTouchGeographicSection />
        <HumanTouchUnverifiedSection />
        <HumanTouchOptiSourceSection />
        <HumanTouchAltraserviceTeaserSection />
      </main>
      <FooterSection />
    </>
  );
}
