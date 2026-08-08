"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !subject || !message) {
      setStatus("error");
      setErrorMessage("Name, email, subject, and message are required.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please try again or email us directly."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-signal/40 bg-signal/10 px-5 py-6 text-sm text-signal">
        <p className="font-medium">Message sent — thank you.</p>
        <p className="mt-1 text-signal/90">
          We&apos;ll get back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-xs font-medium underline underline-offset-2 hover:text-signal-dim"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>

      <Field label="Subject" name="subject" required />

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-mist">
          Message <span className="text-volt">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-md border border-line bg-ink px-3 py-2.5 text-sm text-paper focus-visible:border-signal"
        />
      </div>

      {status === "error" && (
        <p className="rounded-md border border-volt/40 bg-volt/10 px-3 py-2 text-sm text-volt">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-signal px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-signal-dim disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm text-mist">
        {label}
        {required && <span className="text-volt"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-line bg-ink px-3 py-2.5 text-sm text-paper focus-visible:border-signal"
      />
    </div>
  );
}
