import { getJournalData, getAllJournalIds } from "@/lib/journals";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ImageCarousel } from "@/components/ImageCarousel";
import { ProseContent } from "@/components/ProseContent";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const journal = await getJournalData(params.id);
  const title = `${journal.title} | SongOfSoil`;
  const description = (journal as any).summary || `Journal from Nagjhola & Kanha landscape.`;
  const images: string[] = Array.isArray((journal as any).gallery)
    ? (journal as any).gallery
    : ((journal as any).image ? [(journal as any).image] : []);
  const ogImage = images[0] || "/images/og.jpg";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      images: [ogImage],
      url: `/journal/${params.id}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    }
  };
}

export async function generateStaticParams() {
  const paths = getAllJournalIds();
  return paths;
}

export default async function JournalPostPage({ params }: { params: { id: string } }) {
  const journal = await getJournalData(params.id);

  if (!journal) {
    notFound();
  }

  return (
    <div className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="h1">{journal.title}</h1>
          {(() => {
            const data: any = journal as any;
            const images: string[] = Array.isArray(data.gallery)
              ? data.gallery
              : (data.image ? [data.image] : []);
            if (!images.length) return null;
            return (
              <div className="mt-6">
                <ImageCarousel images={images} alt={journal.title} />
              </div>
            );
          })()}
          <ProseContent className="prose mx-auto mt-6 text-left sm:text-center" html={journal.contentHtml || ''} />

          {(() => {
            const data: any = journal as any
            const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.songofsoil.com'
            const images: string[] = Array.isArray(data.gallery) ? data.gallery : (data.image ? [data.image] : [])
            const imageAbs = images.map((src: string) => src.startsWith('http') ? src : `${base}${src}`)
            const url = `${base}/journal/${journal.id}`
            const jsonLd = {
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: journal.title,
              datePublished: (journal as any).date,
              dateModified: (journal as any).date,
              description: data.summary || 'Journal from Nagjhola & Kanha landscape.',
              image: imageAbs,
              url,
              mainEntityOfPage: { '@type': 'WebPage', '@id': url },
              author: { '@type': 'Organization', name: 'SongOfSoil' },
              publisher: {
                '@type': 'Organization',
                name: 'SongOfSoil',
                logo: { '@type': 'ImageObject', url: `${base}/images/og.jpg` }
              }
            }
            return <JsonLd data={jsonLd} />
          })()}

          {(() => {
            const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.songofsoil.com'
            const crumbs = {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
                { '@type': 'ListItem', position: 2, name: 'Journal', item: `${base}/journal` },
                { '@type': 'ListItem', position: 3, name: journal.title, item: `${base}/journal/${journal.id}` },
              ]
            }
            return <JsonLd data={crumbs} />
          })()}
        </div>
        <div className="mt-8">
            <Link href="/journal">
                ← Back to Journal
            </Link>
        </div>
      </div>
    </div>
  );
}
