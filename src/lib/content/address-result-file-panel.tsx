import type { AddressServicePageResultFilePanel } from "@/lib/types/address-service-page";

export const addressResultFilePanel: AddressServicePageResultFilePanel = {
  id: "result-file",
  label: "Result file",
  layout: "resultFile",
  imageKey: "resultFileMockup",
  body: (
    <p>
      Once your order is confirmed, an .xlsx file will be available for download.
      If you&apos;ve enabled Advanced Data Protection, you&apos;ll be prompted to
      enter your Private Key as part of the added security process. After
      completing this step, you&apos;ll be able to access, save, and manage your
      file.
    </p>
  ),
};
