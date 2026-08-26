"use client";

import { useActionState, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { submitContactForm, type ContactFormState } from "@/lib/actions/contact";

const PROJECT_TYPES = [
  "Premium Website",
  "AI-Powered Web App",
  "Custom Software",
  "UI/UX Design",
  "Business Automation",
  "E-Commerce",
  "Something else",
];

const budgetOptions = [
  "Under ₹10,000",
  "₹10,000 - ₹20,000",
  "₹20,000 - ₹50,000",
  "₹50,000+",
  "Not Sure Yet",
];
const PLAN_CONFIG = {
  launch: {
    projectType: "Premium Website",
    budget: "Under ₹10,000",
  },

  growth: {
    projectType: "AI-Powered Web App",
    budget: "₹10,000 - ₹20,000",
  },

  "custom-web-app": {
    projectType: "Custom Software",
    budget: "₹20,000 - ₹50,000",
  },
};

const inputClasses =
  "w-full rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors duration-300 focus:border-accent2 focus:outline-none focus:ring-2 focus:ring-accent2/60 focus:ring-offset-2 focus:ring-offset-background";

const inputErrorClasses = "border-red-400/60 focus:border-red-400 focus:ring-red-400/60";

const labelClasses = "mb-2 block text-xs font-medium uppercase tracking-wide text-muted";

const initialState: ContactFormState = { status: "idle", message: "" };

export default function ContactForm() {

  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get("plan");
  const defaultProjectType =
  PLAN_CONFIG[selectedPlan as keyof typeof PLAN_CONFIG]
    ?.projectType || "";

  const defaultBudget =
  PLAN_CONFIG[selectedPlan as keyof typeof PLAN_CONFIG]
    ?.budget || "";

  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  // Captured once, at first render, so the server action can measure how
  // long the form was open before submission (see MIN_FILL_TIME_MS there).
  const [renderedAt] = useState(() => Date.now());

  const fieldErrors = state.fieldErrors ?? {};

  if (state.status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        role="status"
        aria-live="polite"
        className="card-base flex flex-col items-center gap-4 p-10 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-vertex-gradient shadow-glow">
          <CheckCircle2 size={26} className="text-white" aria-hidden="true" />
        </span>
        <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
          Thanks — your message is in.
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          We reply to every inquiry within one business day. Keep an eye on
          your inbox, including spam just in case.
        </p>
      </motion.div>
    );
  }

  return (
    <form action={formAction} className="card-base space-y-6 p-7 md:p-9" aria-busy={isPending}>
      {/* Honeypot — invisible to real visitors, left empty. Bots that
          autofill every field on a form will fill this in and get quietly
          ignored server-side. Not display:none, since some bots specifically
          skip hidden fields to evade this exact trick. */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="renderedAt" value={renderedAt} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jordan Blake"
            className={cn(inputClasses, fieldErrors.name && inputErrorClasses)}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
          />
          {fieldErrors.name && (
            <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-400">
              {fieldErrors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jordan@company.com"
            className={cn(inputClasses, fieldErrors.email && inputErrorClasses)}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
          {fieldErrors.email && (
            <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-400">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelClasses}>
            Company
          </label>
          <input id="company" name="company" type="text" placeholder="Company name" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="projectType" className={labelClasses}>
            Project type
          </label>
          <div className="relative">
            <select id="projectType" name="projectType" defaultValue={defaultProjectType} className={cn(inputClasses, "appearance-none pr-10")}>
              <option value="" disabled>
                Select one
              </option>
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type} className="bg-surface">
                  {type}
                </option>
              ))}
            </select>
            <ChevronDown
              size={15}
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="budget" className={labelClasses}>
          Estimated budget
        </label>
        <div className="relative">
          <select id="budget" name="budget" defaultValue={defaultBudget} className={cn(inputClasses, "appearance-none pr-10")}>
            <option value="" disabled>
              Select a range
            </option>
            {budgetOptions.map((budget) => (
              <option key={budget} value={budget} className="bg-surface">
                {budget}
              </option>
            ))}
          </select>
          <ChevronDown
            size={15}
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={10}
          placeholder="What are you building, and what does success look like in 90 days?"
          className={cn(inputClasses, "resize-none", fieldErrors.message && inputErrorClasses)}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
        />
        {fieldErrors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-400">
            {fieldErrors.message}
          </p>
        )}
      </div>

      <AnimatePresence>
        {state.status === "error" && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            role="alert"
            className="text-sm text-red-400"
          >
            {state.message}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={isPending}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isPending ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" /> Sending...
          </>
        ) : (
          <>
            Send Message <ArrowRight size={16} aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
