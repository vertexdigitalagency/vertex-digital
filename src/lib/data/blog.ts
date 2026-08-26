import type { BlogPost } from "@/types";

// CONTENT NOTE — the article bodies here are genuinely usable starting
// content, not fabricated claims. Two things to check before launch: (1)
// each `author` matches a name in lib/data/team.ts — update both together if
// you change the team, and (2) `date` values should stay recent/plausible;
// stale-looking dates undercut a blog's credibility more than having fewer
// posts does.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "first-three-seconds",
    title: "Why your website's first three seconds decide everything",
    excerpt:
      "Visitors form an opinion of your business before they've read a single word. Here's what's actually happening in that split second, and how to design for it.",
    category: "Design",
    date: "2026-06-18",
    readTime: "6 min read",
    author: "Priya Anand",
    content: [
      "Most businesses think of their website as a brochure — a place to list services and hope someone reads far enough to call. In practice, a visitor decides whether to trust you within the first few seconds, long before they've absorbed any of your copy. That decision is made almost entirely on visual signals: spacing, typography, load speed, and whether the page feels like it was made with care.",
      "This is why a slow, cluttered homepage costs you more than a bounce. It costs you the benefit of the doubt. A visitor who lands on a page that loads instantly and feels considered will read your headline generously. A visitor who waits three seconds for a hero image to pop in will read the exact same headline skeptically, if they read it at all.",
      "The fix isn't more content, it's more restraint. Cut the page down to the one thing you want a visitor to understand in the first viewport, and let everything else — your services list, your case studies, your team bios — earn its place further down the scroll. Speed and clarity aren't the boring part of design. They're the first impression itself.",
      "We treat this as a hard constraint on every project: if a homepage's core message isn't legible in under three seconds, it gets rebuilt before it ships, not after a client complains about bounce rate.",
    ],
  },
  {
    slug: "real-cost-of-a-slow-website",
    title: "The real cost of a slow website",
    excerpt:
      "A one-second delay sounds trivial until you translate it into lost revenue. We break down what performance actually costs a growing business.",
    category: "Performance",
    date: "2026-05-27",
    readTime: "5 min read",
    author: "Marcus Webb",
    content: [
      "\"A second or two won't matter\" is one of the most expensive assumptions a business can make about its website. Load time doesn't just affect how a page feels — it directly affects whether a visitor sticks around long enough to become a customer. The drop-off between a one-second load and a five-second load isn't gradual, it's steep.",
      "The businesses that take this seriously aren't obsessing over vanity metrics. They're protecting the top of their funnel. Every additional second of load time is a percentage of visitors who never see your pricing, your portfolio, or your contact form, because they left before any of it rendered.",
      "Performance work is also cumulative. Fixing image compression alone rarely solves the problem; it's the combination of lean code, sensible font loading, and a hosting setup that doesn't add unnecessary hops. This is why we audit Core Web Vitals on every build before launch, not as a checkbox, but as a real gate a project has to pass.",
      "The upside is that performance compounds in your favor too — a fast site converts better, ranks better, and costs less to run on ad traffic, since fewer visitors abandon the page before conversion tracking even fires.",
    ],
  },
  {
    slug: "ai-is-an-ingredient-not-a-feature",
    title: "AI isn't a feature. It's an ingredient.",
    excerpt:
      "Bolting a chatbot onto a website isn't the same as building an AI-native product experience. Here's the difference, and why it matters for your roadmap.",
    category: "AI & Software",
    date: "2026-05-09",
    readTime: "7 min read",
    author: "Priya Anand",
    content: [
      "Over the past two years, almost every website has added some version of an AI chat widget in the corner of the screen. Most of them feel exactly like what they are: a generic assistant dropped on top of an existing product, answering questions the FAQ page already answered.",
      "The businesses getting real value from AI are doing something different. They're using it as an ingredient inside a specific workflow — an assistant that reads a property listing and answers a buyer's question about square footage and zoning in context, or a support tool that can actually look up an order status rather than pointing to a help center article.",
      "The distinction matters because it changes how you scope the work. A bolt-on chatbot is a plugin decision. An AI-native feature is a product decision — it needs to understand your data, respect your brand's tone, and fail gracefully when it doesn't know the answer. That's software engineering, not a widget install.",
      "When we scope AI features for clients, the first question is never \"which model should we use.\" It's \"what specific, repetitive task is costing your team time today,\" because that's where AI actually pays for itself.",
    ],
  },
  {
    slug: "how-to-brief-a-web-agency",
    title: "How to brief a web design agency (so you get what you actually want)",
    excerpt:
      "The single biggest predictor of a smooth project isn't budget — it's the quality of the brief. Here's how to write one that gets you a result you love.",
    category: "Working With Us",
    date: "2026-04-22",
    readTime: "6 min read",
    author: "Dana Ilić",
    content: [
      "Most creative briefs describe what a business does, not what the website needs to accomplish. That gap is where projects go sideways — not because the agency lacked skill, but because nobody agreed on what \"good\" looked like before design started.",
      "A useful brief answers a small number of specific questions: who is the visitor arriving with the most urgency (a return customer, a first-time buyer, a partner doing diligence), what's the one action you want them to take, and what would make you personally embarrassed to launch. That last question is more useful than any mood board.",
      "Reference sites help, but only if you say why you like them. \"I like how confident the typography feels\" is actionable. \"I like Stripe's website\" on its own just tells us you have good taste, not what to build.",
      "We start every engagement with a structured discovery call built around exactly these questions, because the brief you bring us shapes the entire project more than the budget does.",
    ],
  },
  {
    slug: "seo-in-2026-what-still-matters",
    title: "SEO in 2026: what still matters",
    excerpt:
      "Search has changed more in the last two years than the decade before it. Here's what's actually still worth your time, and what to stop doing.",
    category: "SEO",
    date: "2026-03-30",
    readTime: "8 min read",
    author: "Marcus Webb",
    content: [
      "With AI-generated answers now sitting above traditional search results for a huge share of queries, a lot of businesses have quietly given up on SEO. That's a mistake — the fundamentals that always mattered, matter more now, not less, because there's simply less low-quality content left to compete with.",
      "Technical basics remain non-negotiable: fast load times, clean semantic markup, and a site structure that clearly tells search engines and AI crawlers what a page is actually about. Sites that skip this are invisible regardless of how good the writing is.",
      "What's changed is the content layer. Generic, keyword-stuffed articles rank worse than they did five years ago, while specific, well-sourced, opinionated content performs better — both with traditional rankings and with AI answer engines that need to cite something concrete.",
      "Our approach for clients is to treat SEO as an outcome of doing the fundamentals well, not a separate workstream bolted on after launch. A fast, clearly structured site with genuinely useful content will out-rank a site that treats SEO as a checklist.",
    ],
  },
  {
    slug: "design-systems-for-small-teams",
    title: "Design systems aren't just for big companies",
    excerpt:
      "You don't need a 200-person product org to benefit from a design system. Here's a lightweight version any growing business can use.",
    category: "Design",
    date: "2026-03-11",
    readTime: "5 min read",
    author: "Dana Ilić",
    content: [
      "\"Design system\" tends to conjure images of enterprise component libraries with dozens of contributors. But the core idea — a small, consistent set of rules for color, type, spacing, and components — pays off for a five-page marketing site just as much as it does for a product with fifty screens.",
      "Without one, every new page becomes a fresh set of decisions: a slightly different shade of blue here, an inconsistent button radius there. Individually, none of it looks broken. Together, it reads as unpolished, and visitors notice that even if they can't articulate why.",
      "A lightweight system for a small team can be as simple as a documented color and type scale, a handful of reusable components, and clear rules for spacing. That's often enough to keep a site feeling coherent as it grows past its original scope.",
      "Every project we ship starts with exactly this kind of token system, defined before a single page is designed, so the fifteenth page still feels like it belongs to the same brand as the first.",
    ],
  },
];
