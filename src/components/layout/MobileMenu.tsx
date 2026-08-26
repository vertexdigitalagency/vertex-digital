"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const menuVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25, delay: 0.1 } },
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape, and move focus to the close button as soon as the
  // panel opens — standard expected behavior for a modal-style menu.
  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-40 flex flex-col bg-background/98 backdrop-blur-2xl md:hidden"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-display text-lg font-semibold tracking-tight">
              Vertex<span className="text-accent">.</span>
            </span>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-full border border-white/10 p-2.5 text-foreground transition-colors hover:bg-white/5"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <motion.nav
            aria-label="Mobile"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-1 flex-col items-start justify-center gap-2 px-8"
          >
            {NAV_LINKS.map((link) => (
              <motion.div key={link.href} variants={itemVariants} className="overflow-hidden">
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="font-display text-4xl font-medium tracking-tight text-foreground/90 transition-colors hover:text-accent-soft"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="mt-8">
              <Button href="/contact" variant="primary" onClick={onClose}>
                Start a Project
              </Button>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
