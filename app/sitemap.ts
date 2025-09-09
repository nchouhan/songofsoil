import type { MetadataRoute } from 'next'
import { getSortedJournalsData } from '@/lib/journals'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://songofsoil.vercel.app'
  const items: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/journal`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ]

  const posts = await getSortedJournalsData()
  posts.forEach((p: any) => {
    items.push({
      url: `${base}/journal/${p.id}`,
      lastModified: p.date ? new Date(p.date) : new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  return items
}


