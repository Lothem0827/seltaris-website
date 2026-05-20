import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Logo } from "@/components/molecules/Logo";
import { NavLink } from "@/components/molecules/NavLink";
import { assets } from "@/lib/assets";
import { navLinks } from "@/lib/content/home";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Top utility bar */}
      <div className="bg-brand-light py-1.5">
        <Container className="flex items-center justify-between gap-4 text-[12px]">
          <Link
            href="https://datatools.com.au"
            className="inline-flex items-center gap-1.5 font-label text-text hover:text-brand"
          >
            <Image
              src={assets.arrowUp}
              alt=""
              width={14}
              height={14}
              aria-hidden
            />
            <span>
              Return to <strong>datatools.com.au</strong>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 font-label uppercase tracking-wide text-text md:flex">
            <Link href="#about">About us</Link>
            <Link href="#contact">Contact us</Link>
            <Link href="#login">Log in / Sign up</Link>
          </nav>
        </Container>
      </div>

      {/* Main navbar — equal-width side columns keep center nav truly centered when logo/CTA change */}
      <Container className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4 py-3.5 lg:gap-6">
        <div className="flex min-w-0 items-center justify-self-stretch justify-start">
          <Logo />
        </div>
        <div className="flex min-w-0 shrink-0 items-center justify-center">
          <nav className="hidden items-center gap-4 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.label} {...link} />
            ))}
          </nav>
        </div>
        <div className="flex min-w-0 items-center justify-self-stretch justify-end">
          <Button href="#get-started" size="small" className="shrink-0">
            Get started
          </Button>
        </div>
      </Container>

      {/* Promo strip */}
      <div className="border-t border-border bg-white py-3">
        <Container className="text-center text-[12px] text-paragraph">
          <span>
            Get your first month for just $1. Enjoy free Health Check Reports
            and volume discounts — only with{" "}
            <strong className="font-semibold text-text">Seltaris+</strong>.
          </span>{" "}
          <Link
            href="#seltaris-plus"
            className="font-label text-brand underline"
          >
            Start with DataTools Seltaris+ today.
          </Link>
        </Container>
      </div>
    </header>
  );
}
