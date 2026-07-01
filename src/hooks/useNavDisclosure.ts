"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CLOSE_DELAY_MS = 120;

export function useNavDisclosure() {
  const [isOpen, setIsOpen] = useState(false);
  const [panelTop, setPanelTop] = useState(0);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

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

  const openMenu = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    updatePanelTop();
    setIsOpen(true);
  }, [updatePanelTop]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => setIsOpen(false), CLOSE_DELAY_MS);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((open) => {
      if (open) {
        return false;
      }
      updatePanelTop();
      return true;
    });
  }, [updatePanelTop]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        triggerRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMenu, isOpen]);

  const onTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" && isOpen) {
      event.preventDefault();
      const panel = panelRef.current;
      const firstLink = panel?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
      firstLink?.focus();
    }
  };

  return {
    isOpen,
    panelTop,
    triggerRef,
    panelRef,
    openMenu,
    closeMenu,
    scheduleClose,
    toggleMenu,
    onTriggerKeyDown,
  };
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
