'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-2xl bg-[#0F1412]/80 ring-1 ring-white/[0.08] rounded-full px-3 py-2 md:px-6 md:py-2.5 flex items-center gap-2 md:gap-6 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled ? 'shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : ''
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <img src="/icon.png" alt="SMEfrog" className="w-7 h-7 rounded-full" />
          <span className="font-heading font-bold text-frog-light text-sm hidden md:inline">
            SMEfrog
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#8BA89A] hover:text-frog-light transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/264813411522"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-frog-green text-frog-black rounded-full px-4 py-2 text-sm font-semibold hover:bg-frog-green/90 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shrink-0"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          WhatsApp
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/[0.05] transition-colors duration-500"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="relative w-5 h-4 flex flex-col justify-center">
            <span
              className={`absolute h-[1.5px] w-5 bg-frog-light rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0.5'
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-5 bg-frog-light rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0.5'
              }`}
            />
          </div>
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 backdrop-blur-3xl bg-[#0F1412]/95 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="text-3xl font-heading font-bold text-frog-light hover:text-frog-green transition-colors duration-500"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://wa.me/264813411522"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="mt-4 flex items-center gap-2 bg-frog-green text-frog-black rounded-full px-8 py-4 text-base font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
