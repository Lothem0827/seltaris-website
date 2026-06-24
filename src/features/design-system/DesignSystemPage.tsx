import {
  DesignSystemNav,
  DesignSystemNavMobile,
} from "./DesignSystemNav";
import {
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

        <main className="min-w-0 flex-1 overflow-y-auto">
          <div className="px-container-padding py-10 lg:py-8">
            <DesignSystemNavMobile />

            <div className="mt-0 lg:mt-8">
              <DesignSystemOverviewSection />
              <DesignSystemPagesSection />
              <DesignSystemColorsSection />
              <DesignSystemTypographySection />
              <DesignSystemSpacingSection />
              <DesignSystemSvgAnimationsSection />
              <DesignSystemComponentsSection />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
