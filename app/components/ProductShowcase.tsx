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
    accent: "#E8A940",
    accentLight: "rgba(232,169,64,0.06)",
    description: "Creamy yogurt blended with rich mango flavor. Made with quality organic dairy for a delicious and refreshing snack.",
  },
  {
    id: "blueberry",
    name: "Blueberry Yogurt",
    weight: "100g",
    image: "/Blueberry_Yogurt.png",
    accent: "#5B4FC2",
    accentLight: "rgba(91,79,194,0.04)",
    description: "Smooth and delicious yogurt with blueberry flavor. Crafted with organically sourced dairy.",
  },
  {
    id: "plain",
    name: "Plain Yogurt",
    weight: "100g",
    image: "/Plain_Yogurt.png",
    accent: "#346E5B",
    accentLight: "rgba(52,110,91,0.06)",
    description: "Simple, clean, and classic yogurt made from organically sourced dairy.",
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
      className="relative border p-8 flex flex-col justify-between h-full transition-all duration-300 rounded-none bg-cream-soft"
      style={{
        borderColor: hovered ? product.accent + "55" : "rgba(155,183,174,0.22)",
        boxShadow: hovered
          ? "0 16px 36px -12px rgba(10,80,57,0.12)"
          : "0 4px 20px -6px rgba(10,80,57,0.03)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
    >
      <div>
        {/* Top Weight Label */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 border transition-colors duration-300 rounded-none"
            style={{
              color: product.accent,
              borderColor: hovered ? product.accent : "rgba(155,183,174,0.3)",
            }}
          >
            Net Wt: {product.weight}
          </span>
        </div>

        {/* Product image */}
        <div
          className="relative flex items-center justify-center py-6 mb-8"
          style={{ background: `radial-gradient(circle at 50% 100%, ${product.accentLight} 0%, transparent 72%)` }}
        >
          <motion.div
            animate={hovered ? { y: -4, scale: 1.02 } : { y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={210}
              height={250}
              className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
            />
          </motion.div>
        </div>

        {/* Name */}
        <h3
          className="text-2xl font-bold text-pyure-deep mb-3"
          style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-ink-muted leading-relaxed mb-8">
          {product.description}
        </p>
      </div>

      {/* Action Button */}
      <button
        onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
        className="w-full py-3 text-sm font-semibold border transition-all duration-300 rounded-none cursor-pointer"
        style={{
          color: product.accent,
          borderColor: product.accent + "55",
          background: hovered ? product.accentLight : "transparent",
        }}
      >
        Inquire to Order
      </button>
    </motion.div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="collection" className="py-24 lg:py-32" style={{ background: "#FFFDF9" }}>
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
          <p className="text-ink-muted max-w-lg mx-auto leading-relaxed text-sm lg:text-base">
            Delicious yogurts crafted from organically sourced dairy. Every batch is made with no preservatives, no artificial additives, and zero compromises.
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
