import Link from "next/link";

import type { SeoContentSection, SeoRelatedLink } from "@/constants/seo-sections";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

interface SeoContentSectionsProps {
  readonly sections: readonly SeoContentSection[];
  /** Accessible name for the wrapping <section>. */
  readonly ariaLabel: string;
  /** Optional styled internal-link row rendered under the blocks. */
  readonly relatedLinks?: readonly SeoRelatedLink[];
  readonly relatedLabel?: string;
}

/** Stable, unique heading id from the section title (for aria-labelledby). */
function toId(title: string): string {
  return (
    "seo-" +
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  );
}

/**
 * Topical-authority content blocks. Reuses the existing `.nws` section styling
 * (app/globals.css) so the added depth requires no design change. Content is
 * supplied per page (unique copy) — never duplicated across pages.
 */
export function SeoContentSections({
  sections,
  ariaLabel,
  relatedLinks,
  relatedLabel = "Gerelateerde pagina's",
}: SeoContentSectionsProps) {
  return (
    <section className="nws" aria-label={ariaLabel}>
      <Container>
        {sections.map((section) => {
          const headingId = toId(section.title);
          return (
            <Reveal
              as="div"
              className="nws__block"
              key={section.title}
              ariaLabelledby={headingId}
            >
              <header className="nws__head">
                <span className="eyebrow">{section.eyebrow}</span>
                <h2 className="h2 nws__title" id={headingId}>
                  {section.title}
                </h2>
                {section.intro ? (
                  <p className="sub nws__intro">{section.intro}</p>
                ) : null}
              </header>

              <div className="nws__meaning">
                <div className="nws__paragraphs">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <ul className="nws__points">
                  {section.points.map((point) => (
                    <li key={point.title} className="nws__point">
                      <h3 className="nws__point-title">{point.title}</h3>
                      <p className="nws__point-desc">{point.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}

        {relatedLinks && relatedLinks.length > 0 ? (
          <nav className="lp-related__nav" aria-label={relatedLabel}>
            {relatedLinks.map((link) => (
              <Link key={`${link.label}-${link.href}`} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </Container>
    </section>
  );
}
