import Link from "next/link";
import Image from "next/image";
import { CONTACT, ORG_NAME } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-navy-700 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.jpg"
                alt="KJF Starnberg"
                width={32}
                height={32}
                className="rounded object-contain"
              />
              <span className="font-semibold text-white">KJF Starnberg</span>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">{ORG_NAME}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              Kontakt
            </h3>
            <address className="not-italic text-sm text-neutral-300 space-y-1">
              <p>{CONTACT.director}</p>
              <p>{CONTACT.address}</p>
              <p>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-neutral-300 hover:text-white no-underline transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-neutral-300 hover:text-white no-underline transition-colors"
                >
                  {CONTACT.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              Links
            </h3>
            <ul className="space-y-2 text-sm" role="list">
              {[
                { href: "/ueber-uns", label: "Über uns" },
                { href: "/jugendfeuerwehren", label: "Jugendfeuerwehren" },
                { href: "/kinderfeuerwehren", label: "Kinderfeuerwehren" },
                { href: "/jugendpokal", label: "Jugendpokal" },
                { href: "/termine", label: "Termine" },
                { href: "/kontakt", label: "Kontakt" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-neutral-300 hover:text-white no-underline transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-navy-600 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {year} Kreisjugendfeuerwehr Starnberg</p>
          <p className="text-center">
            Built with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            by{" "}
            <a
              href="https://github.com/theexiile1305"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white no-underline transition-colors"
            >
              theexiile1305
            </a>
            . Please report any issues at{" "}
            <a
              href="https://github.com/theexiile1305/kjfw-sta/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white no-underline transition-colors"
            >
              GitHub
            </a>
            .
          </p>
          <div className="flex gap-4">
            <Link
              href="/impressum"
              className="text-neutral-400 hover:text-white no-underline transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/gdpr"
              className="text-neutral-400 hover:text-white no-underline transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
