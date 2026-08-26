import { GetStartedHeader } from "@/components/layout/GetStartedHeader";
import { FooterSection } from "@/components/layout/FooterSection";
import { MainContent } from "@/components/layout/MainContent";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Container } from "@/components/ui/Container";
import { DemoReferenceGuidesSection } from "./sections/DemoReferenceGuidesSection";
import { DemoVideosSection } from "./sections/DemoVideosSection";

type DemoPageProps = {
  nav: "main" | "get-started";
};

export function DemoPage({ nav }: DemoPageProps) {
  const Header = nav === "main" ? SiteHeader : GetStartedHeader;

  return (
    <>
      <Header />
      <MainContent>
        <section className="bg-text py-section">
          <Container className="flex flex-col items-center gap-12 lg:gap-8">
            <DemoVideosSection />
            <DemoReferenceGuidesSection />
          </Container>
        </section>
      </MainContent>
      <FooterSection />
    </>
  );
}
