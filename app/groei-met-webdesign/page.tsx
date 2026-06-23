import type { Metadata } from "next";
import Link from "next/link";

import { FAQAccordion } from "@/components/landing/FAQAccordion";
import { LandingLocalSeo } from "@/components/landing/LandingLocalSeo";
import { PageHero } from "@/components/page/PageHero";
import { PricingSchema } from "@/components/pricing/PricingSchema";
import { PricingSection } from "@/components/pricing/PricingSection";
import { CallToAction } from "@/components/sections/CallToAction";
import { Process } from "@/components/sections/Process";
import { SeoContentSections } from "@/components/sections/SeoContentSections";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedMarquee } from "@/components/sections/TrustedMarquee";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { SITE } from "@/constants";
import {
  GROEI_BENEFITS,
  GROEI_FAQ,
  GROEI_HERO,
  GROEI_META,
  GROEI_RELATED_LINKS,
  GROEI_SEO_SECTIONS,
} from "@/constants/groei-met-webdesign";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLandingMetadata,
  buildServiceSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildLandingMetadata(GROEI_META);

const SERVICE_JSON_LD = buildServiceSchema({
  path: GROEI_META.path,
  name: "Groei met webdesign",
  description: GROEI_META.description,
  offerCatalogName: "Wat groei met webdesign oplevert",
  offers: GROEI_BENEFITS,
});

const BREADCRUMB_JSON_LD = buildBreadcrumbSchema("Groei met webdesign", GROEI_META.path);
const FAQ_JSON_LD = buildFaqSchema(GROEI_FAQ);

const WEBPAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE.url}${GROEI_META.path}/#webpage`,
  url: `${SITE.url}${GROEI_META.path}`,
  name: GROEI_META.title,
  description: GROEI_META.description,
  inLanguage: "nl-NL",
  isPartOf: { "@id": `${SITE.url}/#website` },
  about: { "@id": `${SITE.url}/#organization` },
  primaryImageOfPage: `${SITE.url}/images/company-img.png`,
};

export default function GroeiMetWebdesignPage() {
  return (
    <main id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      {/* emitFaq=false: this page already emits its own FAQPage above */}
      <PricingSchema serviceSlug="web-development" emitFaq={false} />

      <PageHero content={GROEI_HERO} id="groei-h">
        <CTAButton label="Plan een gratis groeigesprek" variant="primary" />
      </PageHero>

      <TrustedMarquee />

      <SeoContentSections
        sections={GROEI_SEO_SECTIONS}
        ariaLabel="Groei met webdesign — uitleg en aanpak"
      />

      <Services />

      <PricingSection defaultServiceSlug="web-development" />

      <Process />

      <Testimonials />

      <FAQAccordion
        items={GROEI_FAQ}
        eyebrow="FAQ"
        title="Veelgestelde vragen over groei met webdesign"
      />

      <LandingLocalSeo serviceLabel="Webdesign" />

      <CallToAction />

      {/* Interne links */}
      <section className="lp-related" aria-label="Meer over Sarte Global">
        <Container>
          <nav className="lp-related__nav" aria-label="Gerelateerde pagina's">
            {GROEI_RELATED_LINKS.map((link) => (
              <Link key={`${link.label}-${link.href}`} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </Container>
      </section>
    </main>
  );
}
