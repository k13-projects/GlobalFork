import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy — Global Fork",
  description:
    "How Global Fork collects, uses, and protects information you share through our website, including your rights under CCPA and GDPR.",
  openGraph: {
    title: "Privacy Policy — Global Fork",
    description: "How we collect, use, and protect your information.",
    images: [
      "/og?title=Privacy+Policy&eyebrow=Legal&tagline=How+we+collect%2C+use%2C+and+protect+your+information.",
    ],
  },
};

export default function PrivacyPage() {
  const { legal, emails } = siteConfig;
  const retention = legal.retentionMonths;

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle={`How we collect, use, and protect information you share with us. Effective ${legal.effectiveDate}.`}
      />

      <article className="bg-[var(--color-sand)] px-8 py-24 text-[var(--color-iron)]">
        <div className="prose-legal mx-auto max-w-3xl space-y-10">
          <section aria-labelledby="who">
            <h2 id="who" className="legal-h2">
              Who we are
            </h2>
            <p>
              This site is operated by <strong>{legal.entity}</strong> (&ldquo;Global
              Fork,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). For privacy
              questions, write to{" "}
              <a className="legal-link" href={`mailto:${emails.privacy}`}>
                {emails.privacy}
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="what">
            <h2 id="what" className="legal-h2">
              Information we collect
            </h2>
            <p>
              We only collect information you choose to give us. Specifically:
            </p>
            <ul className="legal-list">
              <li>
                <strong>Contact form:</strong> name, email address, and the
                message you write to us.
              </li>
              <li>
                <strong>Bookings form:</strong> name, email address, optional
                phone number, occasion, party size, preferred date and time, and
                any notes you provide.
              </li>
              <li>
                <strong>Standard server logs:</strong> our hosting provider may
                briefly record IP address, browser, and request timestamp for
                security and reliability.
              </li>
            </ul>
            <p>
              We do <strong>not</strong> use cookies, advertising trackers, or
              third-party analytics scripts on this site today. See our{" "}
              <Link className="legal-link" href="/cookies">
                Cookie Policy
              </Link>{" "}
              for details.
            </p>
          </section>

          <section aria-labelledby="why">
            <h2 id="why" className="legal-h2">
              How we use your information
            </h2>
            <ul className="legal-list">
              <li>To reply to your inquiry or booking request.</li>
              <li>To plan and confirm your event with you.</li>
              <li>
                To improve and secure the site (using anonymized server logs).
              </li>
            </ul>
            <p>
              We do not use your information for marketing emails unless you
              specifically ask us to.
            </p>
          </section>

          <section aria-labelledby="share">
            <h2 id="share" className="legal-h2">
              Who we share it with
            </h2>
            <p>
              We do <strong>not</strong> sell or rent your personal information.
              We share it only with the limited service providers that help us
              run the site:
            </p>
            <ul className="legal-list">
              <li>
                <strong>Vercel</strong> (hosting) — receives standard server
                logs.
              </li>
              <li>
                <strong>Email service provider</strong> (transactional email,
                when wired) — receives the contents of forms you submit, in
                order to deliver them to our staff inbox.
              </li>
            </ul>
            <p>
              We may also disclose information when required by law or to
              protect our rights, property, or safety.
            </p>
          </section>

          <section aria-labelledby="retention">
            <h2 id="retention" className="legal-h2">
              How long we keep it
            </h2>
            <p>
              We keep contact and booking inquiries for <strong>{retention} months</strong>{" "}
              from the date of your last contact with us, after which they are
              deleted from our inboxes and any operational logs. You can ask us
              to delete your information sooner — see &ldquo;Your rights&rdquo;
              below.
            </p>
          </section>

          <section aria-labelledby="rights">
            <h2 id="rights" className="legal-h2">
              Your rights
            </h2>
            <p>
              Depending on where you live, you have rights over your personal
              information. To exercise any of these, email{" "}
              <a className="legal-link" href={`mailto:${emails.privacy}`}>
                {emails.privacy}
              </a>{" "}
              from the address you used to contact us.
            </p>

            <h3 className="legal-h3">If you live in California (CCPA / CPRA)</h3>
            <ul className="legal-list">
              <li>
                <strong>Right to know</strong> what personal information we
                hold about you.
              </li>
              <li>
                <strong>Right to delete</strong> personal information we hold
                about you.
              </li>
              <li>
                <strong>Right to correct</strong> inaccurate personal
                information.
              </li>
              <li>
                <strong>Right to opt out of the sale or sharing</strong> of
                personal information. <em>We do not sell or share personal
                information for cross-context behavioral advertising.</em>
              </li>
              <li>
                <strong>Right to non-discrimination</strong> for exercising any
                of these rights.
              </li>
            </ul>

            <h3 className="legal-h3">If you live in the EU / UK (GDPR / UK GDPR)</h3>
            <ul className="legal-list">
              <li>
                Right of access, rectification, erasure, restriction,
                portability, and to object to processing.
              </li>
              <li>
                Right to withdraw consent (we rely on consent for form
                submissions and on our legitimate interest in operating the
                site).
              </li>
              <li>
                Right to lodge a complaint with your local data protection
                authority.
              </li>
            </ul>
          </section>

          <section aria-labelledby="security">
            <h2 id="security" className="legal-h2">
              How we protect it
            </h2>
            <p>
              The site is served over HTTPS with industry-standard security
              headers (HSTS, Content Security Policy, X-Frame-Options). Form
              submissions travel over encrypted connections. We restrict access
              to inboxes to the staff who need them.
            </p>
          </section>

          <section aria-labelledby="children">
            <h2 id="children" className="legal-h2">
              Children&rsquo;s privacy
            </h2>
            <p>
              The site is not directed at children under 13. We do not knowingly
              collect personal information from children under 13. If you
              believe we have, contact{" "}
              <a className="legal-link" href={`mailto:${emails.privacy}`}>
                {emails.privacy}
              </a>{" "}
              and we will delete it.
            </p>
          </section>

          <section aria-labelledby="changes">
            <h2 id="changes" className="legal-h2">
              Changes to this policy
            </h2>
            <p>
              We may update this policy from time to time. The effective date at
              the top of this page tells you when it last changed. Material
              changes will be flagged on the site.
            </p>
          </section>

          <section aria-labelledby="contact">
            <h2 id="contact" className="legal-h2">
              Contact us
            </h2>
            <p>
              Questions, concerns, or requests about your information:
            </p>
            <ul className="legal-list">
              <li>
                <strong>Email:</strong>{" "}
                <a className="legal-link" href={`mailto:${emails.privacy}`}>
                  {emails.privacy}
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
