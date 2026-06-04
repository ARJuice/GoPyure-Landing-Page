"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* ── Custom minimal line-art SVG icons ── */
const icons = {
  vision: (
    <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9">
      <path
        d="M3 18 C7 10, 13 6, 18 6 C23 6, 29 10, 33 18 C29 26, 23 30, 18 30 C13 30, 7 26, 3 18Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx="18" cy="18" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="1.5" fill="currentColor" />
    </svg>
  ),
  preservatives: (
    <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9">
      <path
        d="M18 3 L31 9 V20 C31 27 25 33 18 35 C11 33 5 27 5 20 V9 Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <polyline
        points="12,18 16,22 24,14"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  ),
  ingredients: (
    <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9">
      <path d="M18 32 L18 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M18 16 C18 10, 26 6, 30 8 C28 12, 22 16, 18 16"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M18 22 C14 18, 6 20, 6 14 C10 14, 16 16, 18 22"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  ),
  established: (
    <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9">
      <line x1="10" y1="5" x2="10" y2="31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M10 5 L26 5 L22 11 L26 17 L10 17"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"
      />
    </svg>
  ),
};

/* ── Data ── */
type Position = "top" | "right" | "bottom" | "left";

interface Pillar {
  id: string;
  title: string;
  headline: string;
  description: string;
  position: Position;
  iconKey: keyof typeof icons;
}

const pillars: Pillar[] = [
  {
    id: "vision",
    title: "Our Vision",
    headline: "Growing Beyond Yogurt.",
    description:
      "From yogurt to a complete portfolio of honest, clean-label dairy products — GoPyure is on a path to become Kerala\u2019s most trusted name in everyday nutrition.",
    position: "top",
    iconKey: "vision",
  },
  {
    id: "ingredients",
    title: "Selected Ingredients",
    headline: "Carefully Chosen Cultures.",
    description:
      "Our starter cultures are sourced from the Netherlands \u2014 the gold standard in dairy fermentation. Every ingredient is chosen for its role in creating the cleanest, most authentic flavour.",
    position: "left",
    iconKey: "ingredients",
  },
  {
    id: "preservatives",
    title: "No Preservatives",
    headline: "Pure Taste. Nothing Extra.",
    description:
      "Our products are made without added preservatives, artificial colours, or flavour enhancers. Just carefully selected natural ingredients \u2014 the way food was meant to be.",
    position: "right",
    iconKey: "preservatives",
  },
  {
    id: "established",
    title: "Established 2026",
    headline: "Built for the Future.",
    description:
      "Beginning with dairy products, GoPyure was founded with a long-term vision of creating food products that combine quality, trust, and innovation for everyday consumers.",
    position: "bottom",
    iconKey: "established",
  },
];

/* ── SVG curved-root paths  ── */
/* ViewBox = 750 × 580, seed center = (375, 290) */
const rootPaths: Record<Position, string> = {
  top:    "M 375 256 C 367 218, 383 155, 375 95",
  right:  "M 408 290 C 458 282, 548 298, 630 290",
  bottom: "M 375 324 C 383 362, 367 428, 375 470",
  left:   "M 342 290 C 292 298, 202 282, 120 290",
};

/* ── Pillar positions (% of container) ── */
const positions: Record<Position, { left: string; top: string }> = {
  top:    { left: "50%", top: "12%" },
  right:  { left: "85%", top: "50%" },
  bottom: { left: "50%", top: "85%" },
  left:   { left: "15%", top: "50%" },
};

/* ── Pulse delay per branch (very subtle delay of 0.25s to start right after the ripple begins) ── */
const pulseDelays: Record<Position, string> = {
  top: "0.25s",
  right: "0.25s",
  bottom: "0.25s",
  left: "0.25s",
};

/* ═══════════════════════════════════════════════════════════════ */
export default function TrustPillars() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="pillars"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A5039 0%, #082E23 100%)" }}
    >
      {/* Leaf pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/leaf-pattern.png')" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="text-center mb-6 lg:mb-2"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-pyure-mint mb-3">
            The Sprout &amp; Drop Promise
          </p>
          <h2
            className="text-display-lg text-cream-ivory mb-4"
            style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
          >
            The GoPyure Difference
          </h2>
          <p className="text-pyure-mint/80 max-w-md mx-auto leading-relaxed text-sm">
            Four principles that shape every product, every process,
            and every decision we make.
          </p>
        </motion.div>

        {/* ═══ DESKTOP — radial seed layout ═══ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden md:block relative mx-auto"
          style={{ maxWidth: "750px", height: "580px", overflow: "visible" }}
        >
          {/* ── SVG root branches ── */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 750 580"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Gradients for each branch direction: starts bright near center (high opacity), fades to near-invisible (low opacity) near cards.
                  This visually tapers the line (vein effect) and creates an elegant organic transition. */}
              <linearGradient id="grad-top" x1="375" y1="256" x2="375" y2="95" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#d4e8df" stopOpacity="0.55" />
                <stop offset="40%" stopColor="#9BB7AE" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#9BB7AE" stopOpacity="0.03" />
              </linearGradient>
              <linearGradient id="grad-right" x1="408" y1="290" x2="630" y2="290" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#d4e8df" stopOpacity="0.55" />
                <stop offset="40%" stopColor="#9BB7AE" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#9BB7AE" stopOpacity="0.03" />
              </linearGradient>
              <linearGradient id="grad-bottom" x1="375" y1="324" x2="375" y2="470" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#d4e8df" stopOpacity="0.55" />
                <stop offset="40%" stopColor="#9BB7AE" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#9BB7AE" stopOpacity="0.03" />
              </linearGradient>
              <linearGradient id="grad-left" x1="342" y1="290" x2="120" y2="290" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#d4e8df" stopOpacity="0.55" />
                <stop offset="40%" stopColor="#9BB7AE" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#9BB7AE" stopOpacity="0.03" />
              </linearGradient>
              
              {/* Traveling Pulse glow filter */}
              <filter id="pulse-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {pillars.map((p) => (
              <g key={p.id}>
                {/* Base root (always visible, vein-like gradient) */}
                <path
                  d={rootPaths[p.position]}
                  stroke={`url(#grad-${p.position})`}
                  strokeWidth={hoveredId === p.id ? "2.5" : "1.4"}
                  fill="none"
                  strokeLinecap="round"
                  style={{ transition: "stroke-width 0.4s" }}
                />

                {/* Hover glow layer */}
                <path
                  d={rootPaths[p.position]}
                  stroke={`url(#grad-${p.position})`}
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                  style={{
                    opacity: hoveredId === p.id ? 0.75 : 0,
                    filter: "blur(2px)",
                    transition: "opacity 0.4s",
                  }}
                />

                {/* Traveling pulse droplet */}
                <path
                  d={rootPaths[p.position]}
                  className="root-pulse-path"
                  stroke={
                    hoveredId === p.id
                      ? "#FFFDF9"
                      : "rgba(212, 232, 223, 0.75)"
                  }
                  strokeWidth={hoveredId === p.id ? "3.2" : "2.2"}
                  fill="none"
                  strokeLinecap="round"
                  filter="url(#pulse-glow)"
                  style={{
                    animationDelay: pulseDelays[p.position],
                    transition: "stroke 0.4s, stroke-width 0.4s",
                  }}
                />
              </g>
            ))}
          </svg>

          {/* ── Central seed / sprout (The Heart of the Section) ── */}
          <div
            className="absolute z-20 flex items-center justify-center"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "160px",
              height: "160px",
            }}
          >
            {/* Very subtle glow behind to establish visual hierarchy */}
            {/* Very subtle glow behind to establish visual hierarchy, shifting dynamically on hover */}
            <motion.div
              className="absolute w-[130px] h-[130px] rounded-full pointer-events-none seed-glow-backdrop"
              animate={{
                x: hoveredId === "ingredients" ? -18 : hoveredId === "preservatives" ? 18 : 0,
                y: hoveredId === "vision" ? -18 : hoveredId === "established" ? 18 : 0,
                scale: hoveredId ? 1.25 : 1,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              style={{
                background: "radial-gradient(circle, rgba(212, 232, 223, 0.28) 0%, rgba(10, 80, 57, 0) 70%)",
                filter: "blur(8px)",
              }}
            />

            {/* Faint expanding water ripple ring */}
            <div
              className="absolute ripple-ring rounded-full pointer-events-none"
              style={{
                width: "76px",
                height: "76px",
                border: "1px solid rgba(155, 183, 174, 0.35)",
              }}
            />

            {/* Inner seed capsule */}
            <div
              className={`w-[76px] h-[76px] rounded-full flex items-center justify-center seed-breathe relative z-10 ${
                hoveredId ? "seed-breathe--active" : ""
              }`}
              style={{
                background: "rgba(8, 46, 35, 0.9)",
                border: "1px solid rgba(155, 183, 174, 0.3)",
              }}
            >
              <div 
                style={{ transform: "translateY(-4px) translateX(1.4px)" }}
              >
                <Image
                  src="/white logo - Icon Only.svg"
                  alt="GoPyure sprout"
                  width={44}
                  height={44}
                />
              </div>
            </div>
          </div>

          {/* ── 4 Pillar icon-blocks ── */}
          {pillars.map((p) => {
            const isHovered = hoveredId === p.id;
            return (
              <div
                key={p.id}
                className="absolute z-10 flex flex-col items-center cursor-pointer select-none"
                style={{
                  left: positions[p.position].left,
                  top: positions[p.position].top,
                  transform: "translate(-50%, -50%)",
                  width: "240px", /* stable, comfortable width to prevent text squishing */
                }}
                onMouseEnter={() => setHoveredId(p.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Glassmorphic Background Card on hover */}
                <motion.div
                  className="absolute inset-0 bg-[#073629]/75 border border-[#9BB7AE]/18 backdrop-blur-md rounded-sm -z-10 shadow-xl"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.94,
                  }}
                  transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    padding: "20px 24px",
                    margin: "-16px -20px", /* expands outward for comfortable breathing room */
                  }}
                />

                {/* Content Wrapper */}
                <div className="flex flex-col items-center w-full">
                  {/* Icon */}
                  <motion.div
                    className="mb-2.5"
                    animate={{
                      scale: isHovered ? 1.18 : 1,
                      color: isHovered ? "#FFFDF9" : "#9BB7AE",
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 22 }}
                    style={{ color: "#9BB7AE" }}
                  >
                    {icons[p.iconKey]}
                  </motion.div>

                  {/* Title */}
                  <motion.p
                    className="text-sm font-semibold text-center whitespace-nowrap"
                    style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
                    animate={{ color: isHovered ? "#FFFDF9" : "rgba(255,253,249,0.85)" }}
                    transition={{ duration: 0.5 }}
                  >
                    {p.title}
                  </motion.p>

                  {/* Expanding description on hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, maxHeight: 0 }}
                        animate={{ opacity: 1, maxHeight: 240 }}
                        exit={{ opacity: 0, maxHeight: 0 }}
                        transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden w-full"
                      >
                        <p className="text-center leading-relaxed mt-3 w-full">
                          <span
                            className="block text-[13px] font-semibold mb-1 text-cream-ivory"
                          >
                            {p.headline}
                          </span>
                          <span
                            className="text-xs leading-relaxed text-[#d4e8df]"
                          >
                            {p.description}
                          </span>
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* ═══ MOBILE — clean vertical list ═══ */}
        <div className="md:hidden flex flex-col gap-8 pt-8">
          {/* Seed at top */}
          <div className="flex justify-center mb-2">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center seed-breathe"
              style={{
                background: "rgba(155,183,174,0.12)",
                border: "1px solid rgba(155,183,174,0.25)",
              }}
            >
              <div style={{ transform: "translateY(-3px) translateX(1.0px)" }}>
                <Image
                  src="/white logo - Icon Only.svg"
                  alt="GoPyure sprout"
                  width={36}
                  height={36}
                />
              </div>
            </div>
          </div>

          {pillars.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="flex items-start gap-4 px-2"
            >
              <div className="text-pyure-mint shrink-0 mt-0.5">{icons[p.iconKey]}</div>
              <div>
                <p
                  className="text-sm font-semibold text-cream-ivory mb-1"
                  style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
                >
                  {p.title}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(155,183,174,0.75)" }}>
                  <span className="font-medium" style={{ color: "rgba(255,253,249,0.8)" }}>
                    {p.headline}
                  </span>{" "}
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom tagline ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-14 lg:mt-10 text-center"
        >
          <p className="text-pyure-mint/60 text-sm">
            Trusted by families across the region —&nbsp;
            <span className="text-cream-ivory font-medium">
              pure, honest food since day one.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
