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
      className="relative min-h-[100dvh] lg:h-screen flex items-center overflow-hidden"
    >
      <style>{`
        .hero-bg-media {
          background-image: url('/hero-split-bg.png');
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }
        @media (max-width: 1023px) {
          .hero-bg-media {
            background-size: 200% 100% !important;
            background-position: left center !important;
          }
        }

        .btn-style-1 {
          border: 2px solid var(--cream-ivory);
          border-radius: 0 !important;
          box-sizing: border-box;
          display: inline-block;
          font-weight: 600;
          overflow: hidden;
          padding: 12px 32px;
          position: relative;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 0.15em;
          background: transparent;
          color: var(--cream-ivory);
          cursor: pointer;
        }

        .btn-style-1 .original {
          background: var(--cream-ivory);
          color: var(--pyure-deep);
          display: grid;
          inset: 0;
          place-content: center;
          position: absolute;
          transition: transform 0.35s cubic-bezier(0.87, 0, 0.13, 1);
          font-weight: 600;
        }

        .btn-style-1:hover .original {
          transform: translateY(100%);
        }

        .btn-style-1 .letters {
          display: inline-flex;
        }

        .btn-style-1 span {
          opacity: 0;
          transform: translateY(-15px);
          transition: transform 0.35s cubic-bezier(0.87, 0, 0.13, 1), opacity 0.35s;
          transition-delay: calc(var(--i) * 0.04s);
          color: var(--cream-ivory);
          display: inline-block;
        }

        .btn-style-1 span:nth-child(2n) {
          transform: translateY(15px);
        }

        .btn-style-1:hover span {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      {/* ── Background — stretched to fill exactly the viewport ── */}
      <div className="absolute inset-0 pointer-events-none hero-bg-media" />

      {/* ── Content: single left column, all within h-screen ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-14 flex items-center min-h-[100dvh] lg:h-full">

        {/* Stack elements vertically on mobile, placing text at top and shelf at bottom */}
        <div className="flex flex-col-reverse lg:flex-col items-center lg:items-start justify-between lg:justify-center w-full max-w-[640px] lg:max-w-[760px] pt-24 pb-8 lg:pt-16 lg:pb-0 -mt-0 lg:-mt-16 xl:-mt-24 gap-6 lg:gap-0 min-h-[calc(100dvh-120px)] lg:min-h-0">

          {/* Spacer that holds the height in flow, and overlays the viewport-absolute stand & cups */}
          <div className="relative w-[110vw] left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:w-full aspect-[6000/3375] lg:max-h-[83vh] mb-0 lg:-mb-4 xl:-mb-8">
            <motion.div
              {...fadeUp(0)}
              className="absolute inset-0 lg:left-0 lg:translate-x-0 xl:left-[calc(-50vw+50%)] lg:top-0 lg:w-[68vw] xl:w-[53vw] lg:max-w-[min(880px,147.5vh)] lg:aspect-[6000/3375] z-10 pointer-events-none"
            >
              {/* The stand (wooden shelf) */}
              <div
                className="absolute left-0 w-full z-0 pointer-events-none"
                style={{ top: "52.4%" }}
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

              {/* Yogurt cups sitting on the right edge of the stand */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[10%] w-[85%] z-10 lg:left-auto lg:translate-x-0 lg:right-0 lg:top-[17%] lg:w-[72%]">
                <Image
                  src="/hero-products.png"
                  alt="GoPyure Mango, Plain and Blueberry Yogurt — full range"
                  width={6000}
                  height={3375}
                  className="w-full h-auto object-contain object-right drop-shadow-[0_5px_8px_rgba(0,0,0,0.5)] drop-shadow-[0_15px_30px_rgba(0,0,0,0.35)]"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Text Content Wrapper — shifted left on desktop but centered/normal on mobile */}
          <div className="w-full ml-0 xl:-ml-18 pr-0 lg:pr-4 xl:pr-0 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Headline */}
            <motion.h1
              {...fadeUp(0.16)}
              className="text-cream-ivory font-bold leading-[1.1] tracking-tight mb-3 text-center lg:text-left"
              style={{
                fontFamily: "'Konkhmer Sleokchher', serif",
                fontSize: "clamp(1.85rem, 4vw, 3.4rem)",
              }}
            >
              Good for your gut.<br />
              <span className="text-[#E8A940]">Great for your taste buds.</span>
            </motion.h1>

            {/* Sub-line */}
            <motion.p
              {...fadeUp(0.28)}
              className="text-cream-linen/85 lg:text-cream-linen/68 text-sm lg:text-base leading-relaxed mb-7 max-w-md text-center lg:text-left"
            >
              Delicious probiotic yogurts crafted to support everyday gut health.
            </motion.p>

            {/* CTA pill */}
            <motion.div {...fadeUp(0.4)}>
              <button
                onClick={() => scrollTo("#collection")}
                className="btn-style-1"
              >
                <div className="original">Our Yogurts</div>
                <div className="letters">
                  {["O", "u", "r", "\u00A0", "Y", "o", "g", "u", "r", "t", "s"].map((char, index) => (
                    <span key={index} style={{ "--i": index } as React.CSSProperties}>
                      {char}
                    </span>
                  ))}
                </div>
              </button>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator — pinned bottom centre */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1.5 text-cream-linen/30"
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
