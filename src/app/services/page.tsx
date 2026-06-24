import { ServicesPage } from "@/features/services/ServicesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seltaris Services | Seltaris",
  description:
    "Explore Seltaris services for address validation, email and phone verification, and geocode appending. Format, clean, repair, and verify your datasets.",
};

export default function Page() {
  return <ServicesPage />;
}
