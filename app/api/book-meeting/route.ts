import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, preferredDate } = data ?? {};

    if (!name || !email || !preferredDate) {
      return NextResponse.json(
        { error: "Name, email, and preferred date are required." },
        { status: 400 }
      );
    }

    // TODO: connect a real email/calendar service here (e.g. Resend,
    // SendGrid, or a calendar-booking API) and send a notification +
    // confirmation email using the fields below. Add the provider's API
    // key as an environment variable (e.g. RESEND_API_KEY) once chosen —
    // see .env.example in Phase 9.
    console.log("New meeting request:", data);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
