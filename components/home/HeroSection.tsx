import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section aria-label="Willkommen" className="relative overflow-hidden bg-navy-700 text-white">
      {/* Background image */}
      <Image
        src="/background.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        aria-hidden="true"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-navy-900/60" aria-hidden="true" />
      {/* Decorative fire stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-fire-500" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <p className="text-fire-300 text-sm font-semibold uppercase tracking-widest mb-4">
            Landkreis Starnberg · Bayern
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Kreis&shy;jugend&shy;feuerwehr
            <br />
            <span className="text-fire-400">Starnberg</span>
          </h1>
          <p className="mt-6 text-lg text-neutral-300 leading-relaxed max-w-xl">
            Gemeinsam für die Jugend. 43 Jugendfeuerwehren und 9 Kinderfeuerwehren im Landkreis
            Starnberg begeistern über 600 junge Menschen für den Feuerwehrdienst.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/jugendfeuerwehren"
              className="inline-flex items-center justify-center rounded-button bg-fire-500 px-6 py-3
                         text-sm font-semibold text-white no-underline hover:bg-fire-600
                         transition-colors focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-fire-400"
            >
              Jugendfeuerwehren entdecken
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-button border-2
                         border-white/30 px-6 py-3 text-sm font-semibold text-white no-underline
                         hover:border-white/60 hover:bg-white/10 transition-colors
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
