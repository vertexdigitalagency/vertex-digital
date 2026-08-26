import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/ui/PageHero";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: "The terms that govern use of the Vertex Digital website.",
  path: "/terms",
});

const LAST_UPDATED = "August 2026";

export default function TermsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        highlightWords={0}
        description={`Last updated: ${LAST_UPDATED}`}
      />

      <section className="pb-24 md:pb-32">
        <div className="container-vertex max-w-3xl">
          <div className="card-base mb-10 p-6 text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Draft placeholder notice:</strong>{" "}
            This page is a general-purpose template, not legal advice. Have
            it reviewed by qualified legal counsel — including the governing
            law and jurisdiction section below, which is intentionally left
            for counsel to specify — before this site goes live.
          </div>

          <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-accent2-soft prose-strong:text-foreground">
            <h2>Acceptance of terms</h2>
            <p>
              By accessing this website, you agree to these Terms of
              Service. If you do not agree, please do not use this site.
            </p>

            <h2>Use of this website</h2>
            <p>
              This website is provided to share information about Vertex
              Digital and its services, and to let visitors get in touch
              about potential projects. You agree to use it only for lawful
              purposes and not to:
            </p>
            <ul>
              <li>Attempt to gain unauthorized access to any part of the site or its systems</li>
              <li>Submit false, misleading, or malicious content through any form on this site</li>
              <li>Use automated tools to scrape, spam, or abuse this website</li>
              <li>Interfere with the site&rsquo;s normal operation or security</li>
            </ul>

            <h2>Intellectual property</h2>
            <p>
              The content on this website — including text, design, graphics,
              and code — is the property of Vertex Digital or its licensors,
              unless otherwise noted, and is protected by applicable
              intellectual property laws. You may not reproduce, distribute,
              or create derivative works from this site&rsquo;s content
              without our prior written permission.
            </p>

            <h2>Not a binding offer</h2>
            <p>
              Information on this website — including services, pricing, and
              timelines described on the Pricing and Services pages — is
              provided for general informational purposes and does not
              constitute a binding offer or contract. Any actual engagement
              with Vertex Digital is governed by a separate, signed proposal
              or agreement between the parties.
            </p>

            <h2>No warranty</h2>
            <p>
              This website is provided &ldquo;as is&rdquo; without
              warranties of any kind, express or implied. We do not warrant
              that the site will be uninterrupted, error-free, or entirely
              secure.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, Vertex Digital will not
              be liable for any indirect, incidental, or consequential
              damages arising from your use of this website.
            </p>

            <h2>Third-party links</h2>
            <p>
              This site may link to third-party websites we don&rsquo;t
              control. We are not responsible for the content or practices
              of any linked site.
            </p>

            <h2>Governing law</h2>
            <p>
              <em>
                [Governing law and jurisdiction to be specified by legal
                counsel based on where Vertex Digital is legally
                established.]
              </em>
            </p>

            <h2>Changes to these terms</h2>
            <p>
              We may update these terms from time to time. The
              &ldquo;last updated&rdquo; date at the top of this page
              reflects the most recent revision. Continued use of the site
              after changes constitutes acceptance of the updated terms.
            </p>

            <h2>Contact us</h2>
            <p>
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or to our
              address at {SITE.address}.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
