import Image from "@/components/ui/Image";
import Link from "next/link";
import { siteAssets } from "@/lib/site-assets";

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="relative block h-logo w-logo shrink-0">
      <Image
        src={siteAssets.logo}
        alt="Seltaris"
        fill
        className="object-contain object-left"
        priority
        sizes="150px"
      />
    </Link>
  );
}
