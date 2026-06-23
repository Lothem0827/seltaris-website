import { AppImage as Image } from "@/components/atoms/AppImage";
import Link from "next/link";
import { assets } from "@/lib/assets";

export function Logo() {
  return (
    <Link href="/" className="relative block h-logo w-logo shrink-0">
      <Image
        src={assets.logo}
        alt="Seltaris"
        fill
        className="object-contain object-left"
        priority
        sizes="150px"
      />
    </Link>
  );
}
