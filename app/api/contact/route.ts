import { NextResponse } from "next/server";

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

    // TODO: connect a real email service here (e.g. Resend, SendGrid, or
    // Postmark) and send this inquiry to the agency inbox + an optional
    // confirmation email to the sender. Add the provider's API key as an
    // environment variable (e.g. RESEND_API_KEY) once chosen — see
    // .env.example in Phase 9. This route is intentionally separate from
    // /api/book-meeting so general inquiries and meeting requests don't mix.
    console.log("New contact form submission:", data);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
