import Link from "next/link";
import type { FooterNavGroup } from "@/lib/content/footer";

type FooterNavColumnProps = {
  group: FooterNavGroup;
};

export function FooterNavColumn({ group }: FooterNavColumnProps) {
  return (
    <div className="min-w-0">
      <h2 className="font-body text-base font-medium leading-[1.4] text-text">
        {group.title}
      </h2>
      <ul className="mt-2.5 space-y-0">
        {group.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="inline-block py-[3.5px] font-body text-sm leading-[1.3] text-text hover:text-brand"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
