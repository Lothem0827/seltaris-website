import { HealthCheckReportPage } from "@/components/templates/HealthCheckReportPage";
import { healthCheckReportPageMeta } from "@/lib/content/health-check-report";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: healthCheckReportPageMeta.title,
  description: healthCheckReportPageMeta.description,
};

export default function SeltarisHealthCheckReportPage() {
  return <HealthCheckReportPage />;
}
