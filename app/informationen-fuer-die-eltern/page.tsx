import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export const metadata: Metadata = buildMetadata({
  title: "Informationen für die Eltern",
  description:
    "Was Eltern über die Jugendfeuerwehr wissen sollten: Sicherheit, Ausbildung, Betreuung und die Vorteile für Kinder und Jugendliche.",
  path: "/informationen-fuer-die-eltern",
});

export default function ElternPage() {
  return (
    <article className="py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Informationen für die Eltern"
          subtitle="Alles, was Sie über die Jugendfeuerwehr wissen sollten"
        />

        <p className="mt-8 text-lg text-neutral-700 leading-relaxed">
          Die Jugendfeuerwehr bietet Ihrem Kind weit mehr als spannende Freizeitgestaltung. Hier
          lernen junge Menschen Verantwortung zu übernehmen, im Team zu arbeiten und sich in
          schwierigen Situationen zu behaupten. Wir freuen uns, Ihnen einen Überblick über
          Sicherheit, Ausbildung und Betreuung zu geben.
        </p>

        <div className="mt-12 space-y-10">
          <section aria-labelledby="sicherheit">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-fire-100 text-fire-600"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h2 id="sicherheit" className="text-2xl font-bold text-neutral-900">
                Sicherheit
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <h3 className="font-semibold text-neutral-900 mb-2">Keine Einsätze</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Mitglieder unter 16 Jahren nehmen an keinen Einsätzen teil. Die Jugendarbeit
                  konzentriert sich ausschließlich auf Ausbildung, Training und Freizeitaktivitäten.
                  Jugendliche ab 16 Jahren dürfen unter Aufsicht erfahrener Einsatzkräfte bei
                  Übungen mitwirken.
                </p>
              </Card>
              <Card>
                <h3 className="font-semibold text-neutral-900 mb-2">Schutzausrüstung</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Jedes Mitglied erhält kostenlos persönliche Schutzausrüstung: Helm, Schutzanzug,
                  Handschuhe und Sicherheitsstiefel. Die Ausrüstung wird regelmäßig geprüft und
                  erfüllt alle gesetzlichen Sicherheitsstandards.
                </p>
              </Card>
              <Card>
                <h3 className="font-semibold text-neutral-900 mb-2">Unfallversicherung</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Alle Mitglieder sind während offizieller Veranstaltungen, Übungen und Ausflügen
                  automatisch unfallversichert. Es entstehen Ihnen keine zusätzlichen
                  Versicherungskosten.
                </p>
              </Card>
              <Card>
                <h3 className="font-semibold text-neutral-900 mb-2">Qualifizierte Führung</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Alle Jugendfeuerwehrwarte durchlaufen eine spezielle Ausbildung in Jugendarbeit
                  und Pädagogik. Ihr Kind ist bei uns in erfahrenen und verantwortungsvollen Händen.
                </p>
              </Card>
            </div>
          </section>

          <section aria-labelledby="ausbildung">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-100 text-navy-600"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h2 id="ausbildung" className="text-2xl font-bold text-neutral-900">
                Ausbildung
              </h2>
            </div>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Die Ausbildung in der Jugendfeuerwehr ist praxisnah, vielseitig und altersgerecht.
              Neben feuerwehrtechnischen Grundlagen werden naturwissenschaftliche Zusammenhänge aus
              Physik, Chemie und Biologie spielerisch vermittelt.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Feuerwehrtechnik",
                  desc: "Gerätekunde, Löschtechnik, Rettungsmaßnahmen und Grundlagen der Brandbekämpfung.",
                },
                {
                  title: "Erste Hilfe",
                  desc: "Praktische Erste-Hilfe-Ausbildung und Grundlagen der Erstversorgung bei Unfällen.",
                },
                {
                  title: "Leistungsabzeichen",
                  desc: "Möglichkeit zum Erwerb der Bayerischen Jugendleistungsspange und der Jugendflamme in verschiedenen Stufen.",
                },
              ].map(({ title, desc }) => (
                <Card key={title}>
                  <h3 className="font-semibold text-neutral-900 mb-2">{title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{desc}</p>
                </Card>
              ))}
            </div>
          </section>

          <section aria-labelledby="betreuung">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-fire-100 text-fire-600"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h2 id="betreuung" className="text-2xl font-bold text-neutral-900">
                Betreuung
              </h2>
            </div>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Jede Jugendfeuerwehr verfügt über ein erfahrenes Betreuungsteam aus ausgebildeten
              Jugendfeuerwehrwarten. Die Jugendlichen können zudem ihre eigene Jugendvertretung, die
              ihre Interessen im Verein repräsentiert, wählen.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Jugendvertretung",
                  desc: "Die Mitglieder wählen ihre eigene Jugendvertretung. Diese bringt Wünsche und Ideen in die Vereinsarbeit ein.",
                },
                {
                  title: "Elternkontakt",
                  desc: "Regelmäßige Information der Eltern über Aktivitäten und Termine. Offene Kommunikation ist uns wichtig.",
                },
              ].map(({ title, desc }) => (
                <Card key={title}>
                  <h3 className="font-semibold text-neutral-900 mb-2">{title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{desc}</p>
                </Card>
              ))}
            </div>
          </section>

          <section aria-labelledby="vorteile">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-100 text-navy-600"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h2 id="vorteile" className="text-2xl font-bold text-neutral-900">
                Vorteile für Kinder
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Teamgeist",
                  desc: "In der Gruppe gemeinsam Aufgaben lösen stärkt das Verantwortungsbewusstsein und den Zusammenhalt.",
                },
                {
                  title: "Freundschaften",
                  desc: "Die gemeinsamen Erlebnisse in der Feuerwehr schaffen Freundschaften, die oft ein Leben lang halten.",
                },
                {
                  title: "Ausflüge & Reisen",
                  desc: "Zeltlager, Fahrten und Ausflüge im In- und Ausland sorgen für unvergessliche Erlebnisse.",
                },
                {
                  title: "Gesellschaftliches Engagement",
                  desc: "Schon früh lernen die Kinder, wie wertvoll ehrenamtliches Engagement für die Gemeinschaft ist.",
                },
              ].map(({ title, desc }) => (
                <Card key={title}>
                  <h3 className="font-semibold text-neutral-900 mb-2">{title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{desc}</p>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-12 rounded-card bg-navy-700 text-white p-8 text-center">
          <h2 className="text-xl font-bold mb-3">Ihr Kind möchte mitmachen?</h2>
          <p className="text-neutral-300 mb-6 leading-relaxed">
            Nehmen Sie einfach Kontakt mit der nächstgelegenen Jugendfeuerwehr auf oder schreiben
            Sie uns direkt. Wir helfen Ihnen gerne weiter.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-button bg-fire-500 px-6 py-3
                       text-sm font-semibold text-white no-underline hover:bg-fire-600
                       transition-colors"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </article>
  );
}
