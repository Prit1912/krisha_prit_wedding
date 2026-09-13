"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { venue } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function Venue() {
  return (
    <section id="venue" className="py-24">
      <div className="container-custom">
        <SectionHeading eyebrow="Location" title="The Venue" />

        <motion.div
          className="venue-card grid md:grid-cols-2 overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="w-14 h-14 rounded-full bg-[var(--gold-soft)] flex items-center justify-center mb-5">
              <MapPin className="text-[var(--wine)]" size={26} />
            </div>
            <h3 className="heading text-2xl mb-3">{venue.name}</h3>
            <p className="text-[var(--muted)] leading-relaxed mb-6">
              {venue.address}
              <br />
              All ceremonies and celebrations will take place here.
            </p>
            <a
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-fit"
            >
              Get Directions
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="map-frame m-4 md:m-6 md:ml-0 min-h-[280px]">
            <iframe
              title="Venue location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                venue.name + ", " + venue.address
              )}&output=embed`}
              className="w-full h-full min-h-[280px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
