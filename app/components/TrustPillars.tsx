"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const pillars = [
  {
    icon: "🌿",
    title: "Purity",
    description: "Clean ingredients with no harmful additives, chemicals, or preservatives. What you see on the label is exactly what's inside.",
  },
  {
    icon: "🤝",
    title: "Trust",
    description: "Honest sourcing, transparent processes, and consistent quality you can count on for your family every single day.",
  },
  {
    icon: "⭐",
    title: "Quality",
    description: "Every batch is held to the same high standard — from the farms we source from to the moment it reaches your home.",
  },
  {
    icon: "❤️",
    title: "Care",
    description: "Thoughtfully made for everyday families. We care about what goes into your food as much as you do.",
  },
];

export default function TrustPillars() {
  return (
    <section
      id="pillars"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A5039 0%, #082E23 100%)" }}
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/leaf-pattern.png')" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="text-center mb-16"
        >
          {/* Sprout icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ background: "rgba(155,183,174,0.15)", border: "1px solid rgba(155,183,174,0.25)" }}
            >
              <motion.div
                style={{ y: -5, x: 2 }}
                whileHover={{ scale: 1.12, rotate: 8 }}
                transition={{ type: "spring", stiffness: 350, damping: 15 }}
                className="cursor-pointer"
              >
                <Image
                  src="/white logo - Icon Only.svg"
                  alt="GoPyure sprout icon"
                  width={44}
                  height={44}
                />
              </motion.div>
            </div>
          </motion.div>

          <p className="text-xs font-semibold tracking-widest uppercase text-pyure-mint mb-3">
            The Sprout &amp; Drop Promise
          </p>
          <h2
            className="text-display-lg text-cream-ivory mb-4"
            style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
          >
            Built on Four Values
          </h2>
          <p className="text-pyure-mint/80 max-w-md mx-auto leading-relaxed text-sm">
            Every product, every message, and every process reflects our commitment
            to honest food made with care.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              className="group rounded-card p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(155,183,174,0.15)",
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110"
                style={{ background: "rgba(155,183,174,0.12)" }}
              >
                {pillar.icon}
              </div>
              <h3
                className="text-lg font-semibold text-cream-ivory"
                style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
              >
                {pillar.title}
              </h3>
              <p className="text-sm text-pyure-mint/80 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom divider stat */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-pyure-mint/60 text-sm">
            Trusted by families across the region —&nbsp;
            <span className="text-cream-ivory font-medium">pure, honest food since day one.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
