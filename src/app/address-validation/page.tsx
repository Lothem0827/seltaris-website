import { AddressServicePage } from "@/components/templates/AddressServicePage";
import {
  addressValidationPageContent,
  addressValidationPageMeta,
} from "@/lib/content/address-validation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: addressValidationPageMeta.title,
  description: addressValidationPageMeta.description,
};

export default function Page() {
  return <AddressServicePage content={addressValidationPageContent} />;
}
