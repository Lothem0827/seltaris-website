import { GetStartedPage } from "@/features/get-started/GetStartedPage";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  pathname: "/get-started",
  title: "Get Started | Seltaris",
  description:
    "Get a free Health Check Report on your existing datasets. Choose Prepaid credits or Postpaid by card.",
});

export default function GetStartedRoutePage() {
  return <GetStartedPage />;
}
