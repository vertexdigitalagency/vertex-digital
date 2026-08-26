import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/ui/PageHero";
import PricingCard from "@/components/ui/PricingCard";
import SectionHeading from "@/components/ui/SectionHeading";
import CallToAction from "@/components/sections/CallToAction";
import { PRICING_PLANS, PRICING_ADDONS } from "@/lib/data/pricing";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pricing",
  description:
    "Transparent starting prices for premium websites, AI-powered web applications, and custom software — plus ongoing maintenance, SEO, and automation add-ons.",
  path: "/pricing",
  keywords: ["web design pricing", "website cost", "software development pricing", "agency rates"],
});

export default function PricingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Pricing"
        title="Straightforward pricing, scoped to your project"
        highlightWords={2}
        description="These are accurate starting points for the scope described. Every quote is confirmed after a short discovery call — no surprises once work begins."
      />

      <section className="pb-24 md:pb-32">
        <div className="container-vertex">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PRICING_PLANS.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface/20 pt-0">
        <div className="container-vertex">
          <SectionHeading
            eyebrow="Beyond launch"
            title="Ongoing support, when you need it"
            description="Most clients pair a project with one of these to keep momentum after launch day."
          />

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {PRICING_ADDONS.map((addon) => (
              <div key={addon.title} className="card-base p-7">
                <p className="font-mono text-xs uppercase tracking-wide text-accent2-soft">
                  {addon.price}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground">
                  {addon.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-24 md:pt-32">
        <div className="container-vertex">
          <div className="glass-panel flex flex-col items-center justify-between gap-6 rounded-xl2 p-8 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                Still have pricing questions?
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                We&apos;ve answered the most common ones on our FAQ page.
              </p>
            </div>
            <Link
              href="/faq"
              className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent2-soft transition-transform duration-300 hover:translate-x-1"
            >
              Visit the FAQ <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
<section className="pt-12 pb-24">
  <div className="container-vertex">
    <div className="card-base p-8">
      <h2 className="text-2xl font-bold mb-6">
        Payment Terms
      </h2>

      <div className="space-y-3 text-muted-foreground">
        <p>✔ 50% advance before project starts</p>
        <p>✔ 25% after design approval</p>
        <p>✔ 25% on final delivery</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">
        Accepted Payments
      </h3>

      <div className="space-y-2 text-muted-foreground">
        <p>• UPI</p>
        <p>• Bank Transfer</p>
        <p>• Razorpay Payment Link</p>
        <p>• GST Invoice available on request</p>
      </div>
    </div>
  </div>
</section>
      <CallToAction />
    </PageShell>
  );
}
