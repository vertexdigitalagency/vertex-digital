import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/ui/PageHero";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Vertex Digital collects, uses, and protects information submitted through this website.",
  path: "/privacy",
});

const LAST_UPDATED = "August 2026";

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        highlightWords={0}
        description={`Last updated: ${LAST_UPDATED}`}
      />

      <section className="pb-24 md:pb-32">
        <div className="container-vertex max-w-3xl">
          <div className="card-base mb-10 p-6 text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Draft placeholder notice:</strong>{" "}
            This page is written in plain language to describe our actual
            data practices, but it is a template, not legal advice. Have it
            reviewed by qualified legal counsel — and adjusted for your
            jurisdiction and any applicable regulations (e.g. GDPR, CCPA) —
            before this site handles real user data in production.
          </div>

          <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-accent2-soft prose-strong:text-foreground">
            <h2>Overview</h2>
            <p>
              Vertex Digital (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) respects your privacy. This policy explains
              what information we collect through this website, how we use
              it, and the choices you have.
            </p>

            <h2>Information we collect</h2>
            <p>We collect information in a few limited ways:</p>
            <ul>
              <li>
                <strong>Contact form.</strong> When you submit our contact
                form, we collect your name, email address, and any company,
                project type, budget range, and message details you choose
                to provide.
              </li>
              <li>
                <strong>Newsletter signup.</strong> If you subscribe to
                updates, we collect your email address.
              </li>
              <li>
                <strong>Automatically collected data.</strong> We generate a
                one-way hash of your IP address at submission time, used only
                to prevent spam and abuse. We do not store your raw IP
                address alongside form submissions. If analytics are enabled
                on this site, our analytics provider may collect standard
                usage data (pages visited, general location, device type) —
                see &ldquo;Cookies &amp; analytics&rdquo; below.
              </li>
            </ul>

            <h2>How we use information</h2>
            <p>We use the information you provide to:</p>
            <ul>
              <li>Respond to your inquiry and discuss potential projects</li>
              <li>Send you a confirmation when you contact us or subscribe</li>
              <li>Send occasional newsletter updates, if you&rsquo;ve subscribed</li>
              <li>Maintain the security and integrity of this website</li>
              <li>Understand aggregate usage of the site, if analytics are enabled</li>
            </ul>
            <p>We do not sell your personal information.</p>

            <h2>Cookies &amp; analytics</h2>
            <p>
              This site may use privacy-conscious analytics tooling to
              understand aggregate traffic patterns. Analytics are only
              active when explicitly configured by us via environment
              variables, and are implemented to avoid collecting more than
              standard, aggregate usage data. If a specific analytics or
              advertising provider is added in the future, this section will
              be updated to name it and describe what it collects.
            </p>

            <h2>How we share information</h2>
            <p>
              We do not sell or rent your information. We share information
              only with the service providers necessary to operate this
              website and respond to your inquiry — for example, our hosting
              provider, database provider, and transactional email provider
              — each of whom processes data on our behalf and is bound by
              their own privacy and security obligations.
            </p>

            <h2>Data retention</h2>
            <p>
              We retain contact form and newsletter submissions for as long
              as reasonably necessary to respond to your inquiry, maintain
              our business records, or as required by law. You can request
              deletion at any time — see &ldquo;Your choices&rdquo; below.
            </p>

            <h2>Your choices</h2>
            <p>You can:</p>
            <ul>
              <li>Ask us what information we hold about you</li>
              <li>Ask us to correct or delete your information</li>
              <li>Unsubscribe from newsletter emails at any time</li>
            </ul>
            <p>
              To make a request, contact us at{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>

            <h2>Children&rsquo;s privacy</h2>
            <p>
              This website is intended for businesses and professionals. We
              do not knowingly collect information from children.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The
              &ldquo;last updated&rdquo; date at the top of this page
              reflects the most recent revision.
            </p>

            <h2>Contact us</h2>
            <p>
              Questions about this policy can be sent to{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or to our
              address at {SITE.address}.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
