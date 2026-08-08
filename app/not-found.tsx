import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div className="relative mx-auto flex max-w-2xl flex-col items-start px-6 py-24">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 font-mono text-xs text-signal">
          <Compass size={12} />
          404
        </span>

        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-paper md:text-5xl">
          This page went missing.
        </h1>

        <p className="mt-5 max-w-md text-base leading-relaxed text-mist">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have
          moved. Let&rsquo;s get you back on track.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-signal px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-signal-dim"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-medium text-paper transition-colors hover:border-signal hover:text-signal"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
