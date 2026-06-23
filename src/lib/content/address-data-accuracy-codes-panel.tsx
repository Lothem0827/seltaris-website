import type { AddressServicePageDataAccuracyCodesPanel } from "@/lib/types/address-service-page";

export const addressDataAccuracyCodesPanel: AddressServicePageDataAccuracyCodesPanel =
  {
    id: "data-accuracy-codes",
    label: "Data accuracy codes",
    layout: "dataAccuracyCodes",
    imageKey: "dataAccuracyCodes",
    body: (
      <>
        <p>
          <strong>Data accuracy codes.</strong> In addition to Refinement Codes,
          Seltaris also appends Data Accuracy Codes to each address. These Data
          Accuracy Codes are useful because they indicate the level of precision
          at which each address has been matched and validated during processing.
        </p>
        <p className="mt-6">
          Understanding the accuracy level helps assess the reliability and
          usability of each address for business operations, logistics, or
          compliance.
        </p>
      </>
    ),
  };
