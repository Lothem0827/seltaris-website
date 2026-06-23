import {
  DesignSystemNav,
  DesignSystemNavMobile,
} from "@/components/organisms/design-system/DesignSystemNav";
import {
  DesignSystemColorsSection,
  DesignSystemComponentsSection,
  DesignSystemOverviewSection,
  DesignSystemPagesSection,
  DesignSystemSpacingSection,
  DesignSystemSvgAnimationsSection,
  DesignSystemTypographySection,
} from "@/components/organisms/design-system/DesignSystemSections";
import { DesignSystemTopBar } from "@/components/organisms/design-system/DesignSystemPrimitives";

export function DesignSystemPage() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-white">
      <DesignSystemTopBar />

      <div className="flex min-h-0 flex-1 overflow-hidden">
        <aside className="hidden w-56 shrink-0 overflow-y-auto border-r border-border px-container-padding py-8 lg:block">
          <DesignSystemNav />
        </aside>

        <main className="min-w-0 flex-1 overflow-y-auto">
          <div className="px-container-padding py-8 lg:py-10">
            <DesignSystemNavMobile />

            <div className="mt-8 lg:mt-0">
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
