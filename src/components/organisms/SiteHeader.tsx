"use client";

import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Logo } from "@/components/molecules/Logo";
import { MainNav } from "@/components/molecules/MainNav";
import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/utils";

const SCROLL_TOP_THRESHOLD = 12;

export function SiteHeader() {
  const [isAtTop, setIsAtTop] = useState(true);
  const lenis = useLenis();

  useLenis((instance) => {
    const atTop = instance.scroll <= SCROLL_TOP_THRESHOLD;
    setIsAtTop((prev) => (prev === atTop ? prev : atTop));
  });

  useEffect(() => {
    if (lenis) return;

    const onScroll = () => {
      const atTop = window.scrollY <= SCROLL_TOP_THRESHOLD;
      setIsAtTop((prev) => (prev === atTop ? prev : atTop));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [lenis]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div
        className={cn(
          "overflow-hidden bg-brand-light transition-[max-height,opacity] duration-300 ease-in-out",
          isAtTop ? "max-h-16 opacity-100" : "max-h-0 opacity-0",
        )}
        aria-hidden={!isAtTop}
      >
        <div className="py-1.5">
          <Container className="flex items-center justify-between gap-4">
            <Link
              href="https://www.gbg.com"
              className="inline-flex shrink-0 items-center opacity-90 transition-opacity hover:opacity-100"
              aria-label="GBG"
              tabIndex={isAtTop ? undefined : -1}
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
            <nav className="hidden items-center gap-6 font-label text-label uppercase tracking-wide text-text md:flex">
              <Link href="#about" tabIndex={isAtTop ? undefined : -1}>
                About us
              </Link>
              <Link href="#contact" tabIndex={isAtTop ? undefined : -1}>
                Contact us
              </Link>
              <Link href="#login" tabIndex={isAtTop ? undefined : -1}>
                Log in / Sign up
              </Link>
            </nav>
          </Container>
        </div>
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

      <div
        className={cn(
          "overflow-hidden bg-white transition-[max-height,opacity] duration-300 ease-in-out",
          isAtTop
            ? "max-h-24 border-t border-border opacity-100"
            : "max-h-0 border-t-0 opacity-0",
        )}
        aria-hidden={!isAtTop}
      >
        <div className="py-3">
          <Container className="text-center">
            <Text as="span" variant="utility">
              Enjoy free Health Check Reports and volume discounts with{" "}
              <strong className="font-semibold text-text">Seltaris+</strong>.
            </Text>{" "}
            <Link
              href="/seltaris-plus"
              className="font-label text-label text-brand underline"
              tabIndex={isAtTop ? undefined : -1}
            >
              Start with Seltaris+ today.
            </Link>
          </Container>
        </div>
      </div>
    </header>
  );
}
