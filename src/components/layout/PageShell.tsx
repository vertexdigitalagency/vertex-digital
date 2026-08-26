import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface PageShellProps {
  children: ReactNode;
}

/**
 * Every interior page (About, Services, Portfolio, etc.) composes this
 * exact same Navbar + Footer pairing the homepage uses in `app/page.tsx`,
 * so navigation chrome never drifts between pages.
 */
export default function PageShell({ children }: PageShellProps) {
  return (
    <>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
