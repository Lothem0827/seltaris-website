export const coreFeaturesSection = {
  eyebrow: "Core Features",
  heading: (
    <>
      Explore the core features
      <br />
      of <span className="text-brand">Seltaris</span>
    </>
  ),
  features: [
    {
      id: "human-touch",
      logoKey: "featureHumanTouch",
      visualKey: "humanTouchVisual",
      eyebrow: "Human Touch™",
      heading: (
        <>
          The tool is innovative.
          <br />
          The experience is magical.
        </>
      ),
      body: "At the core of Seltaris lies our intuitive Human Touch Technology. This powerful software features large, highly capable intelligence models specifically tailored to read and process data as efficiently as humans do.",
      href: "/seltaris-human-touch",
      cta: "Learn more",
    },
    {
      id: "altraservice",
      logoKey: "featureAltraservice",
      visualKey: "altraserviceVisual",
      eyebrow: "Altraservice™",
      heading: (
        <>
          Groundbreaking
          <br />
          Performance.
        </>
      ),
      body: "Feel the need. The need for processing speed. Our latest step in pushing the boundaries of batch processing data, this time in the direction of fast processing speeds.",
      href: "/seltaris-altraservice",
      cta: "Learn more",
    },
    {
      id: "data-protection",
      logoKey: "featureDataProtection",
      visualKey: "dataProtectionVisual",
      eyebrow: "Advanced Data Protection",
      heading: (
        <>
          Enterprise grade security.
          <br />
          Built from the ground up.
        </>
      ),
      body: "Seltaris is meticulously designed to protect your data at every step. Integrated into the core of our secure cloud environment, it utilises advanced encryption processes to handle your data without ever storing it unencrypted.",
      href: "/seltaris-advanced-data-protection",
      cta: "Learn more",
    },
    {
      id: "design",
      logoKey: "featureDesign",
      visualKey: "designVisual",
      eyebrow: "Design made simple",
      heading: (
        <>
          Innovation <span className="text-brand">for all.</span>
        </>
      ),
      body: "The best innovations are built for everyone. We have always believed that data quality software should be simple.",
      href: "/seltaris-design-made-simple",
      cta: "Learn more",
    },
    {
      id: "health-check",
      logoKey: "featureHealthCheck",
      visualKey: "healthCheckVisual",
      eyebrow: "Health Check Report",
      heading: "Data quality at its finest detail.",
      body: "This Health Check Report delivers a clear and comprehensive assessment of your submitted address data delivered in an easy to read PDF, analysed through the Seltaris service.",
      href: "/seltaris-health-check-report",
      cta: "Learn more",
    },
  ],
} as const;
