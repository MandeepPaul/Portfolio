import "dotenv/config";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const req = await request.json();

  const { personName, email, subject, message } = req;

  // Basic server-side validation
  if (!personName || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required" });
  }

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    host: process.env.SMTP_HOST, // Change this to your mail server's hostname
    port: process.env.SMTP_PORT, // Change this to your mail server's port
    secure: process.env.SMTP_SECURE, // Use true for TLS
    auth: {
      user: process.env.SMTP_USER, // Change this to your email address
      pass: process.env.SMTP_PASS, // Change this to your email password
    },
  });

  // Define email options
  const mailOptions = {
    from: {
      name: "My Website",
      address: process.env.SMTP_USER,
    }, // Sender address
    to: process.env.SMTP_USER, // Receiver address
    subject: `${subject}`,
    text: `Name: ${personName}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    // Respond with an error
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" });
  }
}
