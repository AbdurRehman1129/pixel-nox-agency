import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesGrid() {
  return (
    <section id="services" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-widest text-signal">
              What we build
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-paper md:text-4xl">
              Six disciplines, one engineering team
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-signal transition-all hover:gap-2.5"
          >
            View all services &amp; pricing
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
