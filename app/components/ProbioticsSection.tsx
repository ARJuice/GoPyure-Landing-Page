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
    <div className="relative w-full max-w-[360px] lg:max-w-[400px] aspect-square mx-auto flex items-center justify-center">
      {/* Central Cropped GIF Petri Dish */}
      <div className="relative w-[78%] h-[78%] rounded-full overflow-hidden border-2 border-[#0A5039]/15 shadow-[0_8px_30px_rgb(10,80,57,0.06)] bg-white">
        <img
          src="/bacteria-cropped.gif"
          alt="Animated gut bacteria ecosystem"
          className="w-full h-full object-cover select-none pointer-events-none"
        />
      </div>

      {/* Stat callouts positioned around it */}
      <motion.div
        className="absolute top-[8%] right-[-2%] flex items-center gap-2 bg-[#FFFDF9]/90 backdrop-blur-[4px] py-1.5 px-2.5 rounded-sm border border-[#0A5039]/5 shadow-sm"
        initial={{ opacity: 0, x: 12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <span className="text-[20px] lg:text-[22px] font-bold text-pyure-deep leading-none" style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}>100T+</span>
        <span className="text-[9px] text-ink-muted leading-tight max-w-[60px]">bacteria in your gut</span>
      </motion.div>

      <motion.div
        className="absolute bottom-[10%] left-[-4%] flex items-center gap-2 bg-[#FFFDF9]/90 backdrop-blur-[4px] py-1.5 px-2.5 rounded-sm border border-[#0A5039]/5 shadow-sm"
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <span className="text-[20px] lg:text-[22px] font-bold text-pyure-sage leading-none" style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}>70%</span>
        <span className="text-[9px] text-ink-muted leading-tight max-w-[65px]">of immunity lives in the gut</span>
      </motion.div>

      <motion.div
        className="absolute top-[50%] left-[-8%] flex items-center gap-1.5 bg-[#FFFDF9]/90 backdrop-blur-[4px] py-1.5 px-2.5 rounded-sm border border-[#0A5039]/5 shadow-sm"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <span className="text-[16px] lg:text-[18px] font-bold leading-none" style={{ fontFamily: "'Konkhmer Sleokchher', serif", color: "#E8A940" }}>1000+</span>
        <span className="text-[9px] text-ink-muted leading-tight max-w-[55px]">species of bacteria</span>
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
