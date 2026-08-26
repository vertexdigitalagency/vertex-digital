"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost:
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground",
};

/**
 * Shared CTA button. Renders a <Link> when `href` is provided, otherwise a
 * native <button>. Keeps hover/tap motion identical across the whole site.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", href, className, children, ...props }, ref) => {
    const classes = cn(variantClasses[variant], className);

    if (href) {
      return (
        <motion.div whileTap={{ scale: 0.97 }} className="inline-block">
          <Link
            href={href}
            className={classes}
            {...(props as unknown as Omit<React.ComponentProps<typeof Link>, "href" | "className">)}
          >
            {children}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97 }}
        className={classes}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
