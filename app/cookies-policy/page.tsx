import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description: `How ${siteConfig.name} uses cookies and similar technologies on this website.`,
};

export default function CookiesPolicyPage() {
  return (
    <LegalPageLayout title="Cookies Policy" lastUpdated="August 8, 2026">
      <p>
        This Cookies Policy explains how {siteConfig.name} uses cookies and
        similar technologies on our website, and the choices available to
        you.
      </p>

      <h2>1. What Are Cookies</h2>
      <p>
        Cookies are small text files placed on your device when you visit a
        website. They help the site function properly, remember your
        preferences, and give us insight into how the site is used.
      </p>

      <h2>2. Types of Cookies We Use</h2>
      <ul>
        <li>
          <strong>Essential cookies</strong> — required for core site
          functionality, such as navigation and form submissions. The site
          cannot function properly without these.
        </li>
        <li>
          <strong>Analytics cookies</strong> — help us understand how
          visitors interact with our website, such as which pages are
          visited most often, so we can improve the experience.
        </li>
        <li>
          <strong>Preference cookies</strong> — remember choices you make
          (like display settings) to improve your experience on return
          visits.
        </li>
      </ul>

      <h2>3. Third-Party Cookies</h2>
      <p>
        Some cookies may be set by third-party services we use, such as
        analytics or hosting providers. These third parties have their own
        privacy and cookie policies governing their use of data.
      </p>

      <h2>4. Managing Cookies</h2>
      <p>
        Most browsers let you control cookies through their settings,
        including blocking or deleting them. Note that disabling essential
        cookies may affect the functionality of our website, such as
        contact and meeting-booking forms.
      </p>

      <h2>5. Changes to This Policy</h2>
      <p>
        We may update this Cookies Policy from time to time to reflect
        changes in the technologies we use or for legal reasons. Please
        revisit this page periodically to stay informed.
      </p>

      <h2>6. More Information</h2>
      <p>
        For details on how we handle personal data more broadly, see our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    </LegalPageLayout>
  );
}
