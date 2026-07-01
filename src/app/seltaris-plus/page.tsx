import { SeltarisPlusPage } from "@/features/seltaris-plus/SeltarisPlusPage";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  pathname: "/seltaris-plus",
  title: "Seltaris+ | Seltaris",
  description:
    "Seltaris+ brings together the best of Seltaris in one powerful subscription — Health Check Reports, Advanced Data Protection, volume discounts, and shared licences.",
});

export default function SeltarisPlusRoutePage() {
  return <SeltarisPlusPage />;
}
