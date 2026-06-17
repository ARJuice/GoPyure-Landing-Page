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
        {/* ── Organic background wash ── */}
        <defs>
          <radialGradient id="bgWash" cx="50%" cy="48%" r="50%">
            <stop offset="0%" stopColor="#0A5039" stopOpacity="0.07" />
            <stop offset="65%" stopColor="#346E5B" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#9BB7AE" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8A940" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#E8A940" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="175" fill="url(#bgWash)" />

        {/* ── Flowing gut tract — organic S-curve ── */}
        <motion.path
          d="M60 155 C90 95, 155 75, 200 100 C250 128, 310 105, 340 155 C365 198, 330 250, 285 275 C240 300, 175 310, 130 285 C85 260, 55 215, 60 155Z"
          stroke="#0A5039"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          strokeOpacity="0.12"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />

        {/* Villi-like interior folds */}
        {[
          "M130 130 Q145 118, 160 128",
          "M175 105 Q188 92, 200 103",
          "M225 108 Q240 95, 252 110",
          "M290 135 Q305 122, 315 138",
          "M325 175 Q340 165, 338 185",
          "M310 230 Q325 222, 318 245",
          "M260 280 Q275 272, 268 292",
          "M195 295 Q208 287, 200 305",
          "M130 270 Q143 260, 135 280",
          "M88 225 Q100 215, 92 235",
          "M72 180 Q85 170, 78 190",
        ].map((d, i) => (
          <motion.path
            key={`villi-${i}`}
            d={d}
            stroke="#346E5B"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            strokeOpacity="0.12"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.08, duration: 0.6 }}
          />
        ))}

        {/* ── Traveling pulse along gut path ── */}
        <motion.circle
          r="4"
          fill="#E8A940"
          fillOpacity="0.5"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: ["0%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{
            offsetPath: `path("M60 155 C90 95, 155 75, 200 100 C250 128, 310 105, 340 155 C365 198, 330 250, 285 275 C240 300, 175 310, 130 285 C85 260, 55 215, 60 155Z")`,
          }}
        />
        <motion.circle
          r="3"
          fill="#9BB7AE"
          fillOpacity="0.4"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: ["0%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 3 }}
          style={{
            offsetPath: `path("M60 155 C90 95, 155 75, 200 100 C250 128, 310 105, 340 155 C365 198, 330 250, 285 275 C240 300, 175 310, 130 285 C85 260, 55 215, 60 155Z")`,
          }}
        />

        {/* ── Rod bacteria (bacilli) — organic capsule shapes with flagella ── */}
        {[
          { x: 145, y: 145, rot: -25, scale: 1, driftY: 6, dur: 4.2 },
          { x: 260, y: 148, rot: 40, scale: 0.9, driftY: -5, dur: 3.8 },
          { x: 300, y: 210, rot: -55, scale: 0.75, driftY: 4, dur: 5.0 },
          { x: 115, y: 235, rot: 70, scale: 0.85, driftY: -7, dur: 4.5 },
          { x: 210, y: 275, rot: 10, scale: 1.1, driftY: 5, dur: 3.5 },
          { x: 175, y: 120, rot: -60, scale: 0.7, driftY: -4, dur: 4.8 },
        ].map((b, i) => (
          <motion.g
            key={`bacillus-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.12, duration: 0.5, type: "spring", stiffness: 120 }}
          >
            <motion.g
              animate={{
                y: [0, b.driftY, 0],
                rotate: [b.rot, b.rot + (i % 2 === 0 ? 8 : -8), b.rot],
              }}
              transition={{ duration: b.dur, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Main body */}
              <rect
                x={b.x - 11 * b.scale} y={b.y - 4.5 * b.scale}
                width={22 * b.scale} height={9 * b.scale}
                rx={4.5 * b.scale}
                fill="#0A5039" fillOpacity="0.2"
                transform={`rotate(${b.rot}, ${b.x}, ${b.y})`}
              />
              {/* Inner membrane */}
              <rect
                x={b.x - 7 * b.scale} y={b.y - 2.5 * b.scale}
                width={14 * b.scale} height={5 * b.scale}
                rx={2.5 * b.scale}
                fill="#0A5039" fillOpacity="0.08"
                transform={`rotate(${b.rot}, ${b.x}, ${b.y})`}
              />
              {/* Flagellum tail */}
              <motion.path
                d={`M${b.x + 11 * b.scale * Math.cos(b.rot * Math.PI / 180)} ${b.y + 11 * b.scale * Math.sin(b.rot * Math.PI / 180)} q${8 * b.scale} ${(i % 2 === 0 ? -6 : 6) * b.scale} ${16 * b.scale} ${(i % 2 === 0 ? 2 : -2) * b.scale}`}
                stroke="#346E5B"
                strokeWidth={0.8 * b.scale}
                strokeLinecap="round"
                fill="none"
                strokeOpacity="0.18"
                animate={{ strokeDashoffset: [0, -20] }}
                strokeDasharray="3 4"
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.g>
          </motion.g>
        ))}

        {/* ── Round bacteria (cocci) — organic clusters with membrane rings ── */}
        {[
          { x: 190, y: 170, r: 7, delay: 0.6, driftX: 3, driftY: -4, dur: 5 },
          { x: 230, y: 195, r: 5.5, delay: 0.8, driftX: -2, driftY: 3, dur: 4.2 },
          { x: 155, y: 200, r: 6, delay: 1.0, driftX: 4, driftY: 2, dur: 4.7 },
          { x: 275, y: 240, r: 5, delay: 1.1, driftX: -3, driftY: -5, dur: 3.9 },
          { x: 200, y: 240, r: 8, delay: 0.9, driftX: 2, driftY: 4, dur: 5.5 },
          { x: 245, y: 155, r: 4.5, delay: 1.2, driftX: -4, driftY: 2, dur: 4.4 },
          { x: 165, y: 260, r: 5.5, delay: 1.3, driftX: 3, driftY: -3, dur: 5.2 },
          { x: 295, y: 175, r: 4, delay: 1.0, driftX: -2, driftY: -4, dur: 4.0 },
        ].map((c, i) => (
          <motion.g
            key={`coccus-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: c.delay, duration: 0.45, type: "spring", stiffness: 150 }}
          >
            <motion.g
              animate={{
                x: [0, c.driftX, -c.driftX * 0.5, 0],
                y: [0, c.driftY, -c.driftY * 0.7, 0],
              }}
              transition={{ duration: c.dur, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Outer membrane ring */}
              <circle cx={c.x} cy={c.y} r={c.r + 2} fill="none" stroke="#346E5B" strokeWidth="0.6" strokeOpacity="0.12" />
              {/* Cell body */}
              <circle cx={c.x} cy={c.y} r={c.r} fill="#346E5B" fillOpacity={0.12 + (i % 3) * 0.04} />
              {/* Nucleus */}
              <circle cx={c.x + 1} cy={c.y - 1} r={c.r * 0.35} fill="#0A5039" fillOpacity="0.15" />
            </motion.g>
          </motion.g>
        ))}

        {/* ── Diplococcus pairs (two cells touching) ── */}
        {[
          { x: 210, y: 210, r: 4, rot: 30, delay: 1.0, dur: 4.6 },
          { x: 140, y: 170, r: 3.5, rot: -50, delay: 1.3, dur: 5.1 },
          { x: 280, y: 260, r: 3, rot: 15, delay: 1.5, dur: 4.3 },
        ].map((d, i) => (
          <motion.g
            key={`diplo-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: d.delay, duration: 0.4, type: "spring" }}
          >
            <motion.g
              animate={{ rotate: [d.rot, d.rot + 15, d.rot - 10, d.rot] }}
              transition={{ duration: d.dur, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: `${d.x}px ${d.y}px` }}
            >
              <circle cx={d.x - d.r * 0.9} cy={d.y} r={d.r} fill="#0A5039" fillOpacity="0.15" />
              <circle cx={d.x + d.r * 0.9} cy={d.y} r={d.r} fill="#0A5039" fillOpacity="0.12" />
            </motion.g>
          </motion.g>
        ))}

        {/* ── Central microbiome core with heartbeat ── */}
        <motion.circle
          cx="200" cy="200" r="20"
          fill="url(#coreGlow)"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
        />
        <motion.circle
          cx="200" cy="200" r="8"
          fill="#0A5039" fillOpacity="0.1"
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Multiple expanding ripples from core */}
        {[0, 1.5, 3].map((ringDelay, i) => (
          <motion.circle
            key={`ripple-${i}`}
            cx="200" cy="200" r="20"
            fill="none"
            stroke="#9BB7AE" strokeWidth="0.8"
            animate={{ scale: [1, 3.5], opacity: [0.2, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeOut", delay: ringDelay }}
          />
        ))}

        {/* ── Nutrient particles with varied organic drift ── */}
        {[
          { x: 105, y: 165, r: 2.2, color: "#E8A940", dur: 6, dx: 5, dy: -8 },
          { x: 310, y: 195, r: 1.8, color: "#E8A940", dur: 7, dx: -4, dy: 6 },
          { x: 150, y: 280, r: 2.5, color: "#E8A940", dur: 5.5, dx: 6, dy: -4 },
          { x: 255, y: 130, r: 2, color: "#E8A940", dur: 6.5, dx: -3, dy: 7 },
          { x: 95, y: 210, r: 1.5, color: "#E8A940", dur: 5, dx: 4, dy: 3 },
          { x: 320, y: 255, r: 2.2, color: "#9BB7AE", dur: 7.5, dx: -5, dy: -6 },
          { x: 180, y: 310, r: 1.8, color: "#9BB7AE", dur: 6, dx: 3, dy: -5 },
          { x: 230, y: 105, r: 2, color: "#9BB7AE", dur: 5.5, dx: -4, dy: 4 },
        ].map((p, i) => (
          <motion.circle
            key={`nutrient-${i}`}
            cx={p.x} cy={p.y} r={p.r}
            fill={p.color}
            fillOpacity="0.3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
            animate={{
              cx: [p.x, p.x + p.dx, p.x - p.dx * 0.5, p.x],
              cy: [p.y, p.y + p.dy, p.y - p.dy * 0.3, p.y],
              opacity: [0.3, 0.5, 0.25, 0.3],
            }}
            // @ts-expect-error framer motion animate transition
            transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>

      {/* ── Stat callouts instead of generic labels ── */}
      <motion.div
        className="absolute top-[6%] right-[2%] flex items-center gap-2"
        initial={{ opacity: 0, x: 12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <span className="text-[22px] font-bold text-pyure-deep leading-none" style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}>100T+</span>
        <span className="text-[9px] text-ink-muted leading-tight max-w-[60px]">bacteria in your gut</span>
      </motion.div>

      <motion.div
        className="absolute bottom-[10%] left-[2%] flex items-center gap-2"
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.9, duration: 0.6 }}
      >
        <span className="text-[22px] font-bold text-pyure-sage leading-none" style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}>70%</span>
        <span className="text-[9px] text-ink-muted leading-tight max-w-[65px]">of immunity lives in the gut</span>
      </motion.div>

      <motion.div
        className="absolute top-[48%] left-[-5%] flex items-center gap-1.5"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.1, duration: 0.6 }}
      >
        <span className="text-[18px] font-bold leading-none" style={{ fontFamily: "'Konkhmer Sleokchher', serif", color: "#E8A940" }}>1000+</span>
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
