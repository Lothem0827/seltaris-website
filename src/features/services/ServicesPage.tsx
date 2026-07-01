import { FooterSection } from "@/components/layout/FooterSection";
import { MainContent } from "@/components/layout/MainContent";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CategoriesSection } from "./sections/CategoriesSection";
import { HeroSection } from "./sections/HeroSection";

export function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <MainContent>
        <HeroSection />
        <CategoriesSection />
      </MainContent>
      <FooterSection />
    </>
  );
}
