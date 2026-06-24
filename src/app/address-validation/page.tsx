import {
  AddressValidationPage,
  addressValidationPageMeta,
} from "@/features/address-service/AddressValidationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: addressValidationPageMeta.title,
  description: addressValidationPageMeta.description,
};

export default function Page() {
  return <AddressValidationPage />;
}
