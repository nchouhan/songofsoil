import "./globals.css"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.songofsoil.com'),
  title: "SongOfSoil — Nature's rhythm, grown with care",
  description: "A forest-farm near Kanha National Park practicing regenerative, diverse, and natural farming.",
  openGraph: {
    title: "SongOfSoil",
    description: "A forest-farm near Kanha National Park practicing regenerative, diverse, and natural farming.",
    images: ["/images/og.jpg"],
    locale: "en_IN",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.songofsoil.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SongOfSoil — Nature's rhythm, grown with care",
    description: "A forest-farm near Kanha National Park practicing regenerative, diverse, and natural farming.",
    images: ["/images/og.jpg"],
  },
  icons: { icon: "/favicon.ico" },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}