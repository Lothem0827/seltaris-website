import { FooterSection } from "@/components/organisms/FooterSection";
import {
  SeltarisPlusIncludedSection,
  SeltarisPlusPageHero,
} from "@/components/organisms/SeltarisPlusPageSections";
import { SiteHeader } from "@/components/organisms/SiteHeader";

export function SeltarisPlusPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <SeltarisPlusPageHero />
        <SeltarisPlusIncludedSection />
      </main>
      <FooterSection />
    </>
  );
}
