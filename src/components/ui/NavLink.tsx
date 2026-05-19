import Image from "next/image";
import Link from "next/link";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/cn";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
  className?: string;
};

export function NavLink({
  href,
  children,
  hasDropdown = false,
  className,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1 rounded-lg p-2.5 text-base leading-[26px] text-charcoal-700 transition-colors hover:bg-charcoal-50",
        className,
      )}
    >
      {children}
      {hasDropdown ? (
        <Image src={assets.brand.chevron} alt="" width={20} height={20} />
      ) : null}
    </Link>
  );
}
