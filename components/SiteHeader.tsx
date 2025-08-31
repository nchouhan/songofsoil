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

    export function SiteHeader(){
      return (
        <header className="border-b border-monsoon py-3 font-medium bg-white">
          <div className="container flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold text-kanhaGreen hover:text-terracotta transition-colors">
              <Leaf className="w-5 h-5 text-kanhaGreen"/>
              <span>SongOfSoil</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-6 text-sm">
              {nav.map(n => (
                <Link key={n.href} href={n.href} className="text-soil hover:text-terracotta transition-colors">{n.label}</Link>
              ))}
            </nav>
          </div>
        </header>
      )
    }