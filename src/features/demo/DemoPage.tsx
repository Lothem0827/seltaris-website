import { GetStartedHeader } from "@/components/layout/GetStartedHeader";
import { FooterSection } from "@/components/layout/FooterSection";
import { DemoVideosSection } from "./sections/DemoVideosSection";

export function DemoPage() {
  return (
    <>
      <GetStartedHeader />
      <main>
        <DemoVideosSection />
      </main>
      <FooterSection />
    </>
  );
}
