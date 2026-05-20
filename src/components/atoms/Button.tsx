import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
/** Only affects `variant="primary"` (default vs compact padding). */
type PrimarySize = "default" | "small";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  /** Padding for primary: `default` (16px 10px) or `small` (12px horizontal, 6px vertical). Ignored for other variants. */
  size?: PrimarySize;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const secondaryGhostBase = {
  secondary:
    "bg-text text-white border border-text hover:bg-text/90 px-4 py-2.5 rounded-radius-sm font-medium text-body",
  ghost: "text-brand hover:underline font-medium text-body-sm",
} as const;

function variantClasses(
  variant: ButtonVariant,
  size: PrimarySize,
): string {
  if (variant === "primary") {
    return cn(
      "bg-brand text-white hover:bg-brand-dark rounded-radius-sm font-medium text-body",
      size === "small" ? "px-3 py-1.5" : "px-4 py-2.5",
    );
  }
  return secondaryGhostBase[variant];
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-1.5 transition-colors",
    variantClasses(variant, size),
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
