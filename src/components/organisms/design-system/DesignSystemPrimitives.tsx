import Link from "next/link";
import type { ReactNode } from "react";
import { getComponentDemoId } from "@/lib/design-system/catalog";
import { cn } from "@/lib/utils";

/** Shared section wrapper for consistent vertical rhythm on the guide page. */
export function GuideSection({
  id,
  title,
  description,
  children,
  className,
}: {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-28 border-b border-border py-section", className)}
    >
      <div className="mb-10 space-y-3">
        <h2 className="font-display text-h1 leading-h1 font-bold tracking-h1 text-text">
          {title}
        </h2>
        {description ? (
          <p className="max-w-3xl font-body text-body text-paragraph leading-body">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

/** Sub-section label inside a guide section. */
export function GuideSubheading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "mb-6 font-display text-h2 leading-h2 font-bold tracking-h2 text-text",
        className,
      )}
    >
      {children}
    </h3>
  );
}

/** Bordered panel for component demos. */
export function DemoPanel({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-radius-lg border border-border bg-white p-6 lg:p-8",
        className,
      )}
    >
      {label ? (
        <p className="mb-4 font-label text-label uppercase tracking-wider text-muted">
          {label}
        </p>
      ) : null}
      {children}
    </div>
  );
}

/** Live demo wrapper with file path for the component inventory. */
export function ComponentDemo({
  name,
  path,
  children,
  className,
  note,
  id,
}: {
  name: string;
  path: string;
  children: ReactNode;
  className?: string;
  note?: string;
  /** Defaults to getComponentDemoId(name) — must match inventory table links. */
  id?: string;
}) {
  const anchorId = id ?? getComponentDemoId(name);

  return (
    <div id={anchorId} className="scroll-mt-28">
      <DemoPanel label={name} className={className}>
        <TokenCode className="mb-2 block w-fit">{path}</TokenCode>
        {note ? (
          <p className="mb-4 font-body text-body-sm text-paragraph">{note}</p>
        ) : null}
        {children}
      </DemoPanel>
    </div>
  );
}

/** Monospace token label for class names and CSS variables. */
export function TokenCode({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <code
      className={cn(
        "rounded-radius-xs bg-brand-light px-1.5 py-0.5 font-body text-body-sm text-brand-dark",
        className,
      )}
    >
      {children}
    </code>
  );
}

/** Size label shown under typography variant codes in the component showroom. */
export function TypographySizeLabel({
  cssVar,
  size,
  className,
}: {
  cssVar: string;
  size: string;
  className?: string;
}) {
  return (
    <p className={cn("font-body text-body-sm text-muted", className)}>
      <TokenCode>{cssVar}</TokenCode>
      <span className="mx-1.5">·</span>
      <span className="text-paragraph">{size}</span>
    </p>
  );
}

export function DesignSystemTopBar() {
  return (
    <div className="border-b border-border bg-white">
      <div className="mx-auto flex max-w-container items-center justify-between gap-4 px-container-padding py-4">
        <div className="space-y-1">
          <p className="font-label text-label uppercase tracking-wider text-brand">
            Seltaris
          </p>
          <h1 className="font-display text-h2 leading-h2 font-bold text-text">
            Design System Guide
          </h1>
        </div>
        <Link
          href="/"
          className="font-body text-body-sm font-medium text-brand hover:underline"
        >
          ← Back to site
        </Link>
      </div>
    </div>
  );
}
