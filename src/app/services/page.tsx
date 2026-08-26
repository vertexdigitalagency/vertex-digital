import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/ui/PageHero";
import ServiceDetailCard from "@/components/ui/ServiceDetailCard";
import CallToAction from "@/components/sections/CallToAction";
import { SERVICES_FULL } from "@/lib/data/services-full";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Premium websites, AI-powered web applications, custom software, UI/UX design, business automation, e-commerce, SEO, branding, and website maintenance.",
  path: "/services",
  keywords: [
    "web design services",
    "AI web app development",
    "custom software development",
    "UI/UX design services",
    "business automation",
  ],
});

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="What we do"
        title="Every discipline your launch needs, under one roof"
        highlightWords={2}
        description="From first pixel to production deploy — and everything that keeps it running afterward. Explore each service below, or tell us what you're building and we'll map it to the right mix."
      />

      <section className="section-padding pt-0">
        <div className="container-vertex space-y-5">
          {SERVICES_FULL.map((service, i) => (
            <ServiceDetailCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      <CallToAction />
    </PageShell>
  );
}
