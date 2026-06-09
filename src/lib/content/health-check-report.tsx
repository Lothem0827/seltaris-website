export const healthCheckReportPageMeta = {
  title: "Health Check Report | Seltaris",
  description:
    "Data quality at its finest detail. Get a comprehensive Health Check Report assessing the completeness, accuracy, and compliance of your address data.",
} as const;

export const healthCheckReportPageHero = {
  eyebrow: "Health Check Report",
  heading: (
    <>
      Data quality at its
      <br />
      finest detail.
    </>
  ),
  subtitle:
    "A comprehensive report about the data quality of your existing data.",
} as const;

export const healthCheckReportOverview = {
  eyebrow: "Overview",
  heading: (
    <>
      From hidden to clear.
      <br />
      The full picture is here.
    </>
  ),
  leftBody: (
    <>
      <p>
        This Health Check Report delivers a{" "}
        <strong>clear and comprehensive assessment of your submitted address data</strong>{" "}
        delivered in an easy to read PDF, analysed through the Seltaris service.
      </p>
      <p className="mt-6">
        Each record is reviewed for completeness, accuracy, and compliance with
        official postal standards. The report highlights key issues such as
        missing details, invalid formats, or unrecognised localities, alongside
        recommended corrections and enhancements.
      </p>
    </>
  ),
  rightBody:
    "These improvements are designed to strengthen the quality, deliverability, and reliability of your address data ensuring it is fully prepared for use across mailing, logistics, and compliance systems.",
} as const;

export type HealthCheckReportNextStep = {
  id: string;
  imageKey: string;
  lead: string;
  body: string;
};

export const healthCheckReportNextSteps: HealthCheckReportNextStep[] = [
  {
    id: "buy-result",
    imageKey: "nextStepBuy",
    lead: "Buy result file.",
    body: "If you're happy with the insights from your Health Check Report and want the full result file, it's easy. Simply open your job in Seltaris and click Buy Now. A popup will clearly show the exact contents you'll be charged for. Once you confirm, you'll have full access to your complete result file.",
  },
  {
    id: "realtime",
    imageKey: "nextStepRealtime",
    lead: "Improve existing data in real time.",
    body: "Seltaris enables batches of existing address data to be cleansed in real-time with no human interaction required. Using the same advanced Human Touch™ logic that powers Seltaris interprets full addresses and intelligently makes sense of the information just as a human would. The result? The most advanced and intuitive address quality solution available.",
  },
  {
    id: "capture",
    imageKey: "nextStepCapture",
    lead: "Improve newly captured data.",
    body: "Seltaris capture technology increases efficiency by streamlining data entry, whether that's online during checkout, at POS or within a CRM. This technology also ensures that accurate data is submitted at the front-end thus minimising downstream issues. Improving not only the quality of your data captured but also the user experience by shortening data-entry time.",
  },
];
