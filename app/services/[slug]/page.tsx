import Link from "next/link";
import { notFound } from "next/navigation";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft, ArrowRight, Check, Tag } from "lucide-react";
import type { Metadata } from "next";
import { services } from "@/data/services";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon =
    (Icons[service.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Code2;

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <Link
        href="/services"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-mist transition-colors hover:text-signal"
      >
        <ArrowLeft size={14} />
        Back to services
      </Link>

      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-line bg-panel">
            <Icon size={26} className="text-signal" />
          </span>
          <h1 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
            {service.title}
          </h1>
        </div>

        <div className="flex shrink-0 flex-col items-start gap-1 rounded-md border border-signal/30 bg-signal/10 px-4 py-2.5 sm:items-end sm:text-right">
          <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-signal">
            <Tag size={12} />
            Typical range
          </span>
          <span className="font-display text-base font-semibold text-paper">
            {service.priceRange}
          </span>
        </div>
      </div>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist">
        {service.detailedExplanation}
      </p>

      <p className="mt-3 max-w-2xl text-xs italic leading-relaxed text-mist/80">
        {service.priceNote}
      </p>

      <Reveal delay={0.1} className="mt-10 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-wide text-signal">
            What&rsquo;s included
          </h2>
          <ul className="mt-4 space-y-3">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-mist">
                <Check size={16} className="mt-0.5 shrink-0 text-signal" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {service.technologies && service.technologies.length > 0 && (
          <div>
            <h2 className="text-sm font-medium uppercase tracking-wide text-signal">
              Technologies
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-line bg-panel px-3 py-1 font-mono text-xs text-mist"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </Reveal>

      <Reveal
        delay={0.15}
        className="mt-14 flex flex-col items-start gap-4 rounded-lg border border-line bg-panel p-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <p className="font-display text-lg font-semibold text-paper">
            Ready to talk about {service.title.toLowerCase()}?
          </p>
          <p className="mt-1 text-sm text-mist">
            Tell us about your project and we&rsquo;ll get back to you.
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
