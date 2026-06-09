import { Container } from "@/components/atoms/Container";
import {
  DesignSystemNav,
  DesignSystemNavMobile,
} from "@/components/organisms/design-system/DesignSystemNav";
import {
  DesignSystemColorsSection,
  DesignSystemComponentsSection,
  DesignSystemOverviewSection,
  DesignSystemSpacingSection,
  DesignSystemTypographySection,
} from "@/components/organisms/design-system/DesignSystemSections";
import { DesignSystemTopBar } from "@/components/organisms/design-system/DesignSystemPrimitives";

export function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-white">
      <DesignSystemTopBar />

      <Container className="py-8 lg:py-12">
        <DesignSystemNavMobile />

        <div className="mt-8 flex gap-16 lg:mt-12">
          <aside className="w-48">
            <DesignSystemNav />
          </aside>

          <div className="min-w-0 flex-1">
            <DesignSystemOverviewSection />
            <DesignSystemColorsSection />
            <DesignSystemTypographySection />
            <DesignSystemSpacingSection />
            <DesignSystemComponentsSection />
          </div>
        </div>
      </Container>
    </div>
  );
}
