/**
 * Reusable, topical-authority SEO content blocks rendered by
 * <SeoContentSections>. The component reuses the existing `.nws` section styling
 * (see app/globals.css) so these add depth without any design change.
 *
 * Each set is UNIQUE per page — the homepage set below is intentionally written
 * differently from the pillar-page set in constants/groei-met-webdesign.ts to
 * avoid duplicate content.
 */

export interface SeoContentPoint {
  readonly title: string;
  readonly description: string;
}

export interface SeoContentSection {
  readonly eyebrow: string;
  readonly title: string;
  readonly intro?: string;
  readonly paragraphs: readonly string[];
  readonly points: readonly SeoContentPoint[];
}

/** A styled internal link rendered under a SeoContentSections block. */
export interface SeoRelatedLink {
  readonly label: string;
  readonly href: string;
}

/** Homepage — the three professional SEO sections (brand + market + agency). */
export const HOME_SEO_SECTIONS: readonly SeoContentSection[] = [
  {
    eyebrow: "Waarom groeimetwebdesign.nl",
    title: "Groei met webdesign: je website als groeimotor",
    intro:
      "De naam zegt precies waar we voor staan. Een website hoort niet stil te staan als digitaal visitekaartje, maar elke dag voor je te werken: bezoekers aantrekken, vertrouwen opbouwen en omzetten in klanten.",
    paragraphs: [
      "Achter groeimetwebdesign.nl zit Sarte Global, een Nederlands webdesignbureau dat ontwerp koppelt aan resultaat. We beginnen niet bij kleurtjes, maar bij jouw doelen: meer aanvragen, meer verkopen of meer bekendheid in jouw regio. Elk ontwerpkeuze — van structuur tot snelheid — staat in dienst van die groei.",
      "Daardoor krijg je geen website die er alleen mooi uitziet, maar één die meetbaar bijdraagt. Beter vindbaar in Google, sneller op mobiel en gebouwd om bezoekers naar de juiste actie te leiden. Zo wordt je site een investering die zichzelf terugverdient.",
    ],
    points: [
      {
        title: "Meer aanvragen",
        description:
          "Heldere structuur en conversiegerichte call-to-actions die bezoekers omzetten in offerteaanvragen en klanten.",
      },
      {
        title: "Beter vindbaar",
        description:
          "Een technisch sterke basis met goede SEO zodat je hoger scoort op de zoekwoorden die jouw klanten gebruiken.",
      },
      {
        title: "Sterker merk",
        description:
          "Een verzorgde, consistente uitstraling die direct vertrouwen wekt en je onderscheidt van de concurrentie.",
      },
      {
        title: "Klaar voor schaal",
        description:
          "Een moderne basis die meegroeit — van extra pagina's tot een complete webshop wanneer jouw bedrijf groeit.",
      },
    ],
  },
  {
    eyebrow: "Voor Nederlandse ondernemers",
    title: "Professioneel webdesign voor Nederlandse bedrijven",
    intro:
      "Of je nu net begint of al jaren draait: een professionele website is in Nederland geen luxe meer, maar de plek waar klanten je als eerste beoordelen.",
    paragraphs: [
      "We werken voor het hele Nederlandse mkb — van familiebedrijven en lokale dienstverleners tot ambitieuze startups en zzp'ers. Voor elk type ondernemer geldt hetzelfde: je website moet vertrouwen wekken, snel laden en moeiteloos werken op de telefoon, waar het grootste deel van je bezoek vandaan komt.",
      "Daarom houden we rekening met wat de Nederlandse markt verwacht: lokale vindbaarheid via Google, vertrouwde betaalmethoden zoals iDEAL voor webshops, heldere Nederlandse teksten en een AVG-proof opzet. Een professioneel Groei met webdesign dat aansluit op jouw klant.",
    ],
    points: [
      {
        title: "MKB & familiebedrijven",
        description:
          "Een betrouwbare bedrijfswebsite die jouw vakmanschap online net zo sterk neerzet als in het echt.",
      },
      {
        title: "ZZP & freelancers",
        description:
          "Een scherpe, betaalbare website waarmee je opvalt, vertrouwen wint en makkelijker nieuwe opdrachten binnenhaalt.",
      },
      {
        title: "Startups & scale-ups",
        description:
          "Een snelle, schaalbare basis die meegroeit met je product en klaar is voor campagnes en investeerders.",
      },
      {
        title: "Lokale dienstverleners",
        description:
          "Lokale SEO en een sterk Google Bedrijfsprofiel, zodat klanten uit jouw regio je als eerste vinden.",
      },
    ],
  },
  {
    eyebrow: "Waarom Sarte Global",
    title: "Waarom ondernemers kiezen voor Sarte Global",
    intro:
      "Sarte Global Company Agency is meer dan een bouwer van websites — we zijn je partner in online groei, van strategie tot livegang en daarna.",
    paragraphs: [
      "Bij ons zitten strategie, design en development in één team. Geen overdrachten tussen losse partijen, geen junior die op jouw kosten leert: ervaren specialisten die samen één resultaat nastreven. Daardoor schakelen we sneller en blijft de kwaliteit van begin tot eind hoog.",
      "We sturen op wat telt — omzet, conversie en vindbaarheid — niet op opgeleverde uren. SEO en snelheid bouwen we vanaf dag één in, en na de lancering blijven we beschikbaar voor onderhoud, optimalisatie en advies. Zo blijft je website presteren.",
    ],
    points: [
      {
        title: "Strategie eerst",
        description:
          "We starten met jouw doelen en doelgroep, niet met een template. Elk ontwerp heeft een reden.",
      },
      {
        title: "Eén team voor alles",
        description:
          "Design en development onder één dak — sneller schakelen en geen verlies tussen disciplines.",
      },
      {
        title: "SEO & snelheid ingebouwd",
        description:
          "Razendsnelle laadtijden en sterke technische SEO als standaard, niet als dure meerprijs.",
      },
      {
        title: "Persoonlijke begeleiding",
        description:
          "Korte lijnen, duidelijke afspraken en ondersteuning die blijft, ook nadat je site live is.",
      },
    ],
  },
];

/** Internal links rendered under the homepage SEO sections (link equity to pillars). */
export const HOME_SEO_RELATED_LINKS: readonly SeoRelatedLink[] = [
  { label: "Groei met webdesign", href: "/groei-met-webdesign" },
  { label: "Website laten maken", href: "/website-laten-maken" },
  { label: "SEO optimalisatie", href: "/seo-optimalisatie" },
  { label: "Onze diensten", href: "/services" },
  { label: "Portfolio", href: "/work" },
  { label: "Contact", href: "/contact" },
];
