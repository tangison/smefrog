'use client'

import { ScrollReveal } from './scroll-reveal'

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-frog-green/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-6">
            About SMEfrog
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-frog-light leading-tight mb-8">
            Built for Entrepreneurs
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-lg md:text-xl text-[#8BA89A] leading-relaxed mb-6">
            SMEfrog was created to solve a simple problem:
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-xl md:text-2xl text-frog-light font-heading font-medium leading-relaxed mb-8">
            Starting a business in Namibia is unnecessarily expensive, confusing, and slow.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="text-lg md:text-xl text-[#8BA89A] leading-relaxed mb-12">
            We built a lean, digital-first support company focused on helping founders
            start properly — without wasting time or money.
          </p>
        </ScrollReveal>

        {/* Mission Quote */}
        <ScrollReveal delay={0.3}>
          <div className="bg-white/[0.03] ring-1 ring-white/[0.08] p-1.5 rounded-[2rem]">
            <div className="bg-[#151D19] rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-1 h-full min-h-[60px] bg-frog-green/40 rounded-full shrink-0" />
                <div>
                  <p className="text-sm uppercase tracking-[0.15em] text-frog-green/60 font-medium mb-2">
                    Our Mission
                  </p>
                  <p className="text-xl md:text-2xl font-heading font-semibold text-frog-light leading-relaxed">
                    Help more entrepreneurs become formal businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
