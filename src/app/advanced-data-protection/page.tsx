import { DataProtectionPage } from "@/features/data-protection/DataProtectionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced Data Protection | Seltaris",
  description:
    "Enterprise grade security built from the ground up. Encrypted Cloud Computing™ and Private Keys protect your data at every step.",
};

export default function SeltarisAdvancedDataProtectionPage() {
  return <DataProtectionPage />;
}
