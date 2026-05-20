import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

type TestimonialCardProps = {
  author: string;
  quote: string;
};

export function TestimonialCard({ author, quote }: TestimonialCardProps) {
  return (
    <article className="flex w-[min(588px,90vw)] shrink-0 flex-col gap-8 rounded-radius-xl border border-border bg-white p-12">
      <div>
        <Heading as="h3" level="h2" className="!text-2xl">
          {author}
        </Heading>
        <div className="mt-2 h-1 w-8 rounded-full bg-brand" />
      </div>
      <Text className="text-lg leading-relaxed">&ldquo;{quote}&rdquo;</Text>
    </article>
  );
}
