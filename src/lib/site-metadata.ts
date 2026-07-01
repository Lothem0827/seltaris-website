import type { Metadata } from "next";
import { sitePathname } from "@/lib/site-url";

type PageMetadataInput = {
  /** App Router pathname, e.g. `/human-touch` or `/services/address-data`. */
  pathname: string;
} & Metadata;

/** Page metadata with a canonical URL resolved via root `metadataBase`. */
export function createPageMetadata({
  pathname,
  alternates,
  ...metadata
}: PageMetadataInput): Metadata {
  return {
    ...metadata,
    alternates: {
      ...alternates,
      canonical: sitePathname(pathname),
    },
  };
}
