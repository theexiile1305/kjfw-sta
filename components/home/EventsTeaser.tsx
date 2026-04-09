import Link from "next/link";
import { events } from "@/lib/data/events";

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const categoryColors: Record<string, string> = {
  competition: "bg-fire-100 text-fire-700",
  training: "bg-blue-100 text-blue-700",
  event: "bg-green-100 text-green-700",
  other: "bg-neutral-100 text-neutral-600",
};

const categoryLabels: Record<string, string> = {
  competition: "Wettkampf",
  training: "Ausbildung",
  event: "Veranstaltung",
  other: "Sonstiges",
};

export default function EventsTeaser() {
  const upcoming = events.slice(0, 3);

  return (
    <section aria-label="Nächste Termine" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900">Nächste Termine</h2>
            <p className="mt-2 text-neutral-600">Veranstaltungen und Wettkämpfe im Überblick</p>
          </div>
          <Link
            href="/termine"
            className="text-sm font-medium text-fire-600 no-underline hover:text-fire-700 transition-colors whitespace-nowrap"
          >
            Alle Termine →
          </Link>
        </div>

        <ul className="space-y-4" role="list">
          {upcoming.map((event) => (
            <li
              key={event.id}
              className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-card border
                         border-neutral-200 bg-white p-5 shadow-card"
            >
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium
                      ${categoryColors[event.category] ?? "bg-neutral-100 text-neutral-600"}`}
                  >
                    {categoryLabels[event.category] ?? event.category}
                  </span>
                </div>
                <h3 className="font-semibold text-neutral-900">{event.title}</h3>
                {event.description && (
                  <p className="text-sm text-neutral-600 mt-0.5">{event.description}</p>
                )}
              </div>
              <div className="text-sm text-neutral-500 shrink-0">
                <time dateTime={event.date}>{formatDate(event.date)}</time>
                {event.location && <p className="text-neutral-400">{event.location}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
