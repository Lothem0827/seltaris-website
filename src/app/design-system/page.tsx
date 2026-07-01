import { DesignSystemPage } from "@/features/design-system/DesignSystemPage";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  pathname: "/design-system",
  title: "Design System Guide | Seltaris",
  description:
    "Living documentation for Seltaris design tokens, typography, spacing, and UI components.",
  robots: { index: false, follow: false },
});

export default function DesignSystemGuideRoute() {
  return <DesignSystemPage />;
}
