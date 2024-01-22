import "dotenv/config";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const req = await request.json();

  const { name, email, subject, message } = req;
  // Basic server-side validation
  const missingFields = [];
  if (!name) missingFields.push("name");
  if (!email) missingFields.push("email");
  if (!subject) missingFields.push("subject");
  if (!message) missingFields.push("message");

  if (missingFields.length > 0) {
    return NextResponse.json(
      { error: "All fields are required", missingFields },
      { status: 400 }
    );
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
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    // Respond with an error
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
