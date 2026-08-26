import type { FaqCategory } from "@/types";

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    category: "Working with us",
    items: [
      {
        question: "What does the project process actually look like?",
        answer:
          "Every engagement moves through five stages: Discovery, Design, Development, Launch, and Growth. You'll see our full breakdown on the Process page, but in short — we scope and align first, design in the open with regular check-ins, build on a staging environment you can review live, launch with a QA checklist, and stay on for support and iteration afterward.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "A Launch-tier marketing site usually takes 2 weeks from kickoff to launch. Growth-tier projects with custom interactions or a CMS run 4–6 weeks. Enterprise builds vary based on scope and are estimated during discovery.",
      },
      {
        question: "Do you work with clients outside the US?",
        answer:
          "Yes. Most of our collaboration happens async over Slack and shared documents, with video calls for kickoff, design review, and launch. We've shipped projects across North America, Europe, and Asia-Pacific time zones.",
      },
      {
        question: "Can you work with our in-house team or existing codebase?",
        answer:
          "Often, yes. We regularly plug into existing design systems and codebases for Growth and Enterprise engagements. Tell us about your stack during discovery and we'll confirm fit before scoping.",
      },
    ],
  },
  {
    category: "Pricing & scope",
    items: [
      {
        question: "Are the prices on the Pricing page final?",
        answer:
          "They're accurate starting points for the scope described. Most projects land close to the listed price; final quotes are confirmed after a short discovery call once we understand your specific requirements.",
      },
      {
        question: "What's included in a revision round?",
        answer:
          "A revision round covers structured feedback on a specific milestone — for example, the homepage design concept — collected in one pass and addressed together, rather than open-ended back-and-forth. This keeps timelines predictable for both sides.",
      },
      {
        question: "Do you require a deposit?",
        answer:
          "Yes, standard terms are 50% to begin work and 50% at launch, split into milestone payments for larger Enterprise engagements. We'll lay out the exact schedule in your proposal.",
      },
      {
        question: "What happens if our scope changes mid-project?",
        answer:
          "Scope changes are normal. Small adjustments are absorbed where possible; larger additions are quoted separately as a change order so your timeline and budget stay predictable.",
      },
    ],
  },
  {
    category: "Technical",
    items: [
      {
        question: "What tech stack do you build with?",
        answer:
          "Our default stack is Next.js, TypeScript, and Tailwind CSS, with Framer Motion and GSAP for animation. For e-commerce we integrate with Shopify or a headless commerce platform depending on your needs; for AI features we build on the Anthropic and OpenAI APIs.",
      },
      {
        question: "Will I own the code and the domain?",
        answer:
          "Yes, entirely. You own the repository, the content, and all assets on delivery. We hand over full access as part of launch.",
      },
      {
        question: "Do you offer hosting?",
        answer:
          "We deploy to Vercel or your preferred host and can manage hosting for you as part of a maintenance plan, or hand off deployment access so your team manages it directly.",
      },
      {
        question: "Is accessibility considered in your builds?",
        answer:
          "Yes. Every project ships with semantic markup, visible keyboard focus states, sufficient color contrast, and reduced-motion support as a baseline, not an afterthought.",
      },
    ],
  },
];
