import { NextResponse } from "next/server";
import { sendNotificationEmail, escapeHtml } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data ?? {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required." },
        { status: 400 }
      );
    }

    console.log("New contact form submission:", data);

    const html = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `;

    const result = await sendNotificationEmail({
      subject: `New inquiry: ${subject}`,
      html,
    });

    if (!result.sent) {
      // Submission is still logged above, so nothing is lost — but flag
      // this in the server logs so it's obvious email isn't going out yet.
      console.warn("Contact email not sent:", result.reason);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
