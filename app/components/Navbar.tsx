"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";

const navLinks = [
  { label: "Yogurts", href: "#collection" },
  { label: "Our Promise", href: "#pillars" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lenis = useLenis();

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (lenis) {
      lenis.scrollTo(href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        .btn-style-2 {
          position: relative;
          z-index: 1;
          overflow: hidden;
          cursor: pointer;
          border: none;
          border-radius: 0 !important;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: color 0.5s ease, border-color 0.5s ease;
        }

        .btn-style-2:after {
          content: "";
          position: absolute;
          z-index: -1;
          left: -20%;
          right: -20%;
          top: 0;
          bottom: 0;
          transform: skewX(-45deg) scale(0, 1);
          transition: transform 0.5s cubic-bezier(0.85, 0, 0.15, 1);
        }

        .btn-style-2:hover:after {
          transform: skewX(-45deg) scale(1, 1);
        }

        .btn-style-2-scrolled {
          background-color: var(--pyure-deep);
          color: var(--cream-ivory);
          border: 1px solid var(--pyure-deep);
        }
        .btn-style-2-scrolled:after {
          background-color: var(--cream-ivory);
        }
        .btn-style-2-scrolled:hover {
          color: var(--pyure-deep);
          border-color: var(--cream-ivory);
        }

        .btn-style-2-unscrolled {
          background-color: var(--cream-ivory);
          color: var(--pyure-deep);
          border: 1px solid var(--cream-ivory);
        }
        .btn-style-2-unscrolled:after {
          background-color: var(--pyure-deep);
        }
        .btn-style-2-unscrolled:hover {
          color: var(--cream-ivory);
          border-color: var(--pyure-deep);
        }
      `}</style>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "navbar-glass shadow-card"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/green logo - without tag line.svg"
              alt="GoPyure"
              width={140}
              height={40}
              className={`h-8 lg:h-9 w-auto transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors duration-300 tracking-wide ${
                  scrolled
                    ? "text-ink-charcoal hover:text-pyure-deep"
                    : "text-cream-ivory/80 hover:text-cream-ivory"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#contact")}
              className={`btn-style-2 px-5 py-2.5 text-sm font-semibold tracking-wide ${
                scrolled ? "btn-style-2-scrolled" : "btn-style-2-unscrolled"
              }`}
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
              className={`block w-5 h-0.5 rounded-full origin-center transition-all ${
                scrolled ? "bg-pyure-deep" : "bg-cream-ivory"
              }`}
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className={`block w-5 h-0.5 rounded-full transition-all ${
                scrolled ? "bg-pyure-deep" : "bg-cream-ivory"
              }`}
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
              className={`block w-5 h-0.5 rounded-full origin-center transition-all ${
                scrolled ? "bg-pyure-deep" : "bg-cream-ivory"
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-16 z-40 navbar-glass lg:hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-3 text-base font-medium text-ink-charcoal hover:text-pyure-deep border-b border-[rgba(155,183,174,0.15)] last:border-0 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="mt-4 w-full py-3 btn-style-2 btn-style-2-scrolled text-sm font-semibold"
              >
                Get in Touch
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
