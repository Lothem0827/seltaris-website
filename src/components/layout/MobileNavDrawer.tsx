"use client";

import Image from "@/components/ui/Image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MobileEnterpriseNav } from "@/components/layout/MobileEnterpriseNav";
import { MobileFeaturesNav } from "@/components/layout/MobileFeaturesNav";
import { MobileSolutionsNav } from "@/components/layout/MobileSolutionsNav";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { mainNavLinks } from "@/components/layout/main-nav.content";
import { SELTARIS_LOGIN_URL, siteAssets } from "@/lib/site-assets";
import { cn } from "@/lib/utils";

type ExpandedSection = "solutions" | "features" | "enterprise" | null;

type MobileNavDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  returnFocusRef?: React.RefObject<HTMLButtonElement | null>;
};

function AccordionTrigger({
  label,
  isOpen,
  onToggle,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between py-2 text-left"
      aria-expanded={isOpen}
      onClick={onToggle}
    >
      <Heading as="p" level="h2">
        {label}
      </Heading>
      <Image
        src={siteAssets.chevronDown}
        alt=""
        width={24}
        height={24}
        className={cn(
          "shrink-0 opacity-70 transition-transform",
          isOpen && "rotate-180",
        )}
        aria-hidden
      />
    </button>
  );
}

export function MobileNavDrawer({
  isOpen,
  onClose,
  returnFocusRef,
}: MobileNavDrawerProps) {
  const [expandedSection, setExpandedSection] = useState<ExpandedSection>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const wasOpenRef = useRef(false);

  useFocusTrap(drawerRef, isOpen);

  useEffect(() => {
    if (!isOpen) {
      setExpandedSection(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      if (wasOpenRef.current) {
        returnFocusRef?.current?.focus();
      }
      wasOpenRef.current = false;
      return;
    }

    wasOpenRef.current = true;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose, returnFocusRef]);

  if (!isOpen) {
    return null;
  }

  const handleNavigate = () => {
    onClose();
  };

  const toggleSection = (section: ExpandedSection) => {
    setExpandedSection((current) => (current === section ? null : section));
  };

  const plainLinks = mainNavLinks.filter((link) => !link.hasDropdown);

  return (
    <div
      ref={drawerRef}
      id="mobile-nav-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
      className="fixed inset-0 z-dropdown flex flex-col bg-white p-container-padding"
    >
      <div className="flex min-h-0 flex-1 flex-col gap-12">
        <div className="flex items-center justify-between">
          <Logo />
          <button
            ref={closeButtonRef}
            type="button"
            className="inline-flex size-7 shrink-0 items-center justify-center text-text"
            aria-label="Close menu"
            onClick={onClose}
          >
            <Image
              src={siteAssets.closeIcon}
              alt=""
              width={28}
              height={28}
              aria-hidden
            />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          <nav aria-label="Mobile" className="flex flex-col gap-3">
            {(expandedSection === null || expandedSection === "solutions") && (
              <div className="flex flex-col gap-3">
                <AccordionTrigger
                  label="Solutions"
                  isOpen={expandedSection === "solutions"}
                  onToggle={() => toggleSection("solutions")}
                />
                {expandedSection === "solutions" ? (
                  <MobileSolutionsNav onNavigate={handleNavigate} />
                ) : null}
              </div>
            )}

            {(expandedSection === null || expandedSection === "features") && (
              <div className="flex flex-col gap-3">
                <AccordionTrigger
                  label="Features"
                  isOpen={expandedSection === "features"}
                  onToggle={() => toggleSection("features")}
                />
                {expandedSection === "features" ? (
                  <MobileFeaturesNav onNavigate={handleNavigate} />
                ) : null}
              </div>
            )}

            {(expandedSection === null || expandedSection === "enterprise") && (
              <div className="flex flex-col gap-3">
                <AccordionTrigger
                  label="Enterprise"
                  isOpen={expandedSection === "enterprise"}
                  onToggle={() => toggleSection("enterprise")}
                />
                {expandedSection === "enterprise" ? (
                  <MobileEnterpriseNav onNavigate={handleNavigate} />
                ) : null}
              </div>
            )}

            {expandedSection === null &&
              plainLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="py-2"
                  onClick={handleNavigate}
                >
                  <Heading as="p" level="h2">
                    {link.label}
                  </Heading>
                </Link>
              ))}
          </nav>
        </div>
      </div>

      <Button
        href={SELTARIS_LOGIN_URL}
        className="mt-6 w-full"
        onClick={handleNavigate}
      >
        Get started
      </Button>
    </div>
  );
}