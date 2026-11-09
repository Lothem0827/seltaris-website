import { SeltarisPlusPage } from "@/features/seltaris-plus/SeltarisPlusPage";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  pathname: "/seltaris-plus",
  title: "Seltaris+ | Seltaris",
  description:
    "Choose Prepaid credits or Postpaid by card. Health Check Reports and Advanced Data Protection are free on both billing options.",
});

export default function SeltarisPlusRoutePage() {
  return <SeltarisPlusPage />;
}
