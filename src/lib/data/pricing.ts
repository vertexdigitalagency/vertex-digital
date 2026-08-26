import type { PricingPlan } from "@/types";

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Launch",
    price: "₹8,999",
    priceNote: "starting price",
    description:
      "A polished, conversion-ready marketing site for startups and small businesses getting online for the first time.",
    features: [
      "Up to 6 pages",
      "Custom UI/UX design",
      "Mobile-first responsive build",
      "Core SEO setup",
      "2 rounds of revisions",
      "2 weeks turnaround",
    ],
    cta: "Start with Launch",
      href: "/contact?plan=launch",

  },
  {
    name: "Growth",
    price: "₹15,999",
    priceNote: "starting price",
    description:
      "Our most popular package — a premium site or web app with custom interactions, CMS, and ongoing optimization in mind.",
    features: [
      "Up to 14 pages or app views",
      "Advanced motion & interactions",
      "CMS integration",
      "E-commerce ready",
      "Technical SEO + analytics",
      "4 rounds of revisions",
      "4–6 weeks turnaround",
    ],
    cta: "Start with Growth",
    href: "/contact?plan=growth",
    highlighted: true,
  },
  {
  name: "Custom Web App",
  price: "Price based on requirements",
  priceNote: "starting price",
  description:
    "Custom web applications, dashboards, portals, and automation solutions built for your business.",
  features: [
    "Custom UI/UX design",
    "Admin dashboard",
    "Database integration",
    "User authentication",
    "Reports & analytics",
    "API integrations",
    "4-8 weeks turnaround",
  ],
  cta: "Build My App",
    href: "/contact?plan=custom-web-app",

},
  {
    name: "Enterprise",
    price: "Custom",
    priceNote: "scoped to your project",
    description:
      "Custom software, AI-powered platforms, or multi-market rollouts that need a dedicated team from day one.",
    features: [
      "Unlimited pages & views",
      "Custom software / AI features",
      "Dedicated project team",
      "Solution architecture & scoping",
      "Priority support & SLA",
      "Phased delivery roadmap",
    ],
    cta: "Talk to us",
      href: "/contact?plan=enterprise",
    
  },
];

export const PRICING_ADDONS = [
  {
    title: "Website Maintenance",
    price: "FROM ₹1,999/MO",
    description: "Uptime monitoring, security patches, content updates, and monthly performance reports.",
  },
  {
    title: "SEO & Content",
    price: "FROM ₹2,999",
    description: "Ongoing technical SEO, keyword strategy, and content production to grow organic traffic.",
  },
  {
    title: "Business Automation",
    price: "FROM ₹14,999",
    description: "Workflow audits and automation builds that remove manual work from your team's day-to-day.",
  },
];
