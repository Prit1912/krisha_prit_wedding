"use client";

import { motion } from "framer-motion";
import { couple } from "@/lib/data";

export default function Footer() {
  return (
    <motion.footer
      className="footer-modern py-16 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container-custom">
        <p className="max-w-xl mx-auto leading-relaxed opacity-90 mb-6">
          With immense happiness, <b>{couple.bride.father}</b> and{" "}
          <b>{couple.bride.mother}</b>, the bride&apos;s parents, along with{" "}
          <b>{couple.groom.father}</b> and <b>{couple.groom.mother}</b>, the
          groom&apos;s parents, invite you to be part of this special
          occasion.
        </p>
        <div className="w-24 h-px bg-[var(--gold)] mx-auto mb-6 opacity-70" />
        <p className="footer-names">
          <span className="footer-name">{couple.bride.firstName}</span>
          <span className="footer-and">&amp;</span>
          <span className="footer-name">{couple.groom.firstName}</span>
        </p>
      </div>
    </motion.footer>
  );
}
