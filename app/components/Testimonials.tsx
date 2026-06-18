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
      className="flex-shrink-0 w-[340px] sm:w-[380px] mx-4 rounded-sm p-7 select-none border border-pyure-mint/28 hover:border-pyure-sage/45 transition-colors duration-300"
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
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const isInteractingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const isMomentumActiveRef = useRef(false);

  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);

  const dragVelocityRef = useRef(0);
  const momentumVelocityRef = useRef(0);
  const dragHistoryRef = useRef<{ x: number; time: number }[]>([]);
  const lastScrollTimeRef = useRef(0);

  // Auto-scroll loop using requestAnimationFrame, incorporating momentum scroll physics
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const initScroll = () => {
      const oneCopyWidth = container.scrollWidth / 3;
      if (oneCopyWidth > 0) {
        container.scrollLeft = oneCopyWidth;
        return true;
      }
      return false;
    };

    let initialized = initScroll();
    let animationFrameId: number;
    let lastTime = performance.now();
    const autoSpeed = 35; // Normal auto-scroll speed (pixels per second)

    const loop = (time: number) => {
      if (!container) return;

      if (!initialized) {
        initialized = initScroll();
      }

      const delta = (time - lastTime) / 1000;
      lastTime = time;

      // Cap delta to prevent massive jumps when switching browser tabs
      const cappedDelta = Math.min(delta, 0.1);

      if (initialized) {
        if (isMomentumActiveRef.current) {
          // 1. Move scroll position by momentum velocity
          container.scrollLeft += momentumVelocityRef.current * cappedDelta;

          // 2. Dampen momentum velocity towards normal autoSpeed (friction simulation)
          // Uses exponential decay to smoothly slow down and eventually match the autoSpeed
          momentumVelocityRef.current = momentumVelocityRef.current + (autoSpeed - momentumVelocityRef.current) * (1 - Math.exp(-3.5 * cappedDelta));

          // 3. When momentum velocity is very close to autoSpeed, turn off momentum mode
          if (Math.abs(momentumVelocityRef.current - autoSpeed) < 1.5) {
            isMomentumActiveRef.current = false;
            isInteractingRef.current = false;
          }
        } else if (!isInteractingRef.current && !isHoveredRef.current) {
          // Normal auto-scroll
          container.scrollLeft += autoSpeed * cappedDelta;
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Handle infinite wrap-around seamlessly when scrolling (supports drag, touch, wheel)
  const handleScroll = () => {
    lastScrollTimeRef.current = performance.now();

    const container = containerRef.current;
    if (!container) return;
    const scrollWidth = container.scrollWidth;
    const oneCopyWidth = scrollWidth / 3;
    if (oneCopyWidth <= 0) return;

    if (container.scrollLeft >= oneCopyWidth * 2) {
      container.scrollLeft -= oneCopyWidth;
      // Adjust startScrollLeftRef so that dragging/momentum does not jump
      if (isDraggingRef.current) {
        startScrollLeftRef.current -= oneCopyWidth;
      }
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += oneCopyWidth;
      // Adjust startScrollLeftRef so that dragging/momentum does not jump
      if (isDraggingRef.current) {
        startScrollLeftRef.current += oneCopyWidth;
      }
    }
  };

  // Mouse Drag Events
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    isDraggingRef.current = true;
    isInteractingRef.current = true;
    isMomentumActiveRef.current = false; // Stop any ongoing momentum instantly

    startXRef.current = e.pageX - container.offsetLeft;
    startScrollLeftRef.current = container.scrollLeft;

    dragVelocityRef.current = 0;
    dragHistoryRef.current = [{ x: e.pageX, time: performance.now() }];

    container.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const container = containerRef.current;
    if (!container) return;

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // Drag sensitivity multiplier
    container.scrollLeft = startScrollLeftRef.current - walk;

    // Track drag position and timestamps for velocity calculations (rolling last 100ms window)
    const now = performance.now();
    dragHistoryRef.current.push({ x: e.pageX, time: now });
    const limit = now - 100;
    dragHistoryRef.current = dragHistoryRef.current.filter(item => item.time > limit);
  };

  const handleMouseUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    const container = containerRef.current;
    if (container) {
      container.style.cursor = "grab";
    }

    const now = performance.now();
    const history = dragHistoryRef.current.filter(item => item.time > now - 100);

    // Calculate final drag velocity upon release
    if (history.length >= 2) {
      const first = history[0];
      const last = history[history.length - 1];
      const dt = (last.time - first.time) / 1000;
      if (dt > 0.01) {
        const dx = (last.x - first.x) * 1.5;
        // Negative dx (mouse moved left) translates to positive scroll velocity
        dragVelocityRef.current = -dx / dt;
      } else {
        dragVelocityRef.current = 0;
      }
    } else {
      dragVelocityRef.current = 0;
    }

    // Trigger momentum mode if they flung it at a reasonable speed
    if (Math.abs(dragVelocityRef.current) > 20) {
      momentumVelocityRef.current = dragVelocityRef.current;
      isMomentumActiveRef.current = true;
    } else {
      isInteractingRef.current = false;
    }
  };

  const handleMouseLeave = () => {
    if (isDraggingRef.current) {
      handleMouseUp();
    }
    isHoveredRef.current = false;
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  // Touch Swipe Events (mobile native physics and scroll pause)
  const handleTouchStart = () => {
    isInteractingRef.current = true;
    isMomentumActiveRef.current = false; // Stop any custom momentum if they touch during fling
  };

  const handleTouchEnd = () => {
    // Check periodically if the mobile device's native inertial scroll has stopped
    // before resuming auto-scroll to avoid visual fighting between physics and auto-scroll
    const checkScrollEnd = () => {
      const now = performance.now();
      if (now - lastScrollTimeRef.current > 150) {
        isInteractingRef.current = false;
      } else {
        setTimeout(checkScrollEnd, 50);
      }
    };
    setTimeout(checkScrollEnd, 150);
  };

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

        {/* Scrollable Container */}
        <div
          ref={containerRef}
          className="overflow-x-auto scrollbar-none flex items-stretch py-3 cursor-grab select-none touch-pan-x"
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          aria-label="Customer testimonials carousel"
        >
          {/* Scrolling track */}
          <div className="flex flex-nowrap" style={{ width: "max-content" }}>
            {looped.map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

