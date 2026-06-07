"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: "easeOut" as const },
});

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* ── Background — stretched to fill exactly the viewport ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/hero-mango-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Left-to-right dark gradient so left text is readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(7,37,28,0.92) 0%, rgba(7,37,28,0.75) 40%, rgba(7,37,28,0.15) 70%, transparent 100%)",
        }}
      />

      {/* ── Content: single left column, all within h-screen ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-14 flex items-center h-full">

        <div className="flex flex-col items-start justify-center w-full max-w-[640px] lg:max-w-[760px] pt-16">

          {/* Product image and stand container */}
          <motion.div
            {...fadeUp(0)}
            className="relative -ml-16 lg:-ml-26 z-10 -mb-6 lg:-mb-10"
            style={{
              width: "min(100%, calc(57vh * 6000 / 3375))",
              aspectRatio: "6000/3375",
            }}
          >
            {/* The stand (wooden shelf) */}
            <div
              className="absolute left-0 w-full z-0 pointer-events-none"
              style={{ top: "74.55%" }}
            >
              <Image
                src="/stand.png"
                alt="Wooden display stand"
                width={5451}
                height={904}
                className="w-full h-auto object-contain object-left drop-shadow-[0_12px_20px_rgba(0,0,0,0.6)]"
                priority
              />
            </div>

            {/* Yogurt cups sitting on the stand */}
            <div className="absolute inset-0 z-10">
              <Image
                src="/hero-products.png"
                alt="GoPyure Mango, Plain and Blueberry Yogurt — full range"
                width={6000}
                height={3375}
                className="w-full h-full object-contain object-left drop-shadow-[0_5px_8px_rgba(0,0,0,0.5)] drop-shadow-[0_15px_30px_rgba(0,0,0,0.35)]"
                priority
              />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.16)}
            className="text-cream-ivory font-bold leading-[1.1] tracking-tight mb-3"
            style={{
              fontFamily: "'Konkhmer Sleokchher', serif",
              fontSize: "clamp(1.65rem, 3.4vw, 3.4rem)",
            }}
          >
            Good for your gut.<br />
            <span className="text-[#E8A940]">Great for your taste buds.</span>
          </motion.h1>

          {/* Sub-line */}
          <motion.p
            {...fadeUp(0.28)}
            className="text-cream-linen/68 text-sm lg:text-base leading-relaxed mb-7"
          >
            Delicious probiotic yogurts crafted to support everyday gut health.
          </motion.p>

          {/* CTA pill */}
          <motion.div {...fadeUp(0.4)}>
            <button
              onClick={() => scrollTo("#collection")}
              className="inline-flex items-center px-8 py-3 rounded-pill border-2 border-cream-ivory text-cream-ivory font-semibold text-sm tracking-widest uppercase hover:bg-cream-ivory hover:text-pyure-deep transition-all duration-300 cursor-pointer"
            >
              Our Yogurts
            </button>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator — pinned bottom centre */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-cream-linen/30"
      >
        <span className="text-[8px] font-semibold tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-6 bg-gradient-to-b from-[#E8A940]/45 to-transparent"
        />
      </motion.div>
    </section>
  );
}
