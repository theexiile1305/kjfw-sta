import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT, ORG_NAME } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = buildMetadata({
  title: "Impressum",
  description: "Impressum der Kreisjugendfeuerwehr im Kreisfeuerwehrverband Starnberg e.V.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <article className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Impressum" subtitle="Angaben gemäß § 5 TMG" />

        <div className="mt-10 space-y-10 text-sm text-neutral-700">
          <section aria-labelledby="anbieter">
            <h2 id="anbieter" className="text-lg font-semibold text-neutral-900 mb-3">
              Anbieter
            </h2>
            <address className="not-italic leading-relaxed space-y-1">
              <p className="font-medium text-neutral-900">{ORG_NAME}</p>
              <p>Eingetragener Verein (e.V.)</p>
              <p>{CONTACT.address}</p>
            </address>
          </section>

          <section aria-labelledby="vertretung">
            <h2 id="vertretung" className="text-lg font-semibold text-neutral-900 mb-3">
              Vertretungsberechtigte Person
            </h2>
            <dl className="space-y-2">
              <div>
                <dt className="font-medium text-neutral-500">Kreisjugendfeuerwehrwart</dt>
                <dd>{CONTACT.director}</dd>
              </div>
            </dl>
          </section>

          <section aria-labelledby="kontakt-impressum">
            <h2 id="kontakt-impressum" className="text-lg font-semibold text-neutral-900 mb-3">
              Kontakt
            </h2>
            <dl className="space-y-2">
              <div>
                <dt className="font-medium text-neutral-500">Telefon</dt>
                <dd>
                  <a href={`tel:${CONTACT.phone}`} className="text-fire-600 hover:text-fire-700">
                    {CONTACT.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-neutral-500">E-Mail</dt>
                <dd>
                  <a href={`mailto:${CONTACT.email}`} className="text-fire-600 hover:text-fire-700">
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section aria-labelledby="haftung-inhalte">
            <h2 id="haftung-inhalte" className="text-lg font-semibold text-neutral-900 mb-3">
              Haftung für Inhalte
            </h2>
            <p className="leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-3 leading-relaxed">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
              entfernen.
            </p>
          </section>

          <section aria-labelledby="haftung-links">
            <h2 id="haftung-links" className="text-lg font-semibold text-neutral-900 mb-3">
              Haftung für Links
            </h2>
            <p className="leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
              der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="mt-3 leading-relaxed">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
              Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section aria-labelledby="urheberrecht">
            <h2 id="urheberrecht" className="text-lg font-semibold text-neutral-900 mb-3">
              Urheberrecht
            </h2>
            <p className="leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
              und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
              dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="mt-3 leading-relaxed">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
              gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
              werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
