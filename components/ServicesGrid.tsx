"use client";

import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <section id="services" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-xl">
          <p className="font-mono text-xs uppercase tracking-widest text-signal">
            What we build
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-paper md:text-4xl">
            Six disciplines, one engineering team
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon =
              (Icons[service.icon as keyof typeof Icons] as LucideIcon) ??
              Icons.Code2;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group rounded-lg border border-line bg-panel p-6 transition-colors hover:border-signal"
              >
                <Icon size={24} className="text-signal" />
                <p className="mt-4 font-display text-lg font-semibold text-paper">
                  {service.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {service.shortDescription}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
