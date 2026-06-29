import { ServicesPage } from "@/features/services/ServicesPage";
import {
  isServiceCategoryId,
  SERVICE_CATEGORY_IDS,
} from "@/features/services/service-routes";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Seltaris Services | Seltaris",
  description:
    "Explore Seltaris services for address validation, email and phone verification, and geocode appending. Format, clean, repair, and verify your datasets.",
};

export function generateStaticParams() {
  return SERVICE_CATEGORY_IDS.map((section) => ({ section }));
}

type PageProps = {
  params: Promise<{ section: string }>;
};

export default async function Page({ params }: PageProps) {
  const { section } = await params;

  if (!isServiceCategoryId(section)) {
    notFound();
  }

  return <ServicesPage />;
}
