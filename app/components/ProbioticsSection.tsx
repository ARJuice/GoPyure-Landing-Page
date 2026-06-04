"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProPoint {
  id: number;
  label: string;
  body: string;
  /** degrees the cup tilts toward this point */
  tilt: number;
  /** where the + button sits around the cup (CSS position) */
  pos: { top?: string; bottom?: string; left?: string; right?: string };
  /** which side the text card opens on */
  side: "left" | "right" | "top" | "bottom";
}

const points: ProPoint[] = [
  {
    id: 1,
    label: "Live Probiotic Cultures",
    body: "Every cup of GoPyure yogurt is teeming with live and active probiotic cultures — billions of friendly bacteria that reach your gut alive and ready to work.",
    tilt: -14,
    pos: { top: "18%", left: "-12%" },
    side: "left",
  },
  {
    id: 2,
    label: "Supports Digestive Comfort",
    body: "Regular consumption of probiotic-rich yogurt is linked to smoother digestion, reduced bloating, and a more balanced gut microbiome — all from one daily cup.",
    tilt: 14,
    pos: { top: "18%", right: "-12%" },
    side: "right",
  },
  {
    id: 3,
    label: "Boosts Natural Immunity",
    body: "Up to 70% of your immune system lives in your gut. The right probiotic strains in GoPyure help reinforce your gut lining and support your body's natural defences.",
    tilt: -10,
    pos: { bottom: "22%", left: "-12%" },
    side: "left",
  },
  {
    id: 4,
    label: "No Artificial Additives",
    body: "Unlike many commercial yogurts, GoPyure carries zero artificial preservatives, colours, or thickeners — so your gut only gets what it actually needs.",
    tilt: 10,
    pos: { bottom: "22%", right: "-12%" },
    side: "right",
  },
];

export default function ProbioticsSection() {
  const [active, setActive] = useState<number | null>(null);

  const activePoint = points.find((p) => p.id === active) ?? null;
  const tiltDeg = activePoint ? activePoint.tilt : 0;

  const toggle = (id: number) => setActive((prev) => (prev === id ? null : id));

  return (
    <section
      id="probiotics"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A5039 0%, #083528 100%)" }}
    >
      {/* Subtle leaf texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none bg-center bg-cover"
        style={{ backgroundImage: "url('/leaf-pattern.png')" }}
      />

      {/* Soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(155,183,174,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-pyure-mint text-xs font-semibold tracking-widest uppercase mb-3"
          >
            The Science of Goodness
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-display-lg text-cream-ivory leading-tight"
            style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
          >
            What Are Probiotics &amp;
            <br />
            <span className="text-pyure-mint">Why Do They Matter?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-5 text-base text-cream-ivory/60 max-w-xl mx-auto leading-relaxed"
          >
            Tap the <span className="text-pyure-mint font-semibold">+</span> points around the cup to discover what&apos;s inside every cup of GoPyure.
          </motion.p>
        </div>

        {/* Interactive core */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

          {/* ── Cup + hotspots ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative flex-shrink-0"
            style={{ width: "clamp(220px, 28vw, 340px)", aspectRatio: "1 / 1.25" }}
          >
            {/* Glow behind cup */}
            <div
              className="absolute inset-0 rounded-full blur-3xl pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(155,183,174,0.22) 0%, transparent 70%)",
                transform: "scale(1.3)",
              }}
            />

            {/* Yogurt cup with tilt */}
            <motion.div
              animate={{ rotate: tiltDeg }}
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
              className="relative z-10 w-full h-full flex items-center justify-center"
              style={{ transformOrigin: "center bottom" }}
            >
              <Image
                src="/Mango_Yogurt.png"
                alt="GoPyure Mango Yogurt — probiotic-rich natural yogurt"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 1024px) 50vw, 340px"
              />
            </motion.div>

            {/* Hotspot buttons */}
            {points.map((p) => (
              <button
                key={p.id}
                onClick={() => toggle(p.id)}
                aria-pressed={active === p.id}
                aria-label={`Learn about: ${p.label}`}
                className="absolute z-20 w-9 h-9 rounded-full flex items-center justify-center
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-pyure-mint"
                style={{ ...p.pos }}
              >
                {/* Ring pulse */}
                {active !== p.id && (
                  <span
                    className="absolute inset-0 rounded-full border border-pyure-mint/50 animate-ping"
                    style={{ animationDuration: "2.4s" }}
                  />
                )}
                {/* Button face */}
                <motion.span
                  animate={{
                    rotate: active === p.id ? 45 : 0,
                    backgroundColor:
                      active === p.id
                        ? "rgba(10,80,57,1)"
                        : "rgba(155,183,174,0.18)",
                    borderColor:
                      active === p.id
                        ? "rgba(155,183,174,0.8)"
                        : "rgba(155,183,174,0.45)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative w-9 h-9 rounded-full border flex items-center justify-center
                             text-cream-ivory text-xl font-light leading-none backdrop-blur-sm"
                >
                  +
                </motion.span>
              </button>
            ))}
          </motion.div>

          {/* ── Info card panel ── */}
          <div className="w-full max-w-sm lg:max-w-md">
            <AnimatePresence mode="wait">
              {activePoint ? (
                <motion.div
                  key={activePoint.id}
                  initial={{ opacity: 0, y: 18, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.97 }}
                  transition={{ duration: 0.42, ease: [0.25, 1, 0.5, 1] }}
                  className="rounded-2xl border border-pyure-mint/20 p-8"
                  style={{
                    background: "rgba(255,253,249,0.06)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  {/* Number tag */}
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full
                               text-xs font-bold text-pyure-deep mb-5"
                    style={{ background: "rgba(155,183,174,0.85)" }}
                  >
                    {activePoint.id}
                  </span>

                  <h3
                    className="text-display-md text-cream-ivory mb-4 leading-snug"
                    style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
                  >
                    {activePoint.label}
                  </h3>

                  <p className="text-cream-ivory/70 text-base leading-relaxed">
                    {activePoint.body}
                  </p>

                  {/* Close */}
                  <button
                    onClick={() => setActive(null)}
                    className="mt-6 text-xs text-pyure-mint/70 hover:text-pyure-mint
                               transition-colors tracking-widest uppercase font-semibold"
                  >
                    Close ×
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col gap-4"
                >
                  {points.map((p, i) => (
                    <motion.button
                      key={p.id}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                      onClick={() => toggle(p.id)}
                      className="group flex items-center gap-4 text-left rounded-xl px-5 py-4
                                 border border-pyure-mint/12 hover:border-pyure-mint/35
                                 transition-all duration-300"
                      style={{ background: "rgba(155,183,174,0.06)" }}
                    >
                      <span
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                                   text-xs font-bold text-pyure-deep group-hover:scale-110 transition-transform"
                        style={{ background: "rgba(155,183,174,0.75)" }}
                      >
                        {p.id}
                      </span>
                      <span className="text-sm font-semibold text-cream-ivory/80 group-hover:text-cream-ivory transition-colors">
                        {p.label}
                      </span>
                      <span className="ml-auto text-pyure-mint/50 group-hover:text-pyure-mint text-lg transition-colors">
                        +
                      </span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-xs text-cream-ivory/30 mt-14 max-w-md mx-auto leading-relaxed"
        >
          GoPyure yogurts contain live and active probiotic cultures. For best results, consume as part of a balanced diet.
        </motion.p>
      </div>
    </section>
  );
}
