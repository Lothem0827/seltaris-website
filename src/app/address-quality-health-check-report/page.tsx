import {
  AddressQualityHealthCheckReportPage,
  addressQualityHealthCheckReportPageMeta,
} from "@/features/address-service/AddressQualityHealthCheckReportPage";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  pathname: "/address-quality-health-check-report",
  title: addressQualityHealthCheckReportPageMeta.title,
  description: addressQualityHealthCheckReportPageMeta.description,
});

export default function Page() {
  return <AddressQualityHealthCheckReportPage />;
}
