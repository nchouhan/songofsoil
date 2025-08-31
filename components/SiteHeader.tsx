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
        <header className="border-b py-3 font-medium">
          <div className="container flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Leaf className="w-5 h-5 text-green-700"/>
              <span>SongOfSoil</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-6 text-sm">
              {nav.map(n => (
                <Link key={n.href} href={n.href} className="hover:underline">{n.label}</Link>
              ))}
            </nav>
          </div>
        </header>
      )
    }