import type { ReactNode } from "react";

export const altraservicePageMeta = {
  title: "Altraservice™ | Seltaris",
  description:
    "Groundbreaking performance. The fastest addressing batch processor we've ever created.",
} as const;

export const altraservicePageHero = {
  eyebrow: "Altraservice™",
  heading: (
    <>
      Groundbreaking
      <br />
      <span className="text-brand">Performance.</span>
    </>
  ),
  subtitle: "The Fastest Addressing Batch Processor We've Ever Created",
} as const;

export const altraserviceSpeedIntro = {
  leftHeading: (
    <>
      Feel the need.
      <br />
      The need for processing speed.
    </>
  ),
  leftBody:
    "Our latest step in pushing the boundaries of batch processing data, this time in the direction of fast processing speeds.",
  rightBody: (
    <>
      <p>
        Over the past few years, we have dedicated substantial effort to
        optimising efficiency at every layer of our cloud technology stack.
      </p>
      <p className="mt-6">
        As a result, we are proud to announce that Seltaris sets new industry
        standards, delivering unprecedented speed and reliability for all your
        data processing needs.
      </p>
    </>
  ),
} as const;

export const altraserviceEngineering = {
  eyebrow: "Powered by Altraservice™",
  leftHeading: "A truly remarkable feat of software engineering.",
  leftBody: (
    <>
      Our Cloud Performance blasts forward with Altraservice™. Built on the
      latest server technology, the all-new microservice architecture is able to
      perform at outrageous speeds and game-changing performance for processing
      batch files. This is truly one of the most powerful and capable file
      processing technologies we have ever created.
    </>
  ),
  rightBody: (
    <>
      <p>
        Altraservice™, directly integrated into our cloud infrastructure,
        enables us to correct each line of address data within fractions of a
        millisecond, this has enabled it to achieve a staggering{" "}
        <strong className="font-semibold text-text">
          1 million records in just 1 minute
        </strong>
        .
      </p>
      <p className="mt-6">
        To put that into perspective, validating Australia&apos;s 15.6 million
        deliverable addresses from start to finish with Seltaris would only take
        a total of 16 minutes. Now that&apos;s ultra fast.
      </p>
    </>
  ),
} as const;

export const altraserviceMicroservice = {
  heading: (
    <>
      An Altraload of power.
      <br />
      The next generation of Microservice performance.
    </>
  ),
  leftBody: (
    <>
      Altraservice™ speeds past batch files. To achieve this, we fundamentally
      re-engineered the current microservice architecture, particularly for
      large files with immense volumes of data workloads. This re-engineering
      effort was driven by a singular goal. To enhance efficiency and speed in
      data handling and the distribution of intensive processing tasks.
    </>
  ),
  rightBody: (
    <>
      By leveraging distributed computing and asynchronous communication
      patterns, we developed an innovative method to process files more
      effectively. These patterns allow tasks to be executed concurrently across
      multiple nodes, significantly improving processing times and system
      performance.
    </>
  ),
} as const;

export type AltraserviceSlide = {
  id: string;
  title: string;
  body: ReactNode;
  imageKey: string;
  width?: "default" | "wide" | "narrow";
};

export const altraservicePerformanceSlides: AltraserviceSlide[] = [
  {
    id: "distributed",
    title: "Distributed computing",
    imageKey: "slideDistributed",
    width: "wide",
    body: (
      <>
        Altraservice™ distributed computing now enables us to break down large
        data files into smaller, manageable chunks. Each chunk is processed
        independently and simultaneously across an expansive network of powerful
        nodes, ensuring that even the most substantial data sets are handled
        with remarkable speed and efficiency. This parallel processing capability
        dramatically reduces the time required to complete data-intensive
        operations.
      </>
    ),
  },
  {
    id: "async",
    title: "Asynchronous communication patterns",
    imageKey: "slideAsync",
    width: "narrow",
    body: (
      <>
        Altraservice™ asynchronous communication patterns further enhance our
        system&apos;s efficiency by allowing processes to run concurrently
        without waiting for the completion of previous tasks. This non-blocking
        approach minimises latency and maximises throughput, ensuring you have a
        seamless and swift data processing experience.
      </>
    ),
  },
  {
    id: "scale",
    title: "Designed to scale",
    imageKey: "slideScale",
    width: "narrow",
    body: (
      <>
        Seltaris is architected for massive scalability, dynamically expanding
        computational capacity by seamlessly orchestrating workloads across
        extensive server clusters. Powered by Altraservice™ within our cloud
        environment, it delivers exceptionally fast, precise data processing,
        effortlessly handling surges in demand with minimal latency.
      </>
    ),
  },
];

export const altraserviceBuiltForSpeed = {
  heading: (
    <>
      Built for speed.
      <br />
      Born to perform.
    </>
  ),
  subheading:
    "Explore the advanced processing techniques that power Seltaris to industry leading performance.",
} as const;
