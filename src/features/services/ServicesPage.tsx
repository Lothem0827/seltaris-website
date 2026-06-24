import { FooterSection } from "@/components/layout/FooterSection";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CategoriesSection } from "./sections/CategoriesSection";
import { HeroSection } from "./sections/HeroSection";

export function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <CategoriesSection />
      </main>
      <FooterSection />
    </>
  );
}
