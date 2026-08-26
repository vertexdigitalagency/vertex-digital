"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Only fires if the root layout itself throws. Deliberately self-contained
 * with inline styles rather than Tailwind classes or the site's fonts,
 * since the layout that would normally provide those may be what failed.
 */
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("Global error boundary caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050816",
          color: "#F5F6FA",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "12px" }}>
            Something went wrong
          </h1>
          <p style={{ color: "#8B93A7", marginBottom: "24px", maxWidth: "400px" }}>
            The site hit an unexpected error. Please try again.
          </p>
          <button
            onClick={() => reset()}
            style={{
              background: "linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)",
              color: "white",
              border: "none",
              borderRadius: "999px",
              padding: "12px 28px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
