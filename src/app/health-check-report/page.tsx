import { HealthCheckReportPage } from "@/features/health-check-report/HealthCheckReportPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Check Report | Seltaris",
  description:
    "Data quality at its finest detail. Get a comprehensive Health Check Report assessing the completeness, accuracy, and compliance of your address data.",
};

export default function SeltarisHealthCheckReportPage() {
  return <HealthCheckReportPage />;
}
