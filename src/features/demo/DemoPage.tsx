import { GetStartedHeader } from "@/components/layout/GetStartedHeader";
import { FooterSection } from "@/components/layout/FooterSection";
import { MainContent } from "@/components/layout/MainContent";
import { DemoVideosSection } from "./sections/DemoVideosSection";

export function DemoPage() {
  return (
    <>
      <GetStartedHeader />
      <MainContent>
        <DemoVideosSection />
      </MainContent>
      <FooterSection />
    </>
  );
}
