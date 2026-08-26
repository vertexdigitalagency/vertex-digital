import type { ValueItem } from "@/types";
import { Target, Sparkles, ShieldCheck, Compass } from "lucide-react";

// ============================================================================
// PLACEHOLDER CONTENT — replace before launch.
//
// These team members and bios are FICTIONAL, standing in for the real team.
// Each card currently renders a gradient "initials" avatar instead of a
// photo (see TeamMember in src/types/index.ts and the About page) — to add
// real photos, extend TeamMember with a `photoUrl` field, add the images
// under /public, and render an <Image> in the About page's team grid in
// place of the initials circle.
// ============================================================================
export const TEAM = [
  {
    initials: "UM",
    name: "Ullas M",
    role: "Co-Founder & Lead Developer",
    bio: "Co-founder and lead developer focused on building high-performance websites, web applications, and AI-powered business solutions."
  },
  {
    initials: "CF",
    name: "Shrihari JP",
    role: "Co-Founder & Business Operations",
    bio: "Co-founder responsible for client relations, project coordination, and business growth, ensuring every project runs smoothly from start to finish."
  }
];

export const VALUES: ValueItem[] = [
  {
    icon: Target,
    title: "Outcomes over output",
    description:
      "We measure a project by what it does for your business after launch, not by how many pages it contains.",
  },
  {
    icon: Sparkles,
    title: "Craft, without ego",
    description:
      "We take the work seriously and ourselves lightly. Good ideas win regardless of whose they were.",
  },
  {
    icon: ShieldCheck,
    title: "No black boxes",
    description:
      "You can see the staging site, the code, and the timeline at any point — never just a status update.",
  },
  {
    icon: Compass,
    title: "Honest scoping",
    description:
      "If something isn't the right fit for your budget or timeline, we'll tell you before you sign, not after.",
  },
];
