"use client";

import { useEffect, useRef, useState, type RefObject, type FormEvent } from "react";
import { X } from "lucide-react";
import { services } from "@/data/services";

interface BookMeetingModalProps {
  open: boolean;
  onClose: () => void;
}

type Status = "idle" | "submitting" | "success" | "error";

export default function BookMeetingModal({ open, onClose }: BookMeetingModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!open) return;

    firstFieldRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const preferredDate = String(data.get("preferredDate") || "").trim();

    if (!name || !email || !preferredDate) {
      setStatus("error");
      setErrorMessage("Name, email, and a preferred date are required.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/book-meeting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
      setTimeout(() => {
        setStatus("idle");
        onClose();
      }, 2000);
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 px-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-meeting-title"
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg border border-line bg-panel p-6 md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="book-meeting-title" className="font-display text-xl font-semibold text-paper">
            Book a Meeting
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-mist transition-colors hover:text-paper"
          >
            <X size={20} />
          </button>
        </div>

        {status === "success" ? (
          <p className="mt-6 rounded-md border border-signal/40 bg-signal/10 px-4 py-3 text-sm text-signal">
            Thanks — we&apos;ll confirm your meeting shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <Field label="Full Name" name="name" required inputRef={firstFieldRef} />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
            <Field label="Company Name" name="company" />

            <div>
              <label htmlFor="service" className="mb-1.5 block text-sm text-mist">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                className="w-full rounded-md border border-line bg-ink px-3 py-2.5 text-sm text-paper focus-visible:border-signal"
              >
                <option value="">Select a service (optional)</option>
                {services.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Preferred Date" name="preferredDate" type="date" required />
              <Field label="Preferred Time" name="preferredTime" type="time" />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-mist">
                Message / Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
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
              className="w-full rounded-md bg-signal px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-signal-dim disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Request Meeting"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  inputRef,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  inputRef?: RefObject<HTMLInputElement | null>;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm text-mist">
        {label}
        {required && <span className="text-volt"> *</span>}
      </label>
      <input
        ref={inputRef}
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-line bg-ink px-3 py-2.5 text-sm text-paper focus-visible:border-signal"
      />
    </div>
  );
}
