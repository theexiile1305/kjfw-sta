import Link from "next/link";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    title: "Jugendfeuerwehr",
    description:
      "Für Jugendliche zwischen 12 und 17 Jahren. Ausbildung, Kameradschaft und spannende Wettkämpfe.",
    href: "/jugendfeuerwehren",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Kinderfeuerwehr",
    description:
      "Spielerische Einführung für Kinder unter 12 Jahren. Spaß, Teamgeist und erste Erfahrungen.",
    href: "/kinderfeuerwehren",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
  {
    title: "Jugendpokal",
    description:
      "Unser jährlicher Wettkampf seit 1979. Drei Altersklassen, Teams aus dem ganzen Landkreis.",
    href: "/jugendpokal",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
        />
      </svg>
    ),
  },
];

export default function IntroSection() {
  return (
    <section aria-label="Bereiche" className="bg-neutral-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Was wir machen"
          subtitle="Die Kreisjugendfeuerwehr Starnberg koordiniert die Jugendarbeit in allen Feuerwehren des Landkreises."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, href, icon }) => (
            <Card key={title} hover>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-button bg-fire-100 text-fire-600">
                  {icon}
                </div>
                <h3 className="font-semibold text-neutral-900">{title}</h3>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">{description}</p>
              <Link
                href={href}
                className="mt-4 inline-flex items-center text-sm font-medium text-fire-600 no-underline
                           hover:text-fire-700 transition-colors"
              >
                Mehr erfahren
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
