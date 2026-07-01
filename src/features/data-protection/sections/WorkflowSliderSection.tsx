"use client";

import Image from "@/components/ui/Image";
import { FeaturePageHeading } from "@/components/ui/FeaturePageHeading";
import { Text } from "@/components/ui/Text";
import {
  ContentSlider,
  type SliderSlide,
} from "@/components/shared/ContentSlider";
import {
  SliderNavButtons,
  useSliderNav,
} from "@/components/shared/SliderNavButtons";

const WORKFLOW_STEPS = [
  {
    id: "before-batch",
    step: 1,
    title: "Before your batch process",
    imageSrc: "/images/data-protection/step-before.webp",
    body: "Before your batch process begins, we will provide you with a unique client secret key. This key is accessible only to you, the user; no one else, not even us internally, has access to this key. It is crucial to save this key securely, as it is the only means to access your file at the end of the job.",
  },
  {
    id: "client-upload",
    step: 2,
    title: "From the client on Up",
    imageSrc: "/images/data-protection/step-client.webp",
    body: "Once you begin the job, your data file (source file) is encrypted and transmitted from your client PC to our secure cloud environment via HTTPS, ensuring it remains protected during transit.",
  },
  {
    id: "encryption-upload",
    step: 3,
    title: "Data uploading via encryption service",
    imageSrc: "/images/data-protection/step-upload.webp",
    body: "Once the initial records of your file enter our secure cloud environment, we begin importing the stream through our encryption service. This service is designed to encrypt each record individually, line by line, as it is being uploaded.",
  },
  {
    id: "cloud-repository",
    step: 4,
    title: "Secure cloud repository",
    imageSrc: "/images/data-protection/step-repository.webp",
    body: "After a record is encrypted, it is then transferred to our secure cloud repository. This continuous, record-by-record transfer ensures that the file is built up in the repository in real-time, without waiting for the entire upload to be completed. When the source file is fully present in our secure cloud repository, it is encrypted using an ephemeral key obtained from our identity server. This ephemeral key, along with the file, is designed to last only as long as the job.",
  },
  {
    id: "splits",
    step: 5,
    title: "The splits",
    imageSrc: "/images/data-protection/step-splits.webp",
    body: "When the source file is fully loaded in our secure cloud repository, it is then split into multiple mini-encrypted files. These mini-encrypted files are designed to improve load times and processing efficiency while still remaining secure.",
  },
  {
    id: "altraservice",
    step: 6,
    title: "Time for processing. The Altraservice",
    imageSrc: "/images/data-protection/step-processing.webp",
    body: "At lightning speeds, each file is sent to our Altraservice. This high-performance service decrypts each mini-encrypted file and processes its contents line by line in memory. Utilizing Human Touch technology, it validates and repairs each record. Once processing is complete, the record is re-encrypted and returned to the secure cloud repository.",
  },
  {
    id: "key-management",
    step: 7,
    title: "Secure Key Management",
    imageSrc: "/images/data-protection/step-keys.webp",
    body: "Temporary client keys are requested and managed through a secure identity server. These keys are used for decrypting and processing data segments without ever storing the decrypted data. As soon as the processing job is finished, these temporary keys are erased, ensuring that only your client key can access the final result file.",
  },
  {
    id: "delivery",
    step: 8,
    title: "File Merging and Result Delivery",
    imageSrc: "/images/data-protection/step-delivery.webp",
    body: "After processing, the encrypted segments are merged back into a result file. This result file is at rest for a limited retention window in our secure cloud environment, still encrypted, ensuring complete data security throughout the process. Only you, the client, have the key to decrypt and access the final result file during this window.",
  },
] as const;

function WorkflowStepCard({
  step,
  title,
  body,
  imageSrc,
  priority,
  loading,
}: {
  step: number;
  title: string;
  body: string;
  imageSrc: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
}) {
  return (
    <article className="group flex w-slide-card shrink-0 flex-col">
      <div className="relative">
        <div className="slider-slide-image-frame relative aspect-auto h-card-slide w-full overflow-hidden rounded-radius-lg border border-border sm:aspect-[4/3] sm:h-auto">
          <Image
            src={imageSrc}
            alt={title}
            fill
            priority={priority}
            loading={loading}
            className="slider-slide-image object-cover"
            sizes="(max-width: 640px) 88vw, 572px"
          />
        </div>
        <div className="absolute bottom-0 left-4 z-10 flex size-16 translate-y-1/2 items-center justify-center rounded-full border border-border bg-white">
          <FeaturePageHeading as="p" variant="workflowStepNumber">
            {step}
          </FeaturePageHeading>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-4 pt-16">
        <FeaturePageHeading as="h3" variant="workflowStepTitle">
          {title}
        </FeaturePageHeading>
        <Text>{body}</Text>
      </div>
    </article>
  );
}

const slides: SliderSlide[] = WORKFLOW_STEPS.map((item, index) => ({
  type: "custom",
  id: item.id,
  content: (
    <WorkflowStepCard
      step={item.step}
      title={item.title}
      body={item.body}
      imageSrc={item.imageSrc}
      priority={index === 0}
      loading={index === 0 ? "eager" : "lazy"}
    />
  ),
}));

export function WorkflowSliderSection() {
  const { navButtonProps, sliderProps } = useSliderNav();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-full">
        <SliderNavButtons {...navButtonProps} />
      </div>
      <ContentSlider {...sliderProps} slides={slides} />
    </div>
  );
}
