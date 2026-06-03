"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: "mango",
    name: "Mango Yogurt",
    tag: "Fresh & Fruity",
    image: "/Mango_Yogurt.png",
    accent: "#E8A940",
    accentLight: "rgba(232,169,64,0.1)",
    badges: [
      { metric: "100%", label: "Real Mango Pulp" },
      { metric: "0g",   label: "Refined Sugar" },
      { metric: "A2",   label: "Probiotic Dairy" },
    ],
    description: "Sun-ripened Alphonso mango blended into our pure organic yogurt base. Rich, creamy, and naturally sweet.",
  },
  {
    id: "blueberry",
    name: "Blueberry Yogurt",
    tag: "Antioxidant Rich",
    image: "/Blueberry_Yogurt.png",
    accent: "#5B4FC2",
    accentLight: "rgba(91,79,194,0.08)",
    badges: [
      { metric: "100%", label: "Real Blueberries" },
      { metric: "0%",   label: "Preservatives" },
      { metric: "Live", label: "Probiotic Cultures" },
    ],
    description: "Wild blueberries paired with silky smooth organic yogurt. Naturally vibrant, naturally nourishing.",
  },
  {
    id: "plain",
    name: "Plain Yogurt",
    tag: "Classic & Clean",
    image: "/Plain_Yogurt.png",
    accent: "#346E5B",
    accentLight: "rgba(52,110,91,0.08)",
    badges: [
      { metric: "Pure", label: "Unsweetened" },
      { metric: "A2",   label: "Beta-Casein Milk" },
      { metric: "0%",   label: "Additives" },
    ],
    description: "Nothing added, nothing hidden. Just pure organic yogurt in its most honest, versatile form.",
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -6, y: dx * 6 });
  }, []);

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: hovered ? "transform 0.1s" : "transform 0.5s cubic-bezier(0.25,1,0.5,1)",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-card overflow-hidden cursor-default will-change-transform group"
    >
      {/* Card body */}
      <div
        className="rounded-card border p-6 flex flex-col h-full transition-shadow duration-300"
        style={{
          background: `radial-gradient(circle at 50% 115%, ${product.accentLight}, #FFF9F0 60%)`,
          borderColor: hovered ? product.accent + "44" : "rgba(155,183,174,0.28)",
          boxShadow: hovered
            ? `0 20px 60px -10px rgba(10,80,57,0.12), 0 4px 20px -4px rgba(10,80,57,0.06)`
            : "0 4px 20px -2px rgba(10,80,57,0.04)",
        }}
      >
        {/* Tag */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-pill"
            style={{ color: product.accent, background: product.accentLight }}
          >
            {product.tag}
          </span>
        </div>

        {/* Product image */}
        <div
          className="relative flex items-center justify-center py-4 mb-6 rounded-2xl"
          style={{ background: `radial-gradient(circle at 50% 100%, ${product.accentLight} 0%, transparent 65%)` }}
        >
          <motion.div
            animate={hovered ? { y: -6, scale: 1.03 } : { y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={220}
              height={260}
              className="object-contain drop-shadow-lg"
            />
          </motion.div>
        </div>

        {/* Name & description */}
        <h3
          className="text-xl font-semibold text-pyure-deep mb-2"
          style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
        >
          {product.name}
        </h3>
        <p className="text-sm text-ink-muted leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Purity badges */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          {product.badges.map((badge, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center rounded-xl py-2.5 px-1"
              style={{ background: "rgba(255,255,255,0.5)", border: "1px solid rgba(155,183,174,0.2)" }}
            >
              <span
                className="text-base font-bold leading-none"
                style={{ color: product.accent, fontFamily: "'Konkhmer Sleokchher', serif" }}
              >
                {badge.metric}
              </span>
              <span className="text-[10px] text-ink-muted mt-1 leading-tight font-medium">
                {badge.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          className="w-full py-3 text-sm font-semibold rounded-pill border transition-all duration-300"
          style={{
            color: product.accent,
            borderColor: product.accent + "55",
            background: hovered ? product.accentLight : "transparent",
          }}
        >
          Inquire to Order
        </button>
      </div>
    </motion.div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="collection" className="py-24 lg:py-32" style={{ background: "#FFFDF9" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
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
          <p className="text-ink-muted max-w-md mx-auto leading-relaxed">
            Three variants. Zero compromises. Every batch is made from organically sourced dairy
            with no preservatives, no additives, no shortcuts.
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
