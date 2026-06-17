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

function GutIllustration() {
  return (
    <div className="w-full flex flex-col items-center select-none">
      {/* Square container for central image and lines */}
      <div className="relative w-full max-w-[360px] lg:max-w-[400px] aspect-square flex items-center justify-center">
        {/* ── Central Petri Dish Capsule ── */}
        <div 
          className="relative w-[78%] h-[78%] rounded-full overflow-hidden border border-[#0A5039]/15 bg-white"
        >
          {/* The active GIF animation */}
          <img
            src="/bacteria-cropped.gif"
            alt="Animated gut bacteria ecosystem"
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        </div>

        {/* ── Scientific Annotation Vectors (SVG overlay) ── */}
        <svg 
          viewBox="0 0 100 100" 
          className="absolute inset-0 w-full h-full pointer-events-none z-20 hidden lg:block"
          aria-hidden="true"
        >
          {/* Vector Line 1: Top-Right (100T+) */}
          <motion.circle 
            cx="74" cy="24" r="0.75" 
            fill="#0A5039" 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          />
          <motion.path 
            d="M 74 24 L 78 18 L 88 18" 
            stroke="#0A5039" 
            strokeWidth="0.35" 
            strokeOpacity="0.4"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
          />

          {/* Vector Line 2: Bottom-Left (70%) */}
          <motion.circle 
            cx="25" cy="75" r="0.75" 
            fill="#346E5B" 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          />
          <motion.path 
            d="M 25 75 L 22 80 L 12 80" 
            stroke="#346E5B" 
            strokeWidth="0.35" 
            strokeOpacity="0.4"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.5 }}
          />

          {/* Vector Line 3: Middle-Left (1000+) */}
          <motion.circle 
            cx="15" cy="48" r="0.75" 
            fill="#E8A940" 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 }}
          />
          <motion.path 
            d="M 15 48 L 12 48" 
            stroke="#E8A940" 
            strokeWidth="0.35" 
            strokeOpacity="0.45"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 0.4 }}
          />
        </svg>

        {/* ── Scientific Annotation Text Labels (Pure typography, no AI tag boxes) ── */}
        <motion.div
          className="absolute top-[15.5%] left-[89.5%] flex flex-col items-start select-none hidden lg:flex"
          initial={{ opacity: 0, x: 8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <span 
            className="text-[19px] lg:text-[21px] font-bold text-pyure-deep leading-none tracking-tight" 
            style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
          >
            100T+
          </span>
          <span className="text-[9px] font-semibold text-ink-muted leading-tight mt-0.5 whitespace-nowrap">
            bacteria in your gut
          </span>
        </motion.div>

        <motion.div
          className="absolute bottom-[17.5%] right-[89.5%] flex flex-col items-end select-none text-right hidden lg:flex"
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <span 
            className="text-[19px] lg:text-[21px] font-bold text-pyure-sage leading-none tracking-tight" 
            style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
          >
            70%
          </span>
          <span className="text-[9px] font-semibold text-ink-muted leading-tight mt-0.5 whitespace-nowrap">
            of immunity lives in the gut
          </span>
        </motion.div>

        <motion.div
          className="absolute top-[45.5%] right-[89.5%] flex flex-col items-end select-none text-right hidden lg:flex"
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <span 
            className="text-[17px] lg:text-[19px] font-bold leading-none tracking-tight" 
            style={{ fontFamily: "'Konkhmer Sleokchher', serif", color: "#E8A940" }}
          >
            1000+
          </span>
          <span className="text-[9px] font-semibold text-ink-muted leading-tight mt-0.5 whitespace-nowrap">
            species of bacteria
          </span>
        </motion.div>
      </div>

      {/* Mobile Stats Grid (visible on mobile/tablet, hidden on desktop) */}
      <div className="grid grid-cols-3 gap-4 w-full max-w-[360px] mt-6 lg:hidden text-center">
        <div className="flex flex-col items-center">
          <span className="text-[18px] font-bold text-pyure-deep leading-none" style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}>100T+</span>
          <span className="text-[9px] font-semibold text-ink-muted leading-tight mt-1">bacteria in gut</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[18px] font-bold text-pyure-sage leading-none" style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}>70%</span>
          <span className="text-[9px] font-semibold text-ink-muted leading-tight mt-1">immunity in gut</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[16px] font-bold leading-none" style={{ fontFamily: "'Konkhmer Sleokchher', serif", color: "#E8A940" }}>1000+</span>
          <span className="text-[9px] font-semibold text-ink-muted leading-tight mt-1">species</span>
        </div>
      </div>
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
            What Are Probiotics?
            <br />
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
              className="text-[11px] text-ink-muted/80 mt-6 leading-relaxed max-w-lg"
            >
              Probiotics are naturally present in fermented foods like yogurt and
              are generally recognized as safe. For the best results, they should
              be consumed as part of a balanced diet.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
