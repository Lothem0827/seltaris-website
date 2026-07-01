import { FooterSection } from "@/components/layout/FooterSection";
import { MainContent } from "@/components/layout/MainContent";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CategorySection } from "./sections/CategoriesSection";
import { SERVICE_CATEGORIES } from "./service-categories.content";
import { HeroSection } from "./sections/HeroSection";

export function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <MainContent>
        <HeroSection />
        {SERVICE_CATEGORIES.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
      </MainContent>
      <FooterSection />
    </>
  );
}
