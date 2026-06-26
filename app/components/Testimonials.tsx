"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";

const testimonials = [
  {
    name: "Deepa Krishnan",
    role: "Home Baker & Culinary Enthusiast, Thrissur",
    quote:
      "We've been using GoPyure plain yogurt for our home baking and daily cooking for over a month now. The consistency is incredibly thick and the natural, mild sourness is just perfect—unlike most store-bought curds that are either too sour or watery. It blends so smoothly and doesn't curdle when heated. Truly premium quality.",
    rating: 5,
    initial: "DK",
    color: "#0A5039",
  },
  {
    name: "Anjali Menon",
    role: "Mother & Daily Customer, Kochi",
    quote:
      "Honestly the best yogurt I've found in Kerala. The Blueberry flavor is a huge hit with my toddler—I love that there are no added preservatives or stabilizers. It's thick, creamy, and actually tastes like real fruit rather than artificial syrup. Will definitely keep buying!",
    rating: 5,
    initial: "AM",
    color: "#346E5B",
  },
  {
    name: "Gautham Krishna",
    role: "Fitness Coach & Client Advisor, Thrissur",
    quote:
      "Tried their Mango probiotic yogurt recently after a friend recommended it. Very refreshing taste and not overly sweet, which is a rare find. It has a very natural thickness, and you can tell it's freshly made. It's great to have a local brand making clean-label dairy here in Thrissur.",
    rating: 5,
    initial: "GK",
    color: "#0A5039",
  },
  {
    name: "Meera Joseph",
    role: "Retired Bank Officer, Kottayam",
    quote:
      "Extremely satisfied with the Plain yogurt. I've had chronic digestive issues, and incorporating this live culture yogurt into my daily lunch has made a noticeable difference. It has a beautiful, rich texture and a clean finish. Very authentic taste!",
    rating: 5,
    initial: "MJ",
    color: "#346E5B",
  },
  {
    name: "Abhijith R.",
    role: "Software Engineer & Food Lover, Ernakulam",
    quote:
      "I usually find commercial yogurts too gelatinous, but GoPyure got the texture spot on. It is incredibly smooth and creamy. The fact that it is preservative-free and delivered fresh makes it worth every rupee. Mango is my absolute favorite, highly recommend trying it.",
    rating: 5,
    initial: "AR",
    color: "#0A5039",
  },
  {
    name: "Dr. Sandeep K.",
    role: "Consultant Pediatrician, Thrissur",
    quote:
      "Being a pediatrician, parents often ask me for healthy dairy options. I always advise avoiding yogurts with artificial thickeners and high sugar. GoPyure's plain probiotic yogurt is excellent—clean ingredients list, no gums, and packed with active cultures. My own family uses it daily.",
    rating: 5,
    initial: "SK",
    color: "#346E5B",
  },
  {
    name: "Harvest Event Caterers",
    role: "Professional Event Services, Thrissur",
    quote:
      "As an event caterer, finding high-quality desserts that satisfy health-conscious guests is tough. We started ordering GoPyure's Mango and Blueberry yogurts for corporate events and private gatherings in Thrissur. The feedback has been amazing—guests absolutely love the real fruit taste and how light it feels. The packaging is neat, and delivery is always on time.",
    rating: 5,
    initial: "HC",
    color: "#0A5039",
  },
];

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
      className="flex-shrink-0 w-[340px] sm:w-[380px] rounded-sm p-7 select-none border border-pyure-mint/28 hover:border-pyure-sage/45 transition-colors duration-300"
      style={{
        background: "rgba(255,249,240,0.92)",
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
          className="text-display-lg text-pyure-deep mb-4"
          style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
        >
          What Our Customers Say
        </h2>
      </motion.div>

      {/* Carousel — left-edge & right-edge fades */}
      <div className="relative">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #F9F1E6 0%, rgba(249,241,230,0) 100%)",
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, #F9F1E6 0%, rgba(249,241,230,0) 100%)",
          }}
        />

        {/* Single Row Marquee */}
        <Marquee pauseOnHover className="[--duration:40s] [--gap:1.5rem]">
          {testimonials.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

