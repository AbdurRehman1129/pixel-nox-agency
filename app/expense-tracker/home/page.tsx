import type { Metadata } from "next";
import Link from "next/link";
import { expenseTracker as app } from "@/data/expenseTrackerConfig";

export const metadata: Metadata = {
  title: `${app.name} — Android App`,
  description: app.description,
  alternates: { canonical: `${app.basePath}/home` },
};

const features = [
  {
    title: "Record income and expenses",
    body: "Add transactions in seconds with an amount, category, date, and optional note.",
  },
  {
    title: "See where your money goes",
    body: "Review your spending by category and over time to understand your habits.",
  },
  {
    title: "Optional Google Drive backup",
    body: "Back up your data to your own Google Drive and restore it on a new device. Backups are never sent to us.",
  },
  {
    title: "Your data stays yours",
    body: "Your expenses are stored on your device. We do not run servers that collect or store your financial data.",
  },
];

export default function ExpenseTrackerHome() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-wide text-signal">
        Android app
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-paper sm:text-5xl">
        {app.name}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-mist">{app.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-mist">
        {app.description}
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-lg border border-line bg-panel p-5"
          >
            <h2 className="font-display text-base font-semibold text-paper">
              {f.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-mist">{f.body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-14 font-display text-xl font-semibold text-paper">
        How Google Drive is used
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-mist">
        If you choose to use backup, {app.name} asks you to sign in with Google
        and grant access to Google Drive. The app uses this access only to
        save a backup file of your expense data to your Drive and to read that
        same file back when you restore. It does not browse, read, or modify
        any other files in your Drive. You can stop at any time by revoking
        access in your{" "}
        <a
          href="https://myaccount.google.com/permissions"
          className="text-signal underline underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Account permissions
        </a>
        .
      </p>
      <p className="mt-4 text-sm leading-relaxed text-mist">
        {app.name}&rsquo;s use and transfer of information received from
        Google APIs adheres to the{" "}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy"
          className="text-signal underline underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements.
      </p>

      <div className="mt-12 flex flex-wrap gap-4 text-sm">
        <Link
          href={`${app.basePath}/privacy-policy`}
          className="rounded-md bg-signal px-4 py-2 font-medium text-ink hover:bg-signal-dim"
        >
          Privacy Policy
        </Link>
        <Link
          href={`${app.basePath}/term-of-services`}
          className="rounded-md border border-line px-4 py-2 text-paper hover:border-signal"
        >
          Terms of Service
        </Link>
      </div>

      <p className="mt-12 text-sm text-mist">
        Developed by {app.developer} &middot;{" "}
        <a
          href={`mailto:${app.email}`}
          className="text-signal underline underline-offset-2"
        >
          {app.email}
        </a>
      </p>
    </section>
  );
}
