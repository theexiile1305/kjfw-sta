import { createHmac, timingSafeEqual } from "crypto";

export function createInternToken(): string {
  const secret = process.env["INTERN_SECRET"] ?? "fallback-secret";
  return createHmac("sha256", secret).update("intern").digest("hex");
}

export function verifyInternToken(token: string): boolean {
  const expected = createInternToken();
  try {
    return timingSafeEqual(Buffer.from(token), Buffer.from(expected));
  } catch {
    return false;
  }
}
