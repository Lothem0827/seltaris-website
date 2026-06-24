import { DesignMadeSimplePage } from "@/features/design-made-simple/DesignMadeSimplePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Made Simple | Seltaris",
  description:
    "The best innovations are built for everyone. Design made simple, so the complex work of cleaning data becomes easy enough for any non-technical person to do.",
};

export default function SeltarisDesignMadeSimplePage() {
  return <DesignMadeSimplePage />;
}
