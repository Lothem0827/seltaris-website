import { assets } from "@/lib/assets";

export type AddressValidationImageKey =
  keyof typeof assets.addressValidationPage;

export function getAddressValidationImage(key: string): string {
  if (key in assets.addressValidationPage) {
    return assets.addressValidationPage[key as AddressValidationImageKey];
  }
  return assets.addressValidationPage.resultFileMockup;
}
