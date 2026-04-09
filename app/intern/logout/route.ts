import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(): Promise<never> {
  const cookieStore = await cookies();
  cookieStore.delete("intern-token");
  redirect("/intern/login");
}
