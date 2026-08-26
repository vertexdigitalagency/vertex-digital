"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { PricingPlan } from "@/types";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

export default function PricingCard({ plan, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative flex flex-col rounded-xl2 border p-8",
        plan.highlighted
          ? "border-accent/40 bg-surface shadow-glow lg:-translate-y-3"
          : "border-white/[0.06] bg-surface"
      )}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-8 rounded-full bg-vertex-gradient px-3 py-1 text-[11px] font-semibold text-white shadow-glow">
          Most popular
        </span>
      )}

      <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
        {plan.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {plan.description}
      </p>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-display text-4xl font-semibold tracking-tight text-foreground">
          {plan.price}
        </span>
        <span className="text-xs text-muted">{plan.priceNote}</span>
      </div>

      <ul className="mt-7 flex-1 space-y-3.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <Check size={16} className="mt-0.5 shrink-0 text-accent2-soft" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        href={plan.href}
        variant={plan.highlighted ? "primary" : "secondary"}
        className="mt-9 w-full"
      >
        {plan.cta}
      </Button>
    </motion.div>
  );
}
