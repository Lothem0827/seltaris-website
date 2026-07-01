import { ServicesPage } from "@/features/services/ServicesPage";
import {
  isServiceCategoryId,
  SERVICE_CATEGORY_IDS,
} from "@/features/services/service-routes";
import { createPageMetadata } from "@/lib/site-metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const servicesDescription =
  "Explore Seltaris services for address validation, email and phone verification, and geocode appending. Format, clean, repair, and verify your datasets.";

export function generateStaticParams() {
  return SERVICE_CATEGORY_IDS.map((section) => ({ section }));
}

type PageProps = {
  params: Promise<{ section: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { section } = await params;

  return createPageMetadata({
    pathname: `/services/${section}`,
    title: "Seltaris Services | Seltaris",
    description: servicesDescription,
  });
}

export default async function Page({ params }: PageProps) {
  const { section } = await params;

  if (!isServiceCategoryId(section)) {
    notFound();
  }

  return <ServicesPage />;
}
