import Link from "next/link"
import { Section } from "@/components/Section"

export default function NotFound() {
  return (
    <Section title="Page Not Found">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-6xl font-bold text-kanhaGreen mb-4">404</h1>
        <p className="text-xl text-soil mb-8">
          Oops! The page you're looking for seems to have wandered off into our fields.
        </p>
        <div className="space-y-4">
          <Link 
            href="/" 
            className="inline-block px-8 py-4 bg-terracotta text-white font-semibold rounded-xl hover:bg-kanhaGreen transition-colors"
          >
            Return Home
          </Link>
          <div className="text-sm text-monsoon">
            Or explore our other pages:
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/our-farm" className="text-terracotta hover:text-kanhaGreen transition-colors">
              Our Farm
            </Link>
            <Link href="/methods" className="text-terracotta hover:text-kanhaGreen transition-colors">
              Methods
            </Link>
            <Link href="/produce" className="text-terracotta hover:text-kanhaGreen transition-colors">
              Produce
            </Link>
            <Link href="/journal" className="text-terracotta hover:text-kanhaGreen transition-colors">
              Journal
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
