export default function FlyerSection() {
  return (
    <section
      aria-label="Flyer herunterladen"
      className="border-b border-neutral-200 bg-white py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-4">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-button bg-fire-100 text-fire-600"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-semibold text-neutral-900">Flyer herunterladen</h2>
              <p className="text-sm text-neutral-500 mt-0.5">
                Alle wichtigen Informationen zur Kreisjugendfeuerwehr Starnberg auf einen Blick.
              </p>
            </div>
          </div>

          <a
            href="/flyer.pdf"
            download
            className="inline-flex shrink-0 items-center gap-2 rounded-button bg-fire-500 px-5 py-2.5
                       text-sm font-semibold text-white no-underline hover:bg-fire-600
                       transition-colors focus-visible:outline-2 focus-visible:outline-offset-2
                       focus-visible:outline-fire-400"
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
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            PDF herunterladen
          </a>
        </div>
      </div>
    </section>
  );
}
