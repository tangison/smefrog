'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import { BookOpen, GitCompare, ClipboardCheck, FileSpreadsheet, Banknote, Scale } from 'lucide-react'

const resources = [
  {
    icon: BookOpen,
    title: 'Business Registration Guide',
    description: 'Step-by-step guide to registering your business in Namibia.',
  },
  {
    icon: GitCompare,
    title: 'CC vs Pty Ltd',
    description: 'Understanding the difference between Close Corporations and Private Companies.',
  },
  {
    icon: ClipboardCheck,
    title: 'BIPA Compliance Checklist',
    description: 'Everything you need to know about BIPA requirements.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Business Plan Template',
    description: 'Free template to help you structure your business plan.',
  },
  {
    icon: Banknote,
    title: 'Funding Guide for Startups',
    description: 'Where to look for funding and how to prepare.',
  },
  {
    icon: Scale,
    title: 'Namibian Business Laws Overview',
    description: 'Key regulations every entrepreneur should know.',
  },
]

export default function ResourcesPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 border-b border-frog-hairline">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              Resources
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-frog-light leading-tight">
              Startup Resources
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg mt-4 leading-relaxed max-w-2xl">
              Practical guides, templates, and insights to help you navigate the startup landscape in Namibia.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Resource Grid */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((resource, i) => (
              <ScrollReveal key={resource.title} delay={i * 0.06}>
                <div className="bg-frog-shell ring-1 ring-frog-hairline p-1.5 rounded-[2rem] h-full">
                  <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8 h-full flex flex-col">
                    <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-4">
                      <resource.icon className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-frog-light mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-frog-muted text-sm leading-relaxed mb-4 flex-1">
                      {resource.description}
                    </p>
                    <div>
                      <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.12em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 border-t border-frog-hairline relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-frog-green/[0.06] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-frog-light mb-4">
              Need Help Right Now?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-frog-muted text-base mb-6 leading-relaxed">
              Can&apos;t wait for a guide? Chat with us directly on WhatsApp and get your questions answered today.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <a
              href="https://wa.me/264813411522"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              Chat on WhatsApp
              <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
