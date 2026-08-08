import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms that govern your use of ${siteConfig.name}'s website and services.`,
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout title="Terms & Conditions" lastUpdated="August 8, 2026">
      <p>
        These Terms & Conditions (&ldquo;Terms&rdquo;) govern your use of the{" "}
        {siteConfig.name} website and any software development, design, or
        consulting services (&ldquo;Services&rdquo;) we provide. By using our
        website or engaging our Services, you agree to these Terms.
      </p>

      <h2>1. Services</h2>
      <p>
        {siteConfig.name} provides custom software development services,
        including but not limited to web development, mobile app
        development, cybersecurity, AI development, cloud services, and
        payment integration. The specific scope, timeline, and deliverables
        for any engagement are defined in a separate written proposal or
        agreement (&ldquo;Statement of Work&rdquo;) signed by both parties.
      </p>

      <h2>2. Client Responsibilities</h2>
      <ul>
        <li>
          Provide timely access to information, materials, and approvals
          needed to complete the project.
        </li>
        <li>
          Ensure any content, data, or assets provided to us do not infringe
          on third-party rights.
        </li>
        <li>Make payments according to the agreed schedule.</li>
      </ul>

      <h2>3. Intellectual Property</h2>
      <p>
        Unless otherwise agreed in writing, ownership of custom deliverables
        transfers to the client upon full payment. {siteConfig.name} retains
        the right to reuse general knowledge, pre-existing tools, frameworks,
        and non-client-specific code developed independently of the
        engagement.
      </p>

      <h2>4. Payment Terms</h2>
      <p>
        Fees, payment schedules, and invoicing terms are set out in the
        applicable Statement of Work. Late payments may result in paused
        work or additional fees as specified in that agreement.
      </p>

      <h2>5. Confidentiality</h2>
      <p>
        Both parties agree to keep confidential information shared during
        the engagement private and to use it only for purposes related to
        the project, except where disclosure is required by law.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, {siteConfig.name} is not
        liable for indirect, incidental, or consequential damages arising
        from the use of our Services or website. Our total liability for any
        claim is limited to the fees paid for the Services giving rise to
        the claim.
      </p>

      <h2>7. Termination</h2>
      <p>
        Either party may terminate an engagement as outlined in the relevant
        Statement of Work. Fees for work completed up to the termination
        date remain payable.
      </p>

      <h2>8. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the jurisdiction in which{" "}
        {siteConfig.name} is registered, without regard to conflict-of-law
        principles, unless otherwise specified in a signed agreement.
      </p>

      <h2>9. Changes to These Terms</h2>
      <p>
        We may revise these Terms from time to time. Continued use of our
        website or Services after changes are posted constitutes acceptance
        of the updated Terms.
      </p>
    </LegalPageLayout>
  );
}
