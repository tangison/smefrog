'use client'

import { useState, useEffect, startTransition } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const searchData = [
  { title: 'CC Registration', desc: 'From N$800 — BIPA filing included', href: '/services/business-registration', category: 'Services' },
  { title: 'PTY LTD Registration', desc: 'From N$1,500 — Full compliance', href: '/services/business-registration', category: 'Services' },
  { title: 'Compliance Services', desc: 'Annual returns, BO updates, regulatory filings', href: '/services/compliance-services', category: 'Services' },
  { title: 'Business Documents', desc: 'Contracts, policies, internal docs', href: '/services/business-documents', category: 'Services' },
  { title: 'Basic Package', desc: 'N$800 — Name Reservation + BIPA + Tax', href: '/pricing', category: 'Pricing' },
  { title: 'Advanced Package', desc: 'N$1,200 — Basic + Profile + Domain + BO', href: '/pricing', category: 'Pricing' },
  { title: 'Full Package', desc: 'N$1,750 — Advanced + Annual Return Filing + Compliance Check', href: '/pricing', category: 'Pricing' },
  { title: 'How long does registration take?', desc: '7–10 working days depending on BIPA', href: '/faq', category: 'FAQ' },
  { title: 'Can I register remotely?', desc: 'Yes — everything handled via WhatsApp and email', href: '/faq', category: 'FAQ' },
  { title: 'What documents do I need?', desc: 'ID copy, proof of address, and business name', href: '/faq', category: 'FAQ' },
  { title: 'Can foreigners register?', desc: 'Yes, with valid work permit or residency', href: '/faq', category: 'FAQ' },
  { title: 'Contact Gadafi', desc: '085 341 1522 — Compliance Expert', href: '/contact', category: 'Contact' },
  { title: 'Contact Mux', desc: '085 341 1522 — Compliance Officer', href: '/contact', category: 'Contact' },
  { title: 'About SMEfrog', desc: 'Our mission and story', href: '/about', category: 'Company' },
  { title: 'Why SMEfrog', desc: '2X cheaper, fully remote, built for startups', href: '/about', category: 'Company' },
]

export function SearchOverlay() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const pathname = usePathname()
  // CMD+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(prev => !prev)
        setQuery('')
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Close on route change
  useEffect(() => {
    startTransition(() => {
      setOpen(false)
      setQuery('')
    })
  }, [pathname])

  const results = query.length > 0
    ? searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : []

  const categories = [...new Set(results.map(r => r.category))]

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-3xl flex items-start justify-center pt-[15vh] p-6"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 text-white/20" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="How long does registration take?"
                className="w-full bg-transparent border-b-2 border-white/10 py-8 pl-10 text-2xl md:text-4xl text-white outline-none focus:border-frog-green transition-colors duration-500 font-bold"
              />
              <button
                onClick={() => setOpen(false)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Results */}
            <div className="mt-8 max-h-[50vh] overflow-y-auto frog-chat-scroll">
              {query.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-white/20 text-sm font-bold uppercase tracking-widest">Type to search</p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {['Pricing', 'CC Registration', 'Documents', 'FAQ'].map(q => (
                      <button
                        key={q}
                        onClick={() => setQuery(q)}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-bold uppercase tracking-wider hover:bg-white/10 hover:text-white/60 transition-all"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {categories.map(cat => (
                <div key={cat} className="mb-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-3">{cat}</p>
                  <div className="space-y-1">
                    {results.filter(r => r.category === cat).map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300 group"
                      >
                        <div>
                          <p className="text-white font-bold text-sm group-hover:text-frog-green transition-colors">{item.title}</p>
                          <p className="text-white/30 text-xs mt-0.5">{item.desc}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-frog-green transition-colors shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {query.length > 0 && results.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-white/20 font-bold">No results for &ldquo;{query}&rdquo;</p>
                  <p className="text-white/10 text-sm mt-2">Try searching for registration, pricing, or documents</p>
                </div>
              )}
            </div>

            {/* Footer hint */}
            <div className="mt-6 flex items-center justify-between text-white/10 text-[10px] font-bold uppercase tracking-widest">
              <span>ESC to close</span>
              <span>⌘K to search</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
