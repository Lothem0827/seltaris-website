import { AltraservicePage } from "@/components/templates/AltraservicePage";
import { altraservicePageMeta } from "@/lib/content/altraservice";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: altraservicePageMeta.title,
  description: altraservicePageMeta.description,
};

export default function SeltarisAltraservicePage() {
  return <AltraservicePage />;
}
