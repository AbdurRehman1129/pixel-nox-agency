import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="August 8, 2026">
      <p>
        {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;) respects your privacy and is committed to
        protecting the personal information you share with us through our
        website and while we deliver software development services to you.
        This policy explains what we collect, why, and the choices you have.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect information in a few ways:</p>
      <ul>
        <li>
          <strong>Information you provide directly</strong> — such as your
          name, email address, phone number, company name, and project
          details when you submit our contact form, book a meeting, or
          correspond with us by email.
        </li>
        <li>
          <strong>Information collected automatically</strong> — such as IP
          address, browser type, device information, and pages visited,
          gathered through cookies and similar technologies (see our{" "}
          <a href="/cookies-policy">Cookies Policy</a>).
        </li>
        <li>
          <strong>Project-related information</strong> — data you share with
          us in the course of a software development engagement, handled
          under the terms of our services agreement with you.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To respond to inquiries and schedule requested meetings.</li>
        <li>To deliver, maintain, and improve our software services.</li>
        <li>To send project updates, invoices, and service communications.</li>
        <li>To comply with legal obligations and enforce our agreements.</li>
        <li>
          To improve our website&rsquo;s performance and user experience.
        </li>
      </ul>

      <h2>3. How We Share Information</h2>
      <p>
        We do not sell your personal information. We may share it with
        trusted third parties who help us operate our business — such as
        hosting providers, email delivery services, and payment processors —
        under confidentiality obligations, or when required by law.
      </p>

      <h2>4. Data Retention</h2>
      <p>
        We retain personal information only as long as necessary to fulfill
        the purposes described in this policy, meet legal or contractual
        obligations, and resolve disputes.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        Depending on your location, you may have the right to access,
        correct, delete, or restrict the use of your personal information,
        and to object to certain processing. Where applicable law — such as
        the GDPR for individuals in the European Economic Area — grants
        additional rights, we honor those rights. To exercise any of these
        rights, contact us using the details below.
      </p>

      <h2>6. Data Security</h2>
      <p>
        We use reasonable technical and organizational measures to protect
        your information against unauthorized access, alteration, or loss.
        No method of transmission or storage is completely secure, and we
        cannot guarantee absolute security.
      </p>

      <h2>7. International Transfers</h2>
      <p>
        As an agency serving clients internationally, your information may
        be processed in countries other than your own. Where required, we
        take steps to ensure such transfers comply with applicable data
        protection laws.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. Material changes will
        be reflected by updating the &ldquo;Last updated&rdquo; date at the
        top of this page.
      </p>
    </LegalPageLayout>
  );
}
