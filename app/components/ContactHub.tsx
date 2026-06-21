"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5 text-pyure-sage" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25C4.5 6.358 7.858 3 12 3c4.142 0 7.5 3.358 7.5 7.5z" />
      </svg>
    ),
    label: "Visit Us",
    value: "Bldg No-12/175, Grama Panchayat\nGOPYURE FOOD PRODUCTS, near Pooram foods\nWest Vellanikara, Madakkathara\nKerala – 680651",
    link: "https://maps.app.goo.gl/2YUXEBkpa3ugVMZ36",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-pyure-sage" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.622C2.25 5.72 2.923 5 3.75 5h3.013c.485 0 .91.318 1.045.782l1.244 4.298c.118.409-.017.854-.343 1.129l-1.94 1.616a12.015 12.015 0 0 0 4.8 4.8l1.616-1.94c.275-.326.72-.46 1.129-.343l4.298 1.244c.484.136.802.56.802 1.045V19.75c0 .828-.672 1.5-1.5 1.5H19.5c-9.665 0-17.5-7.835-17.5-17.5V6.622z" />
      </svg>
    ),
    label: "Call / WhatsApp",
    value: "+91 88482 50602",
    link: "tel:+918848250602",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-pyure-sage" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "gopyurefoodproducts@gmail.com",
    link: "mailto:gopyurefoodproducts@gmail.com",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-pyure-sage" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Hours",
    value: "Mon – Sat: 9:00 AM – 7:00 PM\nSunday: 10:00 AM – 4:00 PM",
    link: null,
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/gopyure",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/gopyure",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/918848250602",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

export default function ContactHub() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32"
      style={{ background: "#F9F1E6" }}
    >
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

        .btn-style-2-whatsapp {
          background-color: transparent;
          color: var(--cream-ivory);
          border: 1px solid rgba(155, 183, 174, 0.4);
        }
        .btn-style-2-whatsapp:after {
          background-color: var(--cream-ivory);
        }
        .btn-style-2-whatsapp:hover {
          color: var(--pyure-deep);
          border-color: var(--cream-ivory);
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-pyure-sage mb-3">
            We&apos;re Here
          </p>
          <h2
            className="text-display-lg text-pyure-deep mb-4"
            style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
          >
            Get in Touch
          </h2>
          <p className="text-ink-muted max-w-sm mx-auto text-sm leading-relaxed">
            To order, inquire about stockists, or just say hello — we&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="rounded-card p-8 flex flex-col justify-between gap-6"
            style={{
              background: "rgba(255,249,240,0.9)",
              border: "1px solid rgba(155,183,174,0.25)",
              boxShadow: "0 8px 40px -8px rgba(10,80,57,0.06)",
            }}
          >
            <div className="flex flex-col gap-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                    style={{ background: "rgba(52,110,91,0.1)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-ink-muted uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-pyure-deep hover:text-pyure-sage transition-colors whitespace-pre-line underline decoration-pyure-mint/30 decoration-1 underline-offset-4 hover:decoration-pyure-sage"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-ink-charcoal whitespace-pre-line">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div className="pt-4 border-t border-[rgba(155,183,174,0.2)]">
              <p className="text-xs font-semibold text-ink-muted uppercase tracking-widest mb-4">
                Follow Along
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-pyure-sage hover:text-cream-ivory hover:bg-pyure-deep transition-all duration-300"
                    style={{ background: "rgba(52,110,91,0.08)" }}
                  >
                    {s.svg}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Tagline card + image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="rounded-card overflow-hidden relative flex flex-col justify-between p-8 min-h-[360px]"
            style={{
              background: "linear-gradient(145deg, #0A5039 0%, #082E23 100%)",
              border: "1px solid rgba(155,183,174,0.1)",
            }}
          >
            {/* Subtle glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(155,183,174,0.15) 0%, transparent 70%)" }}
            />

            <div className="relative z-10">
              <Image
                src="/white logo - with tag line.svg"
                alt="GoPyure — The Goodness You Can Trust"
                width={180}
                height={54}
                className="mb-8"
              />
              <p className="text-cream-ivory/80 text-sm leading-relaxed max-w-xs">
                We believe everyone deserves food they can truly trust.
                Pure ingredients, honest processes, genuine care —
                that&apos;s GoPyure, every day.
              </p>
            </div>

            {/* Bottom row */}
            <div className="relative z-10 flex items-center gap-3 mt-8">
              <a
                href="tel:+918848250602"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-cream-ivory text-pyure-deep font-semibold text-sm rounded-pill hover:bg-cream-soft transition-all duration-300"
              >
                <svg className="w-4 h-4 text-pyure-deep" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.622C2.25 5.72 2.923 5 3.75 5h3.013c.485 0 .91.318 1.045.782l1.244 4.298c.118.409-.017.854-.343 1.129l-1.94 1.616a12.015 12.015 0 0 0 4.8 4.8l1.616-1.94c.275-.326.72-.46 1.129-.343l4.298 1.244c.484.136.802.56.802 1.045V19.75c0 .828-.672 1.5-1.5 1.5H19.5c-9.665 0-17.5-7.835-17.5-17.5V6.622z" />
                </svg>
                Call to Order
              </a>
              <a
                href="https://wa.me/918848250602"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-style-2 btn-style-2-whatsapp px-5 py-2.5 text-sm font-semibold"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>

        </div>

        {/* Map Section */}
        <div className="mt-16 mb-6">
          <h3
            className="text-lg font-semibold text-pyure-deep"
            style={{ fontFamily: "'Konkhmer Sleokchher', serif" }}
          >
            Our Office Location
          </h3>
          <p className="text-xs text-ink-muted mt-1">
            Bldg No-12/175, Grama Panchayat, GOPYURE FOOD PRODUCTS, near Pooram foods, West Vellanikara, Madakkathara, Kerala – 680651
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-card overflow-hidden border border-pyure-sage/20 shadow-card bg-cream-soft h-[380px] w-full"
        >
          {/* Real Google Map Iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.379207010486!2d76.25172577484439!3d10.549543798934988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef7118c56f9d%3A0x55437b467e7d66e7!2sGOPYURE%20FOOD%20PRODUCTS!5e0!3m2!1sen!2sin!4v1716733200000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            title="Google Maps Location of GoPyure Food Products"
            className="w-full h-full border-0 absolute inset-0 z-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            suppressHydrationWarning={true}
          />
        </motion.div>

      </div>
    </section>
  );
}
