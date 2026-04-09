import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Generic content page template.
// Extend this by adding entries to CONTENT_PAGES below,
// or connect to a CMS/Markdown source.

interface ContentPage {
  title: string;
  description: string;
  content: string;
}

const CONTENT_PAGES: Record<string, ContentPage> = {
  // Example:
  // impressum: {
  //   title: "Impressum",
  //   description: "Impressum der Kreisjugendfeuerwehr Starnberg.",
  //   content: "...",
  // },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return Object.keys(CONTENT_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = CONTENT_PAGES[slug];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${slug}` },
  };
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const page = CONTENT_PAGES[slug];

  if (!page) notFound();

  return (
    <article className="py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8">{page.title}</h1>
        <div
          className="prose prose-neutral max-w-none text-neutral-700"
          // Static content only — no user input rendered here
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </div>
    </article>
  );
}
