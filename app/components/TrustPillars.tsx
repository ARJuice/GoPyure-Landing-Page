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

/* ── Pulse delay per branch (staggered slightly for organic feel) ── */
const pulseDelays: Record<Position, string> = {
  top: "0s",
  right: "0.12s",
  bottom: "0.24s",
  left: "0.36s",
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
            {pillars.map((p) => (
              <g key={p.id}>
                {/* Base root (always visible, dim) */}
                <path
                  d={rootPaths[p.position]}
                  stroke="rgba(155,183,174,0.13)"
                  strokeWidth={hoveredId === p.id ? "2.5" : "1.5"}
                  fill="none"
                  strokeLinecap="round"
                  style={{ transition: "stroke-width 0.5s, stroke 0.5s" }}
                />

                {/* Hover glow layer */}
                <path
                  d={rootPaths[p.position]}
                  stroke="rgba(155,183,174,0.4)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  style={{
                    opacity: hoveredId === p.id ? 1 : 0,
                    filter: "blur(3px)",
                    transition: "opacity 0.45s",
                  }}
                />

                {/* Traveling pulse dot */}
                <path
                  d={rootPaths[p.position]}
                  className="root-pulse-path"
                  stroke={
                    hoveredId === p.id
                      ? "rgba(192,220,210,0.8)"
                      : "rgba(155,183,174,0.28)"
                  }
                  strokeWidth={hoveredId === p.id ? "3" : "1.8"}
                  fill="none"
                  strokeLinecap="round"
                  style={{
                    animationDelay: pulseDelays[p.position],
                    transition: "stroke 0.4s, stroke-width 0.4s",
                  }}
                />
              </g>
            ))}
          </svg>

          {/* ── Central seed / sprout ── */}
          <div
            className="absolute z-20"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className={`w-[76px] h-[76px] rounded-full flex items-center justify-center seed-breathe ${
                hoveredId ? "seed-breathe--active" : ""
              }`}
              style={{
                background: "rgba(155,183,174,0.12)",
                border: "1px solid rgba(155,183,174,0.25)",
              }}
            >
              <div style={{ transform: "translateY(-3px) translateX(1px)" }}>
                <Image
                  src="/white logo - Icon Only.svg"
                  alt="GoPyure sprout"
                  width={40}
                  height={40}
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
                }}
                onMouseEnter={() => setHoveredId(p.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Icon */}
                <motion.div
                  className="mb-2"
                  animate={{
                    scale: isHovered ? 1.22 : 1,
                    color: isHovered ? "#d4e8df" : "#9BB7AE",
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  style={{ color: "#9BB7AE" }}
                >
                  {icons[p.iconKey]}
                </motion.div>

                {/* Title */}
                <motion.p
                  className="text-sm font-semibold text-center whitespace-nowrap"
                  style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
                  animate={{ color: isHovered ? "#FFFDF9" : "rgba(255,253,249,0.85)" }}
                  transition={{ duration: 0.3 }}
                >
                  {p.title}
                </motion.p>

                {/* Expanding description on hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, maxHeight: 0 }}
                      animate={{ opacity: 1, maxHeight: 200 }}
                      exit={{ opacity: 0, maxHeight: 0 }}
                      transition={{ duration: 0.38, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-center leading-relaxed mt-2.5 max-w-[195px]">
                        <span
                          className="block text-xs font-medium mb-1"
                          style={{ color: "rgba(255,253,249,0.92)" }}
                        >
                          {p.headline}
                        </span>
                        <span
                          className="text-[11px]"
                          style={{ color: "rgba(155,183,174,0.72)" }}
                        >
                          {p.description}
                        </span>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
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
              <div style={{ transform: "translateY(-2px) translateX(1px)" }}>
                <Image
                  src="/white logo - Icon Only.svg"
                  alt="GoPyure sprout"
                  width={32}
                  height={32}
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
