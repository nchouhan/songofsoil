'use client'

import Link from "next/link"
import { Leaf, Menu, X } from "lucide-react"
import { useState } from "react"

const nav = [
  { href: "/our-farm", label: "Our Farm" },
  { href: "/methods", label: "Methods" },
  { href: "/produce", label: "Produce" },
  { href: "/animals", label: "Animals" },
  { href: "/trees-wood", label: "Trees & Wood" },
  { href: "/journal", label: "Journal" },
]

export function SiteHeader(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="border-b border-monsoon py-3 font-medium bg-white relative z-50">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-kanhaGreen hover:text-terracotta transition-colors">
          <Leaf className="w-5 h-5 text-kanhaGreen"/>
          <span>SongOfSoil</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className="text-soil hover:text-terracotta transition-colors">{n.label}</Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-soil hover:text-terracotta transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-monsoon shadow-lg">
          <nav className="container py-4">
            <div className="flex flex-col space-y-3">
              {nav.map(n => (
                <Link 
                  key={n.href} 
                  href={n.href} 
                  className="text-soil hover:text-terracotta transition-colors py-2 px-4 rounded-lg hover:bg-millet"
                  onClick={closeMenu}
                >
                  {n.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-monsoon">
                <Link 
                  href="/contact" 
                  className="inline-block px-6 py-3 bg-terracotta text-white font-semibold rounded-xl hover:bg-kanhaGreen transition-colors text-center w-full"
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}