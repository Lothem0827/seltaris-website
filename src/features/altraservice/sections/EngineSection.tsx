import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function EngineSection() {
  return (
    <section className="px-container-padding pb-section">
      <Container>
        <div
          className={cn(
            "banner-media min-h-content-block-alt lg:min-h-content-block",
          )}
        >
          <Image
            src="/images/altraservice/engine.png"
            alt=""
            fill
            className="object-contain p-4"
            sizes="512px"
          />
        </div>
      </Container>
    </section>
  );
}
