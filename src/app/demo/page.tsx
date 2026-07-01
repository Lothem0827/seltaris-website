import { DemoPage } from "@/features/demo/DemoPage";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  pathname: "/demo",
  title: "How to Get Started with Seltaris | Seltaris",
  description: "Discover how easy it is to start cleaning your data.",
  robots: {
    index: false,
    follow: false,
  },
});

export default function DemoRoutePage() {
  return <DemoPage />;
}
