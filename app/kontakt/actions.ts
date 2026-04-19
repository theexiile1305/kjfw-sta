"use server";

import { z } from "zod";
import { Resend } from "resend";
import type { ContactFormState } from "@/types/contact";
import { verifyFormToken } from "@/lib/form-token";

// Zod 4: email is now a top-level validator (z.email())
// and string validators remain on z.string()
const ContactSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben").max(100, "Name zu lang"),
  email: z.email("Ungültige E-Mail-Adresse"),
  subject: z.string().min(3, "Betreff muss mindestens 3 Zeichen haben").max(200, "Betreff zu lang"),
  message: z
    .string()
    .min(10, "Nachricht muss mindestens 10 Zeichen haben")
    .max(5_000, "Nachricht zu lang (max. 5000 Zeichen)"),
  website: z.string().max(0).optional(),
});

// Created once per module load — `RESEND_API_KEY` never leaves the server
const resend = new Resend(process.env["RESEND_API_KEY"]);

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // 1. Honeypot — bots fill hidden fields; real users don't
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    // Silently succeed to avoid revealing the honeypot mechanism
    return { status: "success" };
  }

  // 2. Time-based HMAC token — rejects forged or instant-submit requests
  const formToken = formData.get("form_token");
  const formTs = formData.get("form_ts");
  if (
    typeof formToken !== "string" ||
    typeof formTs !== "string" ||
    !verifyFormToken(formToken, formTs)
  ) {
    return {
      status: "rate_limited",
      message: "Ungültige Anfrage. Bitte lade die Seite neu und versuche es erneut.",
    };
  }

  // 3. Parse and validate with Zod 4
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    website: formData.get("website") ?? "",
  };

  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    // Zod 4: errors are in parsed.error.issues
    const firstIssue = parsed.error.issues[0];
    return {
      status: "error",
      message: firstIssue?.message ?? "Ungültige Eingabe. Bitte überprüfe deine Angaben.",
    };
  }

  const { name, email, subject, message } = parsed.data;

  // 4. Send via Resend
  const to = process.env["CONTACT_EMAIL_TO"];
  if (!to) {
    console.error("[kontakt] CONTACT_EMAIL_TO is not configured");
    return {
      status: "error",
      message: "Konfigurationsfehler auf dem Server. Bitte kontaktiere uns direkt per E-Mail.",
    };
  }

  const emailBody = [
    `Name:    ${name}`,
    `E-Mail:  ${email}`,
    `Betreff: ${subject}`,
    ``,
    message,
    ``,
    `---`,
    `Gesendet über kjf-sta.de`,
  ].join("\n");

  const { error } = await resend.emails.send({
    from: "Kontaktformular KJF Starnberg <noreply@kjf-sta.de>",
    to: [to],
    replyTo: email,
    subject: `[Kontakt] ${subject}`,
    text: emailBody,
  });

  if (error) {
    console.error("[kontakt] Resend error:", error);
    return {
      status: "error",
      message: "Die Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut.",
    };
  }

  return { status: "success" };
}
