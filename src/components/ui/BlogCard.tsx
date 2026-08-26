"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  index: number;
  featured?: boolean;
}

export default function BlogCard({ post, index, featured }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={cardClasses(featured)}
      >
        <div className="flex items-center gap-3 text-xs">
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono uppercase tracking-wide text-accent2-soft">
            {post.category}
          </span>
          <span className="text-muted">{formatDate(post.date)}</span>
          <span className="text-muted">·</span>
          <span className="text-muted">{post.readTime}</span>
        </div>

        <h3
          className={
            featured
              ? "mt-5 font-display text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-3xl"
              : "mt-5 font-display text-lg font-semibold leading-snug tracking-tight text-foreground"
          }
        >
          {post.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-accent2-soft opacity-90 transition-transform duration-300 group-hover:translate-x-1">
          Read article <ArrowUpRight size={14} aria-hidden="true" />
        </div>
      </Link>
    </motion.div>
  );
}

function cardClasses(featured?: boolean) {
  return [
    "card-base group relative flex h-full flex-col overflow-hidden p-7 transition-colors duration-500 hover:border-accent/30",
    featured ? "md:p-10" : "",
  ].join(" ");
}
