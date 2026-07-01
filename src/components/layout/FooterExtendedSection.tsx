import Image from "@/components/ui/Image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { FooterNavColumn } from "@/components/layout/FooterNavColumn";
import { siteAssets } from "@/lib/site-assets";
import {
  footerLegalDisclosures,
  footerNavGroups,
  footerSocialLinks,
  footerTagline,
} from "@/components/layout/footer.content";

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
                        className="text-brand underline hover:text-brand-dark"
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
    <div className="border-b border-surface-muted bg-white py-24 md:py-16">
      <Container className="flex justify-center">
        <div className="relative w-full max-w-footer-logo">
          <Image
            src={siteAssets.footerLargeLogo}
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
  const [products, platform, solutions, resources, legal, company, contact] =
    footerNavGroups;

  return (
    <nav aria-label="Site" className="bg-white py-14 md:py-12">
      <Container>
        <div className="flex flex-row gap-10 lg:flex-col lg:gap-8">
          <div className="flex min-h-footer-sidebar w-footer-sidebar shrink-0 flex-col justify-between gap-10 lg:min-h-0 lg:w-auto">
            <Link
              href="https://gbg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0"
              aria-label="GBG"
            >
              <Image
                src={siteAssets.footerGbgLogo}
                alt="GBG"
                width={100}
                height={24}
                className="max-w-gbg-footer-logo"
                sizes="100px, 24px"
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
                    src={siteAssets.footerSocial[social.iconKey]}
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid flex-1 grid-cols-5 gap-x-5 gap-y-10 lg:grid-cols-3 sm:grid-cols-2">
            <div className="space-y-10">
              <FooterNavColumn group={products} />
              <FooterNavColumn group={platform} />
            </div>
            <FooterNavColumn group={solutions} />
            <FooterNavColumn group={resources} />
            <FooterNavColumn group={legal} />
            <div className="space-y-10">
              <FooterNavColumn group={company} />
              <FooterNavColumn group={contact} />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}

function FooterBottomBar() {
  return (
    <div className="bg-surface-muted py-10">
      <Container>
        <div className="flex flex-row items-end justify-between gap-6 lg:flex-col lg:items-start lg:gap-6">
          <Text as="p" variant="body-sm" className="shrink-0">
            © {new Date().getFullYear()} GB Group plc (&apos;GBG&apos;).
            <br />
            GBG is the trading name and a trademark of GB Group plc.
          </Text>
          <Text as="p" variant="body-sm" className="max-w-xl lg:max-w-none">
            {footerTagline}
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
