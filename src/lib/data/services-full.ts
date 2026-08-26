export interface ServiceDetail {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
}

export const SERVICES_FULL: ServiceDetail[] = [
  {
    id: "premium-websites",
    icon: "LayoutTemplate",
    title: "Premium Websites",
    tagline: "Your best salesperson, working 24/7.",
    description:
      "A marketing site designed and engineered to load instantly, communicate clearly, and convert visitors into leads — built on modern, maintainable code your team can actually own.",
    features: [
      "Custom UI/UX design, not a template",
      "Next.js build tuned for Core Web Vitals",
      "CMS integration for easy content updates",
      "On-page SEO structure from day one",
    ],
  },
  {
    id: "ai-web-apps",
    icon: "Sparkles",
    title: "AI-Powered Web Applications",
    tagline: "AI built into the product, not bolted on top.",
    description:
      "Applications with AI woven into the actual workflow — answering questions, automating decisions, or personalizing an experience — rather than a generic chat widget in the corner.",
    features: [
      "Custom AI features scoped to your workflow",
      "Integration with leading LLM providers",
      "Human-in-the-loop safeguards where needed",
      "Built to scale past a proof of concept",
    ],
  },
  {
    id: "custom-software",
    icon: "Code2",
    title: "Custom Software",
    tagline: "Built around how your team actually works.",
    description:
      "Internal tools, customer portals, and platforms designed for your specific processes — replacing spreadsheets and disconnected tools with one system your team trusts.",
    features: [
      "Requirements discovery with your team",
      "Scalable, well-documented architecture",
      "Role-based access & permissions",
      "Ongoing support after launch",
    ],
  },
  {
    id: "uiux-design",
    icon: "PenTool",
    title: "UI/UX Design",
    tagline: "Interfaces that respect people's time.",
    description:
      "Design work grounded in how people actually use your product — clear hierarchy, considered interaction, and a visual identity that feels unmistakably yours.",
    features: [
      "User flows & wireframes",
      "High-fidelity visual design systems",
      "Interactive prototypes for validation",
      "Design handoff developers can build from",
    ],
  },
  {
    id: "business-automation",
    icon: "Workflow",
    title: "Business Automation",
    tagline: "Less manual work, fewer dropped balls.",
    description:
      "We map your team's repetitive workflows and automate them — from lead routing to reporting — so your team spends time on decisions, not data entry.",
    features: [
      "Workflow audit & opportunity mapping",
      "Integrations across your existing tools",
      "Automated reporting & alerts",
      "Documentation your team can maintain",
    ],
  },
  {
    id: "ecommerce",
    icon: "ShoppingCart",
    title: "E-Commerce",
    tagline: "Storefronts built to convert, not just display.",
    description:
      "E-commerce experiences tuned for speed, mobile checkout, and merchandising flexibility — built to scale with your catalog as it grows.",
    features: [
      "High-conversion product & checkout pages",
      "Inventory & catalog integrations",
      "Fast, mobile-optimized checkout flow",
      "Analytics wired in from launch",
    ],
  },
  {
    id: "seo",
    icon: "Search",
    title: "SEO",
    tagline: "Findable, not just fast.",
    description:
      "Technical SEO and content strategy that helps the right people find you organically — built on the fundamentals that still matter as search continues to change.",
    features: [
      "Technical SEO audit & fixes",
      "Site structure & metadata strategy",
      "Keyword & content planning",
      "Monthly performance reporting",
    ],
  },
  {
    id: "branding",
    icon: "Palette",
    title: "Branding",
    tagline: "A visual identity that earns trust on sight.",
    description:
      "Logo, color, type, and voice guidelines that give your business a consistent, premium identity across your website, product, and marketing materials.",
    features: [
      "Logo & visual identity design",
      "Color, type & component guidelines",
      "Brand voice & messaging direction",
      "Ready-to-use brand asset library",
    ],
  },
  {
    id: "maintenance",
    icon: "LifeBuoy",
    title: "Website Maintenance",
    tagline: "So launch day isn't the last day we talk.",
    description:
      "Ongoing monitoring, updates, and support after launch, so your site stays fast, secure, and current without needing an in-house engineer.",
    features: [
      "Uptime & security monitoring",
      "Regular dependency & content updates",
      "Monthly performance reports",
      "Priority support for urgent issues",
    ],
  },
];
