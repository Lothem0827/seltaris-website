import { FooterSection } from "@/components/organisms/FooterSection";
import {
  ServicesPageCategories,
  ServicesPageHero,
} from "@/components/organisms/ServicesPageSections";
import { SiteHeader } from "@/components/organisms/SiteHeader";

export function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServicesPageHero />
        <ServicesPageCategories />
      </main>
      <FooterSection />
    </>
  );
}
