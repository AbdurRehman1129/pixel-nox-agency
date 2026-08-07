// ---------------------------------------------------------------------------
// Pixel Nox — Single Source of Truth: Site Metadata
// Every component should import from here instead of hardcoding copy.
// ---------------------------------------------------------------------------

export interface SocialLink {
  /** Display name of the platform, e.g. "LinkedIn" */
  platform: string;
  /** Full URL to the profile/page */
  url: string;
  /** lucide-react icon component name, e.g. "Linkedin" */
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  socials: SocialLink[];
  navLinks: NavLink[];
  legalLinks: NavLink[];
  footer: {
    blurb: string;
    copyright: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Pixel Nox",
  shortName: "Pixel Nox",
  tagline: "Software, engineered with precision.",
  description:
    "Pixel Nox is a software product agency that designs and builds web apps, mobile apps, and custom platforms for ambitious teams — from first prototype to production scale.",
  url: "https://pixelnox.com",

  contact: {
    email: "hello@pixelnox.com",
    phone: "+92 300 1234567",
    address: "Rawalpindi, Punjab, Pakistan",
  },

  socials: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/company/pixelnox",
      icon: "Linkedin",
    },
    {
      platform: "X",
      url: "https://x.com/pixelnox",
      icon: "Twitter",
    },
    {
      platform: "GitHub",
      url: "https://github.com/pixelnox",
      icon: "Github",
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/pixelnox",
      icon: "Instagram",
    },
  ],

  navLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/contact" },
  ],

  legalLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Cookies Policy", href: "/cookies-policy" },
  ],

  footer: {
    blurb:
      "We're a software product agency helping startups and enterprises ship reliable, well-engineered digital products.",
    /** Footer component appends the live current year to this at render time. */
    copyright: "Pixel Nox. All rights reserved.",
  },
};

export default siteConfig;