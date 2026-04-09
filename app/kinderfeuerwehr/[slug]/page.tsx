import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { childrenBrigades } from "@/lib/data/childrenBrigades";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return childrenBrigades.map((b) => ({ slug: b.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brigade = childrenBrigades.find((b) => b.id === slug);
  if (!brigade) return {};
  return buildMetadata({
    title: brigade.name,
    description: `Gerätehaus der ${brigade.name}.`,
    path: `/kinderfeuerwehr/${slug}`,
  });
}

export default async function KinderfeuerwehrDetailPage({ params }: Props) {
  const { slug } = await params;
  const brigade = childrenBrigades.find((b) => b.id === slug);

  if (!brigade) notFound();

  const { fireStation } = brigade;

  return (
    <article className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-10 text-sm text-neutral-500">
          <Link href="/kinderfeuerwehren" className="hover:text-fire-600 no-underline">
            Kinderfeuerwehren
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span className="text-neutral-900">{brigade.name}</span>
        </nav>

        <h2 className="mb-8 text-2xl font-bold text-neutral-900">{brigade.name}</h2>

        <section
          aria-labelledby="fireStation"
          className="rounded-card border border-neutral-200 bg-neutral-50 p-6"
        >
          <div className="flex items-center gap-2 mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-fire-600 shrink-0"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.07-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8.25 8.25 0 0 0-16.5 0c0 3.63 1.556 6.324 3.5 8.327a19.58 19.58 0 0 0 2.683 2.282 16.975 16.975 0 0 0 1.144.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
            <h2
              id="fireStation"
              className="text-sm font-semibold uppercase tracking-wider text-neutral-500"
            >
              Gerätehaus
            </h2>
          </div>

          {fireStation ? (
            <address className="not-italic text-base text-neutral-700 leading-relaxed space-y-1">
              <p className="font-medium text-neutral-900">
                {fireStation.street} {fireStation.streetNumber}
              </p>
              <p>
                {fireStation.postCode} {fireStation.city}
              </p>
            </address>
          ) : (
            <p className="text-sm text-neutral-400 italic">Keine Angabe</p>
          )}
        </section>

        {(brigade.website || brigade.email) && (
          <div className="mt-6 flex items-center justify-between gap-4">
            {brigade.website && (
              <a
                href={brigade.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-fire-600 hover:text-fire-700
                           no-underline font-medium"
              >
                Website besuchen
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
            {brigade.email && (
              <a
                href={`mailto:${brigade.email}`}
                className="inline-flex items-center gap-2 text-sm text-fire-600 hover:text-fire-700
                           no-underline font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {brigade.email}
              </a>
            )}
          </div>
        )}

        <div className="mt-10">
          <Link
            href="/kinderfeuerwehren"
            className="text-sm text-neutral-500 hover:text-neutral-700 no-underline"
          >
            ← Zurück zur Übersicht
          </Link>
        </div>
      </div>
    </article>
  );
}
