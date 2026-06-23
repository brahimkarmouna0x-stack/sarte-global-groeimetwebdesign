import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";

import { WhatsAppFloatingButton } from "@/components/contact/WhatsAppFloatingButton";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { CookieBar } from "@/components/ui/CookieBar";
import { Footer } from "@/components/layouts/Footer";
import { Navigation } from "@/components/layouts/Navigation";
import { ArticleDialogProvider } from "@/contexts/ArticleDialogContext";
import { ContactDialogProvider } from "@/contexts/ContactDialogContext";
import { SettingsProvider } from "@/contexts/SettingsContext";
import { SITE } from "@/constants";
import { getSiteSettings } from "@/lib/settings";
import { areaServedNL } from "@/lib/seo";
import { dmSans, playfair } from "@/lib/fonts";
import type { SiteSettings } from "@/types";

import "./globals.css";

const ContactDialog = dynamic(
  () => import("@/components/contact/ContactDialog").then((m) => m.ContactDialog),
);

const ArticleDialog = dynamic(
  () => import("@/components/journal/ArticleDialog").then((m) => m.ArticleDialog),
);

const SITE_URL = SITE.url;
const SITE_NAME = SITE.name;
/** Full legal/agency name — kept out of the visible UI (which shows "Sarte Global"). */
const LEGAL_NAME = "Sarte Global Company Agency";
const SERVICE_NAME = "Webdesign en website laten maken";
const CONTACT_EMAIL = SITE.email;
const CONTACT_PHONE = SITE.phone;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE.title,
    template: "%s · Sarte Global",
  },
  description: SITE.description,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Webdesign & Webdevelopment",
  keywords: [
    "groei met webdesign",
    "webdesign",
    "professioneel webdesign",
    "website laten maken",
    "webdesigner nederland",
    "website bureau nederland",
    "conversiegericht webdesign",
    "responsive webdesign",
    "seo webdesign",
    "betaalbare website laten maken",
    "zakelijke website laten maken",
    "wordpress website laten maken",
    "moderne website laten maken",
    "Sarte Global",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE.title,
    description: SITE.description,
    locale: "nl_NL",
    images: [
      {
        url: "/images/company-img.png",
        width: 1200,
        height: 800,
        alt: "Sarte Global — Groei met Webdesign dat jouw bedrijf laat groeien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/images/company-img.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico?v=6", sizes: "any" },
      { url: "/favicon/favicon-16x16.png?v=6", type: "image/png", sizes: "16x16" },
      { url: "/favicon/favicon-32x32.png?v=6", type: "image/png", sizes: "32x32" },
      { url: "/favicon/favicon-48x48.png?v=6", type: "image/png", sizes: "48x48" },
      { url: "/favicon/android-chrome-192x192.png?v=6", type: "image/png", sizes: "192x192" },
      { url: "/favicon/android-chrome-512x512.png?v=6", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon/favicon.ico?v=6"],
    apple: [
      { url: "/favicon/apple-touch-icon-152x152.png?v=6", type: "image/png", sizes: "152x152" },
      { url: "/favicon/apple-touch-icon-167x167.png?v=6", type: "image/png", sizes: "167x167" },
      { url: "/favicon/apple-touch-icon.png?v=6", type: "image/png", sizes: "180x180" },
    ],
  },
  other: {
    "msapplication-TileColor": SITE.themeColor,
    "msapplication-TileImage": "/favicon/mstile-144x144.png?v=6",
    "msapplication-config": "/browserconfig.xml",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

interface RootLayoutProps {
  readonly children: ReactNode;
}

/**
 * Used when no real social links are configured in the database yet. Kept in
 * sync with DEFAULT_SOCIAL_LINKS in lib/settings.ts — only real, working
 * profiles, so we never emit broken `sameAs` URLs.
 */
const FALLBACK_SAME_AS = [
  "https://www.instagram.com/sarte_global_llc?igsh=OGVkc2phOGFzeTNv&utm_source=qr",
  "https://x.com/sarteglobal",
];

/** Builds the Organization JSON-LD from dynamic settings (email, phone, socials). */
function buildOrganizationJsonLd(settings: SiteSettings) {
  const sameAs = settings.socialLinks
    .map((link) => link.href)
    .filter((href) => href.startsWith("http"));

  // Phone is optional (online-only/national): omit `telephone` entirely when no
  // valid number is configured, rather than emitting an empty/placeholder value.
  const phone = settings.phone || CONTACT_PHONE;
  const contactPoint = (contactType: string) => ({
    "@type": "ContactPoint",
    contactType,
    email: settings.email || CONTACT_EMAIL,
    ...(phone ? { telephone: phone } : {}),
    availableLanguage: ["Dutch", "English"],
    areaServed: "NL",
  });

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: ["Sarte Global Company Agency", "Groei met webdesign", "Sarte Global webdesign"],
    legalName: LEGAL_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/company-img.png`,
    image: `${SITE_URL}/images/company-img.png`,
    description:
      "Sarte Global Company Agency helpt ondernemers en bedrijven in Nederland groeien met professioneel webdesign. Modern design, sterke SEO, snelle oplevering en focus op conversie.",
    slogan: "Groei met webdesign — professionele, conversiegerichte websites voor ondernemers in Nederland.",
    priceRange: "€€",
    sameAs: sameAs.length > 0 ? sameAs : FALLBACK_SAME_AS,
    knowsAbout: [
      "Webdesign",
      "Professioneel webdesign",
      "Conversiegericht webdesign",
      "Responsive webdesign",
      "SEO webdesign",
      "Website laten maken",
      "WordPress website laten maken",
      "WooCommerce webshop laten maken",
      "Webshop laten maken",
      "Landingspagina laten maken",
      "WordPress specialist",
      "SEO",
      "Webhosting",
      "Online marketing",
      "AI oplossingen",
    ],
    areaServed: areaServedNL(),
    address: {
      // Online-only / nationaal: alleen land, geen (fictief) vestigingsadres.
      "@type": "PostalAddress",
      addressCountry: "NL",
    },
    contactPoint: [contactPoint("customer support"), contactPoint("sales")],
  };
}

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#service-website-laten-maken`,
  name: SERVICE_NAME,
  serviceType: "Webdesign",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: areaServedNL(),
  description:
    "Professioneel webdesign en website laten maken voor ondernemers en bedrijven in Nederland. Moderne, responsive websites met sterke SEO, snelle oplevering en focus op conversie en groei.",
};

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: "Groei met webdesign",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "nl-NL",
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const settings = await getSiteSettings();
  const organizationJsonLd = buildOrganizationJsonLd(settings);

  return (
    <html lang="nl" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(SERVICE_JSON_LD),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(WEBSITE_JSON_LD),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <a href="#top" className="sr-only focus:not-sr-only">
          Direct naar inhoud
        </a>
        <SettingsProvider settings={settings}>
          <ContactDialogProvider>
            <ArticleDialogProvider>
              <Navigation />
              {children}
              <Footer />
              <CookieBar />
              <WhatsAppFloatingButton />
              <BackToTopButton />
              <ContactDialog />
              <ArticleDialog />
            </ArticleDialogProvider>
          </ContactDialogProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
