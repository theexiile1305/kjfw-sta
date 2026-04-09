import { BASE_URL, ORG_NAME, ORG_SHORT } from "@/lib/constants";

interface JsonLdProps {
  nonce: string;
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: ORG_NAME,
  alternateName: ORG_SHORT,
  url: BASE_URL,
  logo: `${BASE_URL}/logo.svg`,
  description: "Dachorganisation der Jugend- und Kinderfeuerwehren im Landkreis Starnberg, Bayern.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Buttlerweg 10",
    addressLocality: "Traubing",
    postalCode: "82327",
    addressCountry: "DE",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Landkreis Starnberg",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "kbm.matheis@kbi-sta.de",
    availableLanguage: "German",
  },
};

export default function JsonLd({ nonce }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      // Next.js escapes this properly; the org schema contains no user input.

      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
