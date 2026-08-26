import Link from "next/link";
import dynamic from "next/dynamic";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/ui/PageHero";
import CallToAction from "@/components/sections/CallToAction";
import { FAQ_CATEGORIES } from "@/lib/data/faq";
import { pageMetadata } from "@/lib/seo";

const FAQAccordion = dynamic(() => import("@/components/ui/FAQAccordion"), {
  loading: () => <FAQAccordionSkeleton />,
});

function FAQAccordionSkeleton() {
  return (
    <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]" aria-hidden="true">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="animate-pulse py-6">
          <div className="h-4 w-2/3 rounded-full bg-white/[0.06]" />
        </div>
      ))}
    </div>
  );
}

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about working with Vertex Digital — process, pricing, timelines, and the technology we build with.",
  path: "/faq",
  keywords: ["web design FAQ", "pricing questions", "agency process questions"],
});

// FAQPage structured data (JSON-LD) — makes every answer eligible for rich
// results, generated straight from the same content the page renders so the
// two can never drift out of sync.
function faqStructuredData() {
  const allItems = FAQ_CATEGORIES.flatMap((category) => category.items);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export default function FAQPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData()) }}
      />
      <PageHero
        eyebrow="Questions"
        title="Answers, before you even have to ask"
        highlightWords={3}
      >
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">
          Can&rsquo;t find what you&rsquo;re looking for?{" "}
          <Link href="/contact" className="font-medium text-accent2-soft underline underline-offset-4">
            Reach out
          </Link>{" "}
          and we&rsquo;ll get back to you within one business day.
        </p>
      </PageHero>

      <section className="section-padding pt-0">
        <div className="container-vertex max-w-3xl space-y-16">
          {FAQ_CATEGORIES.map((category) => (
            <div key={category.category}>
              <h2 className="mb-2 font-display text-2xl font-semibold tracking-tight text-foreground">
                {category.category}
              </h2>
              <FAQAccordion
                items={category.items}
                idPrefix={category.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              />
            </div>
          ))}
        </div>
      </section>

      <CallToAction />
    </PageShell>
  );
}
