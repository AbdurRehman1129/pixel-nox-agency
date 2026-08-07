import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Cookies Policy", href: "/cookies-policy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-lg font-semibold text-paper">
            {siteConfig.name}
            <span className="text-signal">.</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex gap-3">
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

        <div>
          <p className="text-sm font-medium text-paper">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-mist">
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-signal" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-paper">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-signal" />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-paper">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-signal" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-paper">Legal</p>
          <ul className="mt-4 space-y-3 text-sm text-mist">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line px-6 py-6 text-center text-xs text-mist">
        © {year} {siteConfig.footerCopyright}
      </div>
    </footer>
  );
}
