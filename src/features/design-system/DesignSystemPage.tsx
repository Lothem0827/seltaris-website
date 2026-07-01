import {
  DesignSystemNav,
  DesignSystemNavMobile,
} from "./DesignSystemNav";
import { MainContent } from "@/components/layout/MainContent";
import {
  DesignSystemAccessibilitySection,
  DesignSystemColorsSection,
  DesignSystemComponentsSection,
  DesignSystemOverviewSection,
  DesignSystemPagesSection,
  DesignSystemSpacingSection,
  DesignSystemSvgAnimationsSection,
  DesignSystemTypographySection,
} from "./DesignSystemSections";
import { DesignSystemTopBar } from "./DesignSystemPrimitives";

export function DesignSystemPage() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-white">
      <DesignSystemTopBar />

      <div className="flex min-h-0 flex-1 overflow-hidden">
        <aside className="block w-56 shrink-0 overflow-y-auto border-r border-border px-container-padding py-8 lg:hidden">
          <DesignSystemNav />
        </aside>

        <MainContent className="min-w-0 flex-1 overflow-y-auto" sectionReveal={false}>
          <div className="px-container-padding py-10 lg:py-8">
            <DesignSystemNavMobile />

            <div className="mt-0 lg:mt-8">
              <DesignSystemOverviewSection />
              <DesignSystemPagesSection />
              <DesignSystemColorsSection />
              <DesignSystemTypographySection />
              <DesignSystemSpacingSection />
              <DesignSystemAccessibilitySection />
              <DesignSystemSvgAnimationsSection />
              <DesignSystemComponentsSection />
            </div>
          </div>
        </MainContent>
      </div>
    </div>
  );
}
