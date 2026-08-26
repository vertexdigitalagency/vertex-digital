"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Decorative only (GSAP-animated background), so it's safe to skip during
// server render and load in just after — avoids adding its GSAP work to the
// critical first paint on every interior page without changing how it looks.
const VertexMesh = dynamic(() => import("@/components/ui/VertexMesh"), {
  ssr: false,
});

interface PageHeroProps {
  eyebrow: string;
  title: string;
  /** How many trailing words of the title get the gradient treatment. */
  highlightWords?: number;
  description?: string;
  children?: ReactNode;
  align?: "center" | "left";
}

/**
 * Compact hero banner used at the top of every interior page. Reuses the
 * same background language as the homepage Hero (vertex mesh, radial glow,
 * faint grid) at a shorter height, so every page reads as one family
 * without duplicating — or redesigning — the homepage hero itself.
 */
export default function PageHero({
  eyebrow,
  title,
  highlightWords = 1,
  description,
  children,
  align = "center",
}: PageHeroProps) {
  const words = title.split(" ");
  const splitAt = Math.max(words.length - highlightWords, 0);
  const base = words.slice(0, splitAt).join(" ");
  const highlighted = words.slice(splitAt).join(" ");

  return (
    <section className="relative overflow-hidden pt-[calc(var(--header-height)+2.5rem)] pb-20 md:pb-28">
      <div className="absolute inset-0 bg-vertex-radial" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 20%, black 40%, transparent 100%)",
        }}
      />
      <VertexMesh className="absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 opacity-50" />

      <div
        className={cn(
          "container-vertex relative",
          align === "center" ? "text-center" : "text-left"
        )}
      >
        <div className={cn(align === "center" && "mx-auto max-w-3xl")}>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow mb-5"
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            {base ? `${base} ` : ""}
            {highlighted && (
              <span className="heading-gradient">{highlighted}</span>
            )}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "mt-6 text-lg leading-relaxed text-muted-foreground",
                align === "center" ? "mx-auto max-w-xl" : "max-w-xl"
              )}
            >
              {description}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
