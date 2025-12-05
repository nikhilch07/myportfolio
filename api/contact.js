import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  // ✅ Read env vars
  const user = process.env.MAIL_USER;
  const pass = process.env.MAIL_PASS;

  console.log("MAIL_USER:", user );
  console.log("MAIL_PASS:", pass );

  if (!user || !pass) {
    console.error("MAIL_USER or MAIL_PASS not set in environment");
    return res.status(500).json({
      error: "Email service is not configured. Please try again later.",
    });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user, // from env
        pass, // from env
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to: "ntej18.ui@gmail.com",
      subject: `New portfolio message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
        <h2>New message from your portfolio 👋</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("CONTACT_API_ERROR", error);
    return res.status(500).json({ error: "Email failed" });
  }
}
