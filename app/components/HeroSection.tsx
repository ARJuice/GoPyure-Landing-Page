"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#07251C]"
    >
      {/* Background food photography scene */}
      <div
        className="absolute inset-0 bg-cover bg-[position:70%_center] lg:bg-center pointer-events-none transition-all duration-500"
        style={{ backgroundImage: "url('/hero-mango-bg.png')" }}
      />

      {/* Dark gradient overlay for text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#07251C]/95 via-[#07251C]/85 to-transparent pointer-events-none md:block hidden"
      />
      {/* Mobile tint overlay */}
      <div
        className="absolute inset-0 bg-[#07251C]/75 pointer-events-none md:hidden"
      />

      {/* Subtle organic light ray overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          background: "radial-gradient(circle at 80% 20%, rgba(232, 169, 64, 0.4) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-screen">
        
        {/* Left: Premium Typography Copy */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-white/10 border border-white/15 text-pyure-mint text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm"
          >
            <Image 
              src="/white logo - Icon Only.svg" 
              alt="GoPyure" 
              width={14} 
              height={14} 
              className="brightness-0 invert-0"
            />
            Pure Organic Dairy
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-display-xl text-cream-ivory leading-[1.12] mb-6"
            style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
          >
            The Goodness<br />
            <span className="text-[#E8A940]">You Can Trust</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-base lg:text-lg text-cream-linen/85 leading-relaxed max-w-md mb-10"
          >
            Fresh, preservative-free yogurts made from pure organic dairy.
            Honest ingredients, honest taste — crafted for your everyday family.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo("#collection")}
              className="px-7 py-3.5 bg-[#E8A940] hover:bg-[#d5962e] text-ink-black font-semibold text-sm rounded-pill hover:shadow-[0_12px_24px_-6px_rgba(232,169,64,0.45)] hover:-translate-y-0.5 transition-all duration-300 tracking-wide cursor-pointer"
            >
              Explore Our Collection
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-7 py-3.5 border border-cream-linen/40 text-cream-linen font-semibold text-sm rounded-pill hover:bg-white/10 hover:border-cream-linen transition-all duration-300 tracking-wide cursor-pointer"
            >
              Contact Us
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-14 flex gap-8 divide-x divide-white/10"
          >
            {[
              { value: "0%",    label: "Preservatives" },
              { value: "100%",  label: "Organic Sourced" },
              { value: "A2",    label: "Beta-Casein Milk" },
            ].map((stat, i) => (
              <div key={i} className={`${i !== 0 ? "pl-8" : ""} flex flex-col`}>
                <span
                  className="text-2xl font-bold text-[#E8A940] leading-none"
                  style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-cream-linen/60 mt-1 font-medium tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Tilted Floating Product Visual Over the Background bowl */}
        <div className="lg:col-span-5 flex items-center justify-center relative h-[360px] sm:h-[460px] lg:h-[520px] w-full">
          {/* Subtle warm backdrop glow behind the cup */}
          <div
            className="absolute w-[280px] h-[280px] rounded-full scale-90 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(232, 169, 64, 0.22) 0%, transparent 70%)" }}
          />

          {/* Floating tilted yogurt cup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -12 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: [-6, -4, -6],
              y: [0, -12, 0]
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative z-20"
          >
            <Image
              src="/Mango_Yogurt.png"
              alt="GoPyure Mango Yogurt cup"
              width={380}
              height={450}
              className="object-contain drop-shadow-[0_24px_50px_rgba(0,0,0,0.55)]"
              priority
            />
          </motion.div>

          {/* Floating glassmorphic badges - mimicking hand-placed look */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, 4, 0] }}
            transition={{ 
              delay: 0.8, 
              duration: 0.6,
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-12 -right-2 sm:-right-8 lg:-right-4 bg-white/10 border border-white/10 backdrop-blur-md rounded-card px-4 py-2.5 shadow-xl z-30"
          >
            <p className="text-[10px] text-cream-linen/60 font-medium uppercase tracking-widest">Alphonso</p>
            <p className="text-xs font-bold text-cream-ivory mt-0.5">100% Real Fruit</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, y: [0, -4, 0] }}
            transition={{ 
              delay: 1.0, 
              duration: 0.6,
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-16 -left-2 sm:-left-8 lg:-left-4 bg-white/10 border border-white/10 backdrop-blur-md rounded-card px-4 py-2.5 shadow-xl z-30"
          >
            <p className="text-[10px] text-cream-linen/60 font-medium uppercase tracking-widest">Gut Health</p>
            <p className="text-xs font-bold text-[#E8A940] mt-0.5">A2 Probiotic Base</p>
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-cream-linen/40"
      >
        <span className="text-[10px] font-semibold tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[#E8A940]/55 to-transparent"
        />
      </motion.div>
    </section>
  );
}
