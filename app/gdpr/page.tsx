import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT, ORG_NAME } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = buildMetadata({
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Kreisjugendfeuerwehr im Kreisfeuerwehrverband Starnberg e.V.",
  path: "/gdpr",
});

export default function GdprPage() {
  return (
    <article className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Datenschutzerklärung" subtitle="Stand: 3. April 2026" />

        <nav
          aria-label="Inhaltsübersicht"
          className="mt-8 rounded-card border border-neutral-200 bg-neutral-50 p-6"
        >
          <h2 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-3">
            Inhaltsübersicht
          </h2>
          <ol className="space-y-1 text-sm text-fire-600">
            {[
              ["#praambel", "Präambel"],
              ["#verantwortlicher", "Verantwortlicher"],
              ["#uebersicht", "Übersicht der Verarbeitungen"],
              ["#rechtsgrundlagen", "Maßgebliche Rechtsgrundlagen"],
              ["#sicherheit", "Sicherheitsmaßnahmen"],
              ["#uebermittlung", "Übermittlung von personenbezogenen Daten"],
              ["#internationale-transfers", "Internationale Datentransfers"],
              ["#datenspeicherung", "Datenspeicherung und Löschung"],
              ["#betroffenenrechte", "Rechte der betroffenen Personen"],
              ["#satzungsaufgaben", "Aufgaben nach Satzung oder Geschäftsordnung"],
              ["#kontaktverwaltung", "Kontakt- und Anfrageverwaltung"],
              ["#aenderung", "Änderung und Aktualisierung"],
              ["#begriffe", "Begriffsdefinitionen"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-fire-700 no-underline hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-10 space-y-12 text-sm text-neutral-700 leading-relaxed">
          <section aria-labelledby="praambel">
            <h2 id="praambel" className="text-lg font-semibold text-neutral-900 mb-3">
              Präambel
            </h2>
            <p>
              Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten
              Ihrer personenbezogenen Daten wir zu welchen Zwecken und in welchem Umfang
              verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten
              Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer
              Leistungen als auch insbesondere auf unseren Webseiten und innerhalb externer
              Onlinepräsenzen.
            </p>
            <p className="mt-3">Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
          </section>

          <section aria-labelledby="verantwortlicher">
            <h2 id="verantwortlicher" className="text-lg font-semibold text-neutral-900 mb-3">
              Verantwortlicher
            </h2>
            <address className="not-italic space-y-1">
              <p className="font-medium text-neutral-900">{ORG_NAME}</p>
              <p>{CONTACT.director}</p>
              <p>{CONTACT.address}</p>
              <p>
                E-Mail:{" "}
                <a href={`mailto:${CONTACT.email}`} className="text-fire-600 hover:text-fire-700">
                  {CONTACT.email}
                </a>
              </p>
              <p>Vertretungsberechtigte Person: {CONTACT.director}</p>
            </address>
          </section>

          <section aria-labelledby="uebersicht">
            <h2 id="uebersicht" className="text-lg font-semibold text-neutral-900 mb-3">
              Übersicht der Verarbeitungen
            </h2>
            <p>
              Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke
              ihrer Verarbeitung zusammen.
            </p>

            <h3 className="font-semibold text-neutral-800 mt-5 mb-2">
              Arten der verarbeiteten Daten
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Bestandsdaten</li>
              <li>Beschäftigtendaten</li>
              <li>Zahlungsdaten</li>
              <li>Kontaktdaten</li>
              <li>Inhaltsdaten</li>
              <li>Vertragsdaten</li>
              <li>Nutzungsdaten</li>
              <li>Meta-, Kommunikations- und Verfahrensdaten</li>
              <li>Mitgliederdaten</li>
            </ul>

            <h3 className="font-semibold text-neutral-800 mt-5 mb-2">
              Kategorien betroffener Personen
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Beschäftigte</li>
              <li>Interessenten</li>
              <li>Kommunikationspartner</li>
              <li>Mitglieder</li>
              <li>Dritte Personen</li>
            </ul>

            <h3 className="font-semibold text-neutral-800 mt-5 mb-2">Zwecke der Verarbeitung</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Kommunikation</li>
              <li>Organisations- und Verwaltungsverfahren</li>
              <li>Feedback</li>
              <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit</li>
              <li>Öffentlichkeitsarbeit und Informationszwecke</li>
            </ul>
          </section>

          <section aria-labelledby="rechtsgrundlagen">
            <h2 id="rechtsgrundlagen" className="text-lg font-semibold text-neutral-900 mb-3">
              Maßgebliche Rechtsgrundlagen
            </h2>
            <p>
              Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren
              Basis wir personenbezogene Daten verarbeiten.
            </p>
            <ul className="mt-3 space-y-3">
              <li>
                <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> - Die betroffene
                Person hat ihre Einwilligung in die Verarbeitung für einen spezifischen Zweck
                gegeben.
              </li>
              <li>
                <strong>
                  Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)
                </strong>{" "}
                - Die Verarbeitung ist für die Erfüllung eines Vertrags oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich.
              </li>
              <li>
                <strong>Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)</strong> - Die
                Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich.
              </li>
              <li>
                <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> - Die
                Verarbeitung ist zur Wahrung berechtigter Interessen notwendig, sofern die
                Grundrechte der betroffenen Person nicht überwiegen.
              </li>
              <li>
                <strong>Vertrag über die Mitgliedschaft (Satzung)</strong> - Verarbeitung auf
                Grundlage des Mitgliedschaftsvertrags gemäß Art. 6 Abs. 1 S. 1 lit. b) DSGVO.
              </li>
            </ul>
            <p className="mt-4">
              Zusätzlich zu den Regelungen der DSGVO gelten nationale Datenschutzregelungen in
              Deutschland, insbesondere das Bundesdatenschutzgesetz (BDSG).
            </p>
          </section>

          <section aria-labelledby="sicherheit">
            <h2 id="sicherheit" className="text-lg font-semibold text-neutral-900 mb-3">
              Sicherheitsmaßnahmen
            </h2>
            <p>
              Wir treffen nach Maßgabe der gesetzlichen Vorgaben geeignete technische und
              organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu
              gewährleisten. Dazu gehören insbesondere die Sicherung der Vertraulichkeit, Integrität
              und Verfügbarkeit von Daten.
            </p>
            <p className="mt-3">
              <strong>TLS-/SSL-Verschlüsselung:</strong> Alle Datenübertragungen auf unserer Website
              erfolgen verschlüsselt über HTTPS. Dies wird durch das Schloss-Symbol in der
              Adressleiste Ihres Browsers angezeigt.
            </p>
          </section>

          <section aria-labelledby="uebermittlung">
            <h2 id="uebermittlung" className="text-lg font-semibold text-neutral-900 mb-3">
              Übermittlung von personenbezogenen Daten
            </h2>
            <p>
              Im Rahmen unserer Verarbeitung kommt es vor, dass Daten an andere Stellen oder
              Dienstleister übermittelt werden. Dies geschieht nur auf Grundlage gesetzlicher
              Vorgaben oder mit entsprechenden vertraglichen Schutzmaßnahmen.
            </p>
          </section>

          <section aria-labelledby="internationale-transfers">
            <h2
              id="internationale-transfers"
              className="text-lg font-semibold text-neutral-900 mb-3"
            >
              Internationale Datentransfers
            </h2>
            <p>
              Sofern wir Daten in ein Drittland (außerhalb der EU/EWR) übermitteln, erfolgt dies
              stets im Einklang mit den gesetzlichen Vorgaben. Für Datenübermittlungen in die USA
              stützen wir uns vorrangig auf das Data Privacy Framework (DPF) sowie ergänzend auf
              Standardvertragsklauseln der EU-Kommission.
            </p>
          </section>

          <section aria-labelledby="datenspeicherung">
            <h2 id="datenspeicherung" className="text-lg font-semibold text-neutral-900 mb-3">
              Allgemeine Informationen zur Datenspeicherung und Löschung
            </h2>
            <p>
              Wir löschen personenbezogene Daten, sobald die zugrundeliegenden Einwilligungen
              widerrufen werden oder keine weiteren rechtlichen Grundlagen für die Verarbeitung
              bestehen. Gesetzliche Aufbewahrungsfristen bleiben hiervon unberührt.
            </p>
            <p className="mt-3">Allgemeine Aufbewahrungsfristen nach deutschem Recht:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>10 Jahre - Bücher, Aufzeichnungen, Jahresabschlüsse (§ 147 AO, § 257 HGB)</li>
              <li>8 Jahre - Buchungsbelege wie Rechnungen und Kostenbelege</li>
              <li>6 Jahre - Übrige Geschäftsunterlagen und Handelskorrespondenz</li>
              <li>3 Jahre - Allgemeine Verjährungsfrist (§§ 195, 199 BGB)</li>
            </ul>
          </section>

          <section aria-labelledby="betroffenenrechte">
            <h2 id="betroffenenrechte" className="text-lg font-semibold text-neutral-900 mb-3">
              Rechte der betroffenen Personen
            </h2>
            <p>
              Als betroffene Person stehen Ihnen nach der DSGVO (Art. 15-21) folgende Rechte zu:
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <strong>Widerspruchsrecht:</strong> Sie haben das Recht, gegen die Verarbeitung
                Ihrer personenbezogenen Daten Widerspruch einzulegen, wenn diese auf Art. 6 Abs. 1
                lit. e oder f DSGVO gestützt wird.
              </li>
              <li>
                <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie können erteilte
                Einwilligungen jederzeit widerrufen.
              </li>
              <li>
                <strong>Auskunftsrecht:</strong> Sie haben das Recht, Auskunft über die Sie
                betreffenden verarbeiteten Daten zu erhalten.
              </li>
              <li>
                <strong>Recht auf Berichtigung:</strong> Sie können die Berichtigung unrichtiger
                oder die Vervollständigung Ihrer Daten verlangen.
              </li>
              <li>
                <strong>Recht auf Löschung:</strong> Sie können die unverzügliche Löschung Ihrer
                Daten verlangen, sofern keine Aufbewahrungspflichten entgegenstehen.
              </li>
              <li>
                <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Ihre Daten in
                einem strukturierten, maschinenlesbaren Format zu erhalten.
              </li>
              <li>
                <strong>Beschwerderecht bei der Aufsichtsbehörde:</strong> Sie können sich bei der
                zuständigen Datenschutzaufsichtsbehörde beschweren.
              </li>
            </ul>
          </section>

          <section aria-labelledby="satzungsaufgaben">
            <h2 id="satzungsaufgaben" className="text-lg font-semibold text-neutral-900 mb-3">
              Wahrnehmung von Aufgaben nach Satzung oder Geschäftsordnung
            </h2>
            <p>
              Wir verarbeiten die Daten unserer Mitglieder, Unterstützer und Geschäftspartner,
              soweit dies zur Wahrnehmung unserer satzungsgemäßen Aufgaben und zur Erbringung
              unserer Leistungen erforderlich ist.
            </p>
            <p className="mt-3">
              <strong>Verarbeitete Datenarten:</strong> Bestandsdaten, Kontaktdaten, Vertragsdaten,
              Mitgliederdaten, Zahlungsdaten.
            </p>
            <p className="mt-2">
              <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
              DSGVO); Vertrag über die Mitgliedschaft (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
            </p>
          </section>

          <section aria-labelledby="kontaktverwaltung">
            <h2 id="kontaktverwaltung" className="text-lg font-semibold text-neutral-900 mb-3">
              Kontakt- und Anfrageverwaltung
            </h2>
            <p>
              Bei der Kontaktaufnahme mit uns (z. B. per Kontaktformular, E-Mail oder Telefon)
              verarbeiten wir Ihre Angaben zur Beantwortung der Anfrage. Dies umfasst in der Regel
              Name, Kontaktinformationen und den Inhalt der Nachricht.
            </p>
            <p className="mt-3">
              <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen
              (Art. 6 Abs. 1 S. 1 lit. b) DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
              DSGVO).
            </p>
          </section>

          <section aria-labelledby="aenderung">
            <h2 id="aenderung" className="text-lg font-semibold text-neutral-900 mb-3">
              Änderung und Aktualisierung
            </h2>
            <p>
              Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu
              informieren. Wir passen sie an, sobald Änderungen der von uns durchgeführten
              Datenverarbeitungen dies erforderlich machen.
            </p>
          </section>

          <section aria-labelledby="begriffe">
            <h2 id="begriffe" className="text-lg font-semibold text-neutral-900 mb-3">
              Begriffsdefinitionen
            </h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold text-neutral-800">Personenbezogene Daten</dt>
                <dd className="mt-1">
                  Alle Informationen, die sich auf eine identifizierte oder identifizierbare
                  natürliche Person beziehen, einschließlich Name, Adresse, E-Mail-Adresse oder
                  IP-Adresse.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-800">Verantwortlicher</dt>
                <dd className="mt-1">
                  Die natürliche oder juristische Person, die über die Zwecke und Mittel der
                  Verarbeitung von personenbezogenen Daten entscheidet.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-800">Verarbeitung</dt>
                <dd className="mt-1">
                  Jeder Vorgang im Zusammenhang mit personenbezogenen Daten, z. B. Erheben,
                  Speichern, Übermitteln oder Löschen.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-800">Bestandsdaten</dt>
                <dd className="mt-1">
                  Informationen zur Identifikation und Verwaltung von Vertragspartnern oder
                  Benutzerkonten, wie Name, Adresse und Kontaktinformationen.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-800">Mitgliederdaten</dt>
                <dd className="mt-1">
                  Informationen über Personen, die Teil unserer Organisation sind, zur Verwaltung
                  der Mitgliedschaft und Kommunikation.
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </div>
    </article>
  );
}
