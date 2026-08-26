"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import Button from "@/components/ui/Button";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // In production, forward this to an error-tracking service (Sentry,
    // etc.) instead of just logging it.
    console.error("Route error boundary caught:", error);
  }, [error]);

  return (
    <PageShell>
      <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden pt-[var(--header-height)]">
        <div className="absolute inset-0 bg-vertex-radial" />

        <div className="container-vertex relative text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
            <AlertTriangle size={24} className="text-accent-soft" aria-hidden="true" />
          </span>
          <p className="eyebrow mb-5 mt-6">Something went wrong</p>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            This page hit a snag
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            That&apos;s on us, not you. Try again, or head back to the homepage —
            the rest of the site is unaffected.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              onClick={() => reset()}
              variant="primary"
              type="button"
            >
              <RotateCcw size={16} aria-hidden="true" /> Try again
            </Button>
            <Button href="/" variant="secondary">
              Back to homepage
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
