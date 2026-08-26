# Vertex Digital

The official marketing website for **Vertex Digital**, a premium digital
solutions studio — built with Next.js 15, fully backed by real (optional)
production infrastructure for its contact/newsletter forms, and ready to
deploy as soon as the environment variables below are configured.

This README is the single source of truth for setup, architecture, content
replacement, and deployment. Read "Before you launch" at the bottom before
going live.

---

## 1. Overview

Vertex Digital's site covers the full site an agency needs to acquire
clients: a homepage, service catalog, portfolio, pricing, process, FAQ,
blog, and a working contact form with spam protection, storage, and email
notifications. It's built to run with **zero configuration** for local
development (everything gracefully falls back to file storage and
console-logged email) and to become fully production-grade the moment real
credentials are added — no code changes required either way.

## 2. Project status

- ✅ **Milestone 1** — project setup, design system, homepage
- ✅ **Milestone 2** — About, Services, Portfolio, Pricing, Process, FAQ, Contact, Blog
- ✅ **Milestone 3** — working contact form, SEO, performance, accessibility pass
- ✅ **Milestone 4 (current, final)** — production backend architecture (database +
  email + rate limiting), newsletter capture, Privacy/Terms pages, analytics
  architecture, and full deployment readiness

See "Milestone history" near the bottom for what each milestone added.

## 3. Technology stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS 3, `@tailwindcss/typography` for long-form legal content |
| Animation | Framer Motion (UI), GSAP (background mesh), Lenis (smooth scroll) |
| Forms | React 19 `useActionState` + Next.js Server Actions |
| Validation | Zod |
| Database | Postgres via the `pg` driver (raw parameterized SQL, no ORM codegen step) — falls back to local JSONL file storage in development |
| Email | Resend, called via plain `fetch` (no SDK dependency) — falls back to console logging in development |
| Rate limiting | Upstash Redis REST API — falls back to an in-memory limiter in development |
| Analytics | Google Analytics 4 and/or Plausible, both optional and env-gated |
| Icons | Lucide |

Every "falls back to X in development" above means the same thing: **the
site is fully functional right now, with zero environment variables set.**
Each backend piece upgrades independently as its credentials are added.

## 4. Features

- 12 pages: Home, About, Services, Portfolio, Pricing, Process, FAQ,
  Contact, Blog (+ dynamic post routes), Privacy, Terms, plus a styled 404
- Working contact form: client + server validation, honeypot + time-trap +
  rate-limit spam protection, structured storage, and both an internal lead
  notification email and a client confirmation email
- Newsletter signup in the footer, on the same backend infrastructure
- Full SEO: per-page metadata, Open Graph + Twitter Card previews
  (generated at build time, no image assets to manage), JSON-LD structured
  data (FAQPage, BlogPosting), sitemap.xml, robots.txt, canonical URLs
- Accessibility: skip-to-content link, full keyboard navigation, screen
  reader-friendly forms and mobile menu, reduced-motion support, WCAG-minded
  contrast and focus states
- Performance: route + root error boundaries, loading skeletons, code
  splitting on below-the-fold interactive components
- Analytics-ready (GA4 / Plausible), both fully optional

## 5. Quick start (local development)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). That's it — no
environment variables are required to run the site or exercise the contact
form locally. Submissions land in `data/submissions.jsonl` and both emails
are logged to your terminal instead of sent.

```bash
npm run build       # production build
npm run start        # serve the production build
npm run lint          # ESLint
npm run type-check     # tsc --noEmit
```

## 6. Environment variables

Copy `.env.example` to `.env.local` and fill in whichever sections apply.
**Every variable is optional** — the site works with none of them set, and
each one upgrades a specific piece of infrastructure independently.

| Variable | Required for | Default behavior if unset |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Correct canonical/OG/sitemap URLs | Falls back to `https://vertexdigital.co` |
| `DATABASE_URL` | Persisting leads/subscribers in production | Falls back to local file `data/submissions.jsonl` |
| `DATABASE_SSL_REJECT_UNAUTHORIZED` | Self-signed Postgres certs only | SSL cert verification stays on |
| `RESEND_API_KEY` + `EMAIL_FROM` | Actually sending emails | Emails are logged to the console, not sent |
| `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` | Shared rate limiting across instances | Falls back to a single-instance in-memory limiter |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 | No GA script loads |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible Analytics | No Plausible script loads |

## 7. Database setup (production persistence)

