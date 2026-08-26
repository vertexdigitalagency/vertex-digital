import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ClientLogo {
  name: string;
}

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
}

/* -------------------------------------------------------------------- */
/* Milestone 2 — additive types for the new interior pages              */
/* -------------------------------------------------------------------- */

export interface PricingPlan {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export interface ProcessStepData {
  index: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface PortfolioItem {
  slug: string;
  title: string;
  client: string;
  category: string;
  industry: string;
  summary: string;
  result: string;
  tags: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

