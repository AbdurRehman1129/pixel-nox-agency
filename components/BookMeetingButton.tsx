"use client";

import { useRef, useState } from "react";
import BookMeetingModal from "@/components/BookMeetingModal";

export default function BookMeetingButton() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  function handleClose() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <section className="border-b border-line bg-panel">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
            Let&apos;s talk about your project
          </h2>
          <p className="mt-2 max-w-md text-sm text-mist">
            Book a short call — tell us what you&apos;re building and we&apos;ll
            get back to you with next steps.
          </p>
        </div>
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen(true)}
          className="shrink-0 rounded-md bg-signal px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-signal-dim"
        >
          Book a Meeting
        </button>
      </div>

      <BookMeetingModal open={open} onClose={handleClose} />
    </section>
  );
}
