import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { verifyInternToken } from "@/lib/intern-auth";
import Card from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interner Bereich | KJF Starnberg",
  robots: { index: false, follow: false },
};

const FILES: { name: string; filename: string }[] = [
  { name: "Ehrenamtszeugnis", filename: "ehrenamtszeugnis.pdf" },
  { name: "Ehrenzeichen: Richtlinie", filename: "ehrenzeichen_richtlinie.pdf" },
  { name: "Ehrenzeichen: Antrag", filename: "ehrenzeichen_antrag.doc" },
  {
    name: "Jugendflamme: Präsentation Mai 2010",
    filename: "jugendflamme_praesentation_201005.pdf",
  },
  { name: "Jugendflamme: Broschüre", filename: "jugendflamme_broschuere.pdf" },
  { name: "Jugendflamme: Anlage", filename: "jugendflamme_anlage.pdf" },
  { name: "Jugendleistungsprüfung: Anmeldung", filename: "jugendleistungspruefung_anmeldung.pdf" },
  {
    name: "Jugendleistungsprüfung: Abnahmeniederschrift",
    filename: "jugendleistungspruefung_abnahmeniederschrift.pdf",
  },
  {
    name: "Jugendleistungsprüfung: Bewertungsblatt",
    filename: "jugendleistungspruefung_bewertungsblatt.pdf",
  },
  {
    name: "Jugendleistungsprüfung: Richtlinie 2010",
    filename: "jugendleistungspruefung_richtlinie_2010.pdf",
  },
  {
    name: "Jugendleistungsprüfung: Testfragen A",
    filename: "jugendleistungspruefung_testfragen_a.pdf",
  },
  {
    name: "Jugendleistungsprüfung: Testfragen B",
    filename: "jugendleistungspruefung_testfragen_b.pdf",
  },
  {
    name: "Jugendleistungsprüfung: Testfragen C",
    filename: "jugendleistungspruefung_testfragen_c.pdf",
  },
  {
    name: "Jugendleistungsprüfung: Testfragen D",
    filename: "jugendleistungspruefung_testfragen_d.pdf",
  },
];

export default async function InternPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("intern-token")?.value;

  if (!token || !verifyInternToken(token)) {
    redirect("/intern/login");
  }

  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">Interner Bereich</h1>
            <p className="mt-2 text-neutral-500 text-sm">Dokumente und Dateien für Mitglieder</p>
          </div>
          <Link
            href="/intern/logout"
            className="text-sm text-neutral-500 hover:text-neutral-700 no-underline
                       hover:underline transition-colors"
          >
            Abmelden
          </Link>
        </div>

        {/* Documents Card */}
        <Card className="p-0 overflow-hidden">
          {/* Card Header */}
          <div className="flex items-center gap-3 px-6 py-5 border-b border-neutral-100">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-fire-50 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-fire-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-semibold text-neutral-900">Dokumente</h2>
              <p className="text-xs text-neutral-500 mt-0.5">
                Nur für Mitglieder zugängliche Dateien
              </p>
            </div>
          </div>

          {/* File List */}
          {FILES.length === 0 ? (
            <div className="px-6 py-10 text-center">
              <p className="text-neutral-500 text-sm">Es sind noch keine Dateien vorhanden.</p>
            </div>
          ) : (
            <ul role="list" className="divide-y divide-neutral-100">
              {FILES.map(({ name, filename }) => (
                <li
                  key={filename}
                  className="flex items-center justify-between px-6 py-4 hover:bg-neutral-50 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-fire-50 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-fire-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-neutral-900 truncate">{name}</p>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        {filename.endsWith(".doc") ? "Word" : "PDF"}
                      </p>
                    </div>
                  </div>
                  <a
                    href={`/intern/download/${filename}`}
                    className="ml-4 shrink-0 inline-flex items-center gap-1.5 rounded-button
                               border-2 border-fire-500 px-4 py-2 text-xs font-semibold
                               text-fire-600 hover:bg-fire-50 transition-colors
                               focus-visible:outline-2 focus-visible:outline-offset-2
                               focus-visible:outline-fire-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                    Herunterladen
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </div>
  );
}
