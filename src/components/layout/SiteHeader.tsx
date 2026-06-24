"use client";

import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import { Button, HoverArrowContent } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { MainNav } from "@/components/layout/MainNav";
import { MobileNavDrawer } from "@/components/layout/MobileNavDrawer";
import { Text } from "@/components/ui/Text";
import { SELTARIS_LOGIN_URL, siteAssets } from "@/lib/site-assets";
import { cn } from "@/lib/utils";

const SCROLL_TOP_THRESHOLD = 12;

export function SiteHeader() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
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
                width={60}
                height={16}
                style={{ height: 14, width: "auto" }}
              />
            </Link>
            <nav className="flex items-center gap-6 font-label text-label uppercase tracking-wide text-text md:hidden">
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
        className="grid-header items-center gap-6 py-3.5 lg:gap-4"
      >
        <div className="flex min-w-0 items-center justify-self-stretch justify-start">
          <Logo />
        </div>
        <div className="relative flex min-w-0 shrink-0 items-center justify-center overflow-visible">
          <MainNav />
        </div>
        <div className="flex min-w-0 items-center justify-self-stretch justify-end gap-3">
          <Button href={SELTARIS_LOGIN_URL} size="small" className="shrink-0">
            Get started
          </Button>
          <button
            ref={menuButtonRef}
            type="button"
            className="hidden size-6 shrink-0 items-center justify-center text-text lg:inline-flex"
            aria-label="Open menu"
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMobileNavOpen(true)}
          >
            <Image
              src={siteAssets.menuIcon}
              alt=""
              width={24}
              height={24}
              aria-hidden
            />
          </button>
        </div>
      </Container>

      <MobileNavDrawer
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        returnFocusRef={menuButtonRef}
      />

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
              className="group inline-flex items-center font-label text-label text-brand underline"
              tabIndex={isAtTop ? undefined : -1}
            >
              <HoverArrowContent>Start with Seltaris+ today.</HoverArrowContent>
            </Link>
          </Container>
        </div>
      </div>
    </header>
  );
}
