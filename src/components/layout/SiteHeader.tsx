import Image from "next/image";
import Link from "next/link";
import { PromoBar } from "@/components/layout/PromoBar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { NavLink } from "@/components/ui/NavLink";
import { assets } from "@/lib/assets";

const navItems = [
  { label: "Solutions", href: "#solutions", dropdown: true },
  { label: "Features", href: "#features", dropdown: true },
  { label: "Seltaris+", href: "#seltaris-plus" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "Support", href: "#support" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-charcoal-200 bg-white/95 backdrop-blur-sm">
      <div className="bg-brand-100">
        <Container className="flex max-w-none items-center justify-between py-1 text-xs lg:max-w-[1920px] lg:px-[360px]">
          <Link
            href="https://datatools.com.au"
            className="inline-flex items-center gap-1.5 text-charcoal-700"
          >
            <Image src={assets.brand.backArrow} alt="" width={14} height={14} />
            <span className="font-[family-name:var(--font-inter)] text-xs">
              Return to <span>datatools.com.au</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 font-[family-name:var(--font-inter)] text-xs text-charcoal-700 sm:flex">
            <Link href="#about">ABOUT US</Link>
            <Link href="#contact">CONTACT US</Link>
            <Link href="#login">LOG IN/SIGN UP</Link>
          </nav>
        </Container>
      </div>

      <Container className="flex items-center justify-between py-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              href={item.href}
              hasDropdown={item.dropdown}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Button href="#get-started" size="sm">
          Get started
        </Button>
      </Container>

      <PromoBar />
    </header>
  );
}
