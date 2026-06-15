import { HumanTouchPage } from "@/components/templates/HumanTouchPage";
import { humanTouchPageMeta } from "@/lib/content/human-touch";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: humanTouchPageMeta.title,
  description: humanTouchPageMeta.description,
};

export default function SeltarisHumanTouchPage() {
  return <HumanTouchPage />;
}
