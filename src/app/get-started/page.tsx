import { GetStartedPage } from "@/features/get-started/GetStartedPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started | Seltaris",
  description:
    "Get a comprehensive report on your existing datasets for free. Start Seltaris today — no credit card required.",
};

export default function GetStartedRoutePage() {
  return <GetStartedPage />;
}
