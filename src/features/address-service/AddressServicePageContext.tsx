"use client";

import { createContext, type ReactNode } from "react";
import type { AddressServicePageContent } from "./types";

export const AddressServicePageContext =
  createContext<AddressServicePageContent | null>(null);

export function AddressServicePageProvider({
  content,
  children,
}: {
  content: AddressServicePageContent;
  children: ReactNode;
}) {
  return (
    <AddressServicePageContext.Provider value={content}>
      {children}
    </AddressServicePageContext.Provider>
  );
}
