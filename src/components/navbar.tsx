'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  return (
    <>
      {/* Floating Pill Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 md:gap-2 backdrop-blur-2xl bg-frog-black/70 rounded-full px-2 py-1.5 md:px-5 md:py-2 ring-1 ring-white/[0.06]"
      >
        <Link href="/" className="flex items-center gap-2 shrink-0 mr-1 md:mr-3">
          <img src="/icon.png" alt="SMEfrog" className="w-7 h-7 rounded-lg" />
          <span className="font-heading font-bold text-frog-light text-sm hidden md:inline">SMEfrog</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                pathname === link.href
                  ? 'text-frog-green bg-frog-green/10'
                  : 'text-frog-muted hover:text-frog-light'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href="https://wa.me/264813411522"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1.5 bg-frog-green text-frog-black rounded-full px-3.5 py-1.5 text-xs font-semibold ml-2 hover:bg-frog-green/90 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shrink-0"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          WhatsApp
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/[0.05] transition-colors ml-auto"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <div className="relative w-5 h-5 flex items-center justify-center">
            <span
              className={`absolute h-[1.5px] w-5 bg-frog-light rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-center ${
                open ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-[35%]'
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-5 bg-frog-light rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-center ${
                open ? '-rotate-45 top-1/2 -translate-y-1/2' : 'top-[65%]'
              }`}
            />
          </div>
        </button>
      </motion.nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 backdrop-blur-3xl bg-frog-black/95 flex flex-col items-center justify-center"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.32, 0.72, 0, 1] }}
              >
                <Link
                  href={link.href}
                  onClick={close}
                  className="block text-3xl font-heading font-bold text-frog-light hover:text-frog-green transition-colors duration-500 py-2"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="https://wa.me/264813411522"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="mt-6 flex items-center gap-2 bg-frog-green text-frog-black rounded-full px-7 py-3.5 text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
