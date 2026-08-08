import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Return & Refund Policy",
  description: `${siteConfig.name}'s refund terms for software development engagements.`,
};

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout title="Return & Refund Policy" lastUpdated="August 8, 2026">
      <p>
        Because {siteConfig.name} delivers custom software development
        services rather than physical or off-the-shelf digital products,
        refunds are handled differently than in traditional retail. This
        policy explains how we approach cancellations, milestones, and
        refunds for our engagements.
      </p>

      <h2>1. Custom Work Nature</h2>
      <p>
        Our Services involve custom-built software, design, and engineering
        work tailored to each client&rsquo;s project. As such, work already
        performed cannot be &ldquo;returned&rdquo; in the way a physical
        product can.
      </p>

      <h2>2. Milestone-Based Engagements</h2>
      <p>
        For projects billed in milestones, each milestone payment covers the
        work completed up to that stage. If a milestone&rsquo;s deliverables
        do not meet the specifications agreed upon in the Statement of Work,
        we will work with you to revise them at no additional cost, within
        the agreed revision scope.
      </p>

      <h2>3. Deposit and Upfront Payments</h2>
      <p>
        Deposits or upfront payments secure our team&rsquo;s time and
        resources for your project and are generally non-refundable once
        work has begun, except where required by applicable consumer
        protection law.
      </p>

      <h2>4. Cancellations</h2>
      <ul>
        <li>
          If you cancel a project before work has begun, any deposit paid
          may be refunded minus reasonable administrative costs, at our
          discretion.
        </li>
        <li>
          If you cancel after work has begun, you will be billed for work
          completed to date, and any remaining balance from prepaid amounts
          will be refunded.
        </li>
        <li>
          {siteConfig.name} reserves the right to pause or terminate a
          project for non-payment or breach of the Statement of Work.
        </li>
      </ul>

      <h2>5. Subscription or Retainer Services</h2>
      <p>
        For ongoing retainer or subscription-based support arrangements, you
        may cancel future billing cycles at any time; fees already charged
        for the current cycle are non-refundable, except where a service
        failure on our part warrants a partial refund at our discretion.
      </p>

      <h2>6. Requesting a Refund Review</h2>
      <p>
        If you believe you are entitled to a refund under this policy or
        your signed agreement, contact us with your project details and the
        reason for your request. We review each case individually and
        respond within a reasonable timeframe.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this policy periodically. The version in effect at the
        time your Statement of Work is signed governs that engagement,
        unless a newer version is expressly agreed upon.
      </p>
    </LegalPageLayout>
  );
}
