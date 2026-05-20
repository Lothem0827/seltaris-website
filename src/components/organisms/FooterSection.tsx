import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import Link from "next/link";

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-white py-section">
      <Container className="flex flex-col items-center gap-16 text-center">
        <div className="flex max-w-3xl flex-col items-center gap-8">
          <Eyebrow
            label="Bulk Data Enhancement Tool"
            badge="EARLY ACCESS PREVIEW"
          />
          <Heading level="display" className="!text-5xl md:!text-6xl">
            DataTools Seltaris
          </Heading>
          <Text className="text-xl font-medium">
            High Quality Results. Unbelievable Performance. Incredibly Secure.
          </Text>
          <Button href="#get-started">Get started with Seltaris</Button>
        </div>

        <nav className="flex flex-wrap justify-center gap-8 font-body text-body text-text">
          <Link href="#datatools">DataTools</Link>
          <Link href="#features">Features</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#faq">FAQ</Link>
        </nav>

        <Text variant="body-sm" className="max-w-3xl text-left text-muted">
          Performance, availability, security, and pricing details are provided
          for general guidance. See datatools.com.au for full terms and
          certification scope.
        </Text>

        <Text variant="utility" className="text-muted">
          © {new Date().getFullYear()} DataTools. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
}
