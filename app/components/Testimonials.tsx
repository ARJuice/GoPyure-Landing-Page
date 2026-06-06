"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Mother of two, Bangalore",
    quote:
      "I've been buying GoPyure yogurt every week for the past three months. Knowing there are zero preservatives gives me real peace of mind when feeding my kids.",
    rating: 5,
    initial: "PS",
    color: "#0A5039",
  },
  {
    name: "Dr. Anita Menon",
    role: "Nutritionist, Chennai",
    quote:
      "GoPyure is one of the few brands I confidently recommend to my clients. The A2 dairy base and live cultures make this genuinely good food, not just marketing.",
    rating: 5,
    initial: "AM",
    color: "#346E5B",
  },
  {
    name: "Rahul Nair",
    role: "Fitness Coach, Kochi",
    quote:
      "Plain yogurt with no fillers, no gums, no nonsense. It's exactly what it says it is — and it tastes exceptional. The texture is unlike anything I've had from a packaged brand.",
    rating: 5,
    initial: "RN",
    color: "#0A5039",
  },
  {
    name: "Deepa Krishnan",
    role: "Home chef, Hyderabad",
    quote:
      "I use the plain yogurt in all my cooking. The quality is consistent, the sourness is natural, and it never breaks when heated. Truly a premium product.",
    rating: 5,
    initial: "DK",
    color: "#346E5B",
  },
  {
    name: "Harvest Catering Co.",
    role: "Event Caterer, Thrissur",
    quote:
      "We started offering GoPyure Mango & Blueberry yogurts as healthy mini-dessert cups at weddings and corporate events. The response has been overwhelming — guests rave about the authentic fruit flavours and smooth finish.",
    rating: 5,
    initial: "HC",
    color: "#0A5039",
  },
];

// Duplicate the list so the loop feels truly infinite
const looped = [...testimonials, ...testimonials, ...testimonials];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" className="w-4 h-4 fill-[#E8A940]">
          <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.4l-3.71 2.15L5 8.42 2 5.5l4.15-.75z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div
      className="flex-shrink-0 w-[340px] sm:w-[380px] mx-4 rounded-sm p-7 select-none"
      style={{
        background: "rgba(255,249,240,0.92)",
        border: "1px solid rgba(155,183,174,0.28)",
        boxShadow: "0 6px 32px -4px rgba(10,80,57,0.07)",
      }}
    >
      <StarRating count={t.rating} />

      <blockquote className="text-sm leading-relaxed text-ink-charcoal italic mb-6">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center
                     text-xs font-bold text-cream-ivory"
          style={{ background: t.color }}
        >
          {t.initial}
        </div>
        <div>
          <p className="text-sm font-semibold text-pyure-deep leading-none">{t.name}</p>
          <p className="text-xs text-ink-muted mt-0.5">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  // CSS-only infinite marquee via animation; pause on hover handled in CSS
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 overflow-hidden"
      style={{ background: "#F9F1E6" }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14 px-6"
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

      {/* Carousel — left-edge & right-edge fades */}
      <div className="relative">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #F9F1E6 0%, rgba(249,241,230,0) 100%)",
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, #F9F1E6 0%, rgba(249,241,230,0) 100%)",
          }}
        />

        {/* Scrolling track */}
        <div
          ref={trackRef}
          className="flex items-stretch py-3 testimonial-marquee"
          style={{ width: "max-content" }}
          aria-label="Customer testimonials carousel"
        >
          {looped.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonial-marquee {
          animation: marquee-scroll 38s linear infinite;
        }
        .testimonial-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
      `}</style>
    </section>
  );
}
