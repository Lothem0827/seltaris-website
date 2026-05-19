import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function PromoBar() {
  return (
    <section className="border-b border-charcoal-200 bg-white py-3">
      <Container className="flex max-w-[1200px] flex-wrap items-center justify-center gap-2 text-center font-[family-name:var(--font-inter)] text-xs leading-7 text-charcoal-500">
        <p>
          Get your first month for just $1. Enjoy free Health Check Reports and
          volume discounts — only with{" "}
          <strong className="font-bold text-charcoal-700">Seltaris+</strong>.
        </p>
        <Link href="#seltaris-plus" className="text-brand underline">
          Start with DataTools Seltaris+ today.
        </Link>
      </Container>
    </section>
  );
}
