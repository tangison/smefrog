'use client'

import Link from 'next/link'
import { MessageCircle, ArrowRight, Check } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'

/* ─── Data ─────────────────────────────────────────── */
const ccFeatures = [
  { label: 'Members', value: '1–10 members' },
  { label: 'Compliance', value: 'Simpler compliance' },
  { label: 'Cost', value: 'Lower cost' },
  { label: 'Audit', value: 'No audit required' },
  { label: 'Best for', value: 'Small businesses' },
]

const ptyFeatures = [
  { label: 'Shareholders', value: '1–50 shareholders' },
  { label: 'Compliance', value: 'Stricter compliance' },
  { label: 'Cost', value: 'Higher cost' },
  { label: 'Audit', value: 'Audit may be required' },
  { label: 'Best for', value: 'Growing companies' },
]

const decisionPoints = [
  {
    question: 'Starting solo or with a small team?',
    cc: 'CC is ideal. Fewer formalities, lower cost.',
    pty: 'PTY LTD works too, but adds admin overhead.',
  },
  {
    question: 'Planning to raise investment?',
    cc: 'CCs cannot easily issue shares to investors.',
    pty: 'PTY LTD can issue shares and attract funding.',
  },
  {
    question: 'Budget-conscious?',
    cc: 'Registration from N$800. Ongoing costs are minimal.',
    pty: 'Registration from N$1,500. Audits add to annual cost.',
  },
]

/* ─── Page ──────────────────────────────────────────── */
export default function CCvsPTYLTDPage() {
  return (
    <>
      {/* ═══ HERO — DARK ═══ */}
      <section className="relative py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-frog-green/[0.06] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>Comparison</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-frog-light leading-tight max-w-3xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              CC vs{' '}
              <span className="text-frog-green">PTY LTD</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              Pick the right structure for your business.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ COMPARISON — LIGHT ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-light">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow light>Side by Side</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-2xl md:text-3xl font-bold text-frog-black mb-12"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              How They Compare
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* CC Card */}
            <ScrollReveal>
              <div className="bg-white ring-1 ring-black/[0.04] p-1.5 rounded-[2rem] h-full hover:ring-frog-green/30 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <div className="bg-frog-light rounded-[calc(2rem-0.375rem)] p-6 md:p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.25em] font-black text-frog-green">
                      Close Corporation
                    </span>
                  </div>

                  <h3
                    className="text-2xl md:text-3xl font-bold text-frog-black mb-6"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    CC
                  </h3>

                  <ul className="space-y-4 flex-1">
                    {ccFeatures.map((f) => (
                      <li key={f.label} className="flex items-center justify-between border-b border-black/[0.04] pb-3 last:border-0 last:pb-0">
                        <span className="text-frog-muted text-sm">{f.label}</span>
                        <span className="text-frog-black text-sm font-semibold">{f.value}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-4 border-t border-black/[0.04]">
                    <p className="text-frog-green text-sm font-bold">
                      From N$800
                    </p>
                    <p className="text-frog-muted text-xs mt-1">
                      7–10 working days
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* PTY LTD Card */}
            <ScrollReveal delay={0.06}>
              <div className="bg-frog-black p-1.5 rounded-[2rem] h-full ring-1 ring-frog-green/25">
                <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.25em] font-black text-frog-green">
                      Private Company
                    </span>
                  </div>

                  <h3
                    className="text-2xl md:text-3xl font-bold text-frog-light mb-6"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    PTY LTD
                  </h3>

                  <ul className="space-y-4 flex-1">
                    {ptyFeatures.map((f) => (
                      <li key={f.label} className="flex items-center justify-between border-b border-frog-hairline pb-3 last:border-0 last:pb-0">
                        <span className="text-frog-muted text-sm">{f.label}</span>
                        <span className="text-frog-light text-sm font-semibold">{f.value}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-4 border-t border-frog-hairline">
                    <p className="text-frog-green text-sm font-bold">
                      From N$1,500
                    </p>
                    <p className="text-frog-muted text-xs mt-1">
                      10–15 working days
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ WHICH IS RIGHT? — DARK ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-frog-green/[0.04] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>Decision Guide</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-2xl md:text-3xl font-bold text-frog-light mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Which Is Right for You?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base max-w-xl mb-12 leading-relaxed">
              Answer these questions. They point you toward the right structure.
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {decisionPoints.map((point, i) => (
              <ScrollReveal key={point.question} delay={i * 0.06}>
                <DoubleBezel>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                    <h3
                      className="text-base font-bold text-frog-light"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {point.question}
                    </h3>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-frog-green shrink-0 mt-0.5" strokeWidth={2} />
                      <p className="text-frog-muted text-sm leading-relaxed">{point.cc}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-frog-green shrink-0 mt-0.5" strokeWidth={2} />
                      <p className="text-frog-muted text-sm leading-relaxed">{point.pty}</p>
                    </div>
                  </div>
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-8 p-6 rounded-[2rem] bg-frog-green/[0.06] ring-1 ring-frog-green/20">
              <p className="text-frog-light text-sm leading-relaxed">
                <span className="text-frog-green font-bold">Still unsure?</span> Most Namibian startups begin with a CC.
                It costs less, requires less admin, and you can always convert to a PTY LTD later.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTA — DARK ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-frog-green/10 to-frog-dark pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-frog-green/[0.08] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <div className="w-14 h-14 rounded-2xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-6 h-6 text-frog-green" strokeWidth={1.5} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-3xl md:text-4xl font-bold text-frog-light mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Not sure? Chat with us.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base md:text-lg mb-10 max-w-lg mx-auto">
              Tell us about your business. We will recommend the right structure and handle the registration.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/264813411522"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp about CC vs PTY LTD"
                className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Chat on WhatsApp
                <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </a>
              <Link
                href="/resources"
                aria-label="Back to resources"
                className="group inline-flex items-center gap-2.5 ring-1 ring-frog-green/30 text-frog-green rounded-full px-8 py-4 text-sm font-medium bg-frog-green/[0.05] hover:bg-frog-green/[0.1] active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] min-h-[44px]"
              >
                Back to Resources
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
