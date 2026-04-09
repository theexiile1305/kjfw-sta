import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <p className="text-6xl font-bold text-fire-500" aria-hidden="true">
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold text-neutral-900">Seite nicht gefunden</h1>
      <p className="mt-2 text-neutral-600 max-w-sm">
        Die gesuchte Seite existiert leider nicht oder wurde verschoben.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-button bg-fire-500
                   px-6 py-3 text-sm font-semibold text-white no-underline hover:bg-fire-600
                   transition-colors"
      >
        Zur Startseite
      </Link>
    </div>
  );
}
