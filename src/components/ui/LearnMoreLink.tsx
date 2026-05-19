import Image from "next/image";
import Link from "next/link";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/cn";

type LearnMoreLinkProps = {
  href?: string;
  className?: string;
  light?: boolean;
};

export function LearnMoreLink({
  href = "#",
  className,
  light = false,
}: LearnMoreLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1.5 text-sm leading-normal transition-opacity hover:opacity-80",
        light ? "text-white" : "text-brand",
        className,
      )}
    >
      Learn more
      <Image src={assets.brand.learnMoreArrow} alt="" width={10} height={8} />
    </Link>
  );
}
