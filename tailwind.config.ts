import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Greens
        "pyure-deep":    "#0A5039",
        "pyure-sage":    "#346E5B",
        "pyure-mint":    "#9BB7AE",
        // Secondary Surfaces
        "cream-linen":   "#F9F1E6",
        "cream-soft":    "#FFF9F0",
        "cream-ivory":   "#FFFDF9",
        // Tertiary Neutrals
        "ink-black":     "#0D0D0D",
        "ink-charcoal":  "#282827",
        "ink-muted":     "#555555",
        // Transparent helpers
        "glass-border":  "rgba(155,183,174,0.3)",
        "glass-bg":      "rgba(255,249,240,0.75)",
      },
      fontFamily: {
        display: ["var(--font-konkhmer)", "serif"],
        sans:    ["var(--font-hanken)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.6rem, 5vw, 4.5rem)", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 3.5vw, 3rem)",   { lineHeight: "1.18" }],
        "display-md": ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.25" }],
      },
      backdropBlur: {
        glass: "12px",
      },
      borderRadius: {
        "card": "20px",
        "pill": "9999px",
      },
      boxShadow: {
        "card":    "0 4px 20px -2px rgba(10,80,57,0.04), 0 10px 30px -5px rgba(10,80,57,0.02)",
        "card-lg": "0 8px 40px -4px rgba(10,80,57,0.08), 0 20px 50px -10px rgba(10,80,57,0.04)",
        "green":   "0 4px 24px rgba(10,80,57,0.18)",
      },
      backgroundImage: {
        "cream-glow":    "radial-gradient(circle at 50% 110%, rgba(155,183,174,0.18) 0%, rgba(255,249,240,1) 65%)",
        "hero-gradient": "linear-gradient(135deg, #FFFDF9 0%, #F9F1E6 60%, #EEE9DC 100%)",
        "section-green": "linear-gradient(180deg, #0A5039 0%, #093328 100%)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "sway":       "sway 4s ease-in-out infinite",
        "fade-up":    "fadeUp 0.7s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%":      { transform: "rotate(2deg)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        "premium": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
