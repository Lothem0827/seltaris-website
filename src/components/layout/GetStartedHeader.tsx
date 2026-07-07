"use client";

import Image from "@/components/ui/Image";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { SkipLink } from "@/components/layout/SkipLink";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  GBG_CUSTOMER_SUPPORT_URL,
  GET_STARTED_DEMO_URL,
  SELTARIS_LOGIN_URL,
  siteAssets,
} from "@/lib/site-assets";
import { cn } from "@/lib/utils";

const SCROLL_TOP_THRESHOLD = 12;

export function GetStartedHeader() {
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
      <SkipLink />
      <div
        className={cn(
          "overflow-hidden bg-brand-light transition-[max-height,opacity] duration-300 ease-in-out",
          isAtTop ? "max-h-16 opacity-100" : "max-h-0 opacity-0",
        )}
        aria-hidden={!isAtTop}
      >
        <div className="py-1.5">
          <Container className="flex justify-end sm:justify-center">
            <Link
              href={GBG_CUSTOMER_SUPPORT_URL}
              className="group inline-flex items-center gap-3"
              tabIndex={isAtTop ? undefined : -1}
            >
              <span className="font-body text-body font-semibold text-text">
                Need GBG support?
              </span>
              <span className="inline-flex items-center gap-1 font-body text-body-sm font-semibold text-brand">
                Ask a Support Specialist
                <Image
                  src={siteAssets.learnMoreArrow}
                  alt=""
                  width={10}
                  height={8}
                  aria-hidden
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </span>
            </Link>
          </Container>
        </div>
      </div>

      <div className="border-b border-border bg-white">
        <Container className="flex h-[74px] items-center justify-between">
          <Logo href="/" />
          <div className="flex items-center gap-5">
            <Link
              href="https://www.gbg.com"
              className="inline-flex shrink-0"
              aria-label="GBG"
            >
              <Image
                src="/gbg-logo.svg"
                alt="GBG"
                width={100}
                height={25}
                className="sm:hidden"
                style={{ height: "var(--height-gbg-logo)", width: "auto" }}
              />
            </Link>
            <div className="flex items-center gap-3">
              <Button href={GET_STARTED_DEMO_URL} variant="outline" size="small">
                See a demo
              </Button>
              <Button href={SELTARIS_LOGIN_URL} size="small">
                Start for free
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
