import { HomePage } from "@/features/home/HomePage";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  pathname: "/",
  title: "Seltaris | Bulk Data Enhancement",
  description:
    "High quality, secure, and powerful data quality platform for formatting, cleansing, repairing, and verifying your datasets.",
});

export default function Home() {
  return <HomePage />;
}
