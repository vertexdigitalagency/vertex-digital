import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/ui/PageHero";
import ProcessStep from "@/components/ui/ProcessStep";
import CallToAction from "@/components/sections/CallToAction";
import { PROCESS_STEPS } from "@/lib/data/process";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Process",
  description:
    "How a Vertex Digital engagement runs from discovery through launch and ongoing growth — five stages, no black boxes.",
  path: "/process",
  keywords: ["web design process", "project workflow", "how we work", "development timeline"],
});

export default function ProcessPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="How we work"
        title="A clear path from kickoff to launch"
        highlightWords={2}
        description="Five stages, the same for every project size. You'll always know what's happening, what's next, and what we need from you."
      />

      <section className="section-padding pt-0">
        <div className="container-vertex max-w-4xl">
          {PROCESS_STEPS.map((step, i) => (
            <ProcessStep key={step.index} step={step} isLast={i === PROCESS_STEPS.length - 1} />
          ))}
        </div>
      </section>

      <CallToAction />
    </PageShell>
  );
}
