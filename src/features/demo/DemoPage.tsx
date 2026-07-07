import { GetStartedHeader } from "@/components/layout/GetStartedHeader";
import { FooterSection } from "@/components/layout/FooterSection";
import { MainContent } from "@/components/layout/MainContent";
import { SiteHeader } from "@/components/layout/SiteHeader";
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
        <DemoVideosSection />
      </MainContent>
      <FooterSection />
    </>
  );
}
