import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { assets } from "@/lib/assets";

type ButtonVariant = "primary" | "gradient" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2.5 text-base",
  lg: "px-4 py-3 text-base",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white hover:bg-[#3d3de6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
  gradient:
    "border border-[#01f4f8] bg-gradient-to-r from-[#1b8bda] from-[42%] to-[#5c17da] text-white shadow-[0_4px_35px_rgba(0,143,255,0.45)] hover:brightness-110",
  ghost: "bg-transparent text-charcoal-700 hover:bg-charcoal-50",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  showArrow = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-1.5 rounded-lg font-medium transition-colors",
    sizeClasses[size],
    variantClasses[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <Image
          src={variant === "gradient" ? assets.brand.gradientArrow : assets.brand.arrowRight}
          alt=""
          width={10}
          height={8}
          className="shrink-0"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
