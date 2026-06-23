"use client";

import { AppImage as Image } from "@/components/atoms/AppImage";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FeatureNavPanel } from "@/components/molecules/FeatureNavPanel";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/utils";

const CLOSE_DELAY_MS = 120;

export function FeatureNavDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [panelTop, setPanelTop] = useState(0);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updatePanelTop = useCallback(() => {
    const nav = document.getElementById("site-main-nav");
    if (nav) {
      setPanelTop(nav.getBoundingClientRect().bottom);
    }
  }, []);

  useEffect(() => {
    updatePanelTop();
    window.addEventListener("resize", updatePanelTop);
    window.addEventListener("scroll", updatePanelTop, { passive: true });
    return () => {
      window.removeEventListener("resize", updatePanelTop);
      window.removeEventListener("scroll", updatePanelTop);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, [updatePanelTop]);

  const openMenu = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    updatePanelTop();
    setIsOpen(true);
  };

  const scheduleClose = () => {
    closeTimeoutRef.current = setTimeout(() => setIsOpen(false), CLOSE_DELAY_MS);
  };

  return (
    <>
      <div onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
        <Link
          href="#features"
          className={cn(
            "inline-flex items-center gap-1 p-2 font-label text-body transition-colors",
            isOpen ? "text-brand" : "text-text",
          )}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          Features
          <Image
            src={assets.chevronDown}
            alt=""
            width={20}
            height={20}
            className={cn(
              "opacity-70 transition-transform",
              isOpen && "rotate-180",
            )}
            aria-hidden
          />
        </Link>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 z-dropdown flex justify-center px-container-padding pt-3 duration-150",
          isOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0",
        )}
        style={{ top: panelTop }}
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
      >
        <FeatureNavPanel />
      </div>
    </>
  );
}
