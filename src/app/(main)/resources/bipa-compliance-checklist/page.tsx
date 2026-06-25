'use client'

import Link from 'next/link'
import { MessageCircle, ArrowRight, Check, AlertTriangle, Clock, Shield } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'
import { waLink } from '@/lib/config'

/* ─── Data ─────────────────────────────────────────── */
const checklistItems = [
  {
    label: 'Annual Return (Form CC4) Filed',
    detail: 'Due within 30 days of your registration anniversary. BIPA fee: N$50 (CC), varies by share capital (Pty Ltd). Late penalty: N$200 per month. Persistent non-filing leads to deregistration.',
    icon: Clock,
  },
  {
    label: 'BO Declaration Current',
    detail: 'Required under the Financial Intelligence Act (FIA) Namibia. Must reflect the latest ownership. 25%+ ownership threshold applies. Update within 21 days of any change.',
    icon: Shield,
  },
  {
    label: 'CK2 Amendments Filed',
    detail: 'Any changes to members, name, or registered address must be filed via Form CK2 with BIPA. Amendments must be submitted promptly; delays attract penalties.',
    icon: Check,
  },
  {
    label: 'Registered Address Updated',
    detail: 'BIPA must have your current Namibian registered address at all times. Update within 30 days of any change. A PO Box is not accepted as a registered address.',
    icon: Check,
  },
  {
    label: 'Member/Director Changes Notified',
    detail: 'Appointing or removing members (CC) or directors (Pty Ltd) must be notified to BIPA. File the appropriate amendment forms within the required timeframe.',
    icon: Check,
  },
  {
    label: 'Financial Statements',
    detail: 'Required under the Companies Act 28 of 2004 (Pty Ltd) and Close Corporations Act 26 of 1988 (CC). Financial statements must be prepared annually and kept at the registered office.',
    icon: Check,
  },
  {
    label: 'Tax Clearance Valid',
    detail: 'Keep your NamRA (Namibia Revenue Agency) tax clearance certificate current. Expired clearance prevents you from tendering for government work, opening bank accounts, and entering contracts.',
    icon: Shield,
  },
  {
    label: 'POPIA Compliance',
    detail: 'The Protection of Personal Information Act (Act 4 of 2013) applies if your business processes personal data. You must have appropriate measures in place to protect personal information.',
    icon: Shield,
  },
]

const penalties = [
  {
    title: 'Late Filing Fees',
    desc: 'N$200 per month penalty for overdue annual returns. BIPA escalates penalties the longer you delay. These accumulate rapidly and can exceed the original filing fee.',
    icon: AlertTriangle,
  },
  {
    title: 'Deregistration Risk',
    desc: 'Persistent non-compliance leads to involuntary deregistration by BIPA. A deregistered entity ceases to exist legally: you lose your name, your bank accounts are frozen, and you cannot trade.',
    icon: AlertTriangle,
  },
  {
    title: 'Legal Liability',
    desc: 'Directors and members may face personal liability under Namibian law for compliance failures. The corporate veil does not protect those who ignore their statutory obligations.',
    icon: AlertTriangle,
  },
  {
    title: 'Business Disruption',
    desc: 'Non-compliant entities cannot open bank accounts, tender for government or corporate work, or sign legally binding contracts. Compliance failures directly block business operations.',
    icon: AlertTriangle,
  },
]

/* ─── Page ──────────────────────────────────────────── */
export default function BIPAComplianceChecklistPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a] overflow-hidden">
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
              Your compliance checklist for BIPA Namibia. Miss one item and you risk penalties, deregistration, or personal liability.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CHECKLIST ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow>Checklist</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-2xl md:text-3xl font-bold text-frog-light mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Your BIPA Compliance Checklist
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base max-w-xl mb-12 leading-relaxed">
              Tick off every item. Under the Close Corporations Act 26 of 1988 and Companies Act 28 of 2004, these are non-negotiable obligations.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {checklistItems.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.05}>
                <DoubleBezel>
                  <div className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3
                        className="text-base font-bold text-frog-light mb-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {item.label}
                      </h3>
                      <p className="text-frog-muted text-sm leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PENALTIES ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a] relative overflow-hidden">
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
              BIPA does not ignore late filings. Namibian law imposes real consequences. Here is what happens when you fall behind.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {penalties.map((penalty, i) => (
              <ScrollReveal key={penalty.title} delay={i * 0.06}>
                <DoubleBezel>
                  <div className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-xl bg-red-500/10 ring-1 ring-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <penalty.icon className="w-4 h-4 text-red-400" strokeWidth={1.5} />
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

      {/* ═══ CTA ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a] relative overflow-hidden">
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
              We handle annual returns, BO declarations, CK2 amendments, and more, all filed with BIPA on your behalf. Stay compliant without the stress.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={waLink('compliance')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get compliance help via WhatsApp"
                className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] min-h-[48px] touch-manipulation"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Get Compliance Help
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
