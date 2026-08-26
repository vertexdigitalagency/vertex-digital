"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
    // Return focus to the button that opened the menu, rather than losing
    // it to the top of the document.
    menuTriggerRef.current?.focus();
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="container-vertex">
          <div
            className={cn(
              "flex items-center justify-between rounded-full border px-5 py-3 transition-all duration-500 ease-premium",
              scrolled
                ? "border-white/[0.08] bg-surface/70 shadow-soft backdrop-blur-xl"
                : "border-transparent bg-transparent"
            )}
          >
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-foreground"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-vertex-gradient text-sm font-bold text-white transition-transform duration-500 ease-premium group-hover:rotate-[20deg]">
                V
              </span>
              Vertex
              <span className="text-accent">.</span>
            </Link>

            {/* Desktop links */}
            <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "group relative px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-foreground",
                      isActive ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute inset-x-4 bottom-1.5 h-px origin-left bg-vertex-gradient transition-transform duration-300 ease-premium group-hover:scale-x-100",
                        isActive ? "scale-x-100" : "scale-x-0"
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA + mobile trigger */}
            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <Button href="/contact" variant="primary" className="!px-6 !py-2.5 !text-[13px]">
                  Start a Project
                </Button>
              </div>
              <button
                ref={menuTriggerRef}
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-haspopup="dialog"
                aria-expanded={menuOpen}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground transition-colors hover:bg-white/5 md:hidden"
              >
                <Menu size={19} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
