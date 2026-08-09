export interface SocialLink {
  platform: string;
  url: string;
  /**
   * Short badge label (2 chars max) shown in the footer.
   * lucide-react's current major version dropped all brand/logo icons
   * (GitHub, Twitter/X, LinkedIn, Instagram, etc.), so social links use a
   * plain monogram badge instead of an icon component.
   */
  badge: string;
}

export interface SiteConfig {
  name: string;
  /** Production URL, no trailing slash. Update this once the real domain is live. */
  url: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  social: SocialLink[];
  footerCopyright: string;
}

export const siteConfig: SiteConfig = {
  name: "Pixel Nox",
  url: "https://pixelnox.site",
  tagline: "Precision-built software for teams that ship.",
  description:
    "Pixel Nox is a software product agency designing and engineering web, mobile, AI, and cloud systems for companies that need to move fast without breaking things.",
  email: "contact@pixelnox.site",
  phone: "+1 (415) 617-9097",
  address: "1001 S MAIN ST, STE 600, KALISPELL, MT 59901-1498, USA",
  // Social accounts aren't live yet. Uncomment and fill in real URLs once
  // they exist — the footer and contact page automatically hide the
  // "Follow us" section entirely while this array is empty, so nothing
  // broken or placeholder-looking shows up in the meantime.
  social: [
    // { platform: "LinkedIn", url: "https://linkedin.com/company/pixel-nox", badge: "in" },
    // { platform: "X", url: "https://x.com/pixelnox", badge: "X" },
    // { platform: "GitHub", url: "https://github.com/pixel-nox", badge: "GH" },
    // { platform: "Instagram", url: "https://instagram.com/pixelnox", badge: "IG" },
  ],
  footerCopyright: "Pixel Nox. All rights reserved.",
};
