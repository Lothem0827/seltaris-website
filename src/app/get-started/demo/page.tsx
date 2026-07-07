import { DemoPage } from "@/features/demo/DemoPage";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  pathname: "/get-started/demo",
  title: "How to Get Started with Seltaris | Seltaris",
  description: "Discover how easy it is to start cleaning your data.",
  robots: {
    index: false,
    follow: false,
  },
});

export default function GetStartedDemoRoutePage() {
  return <DemoPage nav="get-started" />;
}
