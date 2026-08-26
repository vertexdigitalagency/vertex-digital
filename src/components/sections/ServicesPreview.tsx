"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function ServicesPreview() {
  return (
    <section id="services" className="section-padding relative">
      <div className="container-vertex">
        <SectionHeading
          eyebrow="What we build"
          title="One team, every discipline your launch needs"
          description="From first pixel to production deploy, Vertex Digital covers the full stack of a modern digital presence."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.title}
                href={service.href}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="card-base group relative overflow-hidden p-7 transition-colors duration-500 hover:border-accent/30"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-all duration-700 group-hover:bg-accent/20" />

                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-vertex-gradient shadow-glow">
                  <Icon size={20} className="text-white" strokeWidth={1.75} aria-hidden="true" />
                </div>

                <h3 className="relative mt-6 font-display text-lg font-semibold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="relative mt-6 flex items-center gap-1.5 text-sm font-medium text-accent2-soft opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  Learn more <ArrowUpRight size={14} aria-hidden="true" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
