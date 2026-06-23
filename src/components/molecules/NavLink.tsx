import { AppImage as Image } from "@/components/atoms/AppImage";
import Link from "next/link";
import { assets } from "@/lib/assets";
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
          src={assets.chevronDown}
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
