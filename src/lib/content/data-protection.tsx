import type { ReactNode } from "react";

export const dataProtectionPageMeta = {
  title: "Advanced Data Protection | Seltaris",
  description:
    "Enterprise grade security built from the ground up. Encrypted Cloud Computing™ and Private Keys protect your data at every step.",
} as const;

export const dataProtectionPageHero = {
  eyebrow: "Advanced Data Protection",
  heading: (
    <>
      Enterprise grade security.
      <br />
      <span className="text-brand">Built from the ground up.</span>
    </>
  ),
  subtitle: "Your business is nobody else's. Not even GBG.",
} as const;

export const dataProtectionEncryptedCloudCard = {
  eyebrow: "Encrypted Cloud Computing™",
  heading: (
    <>
      Encrypted
      <br />
      Cloud Computing™
    </>
  ),
  body: "Our most advanced cloud security architecture specifically built with enterprise in mind.",
} as const;

export const dataProtectionCloudIntro = {
  eyebrow: "Encrypted Cloud Computing™",
  heading: (
    <>
      Cloud security at its highest.
      <br />
      Protections at its tightest.
    </>
  ),
  leftBody: (
    <>
      <p>
        We have spent nearly three decades pushing the boundaries of what it
        means to turn your data quality from good to your greatest business
        asset. Always with an unwavering commitment to security, reliability,
        simplicity and unlimited support. As organisations rely on Seltaris to
        process massive address datasets in record time, they also trust us with
        some of their most sensitive information.
      </p>
      <p className="mt-6">
        We achieved this once with the launch of Kleber in the Cloud, but we
        weren&apos;t content to stop there. We set out to push these boundaries
        even further — with a goal to handle larger batch files securely with
        groundbreaking speed and performance.
      </p>
    </>
  ),
  rightBody: (
    <>
      <p>
        That led us to revisit our existing security stack and integrate
        additional layers for higher volume workloads. An innovative cloud
        security architecture purpose-built to process batch data securely at the
        scale today&apos;s largest enterprises demand. We call it Encrypted Cloud
        Computing™.
      </p>
      <p className="mt-6">
        Encrypted Cloud Computing™ builds on our robust, industry-leading cloud
        security, now taken to a whole new scale. It ensures that even the most
        intensive batch jobs run with airtight protections. Your data remains
        confidential, heavily encrypted, and not accessible to anyone.
      </p>
    </>
  ),
} as const;

export const dataProtectionWhyBuilt = {
  heading: "Why we built it",
  leftBody: (
    <>
      Competing cloud environments, while convenient, pose familiar risks. Once
      data is inside competing cloud platforms, enforcing zero-access guarantees
      becomes challenging. Logging systems, privileged support consoles, and
      broad administrative access can inadvertently expose data or leave it
      vulnerable during operational troubleshooting.
    </>
  ),
  rightBody: (
    <>
      That&apos;s not acceptable for your businesses highly sensitive data. With
      Encrypted Cloud Computing™, we&apos;ve taken a ground-up approach to cloud
      security that mirrors — and even surpasses — the standards we&apos;ve long
      upheld with cloud and on-premise processing.
    </>
  ),
} as const;

export const dataProtectionHowItWorks = {
  heading: (
    <>
      How it works with
      <br />
      Seltaris.
    </>
  ),
  leftBody: (
    <>
      Seltaris is meticulously designed to protect your data at every step.
      Integrated into the core of our secure cloud environment, it utilises
      advanced encryption processes to handle your data without ever storing it
      unencrypted.
    </>
  ),
  rightBody: (
    <>
      Thanks to Encrypted Cloud Computing™, we can securely process complex
      requests, ensuring that only you have access to your data. Your information
      remains encrypted during transit, throughout processing, and at rest,
      providing next-level security and peace of mind.
    </>
  ),
} as const;

export type DataProtectionWorkflowStep = {
  id: string;
  step: number;
  title: string;
  body: ReactNode;
  imageKey: string;
};

