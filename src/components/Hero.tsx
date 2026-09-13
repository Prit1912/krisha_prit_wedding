"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { couple } from "@/lib/data";
import BellIcon from "@/components/icons/BellIcon";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 py-16 md:py-16 overflow-hidden"
    >
      <div
        className="hero-blob w-96 h-96 -top-24 -left-24"
        style={{ background: "var(--gold-soft)" }}
      />
      <div
        className="hero-blob w-96 h-96 -bottom-24 -right-24"
        style={{ background: "var(--wine)" }}
      />

      <div className="container-custom flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* <div className="hero-bells">
            <span>
              <BellIcon />
            </span>
            <span>
              <BellIcon />
            </span>
            <span>
              <BellIcon />
            </span>
            <span>
              <BellIcon />
            </span>
            <span>
              <BellIcon />
            </span>
          </div> */}

          <div className="mb-10">
            <Image
              src="/images/ganpati.png"
              alt="Shree Ganpati"
              width={1167}
              height={1347}
              className="w-16 h-auto md:w-20 mx-auto mb-3"
              priority
            />

            <p className="eyebrow mb-4">|| Shree Ganeshay Namah ||</p>

            <p className="font-serif italic font-bold text-4xl md:text-5xl text-[var(--wine)] tracking-wide">
              {couple.bride.firstName}
            </p>
            <p className="text-[var(--charcoal)]/75 text-sm md:text-base leading-relaxed max-w-xs mx-auto mt-2">
              D/O {couple.bride.mother} &amp; {couple.bride.father}
            </p>

            <p className="text-[var(--gold)] font-serif text-lg my-4">&amp;</p>

            <p className="font-serif italic font-bold text-4xl md:text-5xl text-[var(--wine)] tracking-wide">
              {couple.groom.firstName}
            </p>
            <p className="text-[var(--charcoal)]/75 text-sm md:text-base leading-relaxed max-w-xs mx-auto mt-2">
              S/O {couple.groom.mother} &amp; {couple.groom.father}
            </p>
          </div>

          <p className="text-[var(--charcoal)]/70 leading-relaxed max-w-md mx-auto mb-10">
            Request the honour of your presence to celebrate the beginning of
            our forever.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="hero-frame aspect-[2/3] w-64 sm:w-72 md:w-80 mx-auto">
            <Image
              src="/images/hero.png"
              alt={`${couple.bride.firstName} & ${couple.groom.firstName}`}
              fill
              className="object-cover"
              priority
              sizes="(min-width: 768px) 320px, 60vw"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#schedule"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-[var(--wine)]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span className="eyebrow">Scroll</span>
        <ChevronDown size={20} />
      </motion.a>
    </section>
  );
}
