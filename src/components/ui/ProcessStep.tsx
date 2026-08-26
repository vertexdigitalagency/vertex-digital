"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { ProcessStepData } from "@/types";

interface ProcessStepProps {
  step: ProcessStepData;
  isLast?: boolean;
}

export default function ProcessStep({ step, isLast }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative grid gap-8 pb-16 last:pb-0 md:grid-cols-[auto_1fr] md:gap-12"
    >
      {/* Index + connecting line */}
      <div className="flex md:flex-col md:items-center">
        <span className="font-mono text-3xl font-semibold tracking-tight text-accent2-soft/70 md:text-4xl">
          {step.index}
        </span>
        {!isLast && (
          <span className="ml-6 mt-4 hidden w-px flex-1 bg-gradient-to-b from-white/15 to-transparent md:ml-0 md:block" />
        )}
      </div>

      {/* Content */}
      <div className="card-base p-7 md:p-8">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
          {step.title}
        </h3>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          {step.description}
        </p>

        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {step.deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <Check size={15} className="mt-0.5 shrink-0 text-accent2-soft" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
