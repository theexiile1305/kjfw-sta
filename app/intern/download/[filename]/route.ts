import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { verifyInternToken } from "@/lib/intern-auth";
import { readFile } from "fs/promises";
import path from "path";

const ALLOWED_FILES: Record<string, string> = {
  "doc1.pdf": "Dokument 1",
  "doc2.pdf": "Dokument 2",
  "doc3.pdf": "Dokument 3",
};

export async function GET(_req: Request, { params }: { params: Promise<{ filename: string }> }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("intern-token")?.value;

  if (!token || !verifyInternToken(token)) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { filename } = await params;

  if (!Object.hasOwn(ALLOWED_FILES, filename)) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const filePath = path.join(process.cwd(), "private-docs", filename);

  let data: Buffer;
  try {
    data = await readFile(filePath);
  } catch {
    return new NextResponse("Not Found", { status: 404 });
  }

  return new NextResponse(new Uint8Array(data), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
