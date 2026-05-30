'use client'

import Link from 'next/link'
import { MessageCircle, ArrowRight, Check } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'
import { WHATSAPP_MAIN } from '@/lib/config'

/* ─── Data ─────────────────────────────────────────── */
const steps = [
  {
    n: '01',
    title: 'Choose a Unique Name',
    desc: 'Pick a name that stands out. It must not match any existing CC on the BIPA register.',
  },
  {
    n: '02',
    title: 'Reserve the Name at BIPA',
    desc: 'Submit your proposed name to BIPA for reservation. This locks it while you prepare documents.',
  },
  {
    n: '03',
    title: 'Prepare Founding Documents',
    desc: 'Draft the Founding Statement and Constitution. These define how your CC operates.',
  },
  {
    n: '04',
    title: 'Submit the CK1 Form',
    desc: 'File the CK1 registration form with BIPA. This is the formal application to register your CC.',
  },
  {
    n: '05',
    title: 'Register for Tax',
    desc: 'Register with Inland Revenue for income tax and VAT (if applicable). Your CC needs a tax number.',
  },
  {
    n: '06',
    title: 'Receive Your Certificate',
    desc: 'BIPA issues your registration certificate. Your CC is now legally recognised.',
  },
]

const requirements = [
  { label: 'Certified ID Copy', detail: 'Of each member applying for the CC.' },
  { label: 'Proof of Address', detail: 'Utility bill or lease agreement not older than 3 months.' },
  { label: 'Three Proposed Names', detail: 'Submit 3 name options in order of preference.' },
  { label: 'Founding Statement', detail: 'Signed CK1 form with member details and contribution.' },
]

/* ─── Page ──────────────────────────────────────────── */
export default function CCRegistrationGuidePage() {
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
              CC{' '}
              <span className="text-frog-green">Registration</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              Everything you need to register a Close Corporation in Namibia.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ STEPS — LIGHT ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-light">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow light>Steps</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-2xl md:text-3xl font-bold text-frog-black mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              How to Register a CC
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base max-w-xl mb-12 leading-relaxed">
              Follow these six steps from name choice to certificate.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 0.06}>
                <div className="bg-white ring-1 ring-black/[0.04] p-1.5 rounded-[2rem] h-full hover:ring-frog-green/30 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group">
                  <div className="bg-frog-light rounded-[calc(2rem-0.375rem)] p-6 md:p-8 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-9 h-9 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center text-frog-green font-bold text-sm">
                        {step.n}
                      </span>
                      <Check className="w-4 h-4 text-frog-green" strokeWidth={2} />
                    </div>
                    <h3
                      className="text-lg font-bold text-frog-black mb-2"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-frog-muted text-sm leading-relaxed flex-1">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REQUIREMENTS — DARK ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-frog-green/[0.04] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>Requirements</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-2xl md:text-3xl font-bold text-frog-light mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              What You Need
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base max-w-xl mb-12 leading-relaxed">
              Gather these documents before you start. Missing paperwork slows things down.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {requirements.map((req, i) => (
              <ScrollReveal key={req.label} delay={i * 0.06}>
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
                        {req.label}
                      </h3>
                      <p className="text-frog-muted text-sm leading-relaxed">
                        {req.detail}
                      </p>
                    </div>
                  </div>
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE — LIGHT ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow light>Timeline</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-2xl md:text-3xl font-bold text-frog-black mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              How Long Does It Take?
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
                  7–10 Working Days
                </p>
                <p className="text-frog-muted text-sm mt-1">
                  From submission to certificate. Delays happen if documents are incomplete.
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
              Ready to register?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base md:text-lg mb-10 max-w-lg mx-auto">
              Skip the paperwork. We handle your CC registration from start to finish — over WhatsApp.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WHATSAPP_MAIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Register your CC via WhatsApp"
                className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Register via WhatsApp
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
