'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-frog-black/90 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/icon.png" alt="SMEfrog" className="w-8 h-8 rounded-lg" />
          <span className="font-heading font-bold text-frog-light text-lg">
            SMEfrog
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                pathname === link.href
                  ? 'text-frog-green'
                  : 'text-[#8BA89A] hover:text-frog-light'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/264813411522"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-frog-green text-frog-black rounded-full px-5 py-2 text-sm font-semibold hover:bg-frog-green/90 transition-colors duration-300"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/[0.05] transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <X className="w-5 h-5 text-frog-light" strokeWidth={1.5} />
          ) : (
            <Menu className="w-5 h-5 text-frog-light" strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-frog-black/95 backdrop-blur-xl">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-frog-green bg-frog-green/[0.08]'
                    : 'text-[#8BA89A] hover:text-frog-light hover:bg-white/[0.03]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/264813411522"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-3 mx-4 bg-frog-green text-frog-black rounded-full px-5 py-3 text-sm font-semibold justify-center"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
