import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import CallToAction from "@/components/sections/CallToAction";
import { BLOG_POSTS } from "@/lib/data/blog";
import { formatDate } from "@/lib/utils";
import { articleMetadata, SITE_URL, SITE_NAME } from "@/lib/seo";
import type { BlogPost } from "@/types";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post not found", robots: { index: false, follow: false } };
  }

  return articleMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.category, "Vertex Digital blog"],
    publishedTime: post.date,
    author: post.author,
  });
}

// BlogPosting structured data (JSON-LD) for rich-result eligibility.
function blogPostingStructuredData(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <PageShell>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingStructuredData(post)) }}
      />
      <article className="relative overflow-hidden pt-[calc(var(--header-height)+2.5rem)] pb-20 md:pb-28">
        <div className="absolute inset-0 bg-vertex-radial" />

        <div className="container-vertex relative max-w-2xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} aria-hidden="true" /> Back to blog
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono uppercase tracking-wide text-accent2-soft">
              {post.category}
            </span>
            <span className="text-muted">{formatDate(post.date)}</span>
            <span className="text-muted" aria-hidden="true">
              ·
            </span>
            <span className="text-muted">{post.readTime}</span>
          </div>

          <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {post.title}
          </h1>

          <p className="mt-5 text-sm text-muted">
            By <span className="text-foreground/80">{post.author}</span>
          </p>

          <div className="mt-10 space-y-6 border-t border-white/[0.06] pt-10">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      <CallToAction />
    </PageShell>
  );
}
