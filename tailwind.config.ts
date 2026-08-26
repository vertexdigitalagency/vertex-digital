import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core surfaces
        background: "#050816",
        surface: {
          DEFAULT: "#0F172A",
          raised: "#141B33",
          border: "#1E2A47",
        },
        // Brand accents (from brief — do not introduce a third accent hue)
        accent: {
          DEFAULT: "#7C3AED",
          soft: "#A78BFA",
          dim: "#5B21B6",
        },
        accent2: {
          DEFAULT: "#3B82F6",
          soft: "#60A5FA",
          dim: "#1D4ED8",
        },
        // Text
        foreground: "#F5F6FA",
        muted: {
          DEFAULT: "#8B93A7",
          foreground: "#B4BACC",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "vertex-gradient": "linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)",
        "vertex-radial": "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.18) 0%, rgba(5,8,22,0) 60%)",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      boxShadow: {
        soft: "0 8px 40px -12px rgba(0,0,0,0.55)",
        glow: "0 0 60px -10px rgba(124,58,237,0.35)",
        "glow-blue": "0 0 60px -10px rgba(59,130,246,0.35)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 30px -12px rgba(0,0,0,0.6)",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
        marquee: "marquee 32s linear infinite",
        "pulse-glow": "pulseGlow 3.5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      maxWidth: {
        container: "1360px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
