"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Mother of two, Bangalore",
    quote:
      "I've been buying GoPyure yogurt every week for the past three months. Knowing there are zero preservatives gives me real peace of mind when feeding my kids.",
    rating: 5,
    initial: "PS",
  },
  {
    name: "Dr. Anita Menon",
    role: "Nutritionist, Chennai",
    quote:
      "GoPyure is one of the few brands I confidently recommend to my clients. The A2 dairy base and live cultures make this genuinely good food, not just marketing.",
    rating: 5,
    initial: "AM",
  },
  {
    name: "Rahul Nair",
    role: "Fitness Coach, Kochi",
    quote:
      "Plain yogurt with no fillers, no gums, no nonsense. It's exactly what it says it is — and it tastes exceptional. The texture is unlike anything I've had from a packaged brand.",
    rating: 5,
    initial: "RN",
  },
  {
    name: "Deepa Krishnan",
    role: "Home chef, Hyderabad",
    quote:
      "I use the plain yogurt in all my cooking. The quality is consistent, the sourness is natural, and it never breaks when heated. Truly a premium product.",
    rating: 5,
    initial: "DK",
  },
  {
    name: "Harvest Catering Co.",
    role: "Event Caterer, Thrissur",
    quote:
      "We started offering GoPyure Mango & Blueberry yogurts as healthy mini-dessert cups at weddings and corporate events. The response has been overwhelming — guests rave about the authentic fruit flavors and smooth finish.",
    rating: 5,
    initial: "HC",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32"
      style={{ background: "#F9F1E6" }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-pyure-sage mb-3">
            Real Experiences
          </p>
          <h2
            className="text-display-lg text-pyure-deep"
            style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
          >
            What Our Customers Say
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <div className="relative min-h-[260px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="w-full max-w-2xl mx-auto rounded-card p-8 lg:p-10 text-center"
              style={{
                background: "rgba(255,249,240,0.85)",
                border: "1px solid rgba(155,183,174,0.28)",
                boxShadow: "0 10px 40px -8px rgba(10,80,57,0.07)",
              }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <span key={i} className="text-[#E8A940] text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-base lg:text-lg text-ink-charcoal leading-relaxed mb-8 italic">
                &ldquo;{testimonials[active].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-cream-ivory"
                  style={{ background: "#0A5039" }}
                >
                  {testimonials[active].initial}
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-pyure-deep">{testimonials[active].name}</p>
                  <p className="text-xs text-ink-muted">{testimonials[active].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? "24px" : "8px",
                height: "8px",
                background: i === active ? "#0A5039" : "rgba(155,183,174,0.5)",
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
