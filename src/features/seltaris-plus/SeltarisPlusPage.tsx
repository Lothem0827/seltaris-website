import { FooterSection } from "@/components/layout/FooterSection";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SeltarisPlusIncludedSection } from "./sections/SeltarisPlusIncludedSection";
import { SeltarisPlusPageHero } from "./sections/SeltarisPlusPageHero";

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
