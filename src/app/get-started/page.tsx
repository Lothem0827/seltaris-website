import { GetStartedPage } from "@/features/get-started/GetStartedPage";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  pathname: "/get-started",
  title: "Get Started | Seltaris",
  description:
    "Get a comprehensive report on your existing datasets for free. Start Seltaris today — no credit card required.",
});

export default function GetStartedRoutePage() {
  return <GetStartedPage />;
}
