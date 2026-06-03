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
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(145deg, #FFFDF9 0%, #F9F1E6 55%, #EEE9DC 100%)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-40 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />

      {/* Subtle organic circle blobs */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(155,183,174,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(10,80,57,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* Left: Copy */}
        <div className="flex flex-col items-start">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-white/60 border border-[rgba(155,183,174,0.35)] text-pyure-sage text-xs font-semibold tracking-widest uppercase mb-6"
          >
            <Image src="/green logo - Icon Only.svg" alt="" width={14} height={14} />
            Pure Organic Dairy
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-display-xl text-pyure-deep leading-[1.12] mb-6"
            style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
          >
            The Goodness<br />
            <span className="text-pyure-sage">You Can Trust</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-base lg:text-lg text-ink-muted leading-relaxed max-w-md mb-10"
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
              className="px-7 py-3.5 bg-pyure-deep text-cream-ivory font-semibold text-sm rounded-pill hover:bg-pyure-sage transition-all duration-300 hover:shadow-green hover:-translate-y-0.5 tracking-wide"
            >
              Explore Our Yogurts
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-7 py-3.5 border border-pyure-sage text-pyure-sage font-semibold text-sm rounded-pill hover:bg-pyure-deep hover:text-cream-ivory hover:border-pyure-deep transition-all duration-300 tracking-wide"
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
            className="mt-14 flex gap-8 divide-x divide-[rgba(155,183,174,0.3)]"
          >
            {[
              { value: "0%",    label: "Preservatives" },
              { value: "100%",  label: "Organic Sourced" },
              { value: "A2",    label: "Beta-Casein Milk" },
            ].map((stat, i) => (
              <div key={i} className={`${i !== 0 ? "pl-8" : ""} flex flex-col`}>
                <span
                  className="text-2xl font-bold text-pyure-deep leading-none"
                  style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-ink-muted mt-1 font-medium tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Product Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* Soft glow circle */}
          <div
            className="absolute inset-0 rounded-full scale-90 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(155,183,174,0.25) 0%, transparent 70%)" }}
          />

          {/* Floating animation wrapper */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20"
          >
            <Image
              src="/Mango_Yogurt.png"
              alt="GoPyure Mango Yogurt — fresh, preservative-free"
              width={440}
              height={520}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Floating label pill */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute top-12 -right-6 sm:-right-12 lg:-right-16 glass rounded-card px-4 py-3 shadow-card z-10"
          >
            <p className="text-xs text-ink-muted font-medium">Zero Additives</p>
            <p className="text-sm font-bold text-pyure-deep mt-0.5">100% Pure</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="absolute bottom-16 -left-6 sm:-left-12 lg:-left-16 glass rounded-card px-4 py-3 shadow-card z-10"
          >
            <p className="text-xs text-ink-muted font-medium">Certified Organic</p>
            <p className="text-sm font-bold text-pyure-deep mt-0.5">Grass-Fed Dairy</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-ink-muted/60"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-pyure-mint/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
