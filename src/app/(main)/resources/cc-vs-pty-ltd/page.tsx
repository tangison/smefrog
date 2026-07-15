'use client'

import Link from 'next/link'
import { MessageCircle, ArrowRight, Check } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'
import { waLink } from '@/lib/config'

/* ─── Data ─────────────────────────────────────────── */
const ccFeatures = [
  { label: 'Members', value: 'Max 10, all natural persons' },
  { label: 'Ownership', value: 'Members\' interest (not shares)' },
  { label: 'Management', value: 'Members manage directly, no directors required' },
  { label: 'Governing Law', value: 'Close Corporations Act 26 of 1988' },
  { label: 'Audit', value: 'No audit requirement for most CCs' },
  { label: 'Registered Via', value: 'BIPA Namibia' },
  { label: 'Cost', value: 'From N$1,000' },
]

const ptyFeatures = [
  { label: 'Shareholders', value: 'Unlimited (natural persons or companies)' },
  { label: 'Ownership', value: 'Shares issued to shareholders' },
  { label: 'Management', value: 'Directors and company secretary required' },
  { label: 'Governing Law', value: 'Companies Act 28 of 2004' },
  { label: 'Audit', value: 'Required based on public interest score' },
  { label: 'Registered Via', value: 'BIPA Namibia' },
  { label: 'Cost', value: 'From N$1,500' },
]

const decisionPoints = [
  {
    question: 'Starting solo or with a small team?',
    cc: 'CC is ideal. Fewer formalities, lower cost. Members manage directly without appointing directors.',
    pty: 'PTY LTD works but adds admin overhead. You must appoint at least one director and a company secretary.',
  },
  {
    question: 'Planning to raise investment?',
    cc: 'CCs cannot easily issue shares to investors. Members\' interest transfers are more restrictive.',
    pty: 'PTY LTD can issue shares and attract funding. Share structures are flexible under the Companies Act 28 of 2004.',
  },
  {
    question: 'Budget-conscious?',
    cc: 'CC registration from N$1,000. Annual compliance costs are minimal: no audit, no company secretary.',
    pty: 'PTY LTD registration from N$1,500. Annual compliance costs are higher: potential audit fees, company secretary retainer.',
  },
]

/* ─── Page ──────────────────────────────────────────── */
export default function CCvsPTYLTDPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a] overflow-hidden">

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
              Pick the right legal structure for your Namibian business. Both are registered through BIPA, but they differ in governance, cost, and flexibility.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ COMPARISON ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow>Side by Side</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-2xl md:text-3xl font-bold text-frog-light mb-12"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              How They Compare
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* CC Card */}
            <ScrollReveal>
              <div className="bg-frog-shell ring-1 ring-frog-hairline p-1.5 rounded-[2rem] h-full hover:ring-frog-green/30 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.25em] font-black text-frog-green">
                      Close Corporation
                    </span>
                  </div>

                  <h3
                    className="text-2xl md:text-3xl font-bold text-frog-light mb-6"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    CC
                  </h3>

                  <ul className="space-y-4 flex-1">
                    {ccFeatures.map((f) => (
                      <li key={f.label} className="flex items-center justify-between border-b border-frog-hairline pb-3 last:border-0 last:pb-0">
                        <span className="text-frog-muted text-sm">{f.label}</span>
                        <span className="text-frog-light text-sm font-semibold text-right max-w-[60%]">{f.value}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-4 border-t border-frog-hairline">
                    <p className="text-frog-green text-sm font-bold">
                      From N$1,000
                    </p>
                    <p className="text-frog-muted text-xs mt-1">
                      5–10 working days via BIPA
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* PTY LTD Card */}
            <ScrollReveal delay={0.06}>
              <div className="bg-frog-shell ring-1 ring-frog-green/25 p-1.5 rounded-[2rem] h-full hover:ring-frog-green/40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
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
                        <span className="text-frog-light text-sm font-semibold text-right max-w-[60%]">{f.value}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-4 border-t border-frog-hairline">
                    <p className="text-frog-green text-sm font-bold">
                      From N$1,500
                    </p>
                    <p className="text-frog-muted text-xs mt-1">
                      10–15 working days via BIPA
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ WHICH IS RIGHT? ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a] relative overflow-hidden">

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
              Answer these questions to find the right structure for your business.
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
                <span className="text-frog-green font-bold">Both are registered via BIPA Namibia.</span> Most Namibian startups begin with a CC: it costs less, requires less admin, and you can convert to a PTY LTD later if your business outgrows the structure.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a] relative overflow-hidden">

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
              Tell us about your business. We will recommend the right structure and handle the registration with BIPA.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={waLink('registration')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp about CC vs PTY LTD"
                className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] min-h-[48px] touch-manipulation"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Chat on WhatsApp
                <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </a>
              <Link
                href="/resources"
                aria-label="Back to resources"
                className="group inline-flex items-center gap-2.5 ring-1 ring-frog-green/30 text-frog-green rounded-full px-8 py-4 text-sm font-medium bg-frog-green/[0.05] hover:bg-frog-green/[0.1] active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] min-h-[48px] touch-manipulation"
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
