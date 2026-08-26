"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import MouseGlow from "@/components/ui/MouseGlow";
import VertexMesh from "@/components/ui/VertexMesh";
import BrowserMockup from "@/components/ui/BrowserMockup";

const headline = "Digital experiences built to feel inevitable.";

const lineVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const wordVariants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const words = headline.split(" ");

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-background pt-[var(--header-height)]">
      {/* Layered background: radial glow + faint grid + vertex mesh */}
      <div className="absolute inset-0 bg-vertex-radial" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
      />
      <VertexMesh className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 opacity-70 md:opacity-100" />
      <MouseGlow className="hidden md:block" />

      <div className="container-vertex relative grid gap-16 py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10">
        {/* Copy column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent2 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent2" />
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              Now booking Q3 project slots
            </span>
          </motion.div>

          <motion.h1
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4rem]"
          >
            {words.map((word, i) => (
              <span key={i} className="mr-[0.28em] inline-block overflow-hidden align-bottom">
                <motion.span
                  variants={wordVariants}
                  className={
                    i >= words.length - 2
                      ? "heading-gradient inline-block"
                      : "inline-block"
                  }
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            Vertex Digital designs and engineers premium websites, AI-powered
            applications, and custom software for businesses that want to
            look, feel, and perform like the market leader.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button href="#contact" variant="primary">
              Start a Project <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button href="/portfolio" variant="secondary">
              <PlayCircle size={16} aria-hidden="true" /> See Our Work
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-14 flex items-center gap-6 text-xs text-muted"
          >
            <span className="font-mono">40+ launches shipped</span>
            <span className="h-1 w-1 rounded-full bg-muted" />
            <span className="font-mono">4.9/5 average client rating</span>
          </motion.div>
        </div>

        {/* Visual column */}
        <BrowserMockup />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        aria-hidden="true"
        className="absolute inset-x-0 bottom-8 hidden flex-col items-center gap-2 md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
