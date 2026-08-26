import type { Metadata } from "next";

// Falls back to the production domain when NEXT_PUBLIC_SITE_URL isn't set,
// so staging/preview deployments (e.g. a Vercel preview URL) can override it
// without any code changes. Used here and by sitemap.ts / robots.ts /
// layout.tsx, so it only needs to be correct in one place.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://vertexdigital.co"
).replace(/\/+$/, "");
export const SITE_NAME = "Vertex Digital";

interface PageMetadataOptions {
  /** Bare page title, e.g. "About" — the root layout's title template
   *  automatically appends " — Vertex Digital" for the <title> tag. */
  title: string;
  description: string;
  /** Root-relative path, e.g. "/about". */
  path: string;
  keywords?: string[];
}

/**
 * Builds full per-page metadata: title, description, keywords, a canonical
 * URL, and complete Open Graph / Twitter Card objects. Next.js metadata
 * merging replaces `openGraph`/`twitter` wholesale rather than merging
 * individual fields, so every page constructs a complete object here
 * instead of relying on partial inheritance from the root layout.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} — ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

interface ArticleMetadataOptions extends PageMetadataOptions {
  publishedTime: string;
  author: string;
}

/** Same as `pageMetadata`, plus the `article`-specific Open Graph fields
 *  used by the blog post detail route. */
export function articleMetadata({
  title,
  description,
  path,
  keywords,
  publishedTime,
  author,
}: ArticleMetadataOptions): Metadata {
  const fullTitle = `${title} — ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "article",
      publishedTime,
      authors: [author],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
