import { AddressQualityHealthCheckReportPage } from "@/components/templates/AddressQualityHealthCheckReportPage";
import { addressQualityHealthCheckReportPageMeta } from "@/lib/content/address-quality-health-check-report";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: addressQualityHealthCheckReportPageMeta.title,
  description: addressQualityHealthCheckReportPageMeta.description,
};

export default function Page() {
  return <AddressQualityHealthCheckReportPage />;
}
