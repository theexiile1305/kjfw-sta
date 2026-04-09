import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export const NAV_ITEMS = [
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/jugendfeuerwehren", label: "Jugendfeuerwehren" },
  { href: "/kinderfeuerwehren", label: "Kinderfeuerwehren" },
  { href: "/jugendpokal", label: "Jugendpokal" },
  { href: "/termine", label: "Termine" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/intern", label: "Intern" },
] as const;

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 no-underline"
          aria-label="Kreisjugendfeuerwehr Starnberg - Startseite"
        >
          <Image
            src="/logo.jpg"
            alt="KJF Starnberg"
            width={36}
            height={36}
            className="rounded object-contain"
          />
          <span className="hidden font-semibold text-navy-700 sm:block leading-tight text-sm">
            KJF Starnberg
          </span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-1" role="list">
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="rounded px-3 py-2 text-sm font-medium text-neutral-700 no-underline
                             hover:bg-neutral-100 hover:text-fire-600 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu items={NAV_ITEMS} />
      </div>
    </header>
  );
}
