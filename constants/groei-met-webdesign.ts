import type { PageHeroContent } from "@/types";

import type { LandingFAQItem } from "./landing-nieuwe-website";
import type { SeoContentSection, SeoRelatedLink } from "./seo-sections";

/**
 * Content for the `/groei-met-webdesign` pillar page — the topical home of the
 * primary brand keyword "groei met webdesign". Copy here is intentionally
 * distinct from the homepage SEO sections (constants/seo-sections.ts) so the two
 * pages never duplicate content.
 *
 * GROEI_META is a plain const (not typed via lib/seo) to avoid a circular import
 * constants → lib/seo → constants; it is passed to buildLandingMetadata, which
 * type-checks it structurally against LandingMetaInput.
 */
export const GROEI_META = {
  path: "/groei-met-webdesign",
  title: "Groei met webdesign in Nederland | Sarte Global",
  description:
    "Groei met webdesign: conversiegerichte, snelle en goed vindbare websites die Nederlandse ondernemers meer klanten opleveren. Ontdek de aanpak van Sarte Global.",
  keywords: [
    "groei met webdesign",
    "online groei met webdesign",
    "conversiegericht webdesign",
    "professioneel webdesign",
    "webdesign nederland",
    "website laten maken",
    "digitale groei",
    "webdesigner nederland",
    "Sarte Global",
  ],
  ogAlt: "Groei met webdesign — Sarte Global",
} as const;

export const GROEI_HERO = {
  icon: "chart",
  eyebrow: "Groei met webdesign",
  titleLead: "Online groei met",
  titleEm: "strategisch webdesign.",
  intro:
    "Bij Sarte Global draait webdesign om één ding: jouw groei. We bouwen snelle, conversiegerichte en goed vindbare websites waarmee Nederlandse ondernemers meer bezoekers omzetten in klanten.",
  align: "center",
} as const satisfies PageHeroContent;

/** The three professional SEO sections — unique to this pillar page. */
export const GROEI_SEO_SECTIONS: readonly SeoContentSection[] = [
  {
    eyebrow: "Het idee",
    title: "Wat betekent groei met webdesign?",
    intro:
      "Groei met webdesign betekent dat elke keuze in je website — van structuur tot snelheid — bijdraagt aan een concreet bedrijfsdoel. Geen design om het design, maar ontwerp dat verkoopt.",
    paragraphs: [
      "De meeste websites zien er prima uit, maar leveren te weinig op. Bezoekers haken af, formulieren worden niet ingevuld en Google laat de site links liggen. Groei met webdesign draait die logica om: we vertrekken vanuit hoe jouw klant zoekt, twijfelt en beslist, en bouwen de website daaromheen.",
      "Het resultaat is een site die werkt als een verkoper die nooit slaapt. Sneller, duidelijker en beter vindbaar — zodat meer van je bezoekers uiteindelijk klant worden. Webdesign wordt zo geen kostenpost, maar een groeikanaal dat je kunt meten en verbeteren.",
    ],
    points: [
      {
        title: "Conversiegericht ontwerp",
        description:
          "Elke pagina leidt bezoekers logisch naar de volgende stap: contact, offerte of aankoop.",
      },
      {
        title: "Vindbaar in Google",
        description:
          "SEO en een schone technische basis zorgen dat je gevonden wordt door mensen die al zoeken.",
      },
      {
        title: "Snelheid & techniek",
        description:
          "Razendsnelle laadtijden en sterke Core Web Vitals houden bezoekers vast — en plezieren Google.",
      },
      {
        title: "Meetbaar resultaat",
        description:
          "Met Analytics en Search Console zie je precies wat werkt en waar nog groei te halen valt.",
      },
    ],
  },
  {
    eyebrow: "Voor de Nederlandse markt",
    title: "Groei met Webdesign dat aansluit op de Nederlandse markt",
    intro:
      "Groei begint bij relevantie. Een website die werkt in Nederland houdt rekening met hoe Nederlanders zoeken, betalen en vertrouwen winnen.",
    paragraphs: [
      "Nederlandse bezoekers verwachten een website die snel, helder en mobielvriendelijk is. Ze zoeken lokaal, vergelijken kritisch en haken direct af bij een trage of rommelige site. Daarom optimaliseren we voor lokale vindbaarheid, schrijven we heldere Nederlandse teksten en bouwen we elke pagina mobiel-first.",
      "Voor webshops integreren we vertrouwde betaalmethoden zoals iDEAL, en alles wordt AVG-proof opgezet. Of je nu klanten in je eigen stad bedient of in heel Nederland levert: we stemmen je website af op de markt waarin je groeit.",
    ],
    points: [
      {
        title: "Lokale SEO & Google",
        description:
          "Optimalisatie voor jouw regio plus een sterk Google Bedrijfsprofiel voor klanten uit de buurt.",
      },
      {
        title: "iDEAL & betaalgemak",
        description:
          "Vertrouwde Nederlandse betaalmethoden en een vlotte checkout voor webshops die converteren.",
      },
      {
        title: "Mobiel-first",
        description:
          "Een ontwerp dat vlekkeloos werkt op de telefoon, waar de meeste Nederlanders je site bekijken.",
      },
      {
        title: "AVG & vertrouwen",
        description:
          "Een privacyvriendelijke, AVG-proof opzet die bezoekers en de wet serieus neemt.",
      },
    ],
  },
  {
    eyebrow: "Jouw groeipartner",
    title: "Waarom Sarte Global jouw partner is in online groei",
    intro:
      "Sarte Global Company Agency bouwt niet alleen je website, maar denkt mee over je groei — voor, tijdens en na de lancering.",
    paragraphs: [
      "We combineren strategie, design en development in één team. Daardoor vertalen we jouw doelen rechtstreeks naar een website die presteert, zonder dat er iets verloren gaat tussen losse leveranciers. Je hebt één aanspreekpunt en korte lijnen, van eerste schets tot livegang.",
      "Onze aanpak stopt niet bij oplevering. We blijven optimaliseren op basis van echte data, houden je site snel en veilig en adviseren over volgende groeistappen — denk aan extra landingspagina's, SEO-content of een webshop. Zo groeit je website mee met je ambities.",
    ],
    points: [
      {
        title: "Strategisch fundament",
        description:
          "We starten met doelen, doelgroep en zoekgedrag — de basis voor elke ontwerpkeuze.",
      },
      {
        title: "Eén team, één doel",
        description:
          "Strategie, design en development onder één dak: sneller, scherper en zonder ruis.",
      },
      {
        title: "Doorlopende optimalisatie",
        description:
          "Na livegang blijven we testen en verbeteren, zodat je website blijft groeien in plaats van stilstaan.",
      },
      {
        title: "Resultaat boven uren",
        description:
          "We sturen op conversie, omzet en vindbaarheid — meetbare groei, niet alleen opgeleverde uren.",
      },
    ],
  },
];

