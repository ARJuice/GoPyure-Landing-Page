"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Accordion data — educational, gut-health focused ── */
const topics = [
  {
    id: 1,
    title: "What exactly are probiotics?",
    body: "Probiotics are live microorganisms — mostly bacteria and some yeasts — that provide genuine health benefits when consumed in adequate amounts. They're often called \"good\" or \"friendly\" bacteria because they help maintain a healthy balance in your gut microbiome, the complex ecosystem of trillions of microbes living in your digestive tract. Naturally found in fermented foods like yogurt, kefir, and kimchi, probiotics have been part of the human diet for thousands of years.",
  },
  {
    id: 2,
    title: "How do they support your gut?",
    body: "Your gut is home to over 100 trillion bacteria — more than the total cells in your body. Probiotics work by reinforcing the population of beneficial bacteria, helping crowd out harmful microbes, strengthening the intestinal barrier, and aiding the breakdown and absorption of nutrients. A well-balanced gut microbiome is linked to smoother digestion, reduced bloating, and more regular bowel movements.",
  },
  {
    id: 3,
    title: "The gut-immunity connection",
    body: "Roughly 70% of your immune system resides in your gut. The gut lining acts as a critical barrier, and probiotic bacteria help maintain its integrity. They stimulate the production of natural antibodies, support immune cell activity, and can even influence how your body responds to infections. Research continues to reveal just how deeply gut health and overall immunity are intertwined.",
  },
  {
    id: 4,
    title: "Beyond digestion — what else?",
    body: "Emerging science suggests the influence of gut bacteria extends far beyond digestion. The gut-brain axis — a bidirectional communication highway between your gut and brain — means your microbiome can affect mood, stress response, and even sleep quality. Studies have also linked a diverse gut microbiome to better skin health, improved nutrient synthesis (like B vitamins and vitamin K), and enhanced metabolic function.",
  },
];

/* ── Animated SVG illustration — gut bacteria ecosystem ── */
function GutIllustration() {
  return (
    <div className="relative w-full max-w-[380px] lg:max-w-[440px] aspect-square mx-auto">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Soft background circle */}
        <circle cx="200" cy="200" r="160" fill="#0A5039" fillOpacity="0.06" />
        <circle cx="200" cy="200" r="120" fill="#0A5039" fillOpacity="0.04" />

        {/* Intestinal curve path */}
        <motion.path
          d="M80 120 C120 80, 180 80, 220 120 C260 160, 300 140, 320 180 C340 220, 300 260, 260 280 C220 300, 160 300, 120 280 C80 260, 60 220, 80 180"
          stroke="#0A5039"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          strokeOpacity="0.15"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Inner intestinal detail line */}
        <motion.path
          d="M100 140 C130 110, 180 100, 210 130 C240 160, 280 150, 300 185 C315 210, 290 240, 255 260 C220 275, 170 280, 140 265 C110 250, 90 220, 100 190"
          stroke="#346E5B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 8"
          fill="none"
          strokeOpacity="0.2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
        />

        {/* Bacteria clusters — rod-shaped (bacilli) */}
        {[
          { cx: 150, cy: 130, rot: -30, delay: 0.5 },
          { cx: 260, cy: 160, rot: 15, delay: 0.8 },
          { cx: 190, cy: 250, rot: -45, delay: 1.1 },
          { cx: 130, cy: 220, rot: 60, delay: 0.7 },
          { cx: 280, cy: 230, rot: -20, delay: 1.3 },
        ].map((b, i) => (
          <motion.g
            key={`rod-${i}`}
            transform={`translate(${b.cx}, ${b.cy}) rotate(${b.rot})`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: b.delay, duration: 0.5, type: "spring" }}
          >
            <motion.rect
              x="-10" y="-4" width="20" height="8" rx="4"
              fill="#0A5039" fillOpacity="0.18"
              animate={{ y: [-4, -6, -4] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <circle cx="-6" cy="0" r="1.5" fill="#0A5039" fillOpacity="0.3" />
            <circle cx="6" cy="0" r="1.5" fill="#0A5039" fillOpacity="0.3" />
          </motion.g>
        ))}

        {/* Bacteria clusters — round (cocci) */}
        {[
          { cx: 200, cy: 170, delay: 0.6 },
          { cx: 170, cy: 190, delay: 0.9 },
          { cx: 230, cy: 200, delay: 1.0 },
          { cx: 145, cy: 175, delay: 1.2 },
          { cx: 250, cy: 250, delay: 1.4 },
          { cx: 180, cy: 140, delay: 0.7 },
          { cx: 220, cy: 270, delay: 1.1 },
        ].map((b, i) => (
          <motion.circle
            key={`coccus-${i}`}
            cx={b.cx}
            cy={b.cy}
            r={4 + (i % 3)}
            fill="#346E5B"
            fillOpacity={0.15 + (i % 3) * 0.05}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: b.delay, duration: 0.4, type: "spring" }}
          />
        ))}

        {/* Floating particles — representing nutrients */}
        {[
          { cx: 120, cy: 160, r: 2.5, delay: 0.8 },
          { cx: 290, cy: 200, r: 2, delay: 1.0 },
          { cx: 160, cy: 260, r: 3, delay: 1.2 },
          { cx: 240, cy: 140, r: 2, delay: 0.9 },
          { cx: 300, cy: 260, r: 2.5, delay: 1.4 },
          { cx: 110, cy: 200, r: 2, delay: 1.1 },
        ].map((p, i) => (
          <motion.circle
            key={`particle-${i}`}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill="#E8A940"
            fillOpacity="0.35"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: p.delay, duration: 0.5 }}
          />
        ))}

        {/* Central core — gut microbiome hub */}
        <motion.circle
          cx="200" cy="200" r="24"
          fill="#0A5039" fillOpacity="0.08"
          stroke="#0A5039" strokeWidth="1.5" strokeOpacity="0.15"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
        />
        <motion.circle
          cx="200" cy="200" r="10"
          fill="#0A5039" fillOpacity="0.12"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
        />

        {/* Pulsing ring around core */}
        <motion.circle
          cx="200" cy="200" r="32"
          fill="none"
          stroke="#0A5039" strokeWidth="1" strokeOpacity="0.1"
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Connection lines from core to bacteria */}
        {[
          { x2: 150, y2: 130 },
          { x2: 260, y2: 160 },
          { x2: 190, y2: 250 },
          { x2: 130, y2: 220 },
          { x2: 280, y2: 230 },
        ].map((line, i) => (
          <motion.line
            key={`line-${i}`}
            x1="200" y1="200"
            x2={line.x2} y2={line.y2}
            stroke="#9BB7AE"
            strokeWidth="0.8"
            strokeOpacity="0.15"
            strokeDasharray="3 5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.15, duration: 0.8 }}
          />
        ))}
      </svg>

      {/* Label badges floating around the illustration */}
      <motion.div
        className="absolute top-[8%] right-[5%] px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase"
        style={{ background: "rgba(10,80,57,0.08)", color: "#0A5039" }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        Lactobacillus
      </motion.div>
      <motion.div
        className="absolute bottom-[12%] left-[5%] px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase"
        style={{ background: "rgba(52,110,91,0.08)", color: "#346E5B" }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        Bifidobacterium
      </motion.div>
      <motion.div
        className="absolute top-[45%] left-[-2%] px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase"
        style={{ background: "rgba(232,169,64,0.1)", color: "#B8860B" }}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.0, duration: 0.5 }}
      >
        Live cultures
      </motion.div>
    </div>
  );
}

