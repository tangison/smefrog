'use client'

import Link from 'next/link'
import { MessageCircle, ArrowRight, Check } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'
import { WHATSAPP_GADAFI } from '@/lib/config'

/* ─── Data ─────────────────────────────────────────── */
const checklistItems = [
  {
    label: 'Annual returns filed',
    detail: 'Submit your annual return to BIPA on time every year. Late filings attract penalties.',
  },
  {
    label: 'BO declaration current',
    detail: 'Your Beneficial Ownership declaration must reflect the latest ownership structure.',
  },
  {
    label: 'CK2 amendments filed',
    detail: 'Any changes to members, name, or address must be filed via the CK2 amendment form.',
  },
  {
    label: 'Registered address updated',
    detail: 'BIPA must have your current registered address. Update it within 30 days of any change.',
  },
  {
    label: 'Director changes notified',
    detail: 'Appointing or removing directors? Notify BIPA within the required timeframe.',
  },
  {
    label: 'Shareholder changes recorded',
    detail: 'Any change in shareholding must be recorded and filed with BIPA.',
  },
  {
    label: 'Financial statements submitted',
    detail: 'Prepare and submit annual financial statements as required by the Companies Act.',
  },
  {
    label: 'Tax clearance valid',
    detail: 'Keep your tax clearance certificate current. Expired clearance can block business operations.',
  },
]

const penalties = [
  {
    title: 'Late Filing Fees',
    desc: 'BIPA charges escalating penalties for overdue annual returns and amendments.',
  },
  {
    title: 'Deregistration Risk',
    desc: 'Persistent non-compliance can lead to involuntary deregistration of your entity.',
  },
  {
    title: 'Legal Liability',
    desc: 'Directors and members may face personal liability for compliance failures.',
  },
  {
    title: 'Business Disruption',
    desc: 'Non-compliant entities cannot open bank accounts, tender for work, or sign contracts.',
  },
]

/* ─── Page ──────────────────────────────────────────── */
export default function BIPAComplianceChecklistPage() {
  return (
    <>
      {/* ═══ HERO — DARK ═══ */}
      <section className="relative py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-frog-green/[0.06] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>Checklist</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-frog-light leading-tight max-w-3xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              BIPA{' '}
              <span className="text-frog-green">Compliance</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              Stay compliant. Avoid penalties.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CHECKLIST — LIGHT ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-light">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow light>Checklist</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-2xl md:text-3xl font-bold text-frog-black mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Your Compliance Checklist
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base max-w-xl mb-12 leading-relaxed">
              Tick off every item. Missing one can cost you.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {checklistItems.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.05}>
                <div className="bg-white ring-1 ring-black/[0.04] p-1.5 rounded-[2rem] h-full hover:ring-frog-green/30 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group">
                  <div className="bg-frog-light rounded-[calc(2rem-0.375rem)] p-6 h-full flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-frog-green/20 transition-colors duration-700">
                      <Check className="w-4 h-4 text-frog-green" strokeWidth={2} />
                    </span>
                    <div>
                      <h3
                        className="text-base font-bold text-frog-black mb-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {item.label}
                      </h3>
                      <p className="text-frog-muted text-sm leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PENALTIES — DARK ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-frog-green/[0.04] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>Penalties</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-2xl md:text-3xl font-bold text-frog-light mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Risks of Non-Compliance
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base max-w-xl mb-12 leading-relaxed">
              BIPA does not ignore late filings. Here is what happens when you fall behind.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {penalties.map((penalty, i) => (
              <ScrollReveal key={penalty.title} delay={i * 0.06}>
                <DoubleBezel>
                  <div className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-frog-green" />
                    </span>
                    <div>
                      <h3
                        className="text-base font-bold text-frog-light mb-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {penalty.title}
                      </h3>
                      <p className="text-frog-muted text-sm leading-relaxed">
                        {penalty.desc}
                      </p>
                    </div>
                  </div>
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>
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
              Need help with compliance?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base md:text-lg mb-10 max-w-lg mx-auto">
              We handle annual returns, BO declarations, and amendments. Stay compliant without the stress.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WHATSAPP_GADAFI}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get compliance help via WhatsApp"
                className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Get Compliance Help
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
