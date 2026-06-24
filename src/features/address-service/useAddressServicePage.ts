"use client";

import { useContext } from "react";
import { AddressServicePageContext } from "./AddressServicePageContext";

export function useAddressServicePage() {
  const content = useContext(AddressServicePageContext);
  if (!content) {
    throw new Error(
      "useAddressServicePage must be used within AddressServicePageProvider",
    );
  }
  return content;
}
