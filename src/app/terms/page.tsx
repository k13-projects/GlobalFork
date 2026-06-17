import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service — Global Fork",
  description:
    "The terms that govern your use of the Global Fork website. Please read carefully.",
  openGraph: {
    title: "Terms of Service — Global Fork",
    description: "The terms that govern your use of this website.",
    images: [
      "/og?title=Terms+of+Service&eyebrow=Legal&tagline=The+terms+that+govern+your+use+of+this+website.",
    ],
  },
};

export default function TermsPage() {
  const { legal, emails } = siteConfig;

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        subtitle={`These terms govern your use of this website. Effective ${legal.effectiveDate}.`}
      />

      <article className="bg-[var(--color-sand)] px-8 py-24 text-[var(--color-iron)]">
        <div className="prose-legal mx-auto max-w-3xl space-y-10">
          <section aria-labelledby="acceptance">
            <h2 id="acceptance" className="legal-h2">
              1. Acceptance of these terms
            </h2>
            <p>
              By visiting or using globalforkfh.com (the &ldquo;Site&rdquo;), you
              agree to these Terms of Service. If you do not agree, please do
              not use the Site. The Site is operated by{" "}
              <strong>{legal.entity}</strong>.
            </p>
          </section>

          <section aria-labelledby="use">
            <h2 id="use" className="legal-h2">
              2. Use of the Site
            </h2>
            <p>
              You may use the Site for lawful, personal purposes — to learn
              about our venue, vendors, events, and to contact us. You agree
              not to:
            </p>
            <ul className="legal-list">
              <li>
                Probe, scan, or test the vulnerability of the Site or any
                related system.
              </li>
              <li>
                Interfere with, disrupt, or place an unreasonable load on the
                Site.
              </li>
              <li>
                Use automated tools to scrape contact information or content for
                commercial purposes.
              </li>
              <li>
                Submit content you do not have the right to submit, or content
                that is illegal, infringing, defamatory, or harmful.
              </li>
              <li>
                Impersonate another person or misrepresent your affiliation
                with anyone.
              </li>
            </ul>
          </section>

          <section aria-labelledby="ip">
            <h2 id="ip" className="legal-h2">
              3. Intellectual property
            </h2>
            <p>
              The Site, including the Global Fork name, logo, brand patterns,
              copy, and photography, is owned by {legal.entity} or used with
              permission, and is protected by trademark and copyright. You may
              view and share links to the Site, but you may not reproduce,
              modify, or distribute its content without our written permission.
            </p>
            <p>
              Vendor names, logos, and marks shown on the Site (MOTO Pizza,
              Cosmos Burger, La Vida, Lobster Lab, Handel&rsquo;s Ice Cream,
              Prik Ki N&#363; Thai Cuisine, and any others) are the property of their
              respective owners and are used to identify the vendors operating
              within the Global Fork venue.
            </p>
          </section>

          <section aria-labelledby="bookings">
            <h2 id="bookings" className="legal-h2">
              4. Bookings and inquiries
            </h2>
            <p>
              The bookings form on this Site is an{" "}
              <strong>inquiry tool</strong>, not a confirmation. Submitting an
              inquiry does not create a reservation. A booking is only confirmed
              when our team replies in writing with details and any applicable
              terms (deposits, minimums, cancellation policy). Specific event
              terms may apply on a per-event basis.
            </p>
          </section>

          <section aria-labelledby="user-content">
            <h2 id="user-content" className="legal-h2">
              5. Content you submit
            </h2>
            <p>
              When you send us a message or booking inquiry, you grant us a
              limited license to use that content for the purpose of responding
              to you and operating the Site. We do not claim ownership of your
              submission. See our{" "}
              <Link className="legal-link" href="/privacy">
                Privacy Policy
              </Link>{" "}
              for how we handle the personal information in your submission.
            </p>
          </section>

          <section aria-labelledby="third-party">
            <h2 id="third-party" className="legal-h2">
              6. Third-party links and content
            </h2>
            <p>
              The Site may link to third-party websites (Instagram, Google Maps,
              vendor pages). We do not control those sites and are not
              responsible for their content, terms, or privacy practices. Visit
              them at your own discretion.
            </p>
          </section>

          <section aria-labelledby="warranty">
            <h2 id="warranty" className="legal-h2">
              7. Disclaimers
            </h2>
            <p className="legal-uppercase">
              The Site is provided on an &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; basis, without warranties of any kind, express
              or implied, including merchantability, fitness for a particular
              purpose, and non-infringement. We do not warrant that the Site
              will be uninterrupted, error-free, or secure, or that information
              on the Site is accurate, complete, or current.
            </p>
            <p>
              Information about hours, vendors, menus, and events is subject to
              change without notice. Confirm critical details with us directly.
            </p>
          </section>

          <section aria-labelledby="liability">
            <h2 id="liability" className="legal-h2">
              8. Limitation of liability
            </h2>
            <p className="legal-uppercase">
              To the fullest extent permitted by law, {legal.entity} and its
              officers, employees, and agents will not be liable for any
              indirect, incidental, consequential, special, or punitive damages
              arising out of or in connection with your use of the Site, even
              if advised of the possibility of such damages. Our total
              liability for any claim arising out of these terms or the Site
              will not exceed one hundred US dollars ($100).
            </p>
          </section>

          <section aria-labelledby="indemnity">
            <h2 id="indemnity" className="legal-h2">
              9. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold {legal.entity} harmless from any
              claim, loss, or damage (including reasonable legal fees) arising
              out of your misuse of the Site or violation of these terms.
            </p>
          </section>

          <section aria-labelledby="law">
            <h2 id="law" className="legal-h2">
              10. Governing law
            </h2>
            <p>
              These terms are governed by the laws of the {legal.jurisdiction},
              without regard to its conflict-of-laws rules. Any dispute arising
              from these terms or the Site will be brought in the state or
              federal courts located in the {legal.jurisdiction}, and you
              consent to their personal jurisdiction.
            </p>
          </section>

          <section aria-labelledby="changes">
            <h2 id="changes" className="legal-h2">
              11. Changes to these terms
            </h2>
            <p>
              We may update these terms from time to time. The effective date
              at the top of this page will reflect the latest version. Your
              continued use of the Site after changes are posted means you
              accept the updated terms.
            </p>
          </section>

          <section aria-labelledby="contact">
            <h2 id="contact" className="legal-h2">
              12. Contact
            </h2>
            <p>
              Questions about these terms? Email{" "}
              <a className="legal-link" href={`mailto:${emails.general}`}>
                {emails.general}
              </a>
              .
            </p>
          </section>

          <p className="legal-disclaimer">
            This document is informational and not legal advice. We recommend
            having qualified counsel review it for your jurisdiction before
            relying on it.
          </p>
        </div>
      </article>
    </>
  );
}
