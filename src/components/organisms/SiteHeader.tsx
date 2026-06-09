import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Logo } from "@/components/molecules/Logo";
import { MainNav } from "@/components/molecules/MainNav";
import { Text } from "@/components/atoms/Text";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="bg-brand-light py-1.5">
        <Container className="flex items-center justify-between gap-4">
          <Link
            href="https://www.gbg.com"
            className="inline-flex shrink-0 items-center opacity-90 transition-opacity hover:opacity-100"
            aria-label="GBG"
          >
            <Image
              src="/gbg-logo.svg"
              alt="GBG"
              width={45}
              height={12}
              className="h-4 w-auto"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-6 font-label uppercase tracking-wide text-text md:flex">
            <Link href="#about">About us</Link>
            <Link href="#contact">Contact us</Link>
            <Link href="#login">Log in / Sign up</Link>
          </nav>
        </Container>
      </div>

      <Container
        id="site-main-nav"
        className="grid-header items-center gap-4 py-3.5 lg:gap-6"
      >
        <div className="flex min-w-0 items-center justify-self-stretch justify-start">
          <Logo />
        </div>
        <div className="relative flex min-w-0 shrink-0 items-center justify-center overflow-visible">
          <MainNav />
        </div>
        <div className="flex min-w-0 items-center justify-self-stretch justify-end">
          <Button href="#get-started" size="small" className="shrink-0">
            Get started
          </Button>
        </div>
      </Container>

      <div className="border-t border-border bg-white py-3">
        <Container className="text-center">
          <Text as="span" variant="utility">
            Enjoy free Health Check Reports and volume discounts with{" "}
            <strong className="font-semibold text-text">Seltaris+</strong>.
          </Text>{" "}
          <Link
            href="/seltaris-plus"
            className="font-label text-brand underline"
          >
            Start with Seltaris+ today.
          </Link>
        </Container>
      </div>
    </header>
  );
}
