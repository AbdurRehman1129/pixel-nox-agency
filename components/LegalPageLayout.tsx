import type { ReactNode } from "react";
import { siteConfig } from "@/data/siteConfig";

export default function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 font-mono text-xs uppercase tracking-wide text-mist">
        Last updated: {lastUpdated}
      </p>

      <div
        className="
          mt-10 space-y-6 text-sm leading-relaxed text-mist
          [&>h2]:mt-10 [&>h2]:font-display [&>h2]:text-lg [&>h2]:font-semibold [&>h2]:text-paper
          [&>h2:first-child]:mt-0
          [&>p]:leading-relaxed
          [&>ul]:list-disc [&>ul]:space-y-2 [&>ul]:pl-5
          [&_a]:text-signal [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-signal-dim
          [&_strong]:text-paper [&_strong]:font-medium
        "
      >
        {children}
      </div>

      <div className="mt-14 rounded-lg border border-line bg-panel p-6 text-sm text-mist">
        Questions about this policy? Reach out at{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-signal underline underline-offset-2 hover:text-signal-dim"
        >
          {siteConfig.email}
        </a>{" "}
        or visit our{" "}
        <a
          href="/contact"
          className="text-signal underline underline-offset-2 hover:text-signal-dim"
        >
          contact page
        </a>
        .
      </div>
    </section>
  );
}
