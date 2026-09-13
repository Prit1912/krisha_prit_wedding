"use client";

import { motion } from "framer-motion";
import { couple } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function FamilyNote() {
  const families = [
    {
      label: "Bride's Family",
      names: [couple.bride.father, couple.bride.mother],
    },
    {
      label: "Groom's Family",
      names: [couple.groom.father, couple.groom.mother],
    },
  ];

  return (
    <section id="family" className="py-24">
      <div className="container-custom">
        <SectionHeading eyebrow="With Love" title="Blessed With Loving Families" />

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {families.map((family, i) => (
            <motion.div
              key={family.label}
              className="family-card p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="eyebrow mb-4">{family.label}</p>
              {family.names.map((name) => (
                <p key={name} className="font-serif text-lg text-[var(--charcoal)] mb-1">
                  {name}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