Contact and newsletter submissions are stored through one interface
(`SubmissionStore` in `src/lib/db/store.ts`) with two implementations:

- **`FileSubmissionStore`** (`src/lib/db/file-store.ts`) — appends JSON lines
  to `data/submissions.jsonl`. Used automatically when `DATABASE_URL` is
  unset. Fine for local development; **not suitable for most serverless
  hosts**, which have an ephemeral or read-only filesystem outside `/tmp`.
- **`PostgresSubmissionStore`** (`src/lib/db/postgres-store.ts`) — real
  production storage via the `pg` driver and parameterized SQL. Used
  automatically the moment `DATABASE_URL` is set.

To go to production:

1. Provision a Postgres database — [Supabase](https://supabase.com),
   [Neon](https://neon.tech), [Railway](https://railway.app), or any
   standard Postgres host all work.
2. Apply the schema once: `psql "$DATABASE_URL" -f db/schema.sql`
   (creates one `submissions` table with a `type`/`status`/`payload jsonb`
   shape — see the file for the exact columns/indexes).
3. Set `DATABASE_URL` in your deployment environment.

No code changes are needed — the store factory in `src/lib/db/index.ts`
switches implementations automatically based on whether `DATABASE_URL` is
present.

## 8. Email setup (Resend)

1. Create an account at [resend.com](https://resend.com).
2. Verify a sending domain (Resend walks you through the DNS records).
3. Create an API key.
4. Set `RESEND_API_KEY` and `EMAIL_FROM` (must be an address on your
   verified domain, e.g. `Vertex Digital <hello@your-domain.com>`).

Once set, every valid contact form submission sends two emails: an internal
notification to `SITE.email` (in `src/lib/constants.ts`) with a `Reply-To`
set to the lead's address, and a branded confirmation to the person who
submitted the form. Both are sent in parallel via `Promise.allSettled` — if
one fails, the other and the already-stored lead are unaffected (see
`src/lib/actions/contact.ts`). Templates live in `src/lib/email/templates.ts`.

## 9. Rate limiting setup (Upstash, optional but recommended)

The in-memory rate limiter (`src/lib/rate-limit/memory-limiter.ts`) works
correctly on a single always-on server, but **does not share state across
multiple serverless instances** — on a host like Vercel, each concurrent
instance has its own counter, meaningfully weakening the limit.

To fix this before launch:

1. Create a free database at [upstash.com](https://upstash.com) (Redis).
2. Copy its REST URL and token.
3. Set `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`.

The factory in `src/lib/rate-limit/index.ts` switches automatically — no
code changes needed.

## 10. Analytics setup (optional)

Set either or both:

- **Google Analytics 4** — create a GA4 property, copy its Measurement ID
  (`G-XXXXXXXXXX`) into `NEXT_PUBLIC_GA_MEASUREMENT_ID`. IP anonymization is
  enabled by default in `src/components/analytics/Analytics.tsx`.
- **Plausible** — a privacy-friendly alternative that doesn't use cookies;
  set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` to your domain.

Neither script loads (zero extra network requests) unless its variable is
set, so there's no performance or privacy cost to leaving analytics
unconfigured.

## 11. Project architecture

```
src/
  app/                     Next.js App Router — one folder per route
    page.tsx                 Homepage
    about/ services/ portfolio/ pricing/ process/ faq/ contact/ blog/
      privacy/ terms/          One page.tsx each
    blog/[slug]/                Dynamic blog post route + its own loading.tsx
    layout.tsx                Root layout — fonts, metadata, skip link, Analytics
    error.tsx / global-error.tsx    Error boundaries
    loading.tsx                Generic route loading skeleton
    not-found.tsx                Styled 404
    robots.ts / sitemap.ts        Generated robots.txt / sitemap.xml
    icon.tsx / apple-icon.tsx / opengraph-image.tsx / twitter-image.tsx
                                    Branded favicon + social images (next/og)
  components/
    layout/                   Navbar, MobileMenu, Footer, PageShell, SmoothScrollProvider
    sections/                 Homepage-specific sections (Hero, TrustedBy, etc.)
    ui/                       Shared, reusable components (Button, cards, forms, etc.)
    analytics/                 Analytics.tsx (GA4 / Plausible loader)
  lib/
    constants.ts              Site-wide content: nav, services, footer, social links
    seo.ts                      pageMetadata() / articleMetadata() helpers + SITE_URL
    brand-og.tsx                  Shared visuals for favicon/OG image generation
    utils.ts                    cn() class helper + formatDate()
    data/                      Page content: portfolio, team, pricing, blog, etc.
    validation/                Zod schemas (contact, newsletter)
    actions/                   Server Actions (contact, newsletter)
    db/                        Submission storage: interface + file/Postgres implementations
    email/                     Email sending: interface + Resend/console implementations + templates
    rate-limit/                Rate limiting: interface + in-memory/Upstash implementations
  types/
    index.ts                  Shared TypeScript interfaces
db/
  schema.sql                 Postgres schema — apply once before setting DATABASE_URL
```

Every backend concern (database, email, rate limiting) follows the same
pattern: an **interface**, a **local/development implementation**, a
**production implementation**, and a **factory** that picks between them
based on environment variables. This is deliberate — it means you can read
`src/lib/db/store.ts`, `src/lib/email/provider.ts`, or
`src/lib/rate-limit/limiter.ts` to understand the whole contract in about
ten lines, regardless of which implementation is active.

## 12. Replacing placeholder content

Nothing on this site claims a real client relationship or certification
that hasn't been established — but several sections use **clearly-marked
placeholder content** written to demonstrate layout and tone. Each file
below has a header comment explaining exactly what to do:

| Content | File | Notes |
| --- | --- | --- |
| Team members | `src/lib/data/team.ts` | Fictional bios; currently renders initials avatars, not photos |
| Case studies | `src/lib/data/portfolio.ts` | Fictional client names/results |
| Testimonials | `src/lib/data/testimonials.ts` | **Read this file's header before touching it** — fictional quotes attributed to fictional people; never publish an invented quote against a real name |
| "Trusted by" logos | `src/lib/constants.ts` (`CLIENT_LOGOS`) | Fictional company names, rendered as text wordmarks |
| Contact details | `src/lib/constants.ts` (`SITE`) | Placeholder phone/address |
| Blog posts | `src/lib/data/blog.ts` | Genuinely usable content; just keep author names in sync with `team.ts` and dates current |
| Pricing, process, FAQ, services | `src/lib/data/*.ts` | Realistic starting content — review numbers/copy for your actual business |
| Legal pages | `src/app/privacy/page.tsx`, `src/app/terms/page.tsx` | Explicitly marked for legal review — see the notice at the top of each page |

## 13. Verification performed in this environment

This project was built and verified in a sandboxed environment **without
network access**, so `npm install` and a real `next build` could not be run
here. Everything below distinguishes what was actually checked from what
still needs a real install:

### ✅ Verified in sandbox
- Full syntax-level TypeScript/JSX parse check across every `.ts`/`.tsx`
  file (0 errors)
- A full `tsc --noEmit` type-check against this project's own `tsconfig.json`
  (`strict: true`, `noUncheckedIndexedAccess: true`). The only remaining
  diagnostics are confirmed artifacts of `node_modules` not being installed
  in this sandbox — every package they reference is already correctly
  declared in `package.json`. Two genuine bugs were found this way over the
  project's history (an unchecked array index in `VertexMesh.tsx` in
  Milestone 3, and are documented in that milestone's notes) and fixed —
  they were not filtered out.
- Every `@/...` import resolves to a real file; every named/default export
  matches how it's imported
- Every internal link (`Navbar`, `Footer`, `Hero`, pricing cards, service
  cards) resolves to a route that actually exists
- Code-level responsive/accessibility review (Tailwind breakpoint classes,
  ARIA attributes, focus management, semantic HTML)

### ⚠️ Must be verified locally, after `npm install`
- `npm run build` — a real production build has not been run in this
  environment
- `npm run lint` — ESLint has not been run in this environment (its config
  is in place, but the linter itself isn't installed here)
- Actual database connectivity (`PostgresSubmissionStore` is complete,
  parameterized, and follows the `pg` driver's documented API, but has not
  connected to a live database in this environment)
- Actual email delivery (`ResendEmailProvider` targets Resend's documented
  REST API and has not sent a real request in this environment)
- Actual Upstash rate-limit behavior in a live multi-instance deployment
- Real-browser visual/responsive QA across actual devices and viewports
- Screen reader testing with real assistive technology (VoiceOver, NVDA, etc.)

Run these before considering the site launch-ready:

```bash
npm install
npm run type-check
npm run lint
npm run build
```

## 14. Deployment (Vercel-oriented, works on any Next.js host)

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import it into [Vercel](https://vercel.com) (or your host of choice).
3. Set the environment variables from section 6 in your host's dashboard —
   at minimum `NEXT_PUBLIC_SITE_URL`; add `DATABASE_URL` and
   `RESEND_API_KEY`/`EMAIL_FROM` before real users submit the contact form.
4. Deploy. Build command `next build`, output is Next.js's standard
   `.next` directory — no custom build configuration is needed.
5. Point your domain's DNS at your host following their standard custom
   domain instructions (e.g. Vercel: Project > Settings > Domains).
6. Re-run `npm run build` locally first if you want to catch build errors
   before they surface in a deploy.

### Post-deployment checklist

- [ ] Visit the live site and submit a real test contact form entry
- [ ] Confirm the lead appears in your database (`select * from submissions;`)
- [ ] Confirm both the internal notification and client confirmation emails arrived
- [ ] Visit `/sitemap.xml` and `/robots.txt` on the live domain and confirm
      they show your real domain (via `NEXT_PUBLIC_SITE_URL`)
- [ ] Submit the newsletter form and confirm the same
- [ ] Check Search Console (or equivalent) sitemap submission
- [ ] Confirm analytics events are arriving, if configured

## 15. Troubleshooting

**Contact form always shows a generic error.** Check your server logs —
real error details are intentionally never sent to the browser (see
`src/lib/actions/contact.ts`), only logged server-side with a `[contact]`
prefix.

**Emails aren't arriving in production.** Confirm `RESEND_API_KEY` and
`EMAIL_FROM` are set in your host's environment variables (not just
`.env.local`, which isn't deployed), and that `EMAIL_FROM`'s domain is
verified in your Resend dashboard.

**Submissions aren't showing up after deploying.** Almost always means
`DATABASE_URL` isn't set — the app is silently falling back to
`data/submissions.jsonl`, which likely doesn't persist on your host. Check
your deploy logs for the `[db] DATABASE_URL is not set` warning.

**Rate limiting seems inconsistent.** Expected if `UPSTASH_REDIS_REST_URL`/
`UPSTASH_REDIS_REST_TOKEN` aren't set on a multi-instance host — each
instance has its own in-memory counter. Configure Upstash (section 9).

**TypeScript errors after `npm install` that weren't mentioned here.**
Run `npm run type-check` and compare against this README's "Verified in
sandbox" section — if it's a new category of error not listed there, it's
worth investigating; if it matches one of the filtered categories (missing
node_modules noise), it should already be resolved once `npm install`
completes successfully.

## 16. Before you launch

- [ ] Replace all placeholder content (section 12) — especially testimonials
- [ ] Have Privacy Policy and Terms of Service reviewed by legal counsel
- [ ] Set `DATABASE_URL`, apply `db/schema.sql`, confirm a test submission persists
- [ ] Set `RESEND_API_KEY` / `EMAIL_FROM`, confirm both emails arrive
- [ ] Set `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` if deploying
      to a multi-instance/serverless host
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your real domain
- [ ] Run `npm run build` locally and fix anything it surfaces
- [ ] Run `npm run lint`
- [ ] Test the site with a keyboard only, and with a screen reader if possible
- [ ] Test on a real phone, not just a resized browser window
- [ ] Configure analytics, if desired
- [ ] Submit the sitemap to Google Search Console

## 17. Milestone history

- **Milestone 1** — Next.js project setup, Tailwind design system (dark
  theme, brand gradient, typography), homepage (Hero, Trusted By, Services
  preview, Why Vertex Digital, CTA), responsive navbar/footer.
- **Milestone 2** — About, Services, Portfolio, Pricing, Process, FAQ,
  Contact, and Blog pages built on the Milestone 1 design system; shared
  `PageHero`/`PageShell` primitives introduced.
- **Milestone 3** — the contact form's first working backend (Server
  Action, Zod validation, honeypot + time-trap spam protection, local
  JSONL storage), full SEO (metadata, sitemap, robots, OG/Twitter images,
  structured data), performance work (error boundaries, loading skeletons,
  dynamic imports), and a full accessibility pass.
- **Milestone 4 (this one)** — production-grade backend architecture: real
  Postgres storage and Resend email behind clean interfaces (with automatic
  local-development fallbacks), Upstash-backed rate limiting, a newsletter
  signup, Privacy/Terms pages, configurable site URL and analytics
  architecture, and full deployment documentation. This is the final
  planned development milestone.
