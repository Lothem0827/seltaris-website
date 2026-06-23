import type { AddressServicePageSampleExamplesPanel } from "@/lib/types/address-service-page";

export const addressSampleExamplesPanel: AddressServicePageSampleExamplesPanel =
  {
    id: "sample-examples",
    label: "Sample examples",
    layout: "sampleExamples",
    imageKey: "sampleExamples",
    body: (
      <>
        <p>
          <strong>Repair examples from your dataset.</strong> Here you&apos;ll see
          a sample list of your existing addresses and how they&apos;ve been
          refined to their best state. This preview gives you a clear insight
          into how Seltaris processes your file and provides confidence in
          knowing exactly how your data will look before you receive the complete
          file.
        </p>
      </>
    ),
  };
