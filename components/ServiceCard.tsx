"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Service } from "@/data/services";

export default function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  const Icon =
    (Icons[service.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group flex flex-col rounded-lg border border-line bg-panel p-6 transition-colors hover:border-signal"
    >
      <Icon size={24} className="text-signal" />
      <p className="mt-4 font-display text-lg font-semibold text-paper">
        {service.title}
      </p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">
        {service.shortDescription}
      </p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-signal transition-all group-hover:gap-2.5"
      >
        Learn more
        <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
}
