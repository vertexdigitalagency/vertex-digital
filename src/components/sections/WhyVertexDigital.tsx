"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/lib/constants";

const stats = [
  { value: "40+", label: "Launches shipped" },
  { value: "98", label: "Avg. Lighthouse score" },
  { value: "6", label: "Industries served" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function WhyVertexDigital() {
  return (
    <section id="why-vertex" className="section-padding relative bg-surface/20">
      <div className="container-vertex grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        {/* Left: narrative + stats */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-4"
          >
            Why Vertex Digital
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-4xl"
          >
            Agencies promise polish.
            <br />
            We engineer it.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground"
          >
            Most sites lose visitors before they load. We treat performance,
            design, and code as one discipline — so what you launch with is
            what your customers actually experience.
          </motion.p>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/[0.06] pt-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs leading-snug text-muted">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: feature cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -4 }}
                className="card-base p-6 transition-colors duration-500 hover:border-accent2/30"
              >
                <Icon size={22} strokeWidth={1.6} className="text-accent2-soft" aria-hidden="true" />
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
