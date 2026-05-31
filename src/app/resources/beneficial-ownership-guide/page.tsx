'use client'

import Link from 'next/link'
import { MessageCircle, ArrowRight, Check, AlertTriangle } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'
import { waLink } from '@/lib/config'

/* ─── Data ─────────────────────────────────────────── */
const filingSteps = [
  {
    n: '01',
    title: 'Identify All Beneficial Owners',
    desc: 'Every person who holds 25% or more ownership or voting rights must be identified. This includes both direct and indirect ownership through other entities or trusts.',
  },
  {
    n: '02',
    title: 'Complete BO Declaration Forms',
    desc: 'For each beneficial owner, provide: full name, nationality, Namibian ID number, residential address, and extent of interest (percentage). All details must be current and accurate.',
  },
  {
    n: '03',
    title: 'Submit to BIPA',
    desc: 'File the completed declaration with BIPA (Business and Intellectual Property Authority of Namibia). We handle this remotely; no office visits required.',
  },
  {
    n: '04',
    title: 'Update Annually or on Change',
    desc: 'Review and update your BO declaration yearly or whenever ownership changes. You must update within 21 days of any change. Failure to update is a violation of the FIA.',
  },
]

const boCriteria = [
  {
    label: '25%+ Ownership',
    detail: 'Anyone who directly or indirectly owns 25% or more of the shares or member interest in the entity. Includes ownership through other companies or trusts.',
  },
  {
    label: '25%+ Voting Rights',
    detail: 'Anyone who controls 25% or more of the voting rights in the entity. This includes formal voting rights and informal control through agreements or arrangements.',
  },
  {
    label: 'Effective Control',
    detail: 'Anyone who exercises significant influence over the management and direction of the entity, even if they do not meet the 25% threshold. This includes shadow directors and de facto controllers.',
  },
  {
    label: 'Senior Officials',
    detail: 'If no individual meets any of the above thresholds, senior managing officials must be declared. This ensures every entity has at least one declared beneficial owner.',
  },
]

const requiredInfo = [
  'Full legal name',
  'Nationality',
  'Namibian ID number (or passport number for foreign nationals)',
  'Residential address in Namibia',
  'Extent of interest (percentage of ownership or voting rights)',
]

/* ─── Page ──────────────────────────────────────────── */
export default function BeneficialOwnershipGuidePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-frog-green/[0.06] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>Guide</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-frog-light leading-tight max-w-3xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Beneficial{' '}
              <span className="text-frog-green">Ownership</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              Required under the Financial Intelligence Act (FIA) Namibia. Every registered entity must file a Beneficial Ownership declaration with BIPA.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ WHAT IS BO ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow>Definition</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-2xl md:text-3xl font-bold text-frog-light mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              What Is Beneficial Ownership?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base max-w-xl mb-12 leading-relaxed">
              A beneficial owner is any person who ultimately owns or controls your business. Under the Financial Intelligence Act (FIA), Namibian law requires every registered entity to declare these individuals to BIPA. The 25% threshold applies.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {boCriteria.map((criterion, i) => (
              <ScrollReveal key={criterion.label} delay={i * 0.05}>
                <DoubleBezel>
                  <div className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-frog-green" strokeWidth={2} />
                    </span>
                    <div>
                      <h3
                        className="text-base font-bold text-frog-light mb-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {criterion.label}
                      </h3>
                      <p className="text-frog-muted text-sm leading-relaxed">
                        {criterion.detail}
                      </p>
                    </div>
                  </div>
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW TO FILE ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-frog-green/[0.04] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>How to File</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-2xl md:text-3xl font-bold text-frog-light mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Filing Your BO Declaration
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base max-w-xl mb-12 leading-relaxed">
              Four steps. Mandatory under the Financial Intelligence Act. Filed with BIPA Namibia.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filingSteps.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 0.06}>
                <DoubleBezel>
                  <div className="flex flex-col h-full">
                    <span className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center text-frog-green font-bold text-sm mb-4">
                      {step.n}
                    </span>
                    <h3
                      className="text-base font-bold text-frog-light mb-2"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-frog-muted text-sm leading-relaxed flex-1">
                      {step.desc}
                    </p>
                  </div>
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REQUIRED INFO ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a] border-y border-frog-hairline">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow>Required Information</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-2xl md:text-3xl font-bold text-frog-light mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              What Goes Into a BO Declaration
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base max-w-xl mb-12 leading-relaxed">
              For each beneficial owner, you must provide the following information to BIPA.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {requiredInfo.map((info, i) => (
              <ScrollReveal key={info} delay={i * 0.05}>
                <DoubleBezel>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-frog-green" strokeWidth={2} />
                    </span>
                    <p
                      className="text-frog-light text-sm font-semibold"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {info}
                    </p>
                  </div>
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DEADLINE & NON-COMPLIANCE ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-frog-green/[0.04] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>Deadline &amp; Non-Compliance</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-2xl md:text-3xl font-bold text-frog-light mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              When to File and What Happens If You Don&apos;t
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base max-w-xl mb-12 leading-relaxed">
              The FIA imposes strict deadlines and severe penalties. Non-compliance is not optional.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ScrollReveal delay={0}>
              <DoubleBezel>
                <div className="flex items-start gap-4">
                  <span className="w-9 h-9 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3
                      className="text-base font-bold text-frog-light mb-2"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Filing Deadline
                    </h3>
                    <p className="text-frog-muted text-sm leading-relaxed">
                      File your BO declaration <span className="text-frog-green font-semibold">annually</span> and update it within <span className="text-frog-green font-semibold">21 days</span> of any change in ownership or control. There is no grace period.
                    </p>
                  </div>
                </div>
              </DoubleBezel>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <DoubleBezel>
                <div className="flex items-start gap-4">
                  <span className="w-9 h-9 rounded-xl bg-red-500/10 ring-1 ring-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4 text-red-400" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3
                      className="text-base font-bold text-frog-light mb-2"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Non-Compliance
                    </h3>
                    <p className="text-frog-muted text-sm leading-relaxed">
                      Fines up to <span className="text-red-400 font-semibold">N$500,000</span> or imprisonment under the Financial Intelligence Act. The FIA treats BO non-compliance as a serious offence.
                    </p>
                  </div>
                </div>
              </DoubleBezel>
            </ScrollReveal>
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
              We handle BO filing for you.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base md:text-lg mb-10 max-w-lg mx-auto">
              Tell us your details over WhatsApp. We file your BO declaration with BIPA, compliant with the Financial Intelligence Act, filed on time, every time.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={waLink('compliance')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get help with BO filing via WhatsApp"
                className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] min-h-[48px] touch-manipulation"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                File BO Declaration
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
