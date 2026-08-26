"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

/**
 * A stylized browser-chrome card containing an abstract "modern website"
 * preview. Tilts in 3D toward the cursor for a tactile, premium feel;
 * settles back to neutral with a spring when the pointer leaves.
 */
export default function BrowserMockup() {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    springConfig
  );

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1600 }}
      aria-hidden="true"
      className="relative mx-auto w-full max-w-2xl"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="animate-float rounded-2xl border border-white/[0.08] bg-surface-raised shadow-glow"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 rounded-t-2xl border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="mx-auto flex items-center gap-1.5 rounded-full bg-white/[0.04] px-3 py-1 text-[11px] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent2-soft" />
            vertexdigital.co
          </div>
        </div>

        {/* Abstract site preview */}
        <div className="space-y-5 p-6 md:p-8" style={{ transform: "translateZ(30px)" }}>
          {/* mini nav */}
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-20 rounded-full bg-white/15" />
            <div className="flex gap-3">
              <div className="h-2 w-10 rounded-full bg-white/10" />
              <div className="h-2 w-10 rounded-full bg-white/10" />
              <div className="h-2 w-10 rounded-full bg-white/10" />
            </div>
          </div>

          {/* mini hero */}
          <div className="space-y-3 pt-4">
            <div className="h-4 w-3/4 rounded-full bg-gradient-to-r from-white/40 to-white/10" />
            <div className="h-4 w-1/2 rounded-full bg-vertex-gradient opacity-90" />
            <div className="h-2 w-2/3 rounded-full bg-white/10" />
          </div>

          <div className="flex gap-3 pt-2">
            <div className="flex items-center gap-1.5 rounded-full bg-vertex-gradient px-4 py-2 text-[11px] font-semibold text-white">
              <Sparkles size={11} /> Get Started
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-[11px] font-medium text-foreground/80">
              Learn more <ArrowUpRight size={11} />
            </div>
          </div>

          {/* mini cards grid */}
          <div className="grid grid-cols-3 gap-3 pt-5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="space-y-2 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3"
              >
                <div className="h-5 w-5 rounded-md bg-vertex-gradient opacity-80" />
                <div className="h-1.5 w-full rounded-full bg-white/10" />
                <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating status chips */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="animate-float absolute -left-6 top-10 hidden items-center gap-2 rounded-xl border border-white/10 bg-surface/90 px-3.5 py-2.5 shadow-soft backdrop-blur-xl md:flex"
        style={{ animationDelay: "0.4s" }}
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="text-xs font-medium text-foreground/90">AI-Powered</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        className="animate-float absolute -right-4 bottom-16 hidden items-center gap-2 rounded-xl border border-white/10 bg-surface/90 px-3.5 py-2.5 shadow-soft backdrop-blur-xl md:flex"
        style={{ animationDelay: "1.2s" }}
      >
        <span className="font-mono text-xs font-medium text-accent2-soft">98</span>
        <span className="text-xs text-muted">Performance</span>
      </motion.div>
    </motion.div>
  );
}
