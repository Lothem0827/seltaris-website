import { ServicesPage } from "@/components/templates/ServicesPage";
import { servicesPageMeta } from "@/lib/content/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: servicesPageMeta.title,
  description: servicesPageMeta.description,
};

export default function Page() {
  return <ServicesPage />;
}
