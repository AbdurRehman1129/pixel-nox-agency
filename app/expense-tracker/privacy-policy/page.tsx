import type { Metadata } from "next";
import AppLegalLayout from "@/components/expense-tracker/AppLegalLayout";
import { expenseTracker as app } from "@/data/expenseTrackerConfig";

export const metadata: Metadata = {
  title: `${app.name} — Privacy Policy`,
  description: `How the ${app.name} Android app handles your data, including Google Drive backup.`,
  alternates: { canonical: `${app.basePath}/privacy-policy` },
};

export default function ExpenseTrackerPrivacy() {
  return (
    <AppLegalLayout title="Privacy Policy">
      <p>
        This Privacy Policy explains how the {app.name} Android app
        (&ldquo;the App&rdquo;), developed by {app.developer}
        (&ldquo;I,&rdquo; &ldquo;me,&rdquo; or &ldquo;the developer&rdquo;),
        handles your information. The App is available at{" "}
        <a href={`${app.basePath}/home`}>pixelnox.site{app.basePath}/home</a>.
      </p>

      <h2>1. Information the App Handles</h2>
      <ul>
        <li>
          <strong>Expense data you enter</strong> &mdash; transactions,
          amounts, categories, dates, and notes. This data is stored locally
          on your device.
        </li>
        <li>
          <strong>Google account information (only if you use backup)</strong>{" "}
          &mdash; when you sign in with Google to enable Drive backup, the App
          receives your Google account email address and an access token that
          lets it talk to Google Drive on your behalf.
        </li>
      </ul>
      <p>
        I do not operate a server that receives your expense data. I do not
        collect your name, location, contacts, or advertising identifiers,
        and the App contains no advertising.
      </p>

      <h2>2. Google Drive Access</h2>
      <p>
        Backup and restore are optional. If you turn them on, the App requests
        permission to access Google Drive and uses it only to:
      </p>
      <ul>
        <li>create or update a backup file containing your expense data, and</li>
        <li>read that backup file when you choose to restore.</li>
      </ul>
      <p>
        The App only accesses the backup file it creates. It does not view,
        list, download, or change any other file in your Google Drive. Your
        backup is stored in your own Google Drive account and is never
        transmitted to me or to any third party.
      </p>

      <h2>3. Google API Services User Data Policy</h2>
      <p>
        The App&rsquo;s use and transfer to any other app of information
        received from Google APIs will adhere to the{" "}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements. Google user data is used
        only to provide the backup and restore feature you request. It is not
        used for advertising, not sold, and not shared with third parties.
        No human reads your data.
      </p>

      <h2>4. How Your Information Is Used</h2>
      <ul>
        <li>To show your expenses and summaries inside the App.</li>
        <li>To back up and restore your data to and from your Google Drive when you ask.</li>
      </ul>

      <h2>5. Sharing</h2>
      <p>
        I do not sell, rent, or share your personal information. Data is
        exchanged only between your device and your own Google Drive, using
        Google&rsquo;s secure connection (HTTPS).
      </p>

      <h2>6. Data Retention and Deletion</h2>
      <ul>
        <li>
          <strong>On your device:</strong> your data remains until you delete
          entries or uninstall the App.
        </li>
        <li>
          <strong>In Google Drive:</strong> you can delete the backup file
          from your Google Drive at any time.
        </li>
        <li>
          <strong>Revoke access:</strong> remove the App&rsquo;s access at{" "}
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
          >
            myaccount.google.com/permissions
          </a>
          .
        </li>
      </ul>
      <p>
        Because I do not hold your data on any server, there is nothing for me
        to delete on my side. If you would like to ask about your data anyway,
        email me at <a href={`mailto:${app.email}`}>{app.email}</a>.
      </p>

      <h2>7. Security</h2>
      <p>
        Backups travel over encrypted connections and are protected by your
        Google account&rsquo;s security. Data on your device is protected by
        Android&rsquo;s app sandbox and your device lock. No method is
        completely secure, so please keep your device and Google account
        protected.
      </p>

      <h2>8. Children&rsquo;s Privacy</h2>
      <p>
        The App is not directed to children under 13, and I do not knowingly
        collect personal information from children.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        I may update this policy from time to time. Changes will be posted on
        this page with a new &ldquo;Last updated&rdquo; date.
      </p>

      <h2>10. Contact</h2>
      <p>
        {app.developer} &mdash;{" "}
        <a href={`mailto:${app.email}`}>{app.email}</a>
      </p>
    </AppLegalLayout>
  );
}
