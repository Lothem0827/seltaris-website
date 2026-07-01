import { AltraservicePage } from "@/features/altraservice/AltraservicePage";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  pathname: "/altraservice",
  title: "Altraservice™ | Seltaris",
  description:
    "Groundbreaking performance. The fastest addressing batch processor we've ever created.",
});

export default function SeltarisAltraservicePage() {
  return <AltraservicePage />;
}
