import { DataProtectionPage } from "@/features/data-protection/DataProtectionPage";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  pathname: "/advanced-data-protection",
  title: "Advanced Data Protection | Seltaris",
  description:
    "Enterprise grade security built from the ground up. Encrypted Cloud Computing™ and Private Keys protect your data at every step.",
});

export default function SeltarisAdvancedDataProtectionPage() {
  return <DataProtectionPage />;
}
