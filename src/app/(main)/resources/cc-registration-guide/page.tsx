'use client'

import Link from 'next/link'
import { MessageCircle, ArrowRight, Check, Clock, FileText, AlertTriangle } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Eyebrow } from '@/components/eyebrow'
import { DoubleBezel } from '@/components/double-bezel'
import { waLink } from '@/lib/config'

/* ─── Data ─────────────────────────────────────────── */
const steps = [
  {
    n: '01',
    title: 'Choose a Unique Name',
    desc: 'Your name must not match any existing CC on the BIPA register. Restricted words such as Bank, Insurance, Trust, University, and similar require special ministerial approval under the Close Corporations Act 26 of 1988.',
  },
  {
    n: '02',
    title: 'Reserve the Name at BIPA',
    desc: 'Submit your proposed name(s) for reservation via BIPA (Business and Intellectual Property Authority of Namibia). This locks the name while you prepare your founding documents. Reservation fee: N$50–N$150.',
  },
  {
    n: '03',
    title: 'Prepare Founding Statement (Form CC1)',
    desc: 'The CC1 form defines your CC\'s members, their interest percentages, and the registered address in Namibia. All members must be natural persons: a minimum of 1 and a maximum of 10. No corporate members are permitted under the Act.',
  },
  {
    n: '04',
    title: 'Submit to BIPA',
    desc: 'File the completed CC1 with certified ID copies of all members and proof of Namibian registered address. BIPA filing fee: N$150–N$300. Incomplete submissions are returned without processing.',
  },
  {
    n: '05',
    title: 'Register for Tax',
    desc: 'Register with NamRA (Namibia Revenue Agency) for income tax and, if your turnover exceeds the threshold, VAT. Your CC must obtain its own tax number, which is separate from your personal tax registration.',
  },
  {
    n: '06',
    title: 'Receive Your Certificate',
    desc: 'BIPA issues your registration certificate. Your CC is now legally recognised under the Close Corporations Act 26 of 1988. You can open a business bank account, enter contracts, and begin trading.',
  },
]

const requirements = [
  { label: 'Certified ID Copy of Each Member', detail: 'All members (1–10) must provide a certified copy of their Namibian ID or valid passport. Certified by a commissioner of oaths.' },
  { label: 'Proof of Namibian Registered Address', detail: 'Utility bill or lease agreement not older than 3 months. The address must be a physical location in Namibia, not a PO Box.' },
  { label: '2–3 Proposed Business Names', detail: 'Submit in order of preference. Names are checked against the BIPA register. Restricted words require special approval.' },
  { label: 'Founding Statement (Form CC1)', detail: 'Signed by all members. Defines member interest percentages, contributions, and the registered address. The core document of your CC.' },
  { label: 'BO Declaration (FIA)', detail: 'Beneficial Ownership declaration required under the Financial Intelligence Act. Every person with 25%+ ownership or voting rights must be declared. File with BIPA.' },
]

const keyFacts = [
  { icon: FileText, label: 'Governing Law', value: 'Close Corporations Act 26 of 1988' },
  { icon: Check, label: 'Members', value: '1–10 natural persons only' },
  { icon: Clock, label: 'Processing Time', value: '5–10 working days' },
  { icon: AlertTriangle, label: 'Annual Return', value: 'Form CC4, due yearly' },
]

/* ─── Page ──────────────────────────────────────────── */
export default function CCRegistrationGuidePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a] overflow-hidden">

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
              Everything you need to register a Close Corporation in Namibia, governed by the Close Corporations Act 26 of 1988, filed through BIPA.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ KEY FACTS ═══ */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#0a0a0a] border-y border-frog-hairline">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {keyFacts.map((fact, i) => (
              <ScrollReveal key={fact.label} delay={i * 0.06}>
                <div className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center shrink-0 mt-0.5">
                    <fact.icon className="w-4 h-4 text-frog-green" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-frog-muted text-xs uppercase tracking-wider font-bold mb-1">{fact.label}</p>
                    <p
                      className="text-frog-light text-sm font-semibold leading-snug"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {fact.value}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STEPS ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow>Steps</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-2xl md:text-3xl font-bold text-frog-light mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              How to Register a CC in Namibia
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base max-w-xl mb-12 leading-relaxed">
              Six steps from name reservation to certificate. All filings go through BIPA, the Business and Intellectual Property Authority of Namibia.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 0.06}>
                <DoubleBezel>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-9 h-9 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center text-frog-green font-bold text-sm">
                        {step.n}
                      </span>
                      <Check className="w-4 h-4 text-frog-green" strokeWidth={2} />
                    </div>
                    <h3
                      className="text-lg font-bold text-frog-light mb-2"
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

      {/* ═══ REQUIREMENTS ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a] relative overflow-hidden">

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <Eyebrow>Requirements</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-2xl md:text-3xl font-bold text-frog-light mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              What You Need to Register
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base max-w-xl mb-12 leading-relaxed">
              Gather these documents before you start. Incomplete filings are returned by BIPA without processing.
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

      {/* ═══ TIMELINE & FEES ═══ */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-[#0a0a0a] border-y border-frog-hairline">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow>Timeline &amp; Fees</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              className="text-2xl md:text-3xl font-bold text-frog-light mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Processing Time and Costs
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base max-w-xl mb-12 leading-relaxed">
              BIPA processes complete submissions within 5–10 working days. Delays occur when documents are missing or incorrectly certified.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ScrollReveal delay={0}>
              <DoubleBezel>
                <div className="text-center">
                  <p
                    className="text-3xl md:text-4xl font-bold text-frog-green mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    5–10
                  </p>
                  <p className="text-frog-light text-sm font-bold mb-1">Working Days</p>
                  <p className="text-frog-muted text-xs leading-relaxed">
                    From complete submission to certificate. Incomplete filings are returned.
                  </p>
                </div>
              </DoubleBezel>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <DoubleBezel>
                <div className="text-center">
                  <p
                    className="text-3xl md:text-4xl font-bold text-frog-green mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    N$150–300
                  </p>
                  <p className="text-frog-light text-sm font-bold mb-1">BIPA Filing Fee</p>
                  <p className="text-frog-muted text-xs leading-relaxed">
                    Payable to BIPA upon submission of Form CC1. Separate from name reservation.
                  </p>
                </div>
              </DoubleBezel>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <DoubleBezel>
                <div className="text-center">
                  <p
                    className="text-3xl md:text-4xl font-bold text-frog-green mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    N$50–150
                  </p>
                  <p className="text-frog-light text-sm font-bold mb-1">Name Reservation</p>
                  <p className="text-frog-muted text-xs leading-relaxed">
                    Payable to BIPA to reserve your proposed name before filing the CC1.
                  </p>
                </div>
              </DoubleBezel>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.18}>
            <div className="mt-8 p-6 rounded-[2rem] bg-frog-green/[0.06] ring-1 ring-frog-green/20">
              <p className="text-frog-light text-sm leading-relaxed">
                <span className="text-frog-green font-bold">Annual Return (Form CC4)</span>, due within 30 days of your registration anniversary each year. BIPA fee: N$50. Late penalty: N$200 per month. Persistent non-filing leads to deregistration.
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
              Ready to register?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-frog-muted text-base md:text-lg mb-10 max-w-lg mx-auto">
              We handle your CC registration from name reservation to certificate, filed through BIPA, governed by the Close Corporations Act 26 of 1988. All over WhatsApp.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={waLink('registration')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Register your CC via WhatsApp"
                className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] min-h-[48px] touch-manipulation"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Register via WhatsApp
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
