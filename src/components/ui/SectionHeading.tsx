"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const revealVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

/**
 * Consistent eyebrow + heading + description block used at the top of
 * every major section, with a staggered scroll reveal.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <motion.p
        custom={0}
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="eyebrow mb-4"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        custom={1}
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          custom={2}
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
