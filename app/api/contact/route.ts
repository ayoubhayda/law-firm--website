import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Validation
    if (!body.name || !body.email || !body.phone || !body.message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${body.name}" <${process.env.SMTP_USER}>`,
      to: process.env.LAWYER_EMAIL,
      replyTo: body.email,
      subject: `طلب استشارة جديد من ${body.name}`,
      html: `
        <div dir="rtl" style="font-family: 'Segoe UI', Tahoma, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e5e5e5;">
          <div style="background: #031E33; padding: 24px 32px;">
            <h1 style="color: #DFC4A0; margin: 0; font-size: 20px;">طلب استشارة جديد</h1>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666; width: 120px;">الاسم</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600;">${body.name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666;">البريد الإلكتروني</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${body.email}" style="color: #031E33;">${body.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #666;">رقم الهاتف</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;"><a href="tel:${body.phone}" style="color: #031E33;">${body.phone}</a></td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 20px; background: #f8f8f8; border-radius: 6px; border-right: 3px solid #DFC4A0;">
              <p style="margin: 0 0 8px; color: #666; font-size: 13px;">الرسالة</p>
              <p style="margin: 0; line-height: 1.6;">${body.message}</p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
