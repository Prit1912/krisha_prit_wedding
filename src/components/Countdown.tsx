"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { weddingDateTimeISO } from "@/lib/data";

function getTimeLeft() {
  const diff = new Date(weddingDateTimeISO).getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(
    null
  );

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const blocks = [
    { label: "Days", value: time?.days },
    { label: "Hours", value: time?.hours },
    { label: "Minutes", value: time?.minutes },
    { label: "Seconds", value: time?.seconds },
  ];

  return (
    <section className="py-14">
      <div className="container-custom">
        <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto">
          {blocks.map((block, i) => (
            <motion.div
              className="count-tile flex flex-col items-center justify-center py-5 sm:py-8"
              key={block.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="count-number">
                {block.value !== undefined
                  ? String(block.value).padStart(2, "0")
                  : "--"}
              </div>
              <div className="count-label mt-1">{block.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
