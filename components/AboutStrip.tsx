"use client";

import { motion } from "framer-motion";
import { Gauge, Users, Layers, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Gauge,
    title: "Fast delivery",
    description:
      "Scoped sprints and shipped increments — not a black box until launch day.",
  },
  {
    icon: Users,
    title: "Dedicated teams",
    description:
      "A consistent engineering team assigned to your product, start to finish.",
  },
  {
    icon: Layers,
    title: "Modern stack",
    description:
      "Production-grade tools chosen for your problem, not for our comfort.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last",
    description:
      "Security, testing, and documentation treated as part of the build, not an afterthought.",
  },
];

export default function AboutStrip() {
  return (
    <section className="border-b border-line bg-panel">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value, i) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col gap-3"
          >
            <value.icon size={22} className="text-signal" />
            <p className="font-display text-base font-semibold text-paper">
              {value.title}
            </p>
            <p className="text-sm leading-relaxed text-mist">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
