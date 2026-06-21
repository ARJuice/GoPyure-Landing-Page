"use client";

import { motion } from "framer-motion";

export default function MobileBottomBar() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="fixed bottom-0 inset-x-0 z-40 md:hidden glass border-t border-[rgba(155,183,174,0.25)] px-5 py-3 flex gap-3"
    >
      <a
        href="tel:+918848250602"
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-pyure-deep text-cream-ivory font-semibold text-sm rounded-pill hover:bg-pyure-sage transition-all"
      >
        📞 Call to Order
      </a>
      <a
        href="https://wa.me/918848250602"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 border border-pyure-sage text-pyure-sage font-semibold text-sm rounded-pill hover:bg-pyure-deep hover:text-cream-ivory hover:border-pyure-deep transition-all"
      >
        WhatsApp
      </a>
    </motion.div>
  );
}
