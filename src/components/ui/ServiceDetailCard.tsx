"use client";

import { motion } from "framer-motion";
import {
  Check,
  LayoutTemplate,
  Sparkles,
  Code2,
  PenTool,
  Workflow,
  ShoppingCart,
  Search,
  Palette,
  LifeBuoy,
} from "lucide-react";

import type { ServiceDetail } from "@/lib/data/services-full";

interface ServiceDetailCardProps {
  service: ServiceDetail;
  index: number;
}

export default function ServiceDetailCard({
  service,
  index,
}: ServiceDetailCardProps) {
  const iconMap = {
    LayoutTemplate,
    Sparkles,
    Code2,
    PenTool,
    Workflow,
    ShoppingCart,
    Search,
    Palette,
    LifeBuoy,
  };

  const Icon =
    iconMap[service.icon as keyof typeof iconMap] ?? LayoutTemplate;

  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="card-base scroll-mt-28 grid gap-6 p-8 md:grid-cols-[auto_1fr] md:items-start md:gap-8 md:p-10"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-vertex-gradient shadow-glow">
        <Icon size={22} className="text-white" strokeWidth={1.75} />
      </span>

      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent2-soft">
          {service.tagline}
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {service.title}
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {service.description}
        </p>

        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <Check size={15} className="mt-0.5 shrink-0 text-accent2-soft" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
