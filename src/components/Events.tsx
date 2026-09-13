"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import { events, venue } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

function EventImage({ event }: { event: (typeof events)[number] }) {
  return (
    <div className="event-card">
      <div className="event-image-wrap">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="event-image"
          sizes="(min-width: 768px) 480px, 100vw"
        />
      </div>
    </div>
  );
}

function EventDetails({ event }: { event: (typeof events)[number] }) {
  return (
    <div className="flex flex-col justify-center h-full">
      <p className="eyebrow mb-2">{event.subtitle}</p>
      <h3 className="heading text-2xl md:text-3xl mb-4">{event.title}</h3>
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2.5 text-sm text-[var(--charcoal)]/85">
          <Calendar size={16} className="text-[var(--gold)] shrink-0" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-2.5 text-sm text-[var(--charcoal)]/85">
          <Clock size={16} className="text-[var(--gold)] shrink-0" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-2.5 text-sm text-[var(--charcoal)]/85">
          <MapPin size={16} className="text-[var(--gold)] shrink-0" />
          <span>{venue.name}</span>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        {event.description}
      </p>
    </div>
  );
}

export default function Events() {
  return (
    <section id="schedule" className="py-24">
      <div className="container-custom">
        <SectionHeading eyebrow="Schedule" title="Wedding Festivities" />

        <div className="relative">
          <div className="timeline-line hidden md:block" />

          <div className="flex flex-col gap-14 md:gap-20">
            {events.map((event, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={event.id}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="timeline-dot" />
                  </div>

                  {isEven ? (
                    <>
                      <EventImage event={event} />
                      <div className="md:pl-10">
                        <EventDetails event={event} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="order-2 md:order-1 md:pr-10">
                        <EventDetails event={event} />
                      </div>
                      <div className="order-1 md:order-2">
                        <EventImage event={event} />
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
