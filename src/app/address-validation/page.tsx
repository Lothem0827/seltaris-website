import {
  AddressValidationPage,
  addressValidationPageMeta,
} from "@/features/address-service/AddressValidationPage";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  pathname: "/address-validation",
  title: addressValidationPageMeta.title,
  description: addressValidationPageMeta.description,
});

export default function Page() {
  return <AddressValidationPage />;
}
