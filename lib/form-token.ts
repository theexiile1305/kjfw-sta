import { createHmac, timingSafeEqual } from "crypto";

const MIN_AGE_MS = 3_000; // 3 seconds — rejects instant bot submissions
const MAX_AGE_MS = 3_600_000; // 1 hour — rejects recycled tokens

function secret(): string {
  return process.env["INTERN_SECRET"] ?? "fallback-dev-secret";
}

export function createFormToken(): { token: string; ts: string } {
  const ts = Date.now().toString();
  const token = createHmac("sha256", secret()).update(ts).digest("hex");
  return { token, ts };
}

export function verifyFormToken(token: string, ts: string): boolean {
  if (!/^\d+$/.test(ts)) return false;
  const expected = createHmac("sha256", secret()).update(ts).digest("hex");
  try {
    const a = Buffer.from(token, "hex");
    const b = Buffer.from(expected, "hex");
    if (a.length !== b.length || a.length === 0) return false;
    if (!timingSafeEqual(a, b)) return false;
  } catch {
    return false;
  }
  const age = Date.now() - Number(ts);
  return age >= MIN_AGE_MS && age <= MAX_AGE_MS;
}
