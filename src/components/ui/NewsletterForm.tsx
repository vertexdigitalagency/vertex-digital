"use client";

import { useActionState } from "react";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { subscribeToNewsletter, type NewsletterFormState } from "@/lib/actions/newsletter";

const initialState: NewsletterFormState = { status: "idle", message: "" };

export default function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(subscribeToNewsletter, initialState);

  if (state.status === "success") {
    return (
      <p
        role="status"
        aria-live="polite"
        className="mt-7 flex items-center gap-2 text-sm text-muted-foreground"
      >
        <CheckCircle2 size={15} className="shrink-0 text-emerald-400" aria-hidden="true" />
        {state.message}
      </p>
    );
  }

  return (
    <form action={formAction} className="mt-7">
      <label htmlFor="footer-newsletter-email" className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted">
        Get occasional updates
      </label>
      <div className="flex gap-2">
        <input
          id="footer-newsletter-email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="w-full min-w-0 rounded-lg border border-white/10 bg-white/[0.02] px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted transition-colors duration-300 focus:border-accent2 focus:outline-none focus:ring-2 focus:ring-accent2/60 focus:ring-offset-2 focus:ring-offset-background"
        />
        <button
          type="submit"
          disabled={isPending}
          aria-label="Subscribe"
          className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-lg bg-vertex-gradient text-white transition-transform duration-300 ease-premium hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? (
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
          ) : (
            <ArrowRight size={16} aria-hidden="true" />
          )}
        </button>
      </div>
      {state.status === "error" && (
        <p role="alert" className="mt-2 text-xs text-red-400">
          {state.message}
        </p>
      )}
    </form>
  );
}
