import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt",
  description:
    "Kontaktiere die Kreisjugendfeuerwehr Starnberg - per Formular, Telefon oder E-Mail.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Kontakt"
          subtitle="Wir freuen uns über deine Nachricht. Füll das Formular aus oder melde dich direkt."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          {/* Contact info */}
          <aside>
            <h2 className="text-lg font-bold text-neutral-900 mb-6">Direktkontakt</h2>
            <address className="not-italic space-y-4 text-sm">
              <div>
                <p className="font-medium text-neutral-800">{CONTACT.director}</p>
                <p className="text-neutral-500">Kreisjugendfeuerwehrwart</p>
              </div>
              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-wider font-medium mb-1">
                  Adresse
                </p>
                <p className="text-neutral-700">{CONTACT.address}</p>
              </div>
              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-wider font-medium mb-1">
                  Telefon
                </p>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-fire-600 hover:text-fire-700 no-underline"
                >
                  {CONTACT.phone}
                </a>
              </div>
              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-wider font-medium mb-1">
                  E-Mail
                </p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-fire-600 hover:text-fire-700 no-underline break-all"
                >
                  {CONTACT.email}
                </a>
              </div>
            </address>
          </aside>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold text-neutral-900 mb-6">Nachricht senden</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
