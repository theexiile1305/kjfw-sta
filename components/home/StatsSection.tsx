import { STATS } from "@/lib/constants";

const stats = [
  { label: "Jugendfeuerwehren", value: STATS.youthBrigades, unit: "" },
  { label: "Kinderfeuerwehren", value: STATS.childrenBrigades, unit: "" },
  { label: "Jugendliche Mitglieder", value: STATS.youthMembers, unit: "+" },
  { label: "Kinder in Ausbildung", value: STATS.childrenMembers, unit: "+" },
];

export default function StatsSection() {
  return (
    <section aria-label="Zahlen und Fakten" className="bg-fire-500 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map(({ label, value, unit }) => (
            <div key={label} className="text-center">
              <dt className="text-sm font-medium text-fire-100">{label}</dt>
              <dd className="mt-2 text-4xl font-bold">
                {value}
                {unit}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
