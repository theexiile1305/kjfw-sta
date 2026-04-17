import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { verifyInternToken } from "@/lib/intern-auth";
import { readFile } from "fs/promises";
import path from "path";

const ALLOWED_FILES: Record<string, string> = {
  "ehrenamtszeugnis.pdf": "Ehrenamtszeugnis",
  "ehrenzeichen_richtlinie.pdf": "Ehrenzeichen: Richtlinie",
  "ehrenzeichen_antrag.doc": "Ehrenzeichen: Antrag",
  "jugendflamme_praesentation_201005.pdf": "Jugendflamme: Präsentation Mai 2010",
  "jugendflamme_broschuere.pdf": "Jugendflamme: Broschüre",
  "jugendflamme_anlage.pdf": "Jugendflamme: Anlage",
  "jugendleistungspruefung_abnahmeniederschrift.pdf": "Jugendleistungsprüfung: Abnahmeniederschrift",
  "jugendleistungspruefung_richtlinie_2010.pdf": "Jugendleistungsprüfung: Richtlinie 2010",
  "jugendleistungspruefung_testfragen_a.pdf": "Jugendleistungsprüfung: Testfragen A",
  "jugendleistungspruefung_testfragen_b.pdf": "Jugendleistungsprüfung: Testfragen B",
  "jugendleistungspruefung_testfragen_c.pdf": "Jugendleistungsprüfung: Testfragen C",
  "jugendleistungspruefung_testfragen_d.pdf": "Jugendleistungsprüfung: Testfragen D",
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

  const ext = path.extname(filename).toLowerCase();
  const contentType = ext === ".doc" ? "application/msword" : "application/pdf";

  return new NextResponse(new Uint8Array(data), {
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
