"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: "mango",
    name: "Mango Yogurt",
    weight: "100g",
    image: "/Mango_Yogurt.png",
    description: "A smooth blend of our signature probiotic yogurt and mango fruit preparation. Clean, refreshing, and naturally flavored.",
  },
  {
    id: "blueberry",
    name: "Blueberry Yogurt",
    weight: "100g",
    image: "/Blueberry_Yogurt.png",
    description: "Our classic probiotic yogurt combined with blueberry fruit preparation. Smooth texture with a delicious berry taste.",
  },
  {
    id: "plain",
    name: "Plain Yogurt",
    weight: "100g",
    image: "/Plain_Yogurt.png",
    description: "Pure, unsweetened probiotic yogurt made simply with organically sourced dairy and active live cultures.",
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.7, ease: "easeOut" as const },
});

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      {...fadeUp(index * 0.15)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col justify-between h-full bg-white border border-[#E5ECE9] p-6 transition-all duration-300 rounded-none"
      style={{
        boxShadow: hovered
          ? "0 12px 28px -8px rgba(10,80,57,0.12)"
          : "0 4px 16px -6px rgba(10,80,57,0.02)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
    >
      <div>
        {/* Image Display Box with Neutral Background */}
        <div className="relative flex items-center justify-center p-4 mb-6 bg-cream-soft border border-[#EFE8DE] rounded-none overflow-hidden h-72 w-full">
          {/* Weight label inside image container, top-right */}
          <div className="absolute top-3 right-3 z-10">
            <span className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 border border-[#B33C29]/30 text-[#B33C29] bg-[#FFFDF9]">
              Net Wt. {product.weight}
            </span>
          </div>

          <motion.div
            animate={hovered ? { y: -4, scale: 1.03 } : { y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="h-full flex items-center justify-center w-full"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={240}
              height={280}
              className="object-contain max-h-[92%] w-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.08)]"
            />
          </motion.div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col mb-6">
          <div className="flex items-baseline justify-between mb-2">
            <h3
              className="text-xl font-bold text-pyure-deep"
              style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
            >
              {product.name}
            </h3>
          </div>
          
          <p className="text-xs font-bold tracking-widest text-[#E8A940] uppercase mb-2.5">
            Probiotic Yogurt
          </p>

          <p className="text-xs text-ink-muted leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
        className="btn-product-order"
      >
        Inquire to Order
      </button>
    </motion.div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="collection" className="py-24 lg:py-32" style={{ background: "#FFFDF9" }}>
      <style>{`
        .btn-product-order {
          position: relative;
          z-index: 1;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid var(--pyure-deep);
          border-radius: 0 !important;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: color 0.5s ease, border-color 0.5s ease;
          background-color: var(--pyure-deep);
          color: var(--cream-ivory);
          width: 100%;
          padding-top: 12px;
          padding-bottom: 12px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .btn-product-order:after {
          content: "";
          position: absolute;
          z-index: -1;
          left: -20%;
          right: -20%;
          top: 0;
          bottom: 0;
          background-color: var(--cream-linen);
          transform: skewX(-45deg) scale(0, 1);
          transition: transform 0.5s cubic-bezier(0.85, 0, 0.15, 1);
        }

        .btn-product-order:hover {
          color: var(--pyure-deep);
          border-color: var(--pyure-deep);
        }

        .btn-product-order:hover:after {
          transform: skewX(-45deg) scale(1, 1);
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          {...fadeUp(0)}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-pyure-sage mb-3">
            Our Collection
          </p>
          <h2
            className="text-display-lg text-pyure-deep mb-4"
            style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
          >
            The Pure Yogurt Range
          </h2>
          <p className="text-ink-muted max-w-xl mx-auto leading-relaxed text-sm lg:text-base">
            Our signature range of probiotic-rich yogurts, crafted from organically sourced dairy. Made in small batches with no artificial additives, no preservatives, and zero compromises.
          </p>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
