"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <motion.div
      className={`text-center mb-14 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6 }}
    >
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="heading text-3xl md:text-5xl">{title}</h2>
      <div className="divider-orn mt-5">
        <span className="line" />
        <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
          <path d="M4 0L5 3L8 4L5 5L4 8L3 5L0 4L3 3Z" />
        </svg>
        <span className="line" />
      </div>
    </motion.div>
  );
}
