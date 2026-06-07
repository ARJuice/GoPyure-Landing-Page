"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.75, ease: "easeOut" as const },
});

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Full-bleed background food photo ── */}
      <div
        className="absolute inset-0 bg-cover bg-[center_right] pointer-events-none"
        style={{ backgroundImage: "url('/hero-mango-bg.png')" }}
      />

      {/* Left-side dark gradient — keeps text crisp, fades into photo on the right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(7,37,28,0.93) 0%, rgba(7,37,28,0.78) 45%, rgba(7,37,28,0.18) 75%, transparent 100%)",
        }}
      />
      {/* Subtle global vignette */}
      <div className="absolute inset-0 bg-[#07251C]/20 pointer-events-none" />

      {/* ── Content: left column ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-14 pt-28 pb-16">

        {/* Left column — max ~half the viewport */}
        <div className="flex flex-col items-start max-w-[560px] lg:max-w-[600px]">

          {/* ── Product image — sits above the copy ── */}
          <motion.div
            {...fadeUp(0)}
            className="w-full mb-6"
          >
            <Image
              src="/hero-products.png"
              alt="GoPyure Mango, Plain and Blueberry Yogurt range"
              width={680}
              height={460}
              className="w-full h-auto object-contain drop-shadow-[0_24px_52px_rgba(0,0,0,0.55)]"
              priority
            />
          </motion.div>

          {/* ── Headline ── */}
          <motion.h1
            {...fadeUp(0.18)}
            className="text-cream-ivory font-bold leading-[1.1] tracking-tight mb-4"
            style={{
              fontFamily: "'Konkhmer Sleokchher', serif",
              fontSize: "clamp(2rem, 4.2vw, 4rem)",
            }}
          >
            Good for your gut.<br />
            <span className="text-[#E8A940]">Great for your taste buds.</span>
          </motion.h1>

          {/* ── Sub-line ── */}
          <motion.p
            {...fadeUp(0.32)}
            className="text-cream-linen/70 text-base lg:text-lg leading-relaxed mb-9"
          >
            Delicious probiotic yogurts crafted to support everyday gut health.
          </motion.p>

          {/* ── CTA pill — Activia-style outlined button ── */}
          <motion.div {...fadeUp(0.45)}>
            <button
              onClick={() => scrollTo("#collection")}
              className="inline-flex items-center px-9 py-3.5 rounded-pill border-2 border-cream-ivory text-cream-ivory font-semibold text-sm tracking-widest uppercase hover:bg-cream-ivory hover:text-pyure-deep transition-all duration-300 cursor-pointer"
            >
              Our Yogurts
            </button>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-cream-linen/35"
      >
        <span className="text-[9px] font-semibold tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-7 bg-gradient-to-b from-[#E8A940]/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
