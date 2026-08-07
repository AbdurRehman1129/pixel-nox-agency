import Link from "next/link";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  type LucideIcon,
} from "lucide-react";
import { siteConfig, type SocialIcon } from "@/data/siteConfig";

const iconMap: Record<SocialIcon, LucideIcon> = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  instagram: Instagram,
  facebook: Facebook,
};

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Cookies Policy", href: "/cookies-policy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800 bg-ink-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-lg font-semibold text-mist-100">
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist-400">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex gap-3">
            {siteConfig.social.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-ink-700 text-mist-400 transition-colors hover:border-circuit-400 hover:text-circuit-400"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-mist-100">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-mist-400">
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-circuit-400">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0" />
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-circuit-400">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>{siteConfig.contact.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-mist-100">Legal</p>
          <ul className="mt-4 space-y-3 text-sm text-mist-400">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-circuit-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-800 px-6 py-6 text-center text-xs text-mist-600">
        © {year} {siteConfig.footer.copyrightName}. All rights reserved.
      </div>
    </footer>
  );
}
