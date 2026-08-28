import {
  Globe2,
  Sparkles,
  Code2,
  PenTool,
  Workflow,
  ShoppingCart,
  Gauge,
  LayoutTemplate,
  Layers,
  HeartHandshake,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import type {
  NavLink,
  Service,
  Feature,
  ClientLogo,
  SocialLink,
} from "@/types";

// PLACEHOLDER — phone and address are illustrative; replace with real
// contact details before launch.
export const SITE = {
  name: "Vertex Digital",
  tagline: "Premium digital solutions for businesses that refuse to blend in.",
  email: "vertexdigitalagency.in@gmail.com",
  phone: "+91 9353591776",
  address: "Bangalore, KA",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const SERVICES: Service[] = [
  {
    icon: LayoutTemplate,
    title: "Premium Websites",
    description:
      "Marketing sites and web platforms engineered to load instantly and convert visitors from the first scroll.",
    href: "/services#premium-websites",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Web Apps",
    description:
      "Intelligent applications with AI baked into the product experience, not bolted on as an afterthought.",
    href: "/services#ai-web-apps",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Bespoke internal tools and platforms built around how your team actually works, not a generic template.",
    href: "/services#custom-software",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "Interfaces designed with the same rigor as the brands you admire — clear, considered, and unmistakably yours.",
    href: "/services#uiux-design",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "We remove the manual busywork from your operations so your team can spend time on what matters.",
    href: "/services#business-automation",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Storefronts tuned for speed and checkout conversion, built to scale with your catalog and traffic.",
    href: "/services#ecommerce",
  },
];

export const FEATURES: Feature[] = [
  {
    icon: Gauge,
    title: "Performance obsessed",
    description:
      "Every build is audited for load speed and Core Web Vitals before it ever reaches your customers.",
  },
  {
    icon: Layers,
    title: "Design-led development",
    description:
      "Design and engineering sit in the same room from day one, so nothing is lost in translation.",
  },
  {
    icon: HeartHandshake,
    title: "A true partnership",
    description:
      "You get a dedicated team that understands your business, not a ticket queue and a account manager.",
  },
  {
    icon: Globe2,
    title: "Built to scale",
    description:
      "Architecture decisions are made for where your business is headed, not just where it is today.",
  },
];

// PLACEHOLDER CONTENT — these are FICTIONAL company names (matching the
// fictional case studies in lib/data/portfolio.ts), rendered as text
// wordmarks rather than logo images. Replace with real client names/logos
// (with permission) before launch, or remove the Trusted By section
// (src/components/sections/TrustedBy.tsx) from the homepage until you have
// real ones to show.
export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Northgate Capital" },
  { name: "Solace Hotels" },
  { name: "Ferro Manufacturing" },
  { name: "Bright Path Clinics" },
  { name: "Meridian Realty" },
  { name: "Oakwood Schools" },
  { name: "Lumen & Co." },
  { name: "Harborline" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: Twitter, label: "X (Twitter)", href: "https://twitter.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Process", href: "/process" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Premium Websites", href: "/services#premium-websites" },
    { label: "AI-Powered Web Apps", href: "/services#ai-web-apps" },
    { label: "Custom Software", href: "/services#custom-software" },
    { label: "UI/UX Design", href: "/services#uiux-design" },
  ],
};

export const CONTACT_ICONS = { Mail, Phone, MapPin };
