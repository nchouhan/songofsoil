import Link from "next/link"
    import { Leaf } from "lucide-react"

    const nav = [
      { href: "/our-farm", label: "Our Farm" },
      { href: "/methods", label: "Methods" },
      { href: "/produce", label: "Produce" },
      { href: "/animals", label: "Animals" },
      { href: "/trees-wood", label: "Trees & Wood" },
      { href: "/journal", label: "Journal" },
    ]

    export function SiteFooter(){
      return (
        <footer className="border-t border-monsoon py-6 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <Link href="/" className="flex items-center gap-2 font-semibold text-kanhaGreen hover:text-terracotta transition-colors">
                  <Leaf className="w-5 h-5 text-kanhaGreen"/>
                  <span>SongOfSoil</span>
                </Link>
                <p className="text-xs text-soil mt-2">Nature's rhythm, grown with care.</p>
              </div>
              <div className="lg:col-span-2">
                <div className="font-semibold text-kanhaGreen">Explore</div>
                <nav className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2 text-sm">
                  {nav.map(n => (
                    <Link key={n.href} href={n.href} className="text-soil hover:text-terracotta transition-colors">{n.label}</Link>
                  ))}
                </nav>
              </div>
              <div>
                <div className="font-semibold text-kanhaGreen">Connect</div>
                <div className="text-sm mt-2 space-y-1">
                  <a href="#" className="text-soil hover:text-terracotta transition-colors">Contact</a>
                  <div className="text-soil text-xs">hello@songofsoil.com</div>
                </div>
              </div>
            </div>
            <div className="text-xs text-monsoon mt-6 pt-6 border-t border-monsoon">
              &copy; {new Date().getFullYear()} Song Of Soil LLP. All Rights Reserved.
            </div>
          </div>
        </footer>
      )
    }