import Image from "@/components/ui/Image";
import {
  GET_STARTED_DEMO_URL,
  SELTARIS_GET_STARTED_PLAN_URLS,
  siteAssets,
} from "@/lib/site-assets";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";export function GetStartedHeroSection() {
  return (
    <section className="py-section">
      <Container>
        <div className="flex flex-row items-center gap-16 lg:flex-col lg:items-stretch lg:gap-8">
          <div className="flex flex-1 flex-col gap-8 lg:gap-6">
            <div className="space-y-4">
              <p className="font-paragraph text-xl font-bold uppercase tracking-widest text-text">
                Getting started with Seltaris
              </p>
              <h1 className="type-48 text-text">
                Get a comprehensive report on your existing datasets for free.
              </h1>
              <p className="w-[90%] font-body text-xl lg:w-full">
                Seltaris is an all-in-one data quality platform designed to
                inspect and clean your existing datasets
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 ">
              <Button href={GET_STARTED_DEMO_URL}
                variant="outline"
                className="sm:w-full">
                See a demo
              </Button>
              <Button href={SELTARIS_GET_STARTED_PLAN_URLS.prepaid}
                className="sm:w-full">
                Get started
              </Button>
              <p className="type-14  text-paragraph sm:text-center sm:w-full">
                Prepaid credits or Postpaid by card. Health Check Reports are free.
              </p>
            </div>
          </div>
          <div className="flex flex-1 justify-center">
            <Image src={siteAssets.getStarted.heroLaptop}
              alt="Seltaris Health Check Report on laptop"
              width={526}
              height={420}
              className="h-auto w-full"
              priority
              sizes="(max-width: 768px) 100vw, 525px" />
          </div>
        </div>
      </Container>
    </section>
  );
}
