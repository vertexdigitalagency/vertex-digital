import dynamic from "next/dynamic";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/ui/PageHero";
import { SITE, CONTACT_ICONS } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

const ContactForm = dynamic(() => import("@/components/ui/ContactForm"), {
  loading: () => <ContactFormSkeleton />,
});

function ContactFormSkeleton() {
  return (
    <div className="card-base animate-pulse space-y-6 p-7 md:p-9" aria-hidden="true">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="h-12 rounded-lg bg-white/[0.04]" />
        <div className="h-12 rounded-lg bg-white/[0.04]" />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="h-12 rounded-lg bg-white/[0.04]" />
        <div className="h-12 rounded-lg bg-white/[0.04]" />
      </div>
      <div className="h-12 rounded-lg bg-white/[0.04]" />
      <div className="h-32 rounded-lg bg-white/[0.04]" />
      <div className="h-12 w-40 rounded-full bg-white/[0.06]" />
    </div>
  );
}

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Tell us about your project and we'll come back with a clear plan, timeline, and quote — usually within one business day.",
  path: "/contact",
  keywords: ["contact web design agency", "get a quote", "start a project"],
});

const NEXT_STEPS = [
  {
    step: "01",
    title: "We read your message",
    description: "A real person on our team reviews every inquiry within one business day.",
  },
  {
    step: "02",
    title: "A short discovery call",
    description: "20–30 minutes to understand your goals, timeline, and budget.",
  },
  {
    step: "03",
    title: "A clear proposal",
    description: "Scope, timeline, and price laid out in writing — no pressure to sign on the spot.",
  },
];

export default function ContactPage() {
  const { Mail, Phone, MapPin } = CONTACT_ICONS;

  return (
    <PageShell>
      <PageHero
        eyebrow="Get in touch"
        title="Tell us about your project"
        highlightWords={2}
        description="Whether you have a full brief ready or just a rough idea, we'd like to hear about it. Fill out the form below and we'll take it from there."
      />

      <section className="pb-24 md:pb-32">
        <div className="container-vertex grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <ContactForm />

          <div className="space-y-6">
            <div className="card-base p-7">
              <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                Direct contact
              </h3>
              <ul className="mt-5 space-y-4">
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Mail size={16} className="shrink-0 text-accent2-soft" aria-hidden="true" />
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Phone size={16} className="shrink-0 text-accent2-soft" aria-hidden="true" />
                    {SITE.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin size={16} className="shrink-0 text-accent2-soft" aria-hidden="true" />
                  {SITE.address}
                </li>
              </ul>
              <p className="mt-5 border-t border-white/[0.06] pt-4 text-xs text-muted">
                Office hours: Monday–Friday, 9am–6pm PT
              </p>
            </div>

            <div className="card-base p-7">
              <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                What happens next
              </h3>
              <ol className="mt-5 space-y-5">
                {NEXT_STEPS.map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="font-mono text-xs text-accent2-soft">{item.step}</span>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
