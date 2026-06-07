"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* ── Full-bleed background ── */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/hero-mango-bg.png')" }}
      />
      {/* Dark vignette for contrast */}
      <div className="absolute inset-0 bg-[#07251C]/60 pointer-events-none" />
      {/* Bottom-to-top dark fade so the text block pops */}
      <div
        className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(7,37,28,0.92) 0%, rgba(7,37,28,0.55) 60%, transparent 100%)",
        }}
      />

      {/* ── Products image — centred upper half ── */}
      <div className="relative z-10 flex flex-1 items-center justify-center pt-24 pb-0 px-6">
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          className="w-full max-w-[900px] lg:max-w-[1100px]"
        >
          <Image
            src="/hero-products.png"
            alt="GoPyure Mango, Plain & Blueberry Yogurt range"
            width={1100}
            height={740}
            className="w-full h-auto object-contain drop-shadow-[0_32px_64px_rgba(0,0,0,0.5)]"
            priority
          />
        </motion.div>
      </div>

      {/* ── Bottom copy block — Activia-style ── */}
      <div className="relative z-10 w-full pb-14 lg:pb-20 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">

          {/* Headline — big & bold, flush left */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.75, ease: "easeOut" }}
            className="text-cream-ivory font-bold leading-[1.08] tracking-tight mb-4"
            style={{
              fontFamily: "'Konkhmer Sleokchher', serif",
              fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
            }}
          >
            Good for your gut.<br />
            <span className="text-[#E8A940]">Great for your taste buds.</span>
          </motion.h1>

          {/* Sub-line */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7, ease: "easeOut" }}
            className="text-cream-linen/75 text-base lg:text-lg leading-relaxed max-w-lg mb-8"
          >
            Delicious probiotic yogurts crafted to support everyday gut health.
          </motion.p>

          {/* CTA — pill button like Activia */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.65, ease: "easeOut" }}
          >
            <button
              onClick={() => scrollTo("#collection")}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-pill border-2 border-cream-ivory text-cream-ivory font-semibold text-sm tracking-wide hover:bg-cream-ivory hover:text-pyure-deep transition-all duration-300 cursor-pointer"
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
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 right-8 flex flex-col items-center gap-1 text-cream-linen/30"
      >
        <span className="text-[9px] font-semibold tracking-widest uppercase rotate-90 origin-center">Scroll</span>
      </motion.div>
    </section>
  );
}
