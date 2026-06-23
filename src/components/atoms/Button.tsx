import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "default" | "small";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  /** `small` compacts primary padding and styles ghost as a learn-more link. */
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

const secondaryClasses =
  "bg-text text-white border border-text hover:bg-text/90 px-4 py-2.5 rounded-radius-sm font-medium text-body";

function variantClasses(variant: ButtonVariant, size: ButtonSize): string {
  if (variant === "primary") {
    return cn(
      "bg-brand text-white hover:bg-brand-dark rounded-radius-sm font-medium",
      size === "small" ? "px-3 py-1.5 text-body-sm" : "px-4 py-2.5 text-body",
    );
  }

  if (variant === "secondary") {
    return secondaryClasses;
  }

  return cn(
    "text-brand font-medium",
    size === "small"
      ? "font-body text-body-sm font-semibold"
      : "text-body-xs hover:underline",
  );
}

function ButtonArrow() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className="size-5 shrink-0"
    >
      <path
        d="M5.91663 10.4167H14.0833M9.41663 13.9167L5.91663 10.4167L9.41663 6.91666"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HoverArrowContent({
  children,
  showArrow = true,
}: {
  children: React.ReactNode;
  showArrow?: boolean;
}) {
  if (!showArrow) {
    return <>{children}</>;
  }

  return (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className="ml-0 inline-grid grid-cols-[0fr] opacity-0 transition-[grid-template-columns,margin,opacity] duration-200 ease-out group-hover:ml-1.5 group-hover:grid-cols-[1fr] group-hover:opacity-100"
      >
        <span className="min-w-0 overflow-hidden rotate-180">
          <ButtonArrow />
        </span>
      </span>
    </>
  );
}

function ButtonContent({
  children,
  showArrow,
}: {
  children: React.ReactNode;
  showArrow: boolean;
}) {
  return <HoverArrowContent showArrow={showArrow}>{children}</HoverArrowContent>;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const showArrow = variant !== "ghost" || size === "small";
  const classes = cn(
    "group inline-flex w-fit items-center justify-center transition-colors duration-200",
    variantClasses(variant, size),
    disabled && "pointer-events-none cursor-not-allowed opacity-50",
    className,
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        <ButtonContent showArrow={showArrow}>{children}</ButtonContent>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      <ButtonContent showArrow={showArrow}>{children}</ButtonContent>
    </button>
  );
}
