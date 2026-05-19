import Image from "next/image";
import Link from "next/link";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  href?: string;
};

export function Logo({ className, href = "/" }: LogoProps) {
  return (
    <Link href={href} className={cn("inline-flex shrink-0", className)}>
      <Image
        src={assets.brand.logo}
        alt="Seltaris"
        width={167}
        height={36}
        className="h-9 w-auto"
        priority
      />
    </Link>
  );
}
