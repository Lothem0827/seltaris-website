"use client";

import type { AddressServicePageContent } from "@/lib/types/address-service-page";
import { createContext, useContext, type ReactNode } from "react";

const AddressServicePageContext = createContext<AddressServicePageContent | null>(
  null,
);

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

export function useAddressServicePage() {
  const content = useContext(AddressServicePageContext);
  if (!content) {
    throw new Error(
      "useAddressServicePage must be used within AddressServicePageProvider",
    );
  }
  return content;
}
