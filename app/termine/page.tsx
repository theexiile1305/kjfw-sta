import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { events } from "@/lib/data/events";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = buildMetadata({
  title: "Termine & Veranstaltungen",
  description:
    "Aktuelle Termine, Wettkämpfe und Veranstaltungen der Kreisjugendfeuerwehr Starnberg.",
  path: "/events",
});

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("de-DE", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const categoryColors: Record<string, string> = {
  competition: "bg-fire-100 text-fire-700 border-fire-200",
  training: "bg-blue-100 text-blue-700 border-blue-200",
  event: "bg-green-100 text-green-700 border-green-200",
  other: "bg-neutral-100 text-neutral-600 border-neutral-200",
};

const categoryLabels: Record<string, string> = {
  competition: "Wettkampf",
  training: "Ausbildung",
  event: "Veranstaltung",
  other: "Sonstiges",
};

export default function TerminePage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Termine & Veranstaltungen"
          subtitle="Alle kommenden Termine der Kreisjugendfeuerwehr Starnberg."
        />

        {events.length === 0 ? (
          <p className="mt-10 text-neutral-500">
            Aktuell sind keine Termine eingetragen. Schau bald wieder vorbei!
          </p>
        ) : (
          <ul className="mt-10 space-y-6" role="list">
            {events.map((event) => (
              <li
                key={event.id}
                className="rounded-card border border-neutral-200 bg-white p-6 shadow-card"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <span
                      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium mb-2
                        ${categoryColors[event.category] ?? "bg-neutral-100 text-neutral-600 border-neutral-200"}`}
                    >
                      {categoryLabels[event.category] ?? event.category}
                    </span>
                    <h2 className="text-lg font-bold text-neutral-900">{event.title}</h2>
                    {event.description && (
                      <p className="mt-1 text-sm text-neutral-600 leading-relaxed">
                        {event.description}
                      </p>
                    )}
                  </div>
                  <div className="shrink-0 text-right text-sm">
                    <time dateTime={event.date} className="font-medium text-neutral-800 block">
                      {formatDate(event.date)}
                    </time>
                    {event.endDate && event.endDate !== event.date && (
                      <time dateTime={event.endDate} className="text-neutral-500">
                        bis {formatDate(event.endDate)}
                      </time>
                    )}
                    {event.location && <p className="text-neutral-500 mt-1">{event.location}</p>}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
