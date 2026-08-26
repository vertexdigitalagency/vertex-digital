import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { SITE, SOCIAL_LINKS, FOOTER_LINKS } from "@/lib/constants";
import NewsletterForm from "@/components/ui/NewsletterForm";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-surface/20">
      <div className="container-vertex py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-foreground"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-vertex-gradient text-sm font-bold text-white">
                V
              </span>
              Vertex<span className="text-accent">.</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE.tagline}
            </p>

            <div className="mt-7 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={`${social.label} (opens in a new tab)`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all duration-300 hover:border-accent/40 hover:text-foreground"
                  >
                    <Icon size={15} aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            <NewsletterForm />
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Contact
            </h4>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail size={14} className="shrink-0 text-accent2-soft" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone size={14} className="shrink-0 text-accent2-soft" aria-hidden="true" />
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <MapPin size={14} className="shrink-0 text-accent2-soft" aria-hidden="true" />
                {SITE.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {year} Vertex Digital. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
