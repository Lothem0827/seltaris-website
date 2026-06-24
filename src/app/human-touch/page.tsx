import { HumanTouchPage } from "@/features/human-touch/HumanTouchPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Human Touch™ | Seltaris",
  description:
    "Data quality software that can read and process data as easily as we do. Explore Human Touch™ technology.",
};

export default function SeltarisHumanTouchPage() {
  return <HumanTouchPage />;
}
