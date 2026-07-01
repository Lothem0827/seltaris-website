import { FooterSection } from "@/components/layout/FooterSection";
import { MainContent } from "@/components/layout/MainContent";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SeltarisPlusIncludedSection } from "./sections/SeltarisPlusIncludedSection";
import { SeltarisPlusPageHero } from "./sections/SeltarisPlusPageHero";

export function SeltarisPlusPage() {
  return (
    <>
      <SiteHeader />
      <MainContent>
        <SeltarisPlusPageHero />
        <SeltarisPlusIncludedSection />
      </MainContent>
      <FooterSection />
    </>
  );
}
