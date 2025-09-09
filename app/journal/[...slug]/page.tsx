import { getJournalData } from "../../../lib/journals";
import { ImageCarousel } from "@/components/ImageCarousel";
import { ProseContent } from "@/components/ProseContent";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";

export default async function PostPage({ params }: { params: { slug: string[] } }) {
  const id = params.slug.join("/");
  
  try {
    const post = await getJournalData(id);

    return (
      <div className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1">{post.title}</h1>
            <div className="text-sm text-slate-500 mt-2">
              {new Date(post.date).toLocaleDateString()}
            </div>
            {(() => {
              const data: any = post as any;
              const images: string[] = Array.isArray(data.gallery)
                ? data.gallery
                : (data.image ? [data.image] : []);
              if (!images.length) return null;
              return (
                <div className="mt-6">
                  <ImageCarousel images={images} alt={post.title} />
                </div>
              );
            })()}
            <ProseContent 
              className="prose lg:prose-xl mt-6 mx-auto text-left sm:text-center"
              html={post.contentHtml!}
            />
            {(() => {
              const data: any = post as any
              const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.songofsoil.com'
              const images: string[] = Array.isArray(data.gallery) ? data.gallery : (data.image ? [data.image] : [])
              const imageAbs = images.map((src: string) => src.startsWith('http') ? src : `${base}${src}`)
              const url = `${base}/journal/${id}`
              const jsonLd = {
                '@context': 'https://schema.org',
                '@type': 'BlogPosting',
                headline: post.title,
                datePublished: (post as any).date,
                dateModified: (post as any).date,
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
                  { '@type': 'ListItem', position: 3, name: post.title, item: `${base}/journal/${id}` },
                ]
              }
              return <JsonLd data={crumbs} />
            })()}
          </div>
        </div>
      </div>
    );
  } catch {
    return <div>Post not found</div>;
  }
}

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const id = params.slug.join("/");
  try {
    const post = await getJournalData(id);
    const title = `${post.title} | SongOfSoil`;
    const description = (post as any).summary || `Journal from Nagjhola & Kanha landscape.`;
    const images: string[] = Array.isArray((post as any).gallery)
      ? (post as any).gallery
      : ((post as any).image ? [(post as any).image] : []);
    const ogImage = images[0] || "/images/og.jpg";
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: 'article',
        images: [ogImage],
        url: `/journal/${id}`,
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [ogImage],
      }
    };
  } catch {
    return {};
  }
}
