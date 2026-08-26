import dynamic from "next/dynamic";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/ui/PageHero";
import CallToAction from "@/components/sections/CallToAction";
import { PORTFOLIO_ITEMS } from "@/lib/data/portfolio";
import { pageMetadata } from "@/lib/seo";

const PortfolioGrid = dynamic(() => import("@/components/ui/PortfolioGrid"), {
  loading: () => <PortfolioGridSkeleton />,
});

function PortfolioGridSkeleton() {
  return (
    <div aria-hidden="true">
      <div className="mb-12 flex flex-wrap justify-center gap-2.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-9 w-28 animate-pulse rounded-full bg-white/[0.04]" />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-72 animate-pulse rounded-xl2 border border-white/[0.06] bg-surface"
          />
        ))}
      </div>
    </div>
  );
}

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Case studies from businesses across finance, hospitality, manufacturing, healthcare, real estate, education, retail, and logistics.",
  path: "/portfolio",
  keywords: ["web design portfolio", "case studies", "client work", "custom software examples"],
});

export default function PortfolioPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our work"
        title="Real projects, real results"
        highlightWords={2}
        description="A sample of the businesses we've helped launch, rebuild, and grow — across industries that all needed the same thing: a digital presence as sharp as the business behind it."
      />

      <section className="section-padding pt-0">
        <div className="container-vertex">
          <PortfolioGrid items={PORTFOLIO_ITEMS} />
        </div>
      </section>

      <CallToAction />
    </PageShell>
  );
}
