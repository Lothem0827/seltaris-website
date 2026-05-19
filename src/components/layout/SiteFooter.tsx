import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { FooterLegal } from "@/components/layout/FooterLegal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { assets } from "@/lib/assets";

const footerLinks = [
  { label: "DataTools", href: "https://www.datatools.com.au" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#get-started" },
  { label: "FAQ", href: "#faq" },
] as const;

const socialLinks = [
  { src: assets.footer.x, alt: "X", href: "#" },
  { src: assets.footer.instagram, alt: "Instagram", href: "#" },
  { src: assets.footer.youtube, alt: "YouTube", href: "#" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-white">
      <Container className="flex max-w-[1200px] flex-col items-center gap-10 pt-16">
        {/* Footer CTA */}
        <div className="relative flex w-full flex-col items-center">
          <div className="relative z-10 flex flex-col items-center gap-8 pt-[105px]">
            <div className="flex flex-col items-center gap-6">
              <Eyebrow
                label="Bulk Data Enhancement Tool"
                badge="EARLY ACCESS PREVIEW"
              />
              <div className="flex flex-col items-center gap-2.5 text-center">
                <h2 className="font-display text-5xl font-bold leading-none tracking-[-0.9px] text-charcoal-700 sm:text-[90px] sm:leading-[120px]">
                  DataTools Seltaris
                </h2>
                <p className="max-w-[862px] text-lg font-medium leading-7 text-charcoal-500 sm:text-xl sm:leading-7">
                  High Quality Results. Unbelievable Performance. Incredibly
                  Secure.
                </p>
              </div>
            </div>
            <Button href="#get-started" size="lg">
              Get started with Seltaris
            </Button>
          </div>
        </div>

        {/* Nav bar */}
        <div className="flex w-full max-w-[994px] flex-col items-center gap-6 py-6 md:flex-row md:justify-between">
          <nav className="flex flex-wrap justify-center gap-5 text-[13px] leading-[26px] tracking-[-0.0013px] text-charcoal-500">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Logo />

          <div className="flex w-full max-w-[247px] items-center justify-center gap-[30px] md:justify-end">
            {socialLinks.map((social) => (
              <Link
                key={social.alt}
                href={social.href}
                aria-label={social.alt}
                className="transition-opacity hover:opacity-70"
              >
                <Image src={social.src} alt="" width={24} height={24} />
              </Link>
            ))}
          </div>
        </div>

        <FooterLegal />
      </Container>
    </footer>
  );
}
