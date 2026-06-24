import {
  AddressQualityHealthCheckReportPage,
  addressQualityHealthCheckReportPageMeta,
} from "@/features/address-service/AddressQualityHealthCheckReportPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: addressQualityHealthCheckReportPageMeta.title,
  description: addressQualityHealthCheckReportPageMeta.description,
};

export default function Page() {
  return <AddressQualityHealthCheckReportPage />;
}
