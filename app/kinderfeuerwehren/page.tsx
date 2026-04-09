import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { childrenBrigades } from "@/lib/data/childrenBrigades";
import BrigadeCard from "@/components/brigades/BrigadeCard";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = buildMetadata({
  title: "Kinderfeuerwehren",
  description: `${childrenBrigades.length} Kinderfeuerwehren im Landkreis Starnberg - spielerische Einführung in die Feuerwehrwelt für Kinder unter 12 Jahren.`,
  path: "/childrenBrigades",
});

export default function KinderfeuerwehrenPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Kinderfeuerwehren"
          subtitle={`${childrenBrigades.length} Kinderfeuerwehren im Landkreis Starnberg für Kinder von 6 bis 12 Jahren.`}
        />

        <div className="mt-4 rounded-card bg-fire-50 border border-fire-100 p-4 text-sm text-fire-800">
          Die Kinderfeuerwehr richtet sich an Kinder von 6 bis 12 Jahren und führt sie spielerisch
          an die Themen Feuerwehr, Brandschutz und Erste Hilfe heran. Mit Vollendung des 12.
          Lebensjahres können die Kinder in die Jugendfeuerwehr wechseln.
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {childrenBrigades.map((brigade) => (
            <BrigadeCard key={brigade.id} brigade={brigade} />
          ))}
        </div>
      </div>
    </section>
  );
}
