import { NextResponse } from "next/server";

type ContactRequestBody = {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body: ContactRequestBody = await req.json();
    const { name, email, company, projectType, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured." },
        { status: 500 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL || "ajaykatariya.dev@gmail.com";

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [recipientEmail],
        reply_to: email,
        subject: `New Portfolio Inquiry from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <p><strong>Project Type:</strong> ${projectType || "N/A"}</p>
          <p><strong>Budget:</strong> ${budget || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        `,
      }),
    });

    const resData = await resendResponse.json();

    if (!resendResponse.ok) {
      return NextResponse.json(
        { error: resData.message || "Failed to send email." },
        { status: resendResponse.status }
      );
    }

    return NextResponse.json({ success: true, data: resData });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