/** Service-schema offer catalog entries (title + description). */
export const GROEI_BENEFITS = [
  {
    title: "Conversiegericht webdesign",
    description:
      "Websites die bezoekers omzetten in aanvragen en klanten dankzij heldere structuur en sterke call-to-actions.",
  },
  {
    title: "SEO & vindbaarheid",
    description:
      "Technische SEO, nette structuur en schema-markup zodat je hoog scoort op relevante zoekwoorden.",
  },
  {
    title: "Snelle, moderne websites",
    description:
      "Razendsnelle laadtijden en uitstekende Core Web Vitals voor een betere ervaring en hogere ranking.",
  },
  {
    title: "Doorlopende groei",
    description:
      "Optimalisatie, onderhoud en advies na de lancering, zodat je website blijft presteren en groeien.",
  },
] as const;

export const GROEI_FAQ: readonly LandingFAQItem[] = [
  {
    question: "Wat is groei met webdesign precies?",
    answer:
      "Groei met webdesign betekent dat we je website bouwen rond een concreet doel — meer aanvragen, meer verkopen of meer bekendheid. Elke ontwerpkeuze, van structuur tot snelheid en SEO, draagt bij aan dat resultaat in plaats van alleen aan de uitstraling.",
  },
  {
    question: "Hoe zorgt een goede website voor meer klanten?",
    answer:
      "Een snelle, duidelijke en goed vindbare website trekt de juiste bezoekers aan, wekt vertrouwen en leidt mensen logisch naar contact of aankoop. Door conversiegericht te ontwerpen en te blijven optimaliseren zet je een groter deel van je bezoekers om in klanten.",
  },
  {
    question: "Hoe lang duurt het voordat ik groei zie?",
    answer:
      "Een snellere, conversiegerichte website levert vaak al binnen enkele weken meer aanvragen op. SEO-resultaten bouwen geleidelijk op: de eerste verbeteringen zie je doorgaans binnen één tot drie maanden, met verdere groei naarmate je content en autoriteit toenemen.",
  },
  {
    question: "Werken jullie ook voor kleine bedrijven en zzp'ers?",
    answer:
      "Ja. We werken voor het hele Nederlandse mkb — van zzp'ers en familiebedrijven tot startups en scale-ups. Voor elk budget zoeken we de aanpak die de meeste groei oplevert, met transparante pakketten zodat je vooraf weet waar je aan toe bent.",
  },
  {
    question: "Wat kost een conversiegerichte website?",
    answer:
      "Dat hangt af van omvang en functionaliteit. Bij Sarte Global werken we met heldere pakketten en een vaste offerte vooraf. Plan een vrijblijvend gesprek, dan adviseren we welke investering in jouw situatie de beste groei oplevert.",
  },
];

/** Internal links rendered at the bottom of the pillar page. */
export const GROEI_RELATED_LINKS: readonly SeoRelatedLink[] = [
  { label: "Home", href: "/" },
  { label: "Website laten maken", href: "/website-laten-maken" },
  { label: "SEO optimalisatie", href: "/seo-optimalisatie" },
  { label: "WordPress website laten maken", href: "/wordpress-website-laten-maken" },
  { label: "Webshop laten maken", href: "/webshop-laten-maken" },
  { label: "Onze diensten", href: "/services" },
  { label: "Portfolio", href: "/work" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
];
