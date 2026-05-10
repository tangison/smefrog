'use client'

import { motion } from 'framer-motion'
import { Search, Command } from 'lucide-react'
import Link from 'next/link'

export default function SearchPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 border-b border-frog-hairline">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-frog-light leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Search
          </motion.h1>
        </div>
      </section>

      {/* Search Hint */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#7AC943]/[0.06] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#7AC943]/10 ring-1 ring-[#7AC943]/20 flex items-center justify-center mx-auto mb-8">
              <Search className="w-7 h-7 text-[#7AC943]" strokeWidth={1.5} />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.32, 0.72, 0, 1] }}
            className="text-2xl md:text-3xl font-black text-frog-light mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Quick Search
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.32, 0.72, 0, 1] }}
            className="text-frog-muted text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto"
          >
            Use the keyboard shortcut below to search across all pages instantly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-frog-shell ring-1 ring-frog-hairline rounded-2xl px-6 py-4">
              <Command className="w-5 h-5 text-[#7AC943]" strokeWidth={1.5} />
              <span className="text-frog-light font-black text-lg">K</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-frog-muted/60 text-sm mt-4"
          >
            Press <kbd className="px-1.5 py-0.5 rounded bg-frog-shell ring-1 ring-frog-hairline text-frog-light text-xs font-mono">⌘</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-frog-shell ring-1 ring-frog-hairline text-frog-light text-xs font-mono">K</kbd> on Mac or <kbd className="px-1.5 py-0.5 rounded bg-frog-shell ring-1 ring-frog-hairline text-frog-light text-xs font-mono">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-frog-shell ring-1 ring-frog-hairline text-frog-light text-xs font-mono">K</kbd> on Windows
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12"
          >
            <Link href="/" className="text-[#7AC943] text-sm font-bold hover:underline">← Back to Home</Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
