"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function CallToAction() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="container-vertex">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-xl3 border border-white/[0.08] bg-surface px-8 py-20 text-center shadow-soft sm:px-16"
        >
          {/* Animated gradient blobs */}
          <motion.div
            className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-[100px]"
            animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent2/25 blur-[100px]"
            animate={{ x: [0, -30, 0], y: [0, -25, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage:
                "radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 100%)",
            }}
          />

          <div className="relative">
            <span className="eyebrow">Let&rsquo;s build something premium</span>

            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
              Ready to start your project?.
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Book a free strategy call and get a detailed roadmap, timeline, and fixed quote for your project.
              
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" variant="primary">
                Start a Project <ArrowRight size={16} aria-hidden="true" />
              </Button>
              <Button href={`mailto:${SITE.email}`} variant="secondary">
                <Mail size={16} aria-hidden="true" /> {SITE.email}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
