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
        <footer className="border-t py-6">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <Link href="/" className="flex items-center gap-2 font-semibold">
                  <Leaf className="w-5 h-5 text-green-700"/>
                  <span>SongOfSoil</span>
                </Link>
                <p className="text-xs text-slate-600 mt-2">Nature’s rhythm, grown with care.</p>
              </div>
              <div className="lg:col-span-2">
                <div className="font-semibold">Explore</div>
                <nav className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2 text-sm">
                  {nav.map(n => (
                    <Link key={n.href} href={n.href} className="hover:underline">{n.label}</Link>
                  ))}
                </nav>
              </div>
              <div>
                <div className="font-semibold">Connect</div>
                <div className="text-sm mt-2 space-y-1">
                  <a href="#" className="hover:underline">Contact</a>
                  <div className="text-slate-600 text-xs">hello@songofsoil.com</div>
                </div>
              </div>
            </div>
            <div className="text-xs text-slate-500 mt-6 pt-6 border-t">
              &copy; {new Date().getFullYear()} Song Of Soil LLP. All Rights Reserved.
            </div>
          </div>
        </footer>
      )
    }