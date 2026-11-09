import { EnterprisePage } from "@/features/enterprise/EnterprisePage";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  pathname: "/enterprise/government",
  title: "Government | Seltaris",
  description:
    "Data quality software built for government. Serve the public with confidence and transparency.",
});

export default function EnterpriseGovernmentRoutePage() {
  return <EnterprisePage pageId="government" />;
}
