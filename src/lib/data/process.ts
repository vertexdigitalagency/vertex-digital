import type { ProcessStepData } from "@/types";

export const PROCESS_STEPS: ProcessStepData[] = [
  {
    index: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, your customers, and what success actually looks like — not just what the site should contain.",
    deliverables: [
      "Stakeholder kickoff call",
      "Competitive & market review",
      "Scope and timeline confirmed",
      "Success metrics defined",
    ],
  },
  {
    index: "02",
    title: "Design",
    description:
      "We design in the open. You'll see wireframes, then high-fidelity concepts, with structured feedback rounds instead of open-ended back-and-forth.",
    deliverables: [
      "Sitemap & content architecture",
      "Wireframes for key templates",
      "High-fidelity visual design",
      "Interactive prototype review",
    ],
  },
  {
    index: "03",
    title: "Development",
    description:
      "Design becomes production code on a staging environment you can review live at any point — never a black box until launch day.",
    deliverables: [
      "Component-based build",
      "CMS / integrations wired up",
      "Cross-device QA",
      "Performance & accessibility pass",
    ],
  },
  {
    index: "04",
    title: "Launch",
    description:
      "We move to production with a full pre-launch checklist: redirects, analytics, SEO metadata, and a rollback plan in place.",
    deliverables: [
      "DNS & hosting cutover",
      "Analytics & tracking verified",
      "Final QA on production",
      "Launch-day monitoring",
    ],
  },
  {
    index: "05",
    title: "Growth",
    description:
      "Launch is the start, not the finish. We stay on to monitor performance, ship iterations, and support your team as priorities evolve.",
    deliverables: [
      "30-day post-launch review",
      "Performance monitoring",
      "Ongoing maintenance option",
      "Roadmap for v2 improvements",
    ],
  },
];
