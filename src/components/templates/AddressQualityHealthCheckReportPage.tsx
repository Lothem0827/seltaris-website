import { AddressServicePage } from "@/components/templates/AddressServicePage";
import { addressQualityHealthCheckReportPageContent } from "@/lib/content/address-quality-health-check-report";

export function AddressQualityHealthCheckReportPage() {
  return (
    <AddressServicePage content={addressQualityHealthCheckReportPageContent} />
  );
}
