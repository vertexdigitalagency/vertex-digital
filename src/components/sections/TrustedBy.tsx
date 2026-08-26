"use client";

import { motion } from "framer-motion";
import { CLIENT_LOGOS } from "@/lib/constants";

export default function TrustedBy() {
  // Duplicate the list once so the marquee can loop seamlessly at -50%.
  const loopLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section id="trusted-by" className="relative border-y border-white/[0.05] bg-surface/30 py-14">
      <div className="container-vertex">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-9 text-center font-mono text-xs uppercase tracking-[0.25em] text-muted"
        >
          Trusted by teams building what&rsquo;s next
        </motion.p>
      </div>

      <div
        className="relative w-full overflow-hidden"
        aria-hidden="true"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-16 hover:[animation-play-state:paused]">
          {loopLogos.map((logo, i) => (
            <span
              key={`${logo.name}-${i}`}
              className="font-display text-xl font-semibold tracking-tight text-white/25 transition-colors duration-300 hover:text-white/60"
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
      <span className="sr-only">
        {CLIENT_LOGOS.map((logo) => logo.name).join(", ")}
      </span>
    </section>
  );
}
