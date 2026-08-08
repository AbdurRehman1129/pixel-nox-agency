import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} to talk about your next software project.`,
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <Reveal className="max-w-2xl">
        <h1 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
          Let&rsquo;s talk about your project
        </h1>
        <p className="mt-4 text-base leading-relaxed text-mist">
          Tell us a bit about what you&rsquo;re building and we&rsquo;ll get
          back to you shortly. Prefer to talk live? Use the{" "}
          <span className="text-paper">Book a Meeting</span> button on the
          homepage instead.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <ContactForm />

        <div className="space-y-8">
          <div className="rounded-lg border border-line bg-panel p-6">
            <p className="text-sm font-medium text-paper">Contact details</p>
            <ul className="mt-4 space-y-3 text-sm text-mist">
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-signal" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-paper">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-signal" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-paper">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-signal" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-paper">Follow us</p>
            <div className="mt-4 flex gap-3">
              {siteConfig.social.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-line font-mono text-xs text-mist transition-colors hover:border-signal hover:text-signal"
                >
                  {link.badge}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
