import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Cookie Policy — Global Fork",
  description:
    "How Global Fork uses (or doesn't use) cookies and similar tracking technologies on this website.",
  openGraph: {
    title: "Cookie Policy — Global Fork",
    description: "How we use cookies and similar technologies.",
    images: [
      "/og?title=Cookie+Policy&eyebrow=Legal&tagline=How+we+use+cookies+and+similar+technologies.",
    ],
  },
};

export default function CookiesPage() {
  const { legal, emails } = siteConfig;

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Cookie Policy"
        subtitle={`What we use, what we don't, and how to control what your browser stores. Effective ${legal.effectiveDate}.`}
      />

      <article className="bg-[var(--color-sand)] px-8 py-24 text-[var(--color-iron)]">
        <div className="prose-legal mx-auto max-w-3xl space-y-10">
          <section aria-labelledby="what">
            <h2 id="what" className="legal-h2">
              What cookies are
            </h2>
            <p>
              A cookie is a small text file that a website asks your browser
              to store on your device so the site can remember things about
              you between visits. &ldquo;Similar technologies&rdquo; means
              localStorage, sessionStorage, IndexedDB, and pixel trackers,
              which serve a comparable purpose.
            </p>
          </section>

          <section aria-labelledby="today">
            <h2 id="today" className="legal-h2">
              What we use today
            </h2>
            <p>
              <strong>Nothing.</strong> As of {legal.effectiveDate}, this
              website sets <em>no cookies</em>, uses <em>no localStorage</em>{" "}
              for tracking, and loads <em>no third-party analytics or
              advertising scripts</em>. We deliberately keep the privacy
              footprint minimal.
            </p>
            <p>
              Specifically, we do <strong>not</strong>:
            </p>
            <ul className="legal-list">
              <li>Use Google Analytics, Meta Pixel, or any ad tracker.</li>
              <li>Set marketing or behavioral cookies.</li>
              <li>Share data with advertising networks.</li>
              <li>Build profiles of visitors.</li>
            </ul>
          </section>

          <section aria-labelledby="essential">
            <h2 id="essential" className="legal-h2">
              Strictly necessary technologies
            </h2>
            <p>
              Our hosting provider may use short-lived technical cookies to
              route requests, balance load, or detect attacks. These are
              required for the site to function and do not track you across
              other sites. They are exempt from consent under both the EU
              ePrivacy Directive and the California Consumer Privacy Act.
            </p>
          </section>

          <section aria-labelledby="future">
            <h2 id="future" className="legal-h2">
              What might change
            </h2>
            <p>
              We may add a privacy-respecting analytics tool in the future
              (one that does not use cookies and does not track individuals).
              If we do, we will list it here and update the effective date at
              the top of this page. If we ever introduce a tool that does
              require cookies, we will show a consent banner before any
              non-essential cookie is set.
            </p>
          </section>

          <section aria-labelledby="control">
            <h2 id="control" className="legal-h2">
              How to control cookies in your browser
            </h2>
            <p>
              Even though we don&rsquo;t set cookies today, you can always
              manage what your browser stores. Major browsers let you block
              all cookies, block third-party cookies, or clear cookies on
              exit:
            </p>
            <ul className="legal-list">
              <li>
                <strong>Chrome</strong>: Settings → Privacy and security →
                Cookies and other site data
              </li>
              <li>
                <strong>Safari</strong>: Settings → Privacy → Manage Website
                Data
              </li>
              <li>
                <strong>Firefox</strong>: Settings → Privacy &amp; Security →
                Cookies and Site Data
              </li>
              <li>
                <strong>Edge</strong>: Settings → Cookies and site
                permissions → Manage and delete cookies
              </li>
            </ul>
            <p>
              Browser-level controls like &ldquo;Do Not Track&rdquo; and the
              Global Privacy Control are honored by default — there is
              nothing for them to override.
            </p>
          </section>

          <section aria-labelledby="related">
            <h2 id="related" className="legal-h2">
              Related policies
            </h2>
            <ul className="legal-list">
              <li>
                <Link className="legal-link" href="/privacy">
                  Privacy Policy
                </Link>{" "}
                — what information we collect through forms and how we use it.
              </li>
              <li>
                <Link className="legal-link" href="/terms">
                  Terms of Service
                </Link>{" "}
                — the rules that govern your use of this site.
              </li>
            </ul>
          </section>

          <section aria-labelledby="contact">
            <h2 id="contact" className="legal-h2">
              Contact
            </h2>
            <p>
              Questions about how we treat tracking and cookies?{" "}
              <a className="legal-link" href={`mailto:${emails.privacy}`}>
                {emails.privacy}
              </a>
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
