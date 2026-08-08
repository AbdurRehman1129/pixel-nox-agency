import type { Metadata } from "next";
import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, Tag } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: `Explore all ${services.length} services offered by ${siteConfig.name} — what's included, how we approach each one, and typical price ranges.`,
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-signal">
          Services & pricing
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-paper sm:text-4xl">
          Six disciplines, one engineering team
        </h1>
        <p className="mt-4 text-base leading-relaxed text-mist">
          Every engagement is scoped to your project, so the ranges below are
          starting points, not a fixed rate card. Get in touch and
          we&rsquo;ll turn it into a real quote.
        </p>
      </Reveal>

      <div className="mt-14 space-y-8">
        {services.map((service, i) => {
          const Icon =
            (Icons[service.icon as keyof typeof Icons] as LucideIcon) ??
            Icons.Code2;

          return (
            <Reveal
              key={service.slug}
              delay={(i % 3) * 0.06}
              className="rounded-lg border border-line bg-panel p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-line bg-ink">
                    <Icon size={22} className="text-signal" />
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-paper">
                      {service.title}
                    </h2>
                    <p className="mt-1 text-sm text-mist">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-start gap-2 rounded-md border border-signal/30 bg-signal/10 px-4 py-2.5 lg:flex-col lg:items-end lg:text-right">
                  <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-signal">
                    <Tag size={12} />
                    Typical range
                  </span>
                  <span className="font-display text-base font-semibold text-paper lg:mt-0.5">
                    {service.priceRange}
                  </span>
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-mist">
                {service.detailedExplanation}
              </p>

              <p className="mt-3 max-w-3xl text-xs italic leading-relaxed text-mist/80">
                {service.priceNote}
              </p>

              <div className="mt-6 grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-signal">
                    What&rsquo;s included
                  </p>
                  <ul className="mt-3 space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-mist"
                      >
                        <Check size={14} className="mt-0.5 shrink-0 text-signal" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {service.technologies && service.technologies.length > 0 && (
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-signal">
                      Technologies
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-line bg-ink px-2.5 py-1 font-mono text-xs text-mist"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href={`/services/${service.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-signal transition-all hover:gap-2.5"
              >
                Full details
                <ArrowRight size={14} />
              </Link>
            </Reveal>
          );
        })}
      </div>

      <Reveal
        delay={0.1}
        className="mt-14 flex flex-col items-start gap-4 rounded-lg border border-line bg-panel p-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <p className="font-display text-lg font-semibold text-paper">
            Not sure which service fits your project?
          </p>
          <p className="mt-1 text-sm text-mist">
            Tell us what you&rsquo;re building and we&rsquo;ll help you scope
            it — no obligation.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-signal px-5 py-2.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
        >
          Contact us
          <ArrowRight size={14} />
        </Link>
      </Reveal>
    </section>
  );
}
