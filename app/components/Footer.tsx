"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Yogurts", href: "#collection" },
  { label: "Our Promise", href: "#pillars" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="border-t"
      style={{
        background: "#FFFDF9",
        borderColor: "rgba(155,183,174,0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <Image
              src="/green logo - with tag line.svg"
              alt="GoPyure"
              width={160}
              height={48}
              className="h-10 w-auto"
            />
            <p className="text-xs text-ink-muted max-w-xs leading-relaxed">
              Pure organic dairy, made with care and honesty for everyday families.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-xs font-medium text-ink-muted hover:text-pyure-deep transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Contact quick links */}
          <div className="flex flex-col gap-1.5 text-right">
            <a href="mailto:hello@gopyure.in" className="text-xs text-ink-muted hover:text-pyure-deep transition-colors">
              hello@gopyure.in
            </a>
            <a href="tel:+919876543210" className="text-xs text-ink-muted hover:text-pyure-deep transition-colors">
              +91 98765 43210
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t text-xs text-ink-muted"
          style={{ borderColor: "rgba(155,183,174,0.18)" }}
        >
          <p>© {new Date().getFullYear()} GoPyure. All rights reserved.</p>
          <p>Made with care in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
