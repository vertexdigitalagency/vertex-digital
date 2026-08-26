"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PortfolioItem } from "@/types";
import { PORTFOLIO_FILTERS } from "@/lib/data/portfolio";

interface PortfolioGridProps {
  items: PortfolioItem[];
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter((item) => item.category === activeFilter);
  }, [items, activeFilter]);

  return (
    <div>
      {/* Filter pills */}
      <div
        role="group"
        aria-label="Filter case studies by category"
        className="mb-12 flex flex-wrap justify-center gap-2.5"
      >
        {PORTFOLIO_FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ease-premium sm:text-sm",
              activeFilter === filter
                ? "border-transparent bg-vertex-gradient text-white shadow-glow"
                : "border-white/10 text-muted-foreground hover:border-white/25 hover:text-foreground"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Case study grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filtered.map((item, i) => (
          <motion.article
            key={item.slug}
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="card-base group relative flex flex-col overflow-hidden p-8 transition-colors duration-500 hover:border-accent/30"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-accent2-soft">
                {item.category}
              </span>
              <span className="text-xs text-muted">{item.industry}</span>
            </div>

            <h3 className="mt-6 font-display text-xl font-semibold leading-snug tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="mt-1.5 text-sm font-medium text-accent-soft">{item.client}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {item.summary}
            </p>

            <div className="mt-6 flex items-start gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
              <ArrowUpRight size={16} className="mt-0.5 shrink-0 text-accent2-soft" aria-hidden="true" />
              <p className="text-sm font-medium text-foreground/90">{item.result}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/[0.04] px-3 py-1 text-[11px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-muted">
          No case studies in this category yet — check back soon.
        </p>
      )}
    </div>
  );
}
