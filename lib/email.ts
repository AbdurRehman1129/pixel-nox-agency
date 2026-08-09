import { Resend } from "resend";
import { siteConfig } from "@/data/siteConfig";

/**
 * Resend's test sender. Works immediately with any RESEND_API_KEY, no
 * domain setup required, but can only send TO the email address on the
 * Resend account itself — fine for local/staging testing.
 *
 * Once you verify your own domain in the Resend dashboard
 * (https://resend.com/domains), change this to something like
 * "Pixel Nox <notifications@pixelnox.com>" so you can send to any inbox,
 * including your real siteConfig.email.
 */
const FROM_ADDRESS = "Pixel Nox <noreply@pixelnox.site>";

let resendClient: Resend | null = null;

function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

export async function sendNotificationEmail({
  subject,
  html,
}: {
  subject: string;
  html: string;
}): Promise<{ sent: boolean; reason?: string }> {
  const resend = getResendClient();

  if (!resend) {
    // Not configured yet — don't throw, just say so. The caller still logs
    // the raw submission so nothing is lost while email delivery is unset up.
    return {
      sent: false,
      reason:
        "RESEND_API_KEY is not set. Add it to .env.local (see .env.example) to enable real email delivery.",
    };
  }

  const to = process.env.CONTACT_NOTIFICATION_EMAIL || siteConfig.email;

  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to,
    subject,
    html,
  });

  if (error) {
    return { sent: false, reason: error.message };
  }

  return { sent: true };
}

/** Minimal HTML-escaping for values interpolated into the email body. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
