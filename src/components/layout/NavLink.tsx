import Image from "@/components/ui/Image";
import Link from "next/link";
import { siteAssets } from "@/lib/site-assets";
type NavLinkProps = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export function NavLink({ label, href, hasDropdown }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 p-2 font-label text-body text-text transition-colors hover:text-brand"
    >
      {label}
      {hasDropdown ? (
        <Image
          src={siteAssets.chevronDown}
          alt=""
          width={20}
          height={20}
          className="opacity-70"
          aria-hidden
        />
      ) : null}
    </Link>
  );
}
