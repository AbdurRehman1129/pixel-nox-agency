"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* subtle engineering-grid backdrop, not a stock photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-6 py-24 md:py-32">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 rounded-full border border-line bg-panel px-3 py-1 font-mono text-xs text-signal"
        >
          Software Product Agency
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-paper md:text-6xl"
        >
          {siteConfig.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-mist md:text-lg"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-md bg-signal px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-signal-dim"
          >
            View Our Services
            <ArrowRight size={16} />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-medium text-paper transition-colors hover:border-signal hover:text-signal"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
