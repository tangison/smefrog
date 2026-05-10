import { ScrollReveal } from '@/components/scroll-reveal'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 border-b border-frog-hairline">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              Blog
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-frog-light leading-tight">
              Insights &amp; Updates
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-frog-green/[0.06] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <div className="w-16 h-16 rounded-2xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mx-auto mb-8">
              <svg className="w-7 h-7 text-frog-green" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-frog-light mb-4">
              Coming Soon.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
              We&apos;re working on bringing you valuable content for your startup journey. Stay tuned for guides, insights, and tips for Namibian entrepreneurs.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <a
              href="https://wa.me/264813411522"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              Get Notified
              <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
