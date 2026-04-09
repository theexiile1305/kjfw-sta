"use server";

import { timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createInternToken } from "@/lib/intern-auth";

const COOKIE_NAME = "intern-token";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function loginIntern(
  _prevState: { error: string | null },
  formData: FormData
): Promise<{ error: string | null }> {
  const password = formData.get("password");
  if (typeof password !== "string" || password.length === 0) {
    return { error: "Bitte Passwort eingeben." };
  }

  const expectedPassword = process.env["INTERN_PASSWORD"];
  if (!expectedPassword) {
    console.error("[intern] INTERN_PASSWORD is not configured");
    return { error: "Konfigurationsfehler. Bitte Administrator kontaktieren." };
  }

  let passwordMatch = false;
  try {
    passwordMatch = timingSafeEqual(Buffer.from(password), Buffer.from(expectedPassword));
  } catch {
    // Buffers have different lengths — passwords don't match
    passwordMatch = false;
  }

  if (!passwordMatch) {
    return { error: "Falsches Passwort. Bitte versuche es erneut." };
  }

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, createInternToken(), {
    httpOnly: true,
    sameSite: "strict",
    path: "/intern",
    maxAge: COOKIE_MAX_AGE,
    secure: process.env.NODE_ENV === "production",
  });

  redirect("/intern");
}
