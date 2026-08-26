import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/ui/PageHero";
import BlogCard from "@/components/ui/BlogCard";
import CallToAction from "@/components/sections/CallToAction";
import { BLOG_POSTS } from "@/lib/data/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Ideas on design, performance, SEO, and AI-powered software from the Vertex Digital team.",
  path: "/blog",
  keywords: ["web design blog", "performance tips", "SEO tips", "AI software insights"],
});

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <PageShell>
      <PageHero
        eyebrow="Insights"
        title="Ideas on design, performance, and growth"
        highlightWords={2}
        description="Notes from projects we've shipped — what worked, what didn't, and what we'd tell a friend starting from scratch."
      />

      <section className="section-padding pt-0">
        <div className="container-vertex">
          {featured && (
            <div className="mb-10">
              <BlogCard post={featured} index={0} featured />
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </PageShell>
  );
}
