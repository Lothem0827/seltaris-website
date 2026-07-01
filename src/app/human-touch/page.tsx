import { HumanTouchPage } from "@/features/human-touch/HumanTouchPage";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  pathname: "/human-touch",
  title: "Human Touch™ | Seltaris",
  description:
    "Data quality software that can read and process data as easily as we do. Explore Human Touch™ technology.",
});

export default function SeltarisHumanTouchPage() {
  return <HumanTouchPage />;
}
