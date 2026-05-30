'use client'

import Link from 'next/link'
import { MessageCircle, ArrowRight, Check } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'
import { WHATSAPP_MAIN } from '@/lib/config'

/* ─── Data ─────────────────────────────────────────── */
const filingSteps = [
  {
    n: '01',
    title: 'Identify All Beneficial Owners',
    desc: 'Find every person who holds 25% or more ownership or voting rights in your entity.',
  },
  {
    n: '02',
    title: 'Complete BO Forms',
    desc: 'Fill in the required BIPA forms with accurate ownership details for each person.',
  },
  {
    n: '03',
    title: 'Submit to BIPA',
    desc: 'File your completed declaration with BIPA. We can handle this for you remotely.',
  },
  {
    n: '04',
    title: 'Update Annually',
    desc: 'Review and update your BO declaration every year or whenever ownership changes.',
  },
]

const boCriteria = [
  {
    label: '25%+ Ownership',
    detail: 'Anyone who directly or indirectly owns 25% or more of the shares or member interest.',
  },
  {
    label: '25%+ Voting Rights',
    detail: 'Anyone who controls 25% or more of the voting rights in the entity.',
  },
  {
    label: 'Effective Control',
    detail: 'Anyone who exercises significant influence over the management and direction of the entity.',
  },
  {
    label: 'Senior Officials',
    detail: 'If no individual meets the thresholds above, senior managing officials must be declared.',
  },
]

/* ─── Page ──────────────────────────────────────────── */
export default function BeneficialOwnershipGuidePage() {
  return (
    <>
      {/* ═══ HERO — DARK ═══ */}
      <section className="relative py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black overflow-hidden">
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
              File your BO declaration. Stay legal.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ WHAT IS BO — LIGHT ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-light">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow light>Definition</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-2xl md:text-3xl font-bold text-frog-black mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              What Is Beneficial Ownership?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base max-w-xl mb-12 leading-relaxed">
              A beneficial owner is any person who ultimately owns or controls your business.
              Namibian law requires every registered entity to declare these individuals.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {boCriteria.map((criterion, i) => (
              <ScrollReveal key={criterion.label} delay={i * 0.05}>
                <div className="bg-white ring-1 ring-black/[0.04] p-1.5 rounded-[2rem] h-full hover:ring-frog-green/30 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group">
                  <div className="bg-frog-light rounded-[calc(2rem-0.375rem)] p-6 h-full flex items-start gap-4">
                    <span className="w-9 h-9 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-frog-green/20 transition-colors duration-700">
                      <Check className="w-4 h-4 text-frog-green" strokeWidth={2} />
                    </span>
                    <div>
                      <h3
                        className="text-base font-bold text-frog-black mb-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {criterion.label}
                      </h3>
                      <p className="text-frog-muted text-sm leading-relaxed">
                        {criterion.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW TO FILE — DARK ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
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
              Four steps. Simple, but mandatory.
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

      {/* ═══ DEADLINE — LIGHT ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow light>Deadline</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-2xl md:text-3xl font-bold text-frog-black mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              When Is the Deadline?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mt-8 inline-flex items-center gap-4 bg-frog-light ring-1 ring-frog-green/20 rounded-[2rem] p-6 md:p-8">
              <span className="w-14 h-14 rounded-2xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-frog-green" strokeWidth={1.5} />
              </span>
              <div>
                <p
                  className="text-3xl md:text-4xl font-bold text-frog-green"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Annually
                </p>
                <p className="text-frog-muted text-sm mt-1">
                  File your BO declaration once per year. Also update it whenever ownership changes occur.
                  Non-compliance can result in penalties and deregistration.
                </p>
              </div>
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
              We handle BO filing for you.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base md:text-lg mb-10 max-w-lg mx-auto">
              Skip the forms. Tell us your details over WhatsApp. We file your BO declaration with BIPA — fast and accurate.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WHATSAPP_MAIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get help with BO filing via WhatsApp"
                className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                File BO Declaration
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
