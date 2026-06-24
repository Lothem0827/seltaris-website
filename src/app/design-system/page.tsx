import { DesignSystemPage } from "@/features/design-system/DesignSystemPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design System Guide | Seltaris",
  description:
    "Living documentation for Seltaris design tokens, typography, spacing, and UI components.",
  robots: { index: false, follow: false },
};

export default function DesignSystemGuideRoute() {
  return <DesignSystemPage />;
}
