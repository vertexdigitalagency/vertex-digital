import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import TrustedBy from "@/components/sections/TrustedBy";
import CallToAction from "@/components/sections/CallToAction";
import { TEAM, VALUES } from "@/lib/data/team";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Vertex Digital is a small, senior team of designers and engineers building premium websites, AI-powered applications, and custom software since 2020.",
  path: "/about",
  keywords: ["about Vertex Digital", "web design team", "digital agency team", "who we are"],
});

const STATS = [
  { value: "2026", label: "Founded" },
  { value: "2", label: "Core Team Members" },
  { value: "Growing", label: "Client Projects" },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Vertex Digital"
        title="We build like it's our own product on the line"
        highlightWords={3}
        description="We're a small, senior team — no account layers, no junior hand-offs. The people who scope your project are the same people designing and building it."
      />

      {/* Story */}
      <section className="section-padding pt-0">
        <div className="container-vertex grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div>
            <p className="eyebrow mb-4">Our story</p>
            <h2 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-foreground md:text-4xl">
              Started because agency websites rarely looked like agency websites.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                  Vertex Digital Agency was founded by two Information Science engineering students with a passion for building modern websites, web applications, and digital solutions for businesses.
              </p>

              <p>
                  What started as a learning journey quickly became a mission to help startups, local businesses, and entrepreneurs establish a strong online presence through professional design, development, and digital strategy.
              </p>

              <p>
                  Today, we focus on creating fast, responsive, and conversion-focused websites while continuously expanding our expertise in web development, automation, AI-powered solutions, and digital growth.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/[0.06] pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="card-base p-6">
                  <Icon size={22} strokeWidth={1.6} className="text-accent2-soft" />
                  <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <TrustedBy />

      {/* Team */}
      <section className="section-padding">
        <div className="container-vertex">
          <SectionHeading
            eyebrow="The founders"

            title="Built by passionate developers"

            description="When you work with Vertex Digital, you work directly with the founders who design, build and support your project from start to finish."
            
            
          />

          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <div key={member.name} className="card-base p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-vertex-gradient text-sm font-semibold text-white shadow-glow">
                  {member.initials}
                </span>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-accent2-soft">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      <CallToAction />
    </PageShell>
  );
}
