import type { AddressServicePageRefinementCodesPanel } from "@/lib/types/address-service-page";

const verifiedBody = (
  <>
    <p>
      <strong>Verified (V) address codes.</strong> These represent the addresses
      that Seltaris has successfully confirmed as valid.
    </p>
    <p className="mt-6">
      Codes V2–V4 show the progressive refinements applied, ensuring each address
      is fully standardised, accurate, and aligned with postal standards.
    </p>
  </>
);

const unverifiedBody = (
  <>
    <p>
      <strong>Unverified (U) address codes.</strong> These addresses could not be
      fully confirmed as valid, but they were still processed with partial
      corrections, structural adjustments, and formatting improvements.
    </p>
    <p className="mt-6">
      Codes U2–U5 show the enhancements applied to unverified data. These
      improvements ensure that if additional information becomes available in the
      future, each address has the best possible chance of being validated.
    </p>
  </>
);

export const addressRefinementCodesPanel: AddressServicePageRefinementCodesPanel =
  {
    id: "address-refinement-codes",
    label: "Address refinement codes",
    layout: "refinementCodes",
    verifiedImageKey: "refinementVerified",
    unverifiedImageKey: "refinementUnverified",
    verifiedBody,
    unverifiedBody,
  };
