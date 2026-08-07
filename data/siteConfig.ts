export type SocialIcon = "linkedin" | "twitter" | "github" | "instagram" | "facebook";

export interface SocialLink {
  platform: string;
  url: string;
  icon: SocialIcon;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  social: SocialLink[];
  footer: {
    copyrightName: string;
  };
}

/**
 * Single source of truth for site-wide copy and contact info.
 * Every component should read from here instead of hardcoding text.
 * Replace the placeholder values below with your real details.
 */
export const siteConfig: SiteConfig = {
  name: "Pixel Nox",
  tagline: "Engineering software that scales.",
  description:
    "Pixel Nox is a software product agency delivering web, mobile, AI, cloud, security and payments solutions for teams that need to move fast without breaking things.",
  url: "https://pixelnox.com",
  contact: {
    email: "hello@pixelnox.com",
    phone: "+1 (000) 000-0000",
    address: "Your City, Your Country",
  },
  social: [
    { platform: "LinkedIn", url: "https://linkedin.com/company/pixelnox", icon: "linkedin" },
    { platform: "X (Twitter)", url: "https://x.com/pixelnox", icon: "twitter" },
    { platform: "GitHub", url: "https://github.com/pixelnox", icon: "github" },
    { platform: "Instagram", url: "https://instagram.com/pixelnox", icon: "instagram" },
  ],
  footer: {
    copyrightName: "Pixel Nox",
  },
};