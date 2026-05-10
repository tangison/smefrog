'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { Search, Command } from 'lucide-react'

export default function SearchPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 border-b border-frog-hairline">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-frog-light leading-tight">
              Search
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Search Hint */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-frog-green/[0.06] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <div className="w-16 h-16 rounded-2xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mx-auto mb-8">
              <Search className="w-7 h-7 text-frog-green" strokeWidth={1.5} />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-frog-light mb-4">
              Quick Search
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto">
              Use the keyboard shortcut below to search across all pages instantly.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <div className="inline-flex items-center gap-2 bg-frog-shell ring-1 ring-frog-hairline rounded-2xl px-6 py-4">
              <Command className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
              <span className="text-frog-light font-heading font-semibold text-lg">K</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-frog-muted/60 text-sm mt-4">
              Press <kbd className="px-1.5 py-0.5 rounded bg-frog-shell ring-1 ring-frog-hairline text-frog-light text-xs font-mono">⌘</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-frog-shell ring-1 ring-frog-hairline text-frog-light text-xs font-mono">K</kbd> on Mac or <kbd className="px-1.5 py-0.5 rounded bg-frog-shell ring-1 ring-frog-hairline text-frog-light text-xs font-mono">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-frog-shell ring-1 ring-frog-hairline text-frog-light text-xs font-mono">K</kbd> on Windows
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
