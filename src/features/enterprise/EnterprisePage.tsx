import { FooterSection } from "@/components/layout/FooterSection";
import { MainContent } from "@/components/layout/MainContent";
import { SiteHeader } from "@/components/layout/SiteHeader";
import {
  ENTERPRISE_PAGES,
  type EnterprisePageId,
} from "./enterprise.content";
import { ComplianceSection } from "./sections/ComplianceSection";
import { HeroSection } from "./sections/HeroSection";
import { IndustriesSection } from "./sections/IndustriesSection";
import { StoriesSection } from "./sections/StoriesSection";

type EnterprisePageProps = {
  pageId: EnterprisePageId;
};

export function EnterprisePage({ pageId }: EnterprisePageProps) {
  const content = ENTERPRISE_PAGES[pageId];

  return (
    <>
      <SiteHeader />
      <MainContent>
        <HeroSection content={content} />
        <IndustriesSection content={content} />
        <ComplianceSection content={content} />
        <StoriesSection content={content} />
      </MainContent>
      <FooterSection />
    </>
  );
}
