'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight, Command } from 'lucide-react'
import Link from 'next/link'

const pages = [
  { label: 'Home', href: '/', description: 'Main landing page' },
  { label: 'Services', href: '/services', description: 'All startup services' },
  { label: 'Business Registration', href: '/services/business-registration', description: 'CC & Pty Ltd registration' },
  { label: 'Startup Support', href: '/services/startup-support', description: 'Business plans & pitch decks' },
  { label: 'Business Documents', href: '/services/business-documents', description: 'Policies & contracts' },
  { label: 'Digital Services', href: '/services/digital-services', description: 'Websites & branding' },
  { label: 'Pricing', href: '/pricing', description: 'Transparent startup pricing' },
  { label: 'About', href: '/about', description: 'Our story & mission' },
  { label: 'Contact', href: '/contact', description: 'Get in touch' },
  { label: 'FAQ', href: '/faq', description: 'Common questions' },
  { label: 'Resources', href: '/resources', description: 'Guides & tools' },
  { label: 'Privacy Policy', href: '/privacy', description: 'Data protection' },
  { label: 'Terms of Service', href: '/terms', description: 'Service terms' },
]

export function SearchDialog() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const filtered = query
    ? pages.filter(
        (p) =>
          p.label.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : pages

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
  }, [])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [close])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-frog-black/60 backdrop-blur-sm"
            onClick={close}
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-[15%] left-1/2 -translate-x-1/2 z-[61] w-[90vw] max-w-lg"
          >
            <div className="bg-frog-card ring-1 ring-white/[0.08] rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden">
              {/* Input */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-frog-hairline">
                <Search className="w-4 h-4 text-frog-muted shrink-0" strokeWidth={1.5} />
                <input
                  type="text"
                  placeholder="Search pages..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent text-frog-light text-sm outline-none placeholder:text-frog-muted/50"
                  autoFocus
                />
                <kbd className="hidden sm:inline-flex items-center gap-0.5 text-frog-muted/40 text-[10px] font-mono border border-frog-hairline rounded px-1.5 py-0.5">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-72 overflow-y-auto p-2">
                {filtered.length === 0 ? (
                  <p className="text-frog-muted/50 text-sm text-center py-8">No results found.</p>
                ) : (
                  filtered.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      onClick={close}
                      className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.03] transition-colors duration-300"
                    >
                      <div>
                        <p className="text-frog-light text-sm font-medium">{page.label}</p>
                        <p className="text-frog-muted/50 text-xs">{page.description}</p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-frog-muted/30 shrink-0" strokeWidth={1.5} />
                    </Link>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center gap-3 px-5 py-3 border-t border-frog-hairline">
                <div className="flex items-center gap-1 text-frog-muted/30 text-[10px]">
                  <Command className="w-3 h-3" strokeWidth={1.5} />K
                </div>
                <span className="text-frog-muted/30 text-[10px]">to toggle</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
