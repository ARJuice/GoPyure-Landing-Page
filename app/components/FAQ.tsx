"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What makes GoPyure different from regular supermarket yogurt?",
    a: "GoPyure yogurts are made with zero preservatives, stabilisers, or synthetic additives. Every batch is freshly made and cold-chain delivered — so what you get is as close to homemade as a packaged product can be. Most commercial yogurts rely on heat treatment and chemical preservatives to extend shelf life; we rely on proper cold storage and high manufacturing hygiene instead.",
  },
  {
    q: "Are your products completely preservative-free?",
    a: "Yes, absolutely. GoPyure uses no chemical preservatives whatsoever. Natural freshness is maintained through strict cold-chain logistics and hygienic manufacturing. Our shelf life is shorter than commercial brands — and that's intentional.",
  },
  {
    q: "What live cultures are used in GoPyure yogurt?",
    a: "GoPyure yogurt is fermented using two well-established, scientifically recognised probiotic strains: Streptococcus thermophilus and Lactobacillus delbrueckii subsp. bulgaricus. These are the classic yogurt cultures used in traditional dairy fermentation worldwide, known for producing a smooth texture, natural sourness, and genuine probiotic activity. Both strains are extensively studied and considered safe for all age groups.",
  },
  {
    q: "How can I place an order or find GoPyure near me?",
    a: "You can reach us via phone, WhatsApp, or email (details in our Contact section below) and we'll guide you to the nearest available option. GoPyure is also stocked in select supermarkets and bakeries that maintain cold storage — we prioritise outlets where proper refrigeration is guaranteed.",
  },
  {
    q: "Do you supply for events, hospitals, or bulk orders?",
    a: "Yes — GoPyure is available for bulk supply and has been trusted in several hospitals, making it a reliable choice for health-conscious environments. We also supply to events as a healthy dessert option — our Mango and Blueberry yogurts have been especially well-received at weddings and corporate gatherings. We regularly stock supermarkets and bakeries with cold storage capacity. Please reach out via email or phone with your requirements and we'll arrange a tasting and supply discussion.",
  },
  {
    q: "How should I store GoPyure yogurt?",
    a: "All GoPyure yogurts must be refrigerated at all times (2–6°C). Once opened, consume within 2 days. Do not freeze. The lack of preservatives means freshness depends on proper cold storage.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-32" style={{ background: "#FFFDF9" }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-pyure-sage mb-3">
            Frequently Asked
          </p>
          <h2
            className="text-display-lg text-pyure-deep"
            style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
          >
            Your Questions, Answered
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="rounded-card overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(255,249,240,0.9)",
                  border: `1px solid ${isOpen ? "rgba(52,110,91,0.35)" : "rgba(155,183,174,0.25)"}`,
                  boxShadow: isOpen ? "0 8px 30px -6px rgba(10,80,57,0.08)" : "none",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                >
                  <span className="text-sm font-semibold text-ink-charcoal leading-snug">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-pyure-sage text-lg font-light"
                    style={{ background: isOpen ? "#0A5039" : "rgba(155,183,174,0.2)", color: isOpen ? "#FFFDF9" : "#346E5B" }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                    >
                      <p className="px-6 pb-5 text-sm text-ink-muted leading-relaxed border-t border-[rgba(155,183,174,0.2)] pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
