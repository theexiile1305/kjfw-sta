import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT, STATS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export const metadata: Metadata = buildMetadata({
  title: "Über uns",
  description:
    "Die Kreisjugendfeuerwehr Starnberg - wer wir sind, was wir tun und wie du mitmachen kannst.",
  path: "/ueber-uns",
});

export default function UeberUnsPage() {
  return (
    <article className="py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Über uns"
          subtitle="Die Kreisjugendfeuerwehr im Kreisfeuerwehrverband Starnberg e.V."
        />

        {/* Einführung */}
        <section aria-labelledby="einfuehrung" className="mt-10">
          <h2 id="einfuehrung" className="text-2xl font-bold text-neutral-900 mb-5">
            Einführung
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Die Kreisjugendfeuerwehr Starnberg ist die Dachorganisation aller Jugendfeuerwehren und
            Kinderfeuerwehren im Landkreis Starnberg. Als Teil des Kreisfeuerwehrverbands
            koordinieren wir die übergreifende Jugendarbeit und vertreten die Interessen von mehr
            als 700 jungen Menschen.
          </p>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Unsere Arbeit ist vollständig ehrenamtlich. Alle Führungskräfte und Betreuer widmen ihre
            Freizeit dem Ziel, Jugendliche für den Feuerwehrdienst zu begeistern und ihnen wertvolle
            Erfahrungen für ihr späteres Leben zu vermitteln.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: STATS.youthBrigades, label: "Jugendfeuerwehren" },
              { value: STATS.childrenBrigades, label: "Kinderfeuerwehren" },
              { value: STATS.youthMembers, label: "Jugendmitglieder" },
              { value: STATS.childrenMembers, label: "Kindermitglieder" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="rounded-card border border-neutral-200 bg-neutral-50 p-4 text-center"
              >
                <dd className="text-3xl font-bold text-fire-500">{value}</dd>
                <dt className="text-xs text-neutral-500 mt-1">{label}</dt>
              </div>
            ))}
          </dl>
        </section>

        {/* Ziele & Aufgaben */}
        <section aria-labelledby="ziele" className="mt-16">
          <h2 id="ziele" className="text-2xl font-bold text-neutral-900 mb-5">
            Ziele &amp; Aufgaben
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Als Kreisverband übernehmen wir Aufgaben, die über die einzelne Jugendfeuerwehr
            hinausgehen. Wir schaffen Verbindungen, ermöglichen gemeinsame Erlebnisse und sichern
            die Qualität der Jugendarbeit im gesamten Landkreis.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Koordination",
                desc: `Abstimmung und Vernetzung aller ${STATS.youthBrigades} Jugendfeuerwehren und ${STATS.childrenBrigades} Kinderfeuerwehren im Landkreis Starnberg.`,
              },
              {
                title: "Ausbildung",
                desc: "Förderung der feuerwehrtechnischen Ausbildung und Unterstützung beim Erwerb des Leistungsabzeichens Bayern.",
              },
              {
                title: "Jugendpokal",
                desc: "Ausrichtung und Begleitung des jährlichen Jugendpokals seit 1979 - einem der Höhepunkte im Vereinsjahr.",
              },
              {
                title: "Nachwuchsförderung",
                desc: "Aktive Unterstützung der Jugendfeuerwehren bei der Gewinnung neuer Mitglieder für die aktive Feuerwehr.",
              },
              {
                title: "Umwelterziehung",
                desc: "Sensibilisierung der Jugendlichen für einen verantwortungsvollen Umgang mit der natürlichen Umwelt.",
              },
              {
                title: "Öffentlichkeitsarbeit",
                desc: "Präsentation der Jugendfeuerwehr in der Öffentlichkeit und Kommunikation mit Medien und Behörden.",
              },
            ].map(({ title, desc }) => (
              <Card key={title}>
                <h3 className="font-semibold text-neutral-900 mb-2">{title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Mitmachen */}
        <section aria-labelledby="mitmachen" className="mt-16">
          <h2 id="mitmachen" className="text-2xl font-bold text-neutral-900 mb-5">
            Mitmachen &amp; Engagement
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Jeder Jugendliche ab 6 Jahren kann Mitglied einer Kinderfeuerwehr oder ab 12 Jahren
            Mitglied einer Jugendfeuerwehr werden. Voraussetzungen gibt es kaum - außer Neugier,
            Teamgeist und Lust, Neues zu lernen. Wende dich einfach an die Jugendfeuerwehr in deiner
            Gemeinde oder schreibe uns direkt.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Kinder ab 6 Jahren sind in unseren Kinderfeuerwehren willkommen. Dort wird spielerisch
            an die Welt der Feuerwehr herangeführt - ohne Druck und mit viel Spaß.
          </p>
        </section>

        {/* Leitung */}
        <div className="mt-12 rounded-card border border-neutral-200 bg-neutral-50 p-6">
          <h2 className="text-xl font-bold text-neutral-900 mb-4">Kontakt &amp; Leitung</h2>
          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-sm">
            <div>
              <dt className="font-medium text-neutral-500">Kreisjugendfeuerwehrwart</dt>
              <dd className="text-neutral-900">{CONTACT.director}</dd>
            </div>
            <div>
              <dt className="font-medium text-neutral-500">Adresse</dt>
              <dd className="text-neutral-900">{CONTACT.address}</dd>
            </div>
            <div>
              <dt className="font-medium text-neutral-500">Telefon</dt>
              <dd>
                <a href={`tel:${CONTACT.phone}`} className="text-fire-600 hover:text-fire-700">
                  {CONTACT.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-neutral-500">E-Mail</dt>
              <dd>
                <a href={`mailto:${CONTACT.email}`} className="text-fire-600 hover:text-fire-700">
                  {CONTACT.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        {/* CTA cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-card bg-fire-500 p-6 text-white">
            <h3 className="font-bold text-lg mb-2">Fragen? Schreib uns!</h3>
            <p className="text-fire-100 text-sm mb-4 leading-relaxed">
              Wir beantworten gerne alle deine Fragen zur Jugendfeuerwehr und helfen dir beim
              Einstieg.
            </p>
            <Link
              href="/kontakt"
              className="inline-block rounded-button border-2 border-white/60 px-4 py-2
                         text-sm font-semibold text-white no-underline hover:bg-white/10 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
          <div className="rounded-card bg-navy-700 p-6 text-white">
            <h3 className="font-bold text-lg mb-2">Informationen für Eltern</h3>
            <p className="text-neutral-300 text-sm mb-4 leading-relaxed">
              Alles zu Sicherheit, Ausbildung, Betreuung und den Vorteilen der Jugendfeuerwehr für
              Kinder und Jugendliche.
            </p>
            <Link
              href="/informationen-fuer-die-eltern"
              className="inline-block rounded-button border-2 border-white/40 px-4 py-2
                         text-sm font-semibold text-white no-underline hover:bg-white/10 transition-colors"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
