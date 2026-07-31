import { NextResponse } from "next/server";

// Este endpoint recibe el formulario de contacto.
// Para producción, conéctalo a un proveedor de correo (Resend, SendGrid, Nodemailer, etc.)
// This endpoint receives the contact form submission.
// For production, wire it up to an email provider (Resend, SendGrid, Nodemailer, etc.)

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body as { name?: string; email?: string; message?: string };

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // TODO: integra tu proveedor de correo aquí, por ejemplo:
    // await resend.emails.send({ from: "portfolio@tudominio.com", to: personal.email, subject: `Nuevo mensaje de ${name}`, text: message });
    console.log("New contact form submission:", { name, email, message });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