/* ── Single accordion item ── */
function AccordionItem({
  topic,
  isOpen,
  onToggle,
  index,
}: {
  topic: (typeof topics)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="border-b border-[#0A5039]/10 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 py-5 lg:py-6 text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        {/* Number badge */}
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
          style={{
            background: isOpen ? "#0A5039" : "rgba(10,80,57,0.08)",
            color: isOpen ? "#FFFDF9" : "#0A5039",
          }}
        >
          {topic.id}
        </span>

        {/* Title */}
        <span
          className="flex-1 text-base lg:text-lg font-semibold transition-colors duration-300"
          style={{ color: isOpen ? "#0A5039" : "#282827" }}
        >
          {topic.title}
        </span>

        {/* Expand/collapse chevron */}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-5 h-5"
            style={{ color: isOpen ? "#0A5039" : "#9BB7AE" }}
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </button>

      {/* Expandable content with smooth height animation */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div ref={contentRef} className="pb-6 pl-12 pr-4">
              <p className="text-sm lg:text-[15px] leading-relaxed text-ink-muted">
                {topic.body}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Main Section ── */
export default function ProbioticsSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="probiotics"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: "#F9F1E6" }}
    >
      {/* Subtle decorative dots pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0A5039 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── Top: Title + Intro ── */}
        <div className="text-center mb-14 lg:mb-20 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-pyure-sage mb-4"
          >
            Gut Health Essentials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-pyure-deep leading-[1.1] mb-6"
            style={{
              fontFamily: "'Konkhmer Sleokchher', serif",
              fontSize: "clamp(1.75rem, 4vw, 3.2rem)",
            }}
          >
            What Are Probiotics?{" "}
            <br className="hidden sm:block" />
            <span className="text-[#E8A940]">Why Do They Matter?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="text-base lg:text-lg text-ink-muted leading-relaxed"
          >
            Your gut is one of the most important organs in your body — and the
            bacteria living inside it play a bigger role in your health than you
            might think. Here&apos;s what the science says.
          </motion.p>
        </div>

        {/* ── Main content: Illustration + Accordion ── */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 xl:gap-20">
          {/* Left — Animated SVG Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="w-full lg:w-[45%] flex-shrink-0"
          >
            <GutIllustration />
          </motion.div>

          {/* Right — Accordion */}
          <div className="w-full lg:w-[55%]">
            <div
              className="rounded-sm border border-[#0A5039]/8 p-6 lg:p-8"
              style={{
                background: "rgba(255,253,249,0.65)",
                backdropFilter: "blur(8px)",
              }}
            >
              {topics.map((topic, i) => (
                <AccordionItem
                  key={topic.id}
                  topic={topic}
                  isOpen={openId === topic.id}
                  onToggle={() => toggle(topic.id)}
                  index={i}
                />
              ))}
            </div>

            {/* Bottom note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-[11px] text-ink-muted/50 mt-6 leading-relaxed max-w-lg"
            >
              Probiotics are present in fermented foods like yogurt and are
              generally recognised as safe. For best results, consume as part of
              a balanced diet.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
