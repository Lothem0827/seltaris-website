import { DataProtectionPage } from "@/components/templates/DataProtectionPage";
import { dataProtectionPageMeta } from "@/lib/content/data-protection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: dataProtectionPageMeta.title,
  description: dataProtectionPageMeta.description,
};

export default function SeltarisAdvancedDataProtectionPage() {
  return <DataProtectionPage />;
}
