import Image from "@/components/ui/Image";
import { Container } from "@/components/ui/Container";export function EngineeringSection() {
  return (
    <section className="pb-section">
      <Container className="flex flex-col gap-12">
        <div className="flex items-center justify-between gap-8 px-8 sm:px-0">
          <h2 className="type-48 text-brand">
            Powered by
            <br />
            GBG Altraservice™
          </h2>
          <div className="relative h-20 w-[4.375rem] shrink-0">
            <Image src="/images/altraservice/altraservice-cube.png"
              alt=""
              fill
              className="object-contain"
              sizes="80px" />
          </div>
        </div>

        <div className="grid grid-cols-2 items-start gap-12 lg:grid-cols-1 sm:gap-6">
          <div className="flex flex-col gap-8 px-8 sm:px-0">
            <h3 className="type-32 text-text">
              A truly remarkable feat of software engineering.
            </h3>
            <p className="type-16 text-paragraph">
              Cloud Performance blasts forward with GBG
              Altraservice™. Built on the latest server technology, the all-new
              microservice architecture is able to perform at outrageous speeds
              and game-changing performance for processing batch files. This is
              truly one of the most powerful and capable file processing
              technologies we have ever created.
            </p>
          </div>
          <div className="type-16 text-paragraph prose-stack px-8 sm:px-0">
            <p>
              GBG Altraservice™, directly integrated into our cloud
              infrastructure, enables us to correct each line of address data
              within fractions of a millisecond, this has enabled it to achieve
              a staggering 1 million records in just 2 minutes.
            </p>
            <p>
              To put that into perspective, validating Australia&apos;s 15.6
              million deliverable addresses from start to finish with Seltaris
              would only take a total of 32 minutes. Now that&apos;s
              ultra fast.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
