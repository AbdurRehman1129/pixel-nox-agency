export interface SocialLink {
  platform: string;
  url: string;
  /** lucide-react icon component name */
  icon: string;
}

export interface SiteConfig {
  name: string;
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
  tagline: "Precision-built software for teams that ship.",
  description:
    "Pixel Nox is a software product agency designing and engineering web, mobile, AI, and cloud systems for companies that need to move fast without breaking things.",
  email: "hello@pixelnox.com",
  phone: "+1 (555) 010-2049",
  address: "148 Foundry Street, Suite 4B, Austin, TX 78701",
  social: [
    { platform: "LinkedIn", url: "https://linkedin.com/company/pixel-nox", icon: "Linkedin" },
    { platform: "X", url: "https://x.com/pixelnox", icon: "Twitter" },
    { platform: "GitHub", url: "https://github.com/pixel-nox", icon: "Github" },
    { platform: "Instagram", url: "https://instagram.com/pixelnox", icon: "Instagram" },
  ],
  footerCopyright: "Pixel Nox. All rights reserved.",
};
