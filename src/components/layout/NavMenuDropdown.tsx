"use client";

import Image from "@/components/ui/Image";
import { type ReactNode } from "react";
import { useNavDisclosure } from "@/hooks/useNavDisclosure";
import { siteAssets } from "@/lib/site-assets";
import { cn } from "@/lib/utils";

type NavMenuDropdownProps = {
  label: string;
  panelId: string;
  children: ReactNode;
};

export function NavMenuDropdown({
  label,
  panelId,
  children,
}: NavMenuDropdownProps) {
  const {
    isOpen,
    panelTop,
    triggerRef,
    panelRef,
    openMenu,
    scheduleClose,
    toggleMenu,
    onTriggerKeyDown,
  } = useNavDisclosure();

  return (
    <>
      <div onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
        <button
          ref={triggerRef}
          type="button"
          className={cn(
            "inline-flex items-center gap-1 p-2 font-label text-body transition-colors",
            isOpen ? "text-brand" : "text-text",
          )}
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={toggleMenu}
          onKeyDown={onTriggerKeyDown}
        >
          {label}
          <Image
            src={siteAssets.chevronDown}
            alt=""
            width={20}
            height={20}
            className={cn(
              "opacity-70 transition-transform",
              isOpen && "rotate-180",
            )}
            aria-hidden
          />
        </button>
      </div>

      <div
        ref={panelRef}
        id={panelId}
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
        {children}
      </div>
    </>
  );
}
