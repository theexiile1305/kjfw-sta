import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { youthCupHistory, youthCupAgeGroups, youthCupRecord } from "@/lib/data/youthCup";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export const metadata: Metadata = buildMetadata({
  title: "Jugendpokal",
  description:
    "Der Jugendpokal der Kreisjugendfeuerwehr Starnberg - ein jährlicher Wettkampf seit 1979 in drei Altersklassen.",
  path: "/jugendpokal",
});

const exercises = [
  {
    num: 1,
    title: "Saugschläuche kuppeln",
    desc: "Zwei Saugschläuche werden gekuppelt und einsatzbereit gemacht.",
  },
  {
    num: 2,
    title: "Zielwurf",
    desc: "Mit einem Schlauch und einer Leine wird ein Ziel möglichst präzise angeworfen.",
  },
  {
    num: 3,
    title: "Brustbund mit Spierenstich",
    desc: "Ein Brustbund wird angelegt und mit einem Spierenstich gesichert.",
  },
  {
    num: 4,
    title: "Zusatzstation",
    desc: "Zusatzstation aus einem festgelegten Katalog.",
  },
  {
    num: 5,
    title: "C-Schlauchleitung kuppeln",
    desc: "Eine 60 Meter lange C-Schlauchleitung wird vollständig gekuppelt und verlegt.",
  },
  {
    num: 6,
    title: "Strahlrohr einbinden",
    desc: "Ein C-Mehrzweckstrahlror wird direkt nach der C-Schlauchleitung mit einen Mastwurf und einen Halbschalg eingebunden.",
  },
  {
    num: 7,
    title: "Zielspritzen",
    desc: "Mit einer Tragkraftspritze wird ein vorgegebenes Ziel präzise getroffen.",
  },
];

export default function JugendpokalPage() {
  return (
    <article className="py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Jugendpokal"
          subtitle="Unser traditioneller Wettkampf - seit 1979 ein Höhepunkt im Jahreskalender."
        />

        {/* Überblick */}
        <section aria-labelledby="ueberblick" className="mt-10">
          <h2 id="ueberblick" className="text-2xl font-bold text-neutral-900 mb-5">
            Überblick
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Der Jugendpokal der Kreisjugendfeuerwehr Starnberg ist ein jährlicher Wettkampf, bei dem
            vier Jugendliche als Team gemeinsam feuerwehrtechnische Grundaufgaben bewältigen.
            Gemessen wird die Zeit - gewonnen hat das schnellste und präziseste Team in jeder
            Altersklasse.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Der Austragungsort wechselt jedes Jahr und wird von einer anderen Mitgliedsfeuerwehr
            ausgerichtet.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <Card>
              <h3 className="text-base font-bold text-neutral-900 mb-3">Altersklassen</h3>
              <ul className="space-y-2" role="list">
                {youthCupAgeGroups.map(({ key, ages }) => (
                  <li key={key} className="flex items-center justify-between text-sm">
                    <span className="font-medium text-neutral-800">{key}</span>
                    <span className="text-neutral-500">{ages}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="text-base font-bold text-neutral-900 mb-3">Streckenrekord</h3>
              <p className="text-3xl font-bold text-fire-500">{youthCupRecord.time}</p>
              <p className="text-sm text-neutral-500 mt-1">{youthCupRecord.team}</p>
              <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                Der Pokal kann nach dreimaligem Sieg in Folge dauerhaft gewonnen werden.
              </p>
            </Card>
          </div>
        </section>

        {/* Ablauf */}
        <section aria-labelledby="ablauf" className="mt-16">
          <h2 id="ablauf" className="text-2xl font-bold text-neutral-900 mb-5">
            Ablauf
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Der Wettkampf findet auf einem rechteckigen Parcours statt. Jedes Team absolviert fünf
            Pflichtelemente in der vorgegebenen Reihenfolge. Die Zeit läuft vom Startsignal bis zur
            Fertigstellung aller Aufgaben. Zusätzlich kann die ausrichtende Feuerwehr eine
            Zusatzstation aus einem festgelegten Katalog einbauen.
          </p>

          <ol className="space-y-4" role="list">
            {exercises.map(({ num, title, desc }) => (
              <li
                key={num}
                className="flex gap-4 rounded-card border border-neutral-200 bg-neutral-50 p-4"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full
                               bg-fire-500 text-white text-sm font-bold"
                  aria-hidden="true"
                >
                  {num}
                </span>
                <div>
                  <h3 className="font-semibold text-neutral-900 text-sm">{title}</h3>
                  <p className="text-sm text-neutral-600 mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Historie / Chronik */}
        <section aria-labelledby="chronik" className="mt-16">
          <h2 id="chronik" className="text-2xl font-bold text-neutral-900 mb-5">
            Historie &amp; Chronik
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Seit der ersten Austragung 1979 in Gauting hat sich der Jugendpokal zu einer festen
            Tradition im Landkreis Starnberg entwickelt. Die folgende Übersicht zeigt die bisherigen
            Austragungen.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100 text-left">
                  <th className="px-3 py-2 font-semibold text-neutral-700 border border-neutral-200">
                    Jahr
                  </th>
                  <th className="px-3 py-2 font-semibold text-neutral-700 border border-neutral-200">
                    Nr.
                  </th>
                  <th className="px-3 py-2 font-semibold text-neutral-700 border border-neutral-200">
                    Austragungsort
                  </th>
                  <th className="px-3 py-2 font-semibold text-neutral-700 border border-neutral-200">
                    AK I<span className="block text-xs font-normal text-neutral-400">12/13 J.</span>
                  </th>
                  <th className="px-3 py-2 font-semibold text-neutral-700 border border-neutral-200">
                    AK II
                    <span className="block text-xs font-normal text-neutral-400">14/15 J.</span>
                  </th>
                  <th className="px-3 py-2 font-semibold text-neutral-700 border border-neutral-200">
                    AK III
                    <span className="block text-xs font-normal text-neutral-400">16/17 J.</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {youthCupHistory.map((edition) => (
                  <tr
                    key={edition.year}
                    className="even:bg-neutral-50 hover:bg-fire-50 transition-colors"
                  >
                    <td className="px-3 py-2 border border-neutral-200 font-medium">
                      {edition.year}
                    </td>
                    <td className="px-3 py-2 border border-neutral-200 text-neutral-500">
                      {edition.edition}.
                    </td>
                    <td className="px-3 py-2 border border-neutral-200">{edition.location}</td>
                    <td className="px-3 py-2 border border-neutral-200 text-neutral-600">
                      {edition.akI ?? <span className="text-neutral-300">-</span>}
                    </td>
                    <td className="px-3 py-2 border border-neutral-200 text-neutral-600">
                      {edition.akII ?? <span className="text-neutral-300">-</span>}
                    </td>
                    <td className="px-3 py-2 border border-neutral-200 text-neutral-600">
                      {edition.akIII ?? <span className="text-neutral-300">-</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </article>
  );
}
