import { DesignMadeSimplePage } from "@/components/templates/DesignMadeSimplePage";
import { designMadeSimplePageMeta } from "@/lib/content/design-made-simple";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: designMadeSimplePageMeta.title,
  description: designMadeSimplePageMeta.description,
};

export default function SeltarisDesignMadeSimplePage() {
  return <DesignMadeSimplePage />;
}
