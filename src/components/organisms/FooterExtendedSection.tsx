import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { Text } from "@/components/atoms/Text";
import { FooterNavColumn } from "@/components/molecules/FooterNavColumn";
import { assets } from "@/lib/assets";
import {
  footerLegalDisclosures,
  footerNavGroups,
  footerSocialLinks,
  footerTagline,
} from "@/lib/content/footer";

function FooterLegalDisclosures() {
  return (
    <div className="bg-surface-muted py-10">
      <Container>
        <div className="space-y-0 font-body text-micro leading-micro text-paragraph">
          {footerLegalDisclosures.map((block, blockIndex) => (
            <div key={block.title} className={blockIndex > 0 ? "pt-3.5" : ""}>
              <p className="font-normal">{block.title}</p>
              {block.items.map((item, itemIndex) => (
                <p key={itemIndex} className="font-normal">
                  {typeof item === "string" ? (
                    item
                  ) : (
                    <>
                      {item.text}
                      <Link
                        href={item.linkHref}
                        className="text-brand hover:underline"
                      >
                        {item.linkLabel}
                      </Link>
                      .
                    </>
                  )}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

function FooterLargeLogo() {
  return (
    <div className="border-b border-surface-muted bg-white py-16 md:py-24">
      <Container className="flex justify-center">
        <div className="relative w-full max-w-footer-logo">
          <Image
            src={assets.footerLargeLogo}
            alt="Seltaris"
            width={1190}
            height={238}
            className="h-auto w-full"
            sizes="(max-width: 1200px) 100vw, 1190px"
          />
        </div>
      </Container>
    </div>
  );
}

function FooterSiteNav() {
  const [products, platform, ...rest] = footerNavGroups;

  return (
    <div className="bg-white py-12 md:py-14">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-10">
          <div className="flex shrink-0 flex-col justify-between gap-10 lg:min-h-footer-sidebar lg:w-footer-sidebar">
            <Link
              href="https://www.gbg.com"
              className="inline-flex shrink-0"
              aria-label="GBG"
            >
              <Image
                src="/gbg-logo.svg"
                alt="GBG"
                width={100}
                height={25}
                className="h-gbg-logo w-auto"
              />
            </Link>
            <div className="flex flex-wrap items-center gap-6">
              {footerSocialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="opacity-90 transition-opacity hover:opacity-100"
                  aria-label={social.label}
                >
                  <Image
                    src={assets.footerSocial[social.iconKey]}
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            <div className="space-y-10">
              <FooterNavColumn group={products} />
              <FooterNavColumn group={platform} />
            </div>
            {rest.map((group) => (
              <FooterNavColumn key={group.title} group={group} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

function FooterBottomBar() {
  return (
    <div className="bg-surface-muted py-10">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
          <Text as="p" variant="body-sm" className="max-w-xl">
            {footerTagline}
          </Text>
          <Text as="p" variant="body-sm" className="shrink-0 lg:text-right">
            © {new Date().getFullYear()} GB Group plc (&apos;GBG&apos;).
            <br />
            GBG is the trading name and a trademark of GB Group plc.
          </Text>
        </div>
      </Container>
    </div>
  );
}

export function FooterExtendedSection() {
  return (
    <>
      <FooterLegalDisclosures />
      <FooterLargeLogo />
      <FooterSiteNav />
      <FooterBottomBar />
    </>
  );
}