export const dataProtectionWorkflowSteps: DataProtectionWorkflowStep[] = [
  {
    id: "before-batch",
    step: 1,
    title: "Before your batch process",
    imageKey: "stepBefore",
    body: "Before your batch process begins, we will provide you with a unique client secret key. This key is accessible only to you, the user; no one else, not even us internally, has access to this key. It is crucial to save this key securely, as it is the only means to access your file at the end of the job.",
  },
  {
    id: "client-upload",
    step: 2,
    title: "From the client on Up",
    imageKey: "stepClient",
    body: "Once you begin the job, your data file (source file) is encrypted and transmitted from your client PC to our secure cloud environment via HTTPS, ensuring it remains protected during transit.",
  },
  {
    id: "encryption-upload",
    step: 3,
    title: "Data uploading via encryption service",
    imageKey: "stepUpload",
    body: "Once the initial records of your file enter our secure cloud environment, we begin importing the stream through our encryption service. This service is designed to encrypt each record individually, line by line, as it is being uploaded.",
  },
  {
    id: "cloud-repository",
    step: 4,
    title: "Secure cloud repository",
    imageKey: "stepRepository",
    body: "After a record is encrypted, it is then transferred to our secure cloud repository. This continuous, record-by-record transfer ensures that the file is built up in the repository in real-time, without waiting for the entire upload to be completed. When the source file is fully present in our secure cloud repository, it is encrypted using an ephemeral key obtained from our identity server. This ephemeral key, along with the file, is designed to last only as long as the job.",
  },
  {
    id: "splits",
    step: 5,
    title: "The splits",
    imageKey: "stepSplits",
    body: "When the source file is fully loaded in our secure cloud repository, it is then split into multiple mini-encrypted files. These mini-encrypted files are designed to improve load times and processing efficiency while still remaining secure.",
  },
  {
    id: "altraservice",
    step: 6,
    title: "Time for processing. The Altraservice",
    imageKey: "stepProcessing",
    body: "At lightning speeds, each file is sent to our Altraservice. This high-performance service decrypts each mini-encrypted file and processes its contents line by line in memory. Utilizing Human Touch technology, it validates and repairs each record. Once processing is complete, the record is re-encrypted and returned to the secure cloud repository.",
  },
  {
    id: "key-management",
    step: 7,
    title: "Secure Key Management",
    imageKey: "stepKeys",
    body: "Temporary client keys are requested and managed through a secure identity server. These keys are used for decrypting and processing data segments without ever storing the decrypted data. As soon as the processing job is finished, these temporary keys are erased, ensuring that only your client key can access the final result file.",
  },
  {
    id: "delivery",
    step: 8,
    title: "File Merging and Result Delivery",
    imageKey: "stepDelivery",
    body: "After processing, the encrypted segments are merged back into a result file. This result file is at rest for a limited retention window in our secure cloud environment, still encrypted, ensuring complete data security throughout the process. Only you, the client, have the key to decrypt and access the final result file during this window.",
  },
];

export const dataProtectionPrivateKeys = {
  eyebrow: "Private Keys",
  subheading: "The single key to your encrypted result file.",
  heading: (
    <>
      Own private keys.
      <br />
      Control who sees.
    </>
  ),
  intro: (
    <>
      A private key is your unique security credential, issued only to you, and
      it&apos;s the one and only way to unlock your final result file.
    </>
  ),
  body: (
    <>
      <p>
        When you begin a batch job, we generate a client secret key that is never
        shared, stored, or accessible by anyone else. From that point forward,
        every stage of your job relies on temporary, ephemeral keys managed
        through our secure identity servers. These working keys are used solely
        for in-memory processing and are destroyed the moment the job is complete.
        What remains is your encrypted result file, locked and waiting. Only your
        private key can decrypt it.
      </p>
      <p className="mt-6">
        This design eliminates one of the biggest risks in traditional cloud
        environments: server-side access. On conventional servers, decrypted data
        can exist at rest, meaning administrators or third parties could
        potentially access your information.
      </p>
    </>
  ),
  guaranteesHeading: "By giving you sole control of your private key, Advanced Data Protection guarantees:",
  guarantees: [
    "Absolute ownership — You decide who can access your results.",
    "Enterprise grade security — Protections and security credentials specifically designed for the strictest compliance environments.",
    "Retention period — Once the retention period expires, the encrypted file is permanently erased from our servers.",
  ],
  closing:
    "There are no backdoors, no hidden access points, and no way for anyone else to step between you and your data. Even under force, we cannot hand over what it cannot see.",
} as const;

export const dataProtectionDesignTeaser = {
  eyebrow: "Design made simple",
  heading: (
    <>
      Innovation <span className="text-brand">for all.</span>
    </>
  ),
  subheading: "Built for everyone so anyone can use it.",
  cta: { label: "Learn more", href: "/seltaris-design-made-simple" },
} as const;
