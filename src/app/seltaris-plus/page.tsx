import { SeltarisPlusPage } from "@/components/templates/SeltarisPlusPage";
import { seltarisPlusPageMeta } from "@/lib/content/seltaris-plus";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: seltarisPlusPageMeta.title,
  description: seltarisPlusPageMeta.description,
};

export default function SeltarisPlusRoutePage() {
  return <SeltarisPlusPage />;
}
