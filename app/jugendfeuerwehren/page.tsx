import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { youthBrigades } from "@/lib/data/youthBrigades";
import BrigadeCard from "@/components/brigades/BrigadeCard";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = buildMetadata({
  title: "Jugendfeuerwehren",
  description: `Die ${youthBrigades.length} Jugendfeuerwehren im Landkreis Starnberg - Ausbildung, Kameradschaft und Wettkampf für Jugendliche ab 12 Jahren.`,
  path: "/youthBrigades",
});

export default function JugendfeuerwehrenPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Jugendfeuerwehren"
          subtitle={`${youthBrigades.length} Jugendfeuerwehren im Landkreis Starnberg für Jugendliche von 12 bis 17 Jahren.`}
        />

        <div className="mt-4 rounded-card bg-fire-50 border border-fire-100 p-4 text-sm text-fire-800">
          Die Jugendfeuerwehr bietet jungen Menschen zwischen 12 und 17 Jahren die Möglichkeit,
          Feuerwehrtechnik zu erlernen, Kameradschaft zu erleben und sich in der Gemeinschaft zu
          engagieren. Mit Bestehen des 17. Lebensjahrs kann der Übertritt in die aktive Feuerwehr
          erfolgen.
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {youthBrigades.map((brigade) => (
            <BrigadeCard key={brigade.id} brigade={brigade} />
          ))}
        </div>
      </div>
    </section>
  );
}
