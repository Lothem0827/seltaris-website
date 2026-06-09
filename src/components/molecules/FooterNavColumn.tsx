import Link from "next/link";
import type { FooterNavGroup } from "@/lib/content/footer";

type FooterNavColumnProps = {
  group: FooterNavGroup;
};

export function FooterNavColumn({ group }: FooterNavColumnProps) {
  return (
    <div className="min-w-0">
      <h2 className="font-body text-body font-medium leading-body-sm text-text">
        {group.title}
      </h2>
      <ul className="mt-2.5 space-y-0">
        {group.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="inline-block py-1 font-body text-link-nav leading-body-sm text-text hover:text-brand"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
