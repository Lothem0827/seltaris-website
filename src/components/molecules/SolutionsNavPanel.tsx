import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/atoms/Badge";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { assets } from "@/lib/assets";
import {
  solutionsNavColumns,
  type SolutionsNavItem,
} from "@/lib/content/solutions-nav";
import { cn } from "@/lib/utils";

const itemBorderClass =
  "border-l-2 border-border py-0 pl-6 transition-colors hover:border-brand";

function SolutionsNavItemRow({
  item,
  bordered,
}: {
  item: SolutionsNavItem;
  bordered: boolean;
}) {
  const isLink = Boolean(item.href && !item.comingSoon);

  const body = (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-center justify-between gap-2">
        <p className="font-body text-body font-semibold text-text">
          {item.title}
        </p>
        {bordered && isLink ? (
          <Image
            src={assets.arrowUp}
            alt=""
            width={24}
            height={24}
            className="shrink-0 rotate-180 opacity-0 transition-opacity group-hover:opacity-70"
            aria-hidden
          />
        ) : null}
      </div>
      <Text variant="body-sm">{item.description}</Text>
      {item.comingSoon ? <Badge>COMING SOON</Badge> : null}
    </div>
  );

  if (isLink) {
    const linkClass = cn(
      "group flex flex-col gap-2",
      bordered ? itemBorderClass : "px-6 transition-colors hover:text-brand",
    );

    if (item.external) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {body}
        </a>
      );
    }

    return (
      <Link href={item.href!} className={linkClass}>
        {body}
      </Link>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        bordered && "border-l-2 border-border py-0 pl-6",
      )}
    >
      {body}
    </div>
  );
}

function SolutionsNavColumn({
  title,
  items,
  footerLink,
}: (typeof solutionsNavColumns)[number]) {
  const bordered = title !== "Get Started";

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-6">
      <Heading level="panel">{title}</Heading>
      <div
        className={cn(
          "flex flex-col gap-5",
          !bordered && "border-l-2 border-border",
        )}
      >
        {items.map((item) => (
          <SolutionsNavItemRow key={item.id} item={item} bordered={bordered} />
        ))}
        {footerLink ? (
          <Link
            href={footerLink.href}
            className="px-6 font-body text-body font-semibold text-text transition-colors hover:text-brand"
          >
            {footerLink.label}
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export function SolutionsNavPanel() {
  return (
    <div className="w-full max-w-container">
      <div className="rounded-radius-panel bg-white p-8 shadow-panel">
        <div className="grid gap-8 lg:grid-cols-3">
          {solutionsNavColumns.map((column) => (
            <SolutionsNavColumn key={column.title} {...column} />
          ))}
        </div>
      </div>
    </div>
  );
}
