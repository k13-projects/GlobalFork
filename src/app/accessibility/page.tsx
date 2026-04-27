import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Accessibility Statement — Global Fork",
  description:
    "Our commitment to accessibility, the standards we follow, and how to contact us if you have trouble using this site.",
  openGraph: {
    title: "Accessibility Statement — Global Fork",
    description: "Our commitment to accessibility.",
    images: [
      "/og?title=Accessibility&eyebrow=Statement&tagline=Our+commitment+to+making+this+site+work+for+everyone.",
    ],
  },
};

export default function AccessibilityPage() {
  const { legal, emails } = siteConfig;

  return (
    <>
      <PageHeader
        eyebrow="Statement"
        title="Accessibility"
        subtitle={`Our commitment to making this site work for everyone. Effective ${legal.effectiveDate}.`}
      />

      <article className="bg-[var(--color-sand)] px-8 py-24 text-[var(--color-iron)]">
        <div className="prose-legal mx-auto max-w-3xl space-y-10">
          <section aria-labelledby="commitment">
            <h2 id="commitment" className="legal-h2">
              Our commitment
            </h2>
            <p>
              Global Fork is committed to making this website usable for as
              many people as possible, regardless of ability or technology.
              Accessibility is treated as an ongoing engineering practice, not
              a one-time audit.
            </p>
          </section>

          <section aria-labelledby="standards">
            <h2 id="standards" className="legal-h2">
              Standards we follow
            </h2>
            <p>
              This site is designed and built to conform with the following
              standards:
            </p>
            <ul className="legal-list">
              <li>
                <strong>Web Content Accessibility Guidelines (WCAG) 2.1
                Level AA</strong> — the international consensus standard for
                web accessibility, published by the World Wide Web Consortium.
              </li>
              <li>
                <strong>Section 508</strong> of the U.S. Rehabilitation Act
                (29 U.S.C. § 794d), which incorporates WCAG 2.0 Level AA by
                reference.
              </li>
              <li>
                The relevant Title III provisions of the Americans with
                Disabilities Act (ADA) as applied to public-accommodation
                websites.
              </li>
            </ul>
          </section>

          <section aria-labelledby="features">
            <h2 id="features" className="legal-h2">
              What conforms today
            </h2>
            <ul className="legal-list">
              <li>
                Semantic HTML landmarks (<code>header</code>, <code>nav</code>,
                <code> main</code>, <code>section</code>, <code>article</code>,
                <code> footer</code>) on every page.
              </li>
              <li>
                A &ldquo;Skip to content&rdquo; link as the first focusable
                element on every page.
              </li>
              <li>
                A clearly visible keyboard focus indicator on every
                interactive element.
              </li>
              <li>
                Descriptive <code>alt</code> text on content images;
                decorative images marked <code>aria-hidden</code>.
              </li>
              <li>
                Forms with associated labels, required-field indicators, and
                appropriate <code>autocomplete</code> hints.
              </li>
              <li>
                Tab and dialog patterns that follow the WAI-ARIA Authoring
                Practices, including arrow-key navigation and focus
                management.
              </li>
              <li>
                Full support for <code>prefers-reduced-motion</code>: every
                animation on the site is disabled or reduced for visitors who
                set that preference.
              </li>
              <li>
                Mobile drawer with focus trap, scroll lock, and Escape-to-close.
              </li>
              <li>
                Color contrast that meets or exceeds the 4.5:1 minimum for
                body text.
              </li>
              <li>
                Touch targets of at least 44 × 44 CSS pixels on interactive
                controls.
              </li>
            </ul>
          </section>

          <section aria-labelledby="known">
            <h2 id="known" className="legal-h2">
              Known limitations
            </h2>
            <p>
              We try to be honest about what is not yet perfect. Today:
            </p>
            <ul className="legal-list">
              <li>
                The site uses a smooth-scrolling library that can interfere
                with the browser&rsquo;s &ldquo;Find in page&rdquo; (Ctrl+F)
                feature in some browsers. The library is automatically
                disabled when{" "}
                <code>prefers-reduced-motion</code> is set.
              </li>
              <li>
                Forms currently submit by opening your default email client.
                We are migrating to a hosted form handler that will keep the
                experience entirely in-page.
              </li>
              <li>
                Some decorative animations (sun rotator, vendor &ldquo;piazza
                walk&rdquo;) are subtle on touch devices; we welcome feedback
                if any of them cause discomfort.
              </li>
            </ul>
          </section>

          <section aria-labelledby="testing">
            <h2 id="testing" className="legal-h2">
              How we test
            </h2>
            <ul className="legal-list">
              <li>
                Automated checks with <strong>axe DevTools</strong> on every
                page before release.
              </li>
              <li>
                Keyboard-only navigation testing on every interactive
                component.
              </li>
              <li>
                Screen-reader passes with VoiceOver (macOS / iOS) and NVDA
                (Windows) on key flows: home, vendors, bookings, contact.
              </li>
              <li>
                Color-contrast verification with the WCAG contrast formula
                against our brand tokens.
              </li>
            </ul>
          </section>

          <section aria-labelledby="report">
            <h2 id="report" className="legal-h2">
              How to report an issue
            </h2>
            <p>
              If anything on the site is hard or impossible for you to use,
              please tell us. We respond to accessibility reports within{" "}
              <strong>five business days</strong>.
            </p>
            <ul className="legal-list">
              <li>
                <strong>Email:</strong>{" "}
                <a className="legal-link" href={`mailto:${emails.accessibility}`}>
                  {emails.accessibility}
                </a>
              </li>
              <li>
                <strong>Mail:</strong> {legal.entity},{" "}
                {siteConfig.business.streetAddress},{" "}
                {siteConfig.business.addressLocality},{" "}
                {siteConfig.business.addressRegion}{" "}
                {siteConfig.business.postalCode}
              </li>
            </ul>
            <p>
              Please include the page you were on, the browser and assistive
              technology you were using (if any), and a description of what
              didn&rsquo;t work as expected. The more specific you can be,
              the faster we can fix it.
            </p>
          </section>

          <section aria-labelledby="formal">
            <h2 id="formal" className="legal-h2">
              Formal grievances
            </h2>
            <p>
              If you believe we have not adequately addressed an
              accessibility concern, you may also file a complaint with the
              U.S. Department of Justice Civil Rights Division at{" "}
              <a
                className="legal-link"
                href="https://www.ada.gov/file-a-complaint/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ada.gov/file-a-complaint
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
