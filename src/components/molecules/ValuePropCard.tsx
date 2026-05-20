import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

type ValuePropCardProps = {
  title: string;
  description: string;
};

export function ValuePropCard({ title, description }: ValuePropCardProps) {
  return (
    <article className="flex w-[min(425px,85vw)] shrink-0 flex-col gap-4 rounded-radius-xl border border-border bg-white p-8">
      <Heading as="h3" level="h2" className="!text-xl">
        {title}
      </Heading>
      <Text>{description}</Text>
    </article>
  );
}
