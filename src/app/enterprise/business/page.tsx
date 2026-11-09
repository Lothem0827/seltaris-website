import { EnterprisePage } from "@/features/enterprise/EnterprisePage";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  pathname: "/enterprise/business",
  title: "Enterprise | Seltaris",
  description:
    "World leading data quality software that keeps enterprises ahead. Built for scale, quality, and accuracy.",
});

export default function EnterpriseBusinessRoutePage() {
  return <EnterprisePage pageId="enterprise" />;
}
