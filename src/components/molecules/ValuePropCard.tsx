import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

type ValuePropCardProps = {
  title: string;
  description: string;
};

export function ValuePropCard({ title, description }: ValuePropCardProps) {
  return (
    <article className="flex w-value-prop-card shrink-0 flex-col gap-4 rounded-radius-xl border border-border bg-white p-8">
      <Heading as="h3" level="h2">
        {title}
      </Heading>
      <Text>{description}</Text>
    </article>
  );
}
