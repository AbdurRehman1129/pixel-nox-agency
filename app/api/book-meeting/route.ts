import { NextResponse } from "next/server";
import { sendNotificationEmail, escapeHtml } from "@/lib/email";
import { services } from "@/data/services";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      name,
      email,
      phone,
      company,
      service,
      preferredDate,
      preferredTime,
      timeZone,
      message,
    } = data ?? {};

    if (!name || !email || !preferredDate || !timeZone) {
      return NextResponse.json(
        { error: "Name, email, preferred date, and time zone are required." },
        { status: 400 }
      );
    }

    // Reject past dates server-side too — the client already blocks this,
    // but this route can be called directly, bypassing the form.
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const requestedDate = new Date(`${preferredDate}T00:00:00`);

    if (Number.isNaN(requestedDate.getTime()) || requestedDate < today) {
      return NextResponse.json(
        { error: "Preferred date must be today or a future date." },
        { status: 400 }
      );
    }

    console.log("New meeting request:", data);

    const serviceTitle =
      services.find((s) => s.slug === service)?.title || service || "—";

    const html = `
      <h2>New meeting request</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
      <p><strong>Company:</strong> ${escapeHtml(company || "—")}</p>
      <p><strong>Service interested in:</strong> ${escapeHtml(serviceTitle)}</p>
      <p><strong>Preferred date:</strong> ${escapeHtml(preferredDate)}</p>
      <p><strong>Preferred time:</strong> ${escapeHtml(preferredTime || "—")}</p>
      <p><strong>Time zone:</strong> ${escapeHtml(timeZone)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message || "—").replace(/\n/g, "<br />")}</p>
    `;

    const result = await sendNotificationEmail({
      subject: `New meeting request from ${name}`,
      html,
    });

    if (!result.sent) {
      console.warn("Meeting request email not sent:", result.reason);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
