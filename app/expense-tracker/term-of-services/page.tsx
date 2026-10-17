import type { Metadata } from "next";
import AppLegalLayout from "@/components/expense-tracker/AppLegalLayout";
import { expenseTracker as app } from "@/data/expenseTrackerConfig";

export const metadata: Metadata = {
  title: `${app.name} — Terms of Service`,
  description: `The terms that govern your use of the ${app.name} Android app.`,
  alternates: { canonical: `${app.basePath}/term-of-services` },
};

export default function ExpenseTrackerTerms() {
  return (
    <AppLegalLayout title="Terms of Service">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the{" "}
        {app.name} Android app (&ldquo;the App&rdquo;), developed by{" "}
        {app.developer}. By installing or using the App you agree to these
        Terms. If you do not agree, please do not use the App.
      </p>

      <h2>1. The App</h2>
      <p>
        {app.name} lets you record and review personal income and expenses,
        and optionally back up and restore that data using your own Google
        Drive account.
      </p>

      <h2>2. Your Responsibilities</h2>
      <ul>
        <li>You are responsible for the accuracy of the data you enter.</li>
        <li>
          You are responsible for keeping your device and Google account
          secure.
        </li>
        <li>
          You will use the App lawfully and will not attempt to reverse
          engineer, disrupt, or misuse it.
        </li>
      </ul>

      <h2>3. Google Drive Backup</h2>
      <p>
        Backup and restore use your own Google Drive and are subject to
        Google&rsquo;s terms and available storage. Backups are stored in your
        account, not with the developer. Please verify your backups
        periodically; the developer is not responsible for data lost because a
        backup was not made, was deleted, or could not be restored.
      </p>

      <h2>4. Privacy</h2>
      <p>
        Your use of the App is also governed by our{" "}
        <a href={`${app.basePath}/privacy-policy`}>Privacy Policy</a>.
      </p>

      <h2>5. Not Financial Advice</h2>
      <p>
        The App is a record-keeping tool. It does not provide financial, tax,
        investment, or legal advice, and you should not rely on it as such.
      </p>

      <h2>6. Intellectual Property</h2>
      <p>
        The App, including its design and code, is owned by {app.developer}.
        You receive a personal, non-exclusive, non-transferable license to use
        it for your own purposes. You keep ownership of the data you enter.
      </p>

      <h2>7. Disclaimer of Warranties</h2>
      <p>
        The App is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo;
        without warranties of any kind. I do not guarantee that it will be
        error-free, uninterrupted, or that data will never be lost.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, the developer is not liable
        for any indirect, incidental, or consequential damages, or for loss of
        data or profits, arising from your use of the App.
      </p>

      <h2>9. Changes and Termination</h2>
      <p>
        I may update the App or these Terms from time to time. Continued use
        after changes means you accept them. You can stop using the App at any
        time by uninstalling it.
      </p>

      <h2>10. Contact</h2>
      <p>
        {app.developer} &mdash;{" "}
        <a href={`mailto:${app.email}`}>{app.email}</a>
      </p>
    </AppLegalLayout>
  );
}
