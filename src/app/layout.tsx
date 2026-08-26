import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import Analytics from "@/components/analytics/Analytics";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

// Display face: characterful, geometric, used only for headings.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

// Body face: neutral, highly legible at small sizes.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

// Utility face: labels, eyebrows, data — gives the site a technical accent.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vertex Digital — Premium Websites & Digital Solutions",
    template: "%s — Vertex Digital",
  },
  description:
    "Vertex Digital builds premium websites, AI-powered web applications, and custom software for businesses that want to look and perform like a market leader.",
  keywords: [
    "premium web design",
    "web development agency",
    "custom software",
    "UI/UX design",
    "business automation",
    "AI web applications",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vertex Digital — Premium Websites & Digital Solutions",
    description:
      "Premium websites, AI-powered web applications, and custom software built to convert.",
    url: SITE_URL,
    siteName: "Vertex Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertex Digital — Premium Websites & Digital Solutions",
    description:
      "Premium websites, AI-powered web applications, and custom software built to convert.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-vertex-gradient focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-glow focus:outline-none focus:ring-2 focus:ring-accent2 focus:ring-offset-2 focus:ring-offset-background"
        >
          Skip to main content
        </a>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
