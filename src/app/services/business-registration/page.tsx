'use client'

import { Building2, Check, ArrowRight, MessageCircle, Clock, Shield, FileCheck, Landmark } from 'lucide-react'
import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'

/* ─── Data ─────────────────────────────────────────── */
const ccRegistration = {
  title: 'CC Registration',
  description: 'Close Corporation registration for small businesses and solo entrepreneurs. The most popular and affordable way to formalise your business in Namibia.',
  turnaround: '7–10 Working Days',
  price: 'From N$800',
  items: [
    'Name Reservation with BIPA',
    'Founding Statement (CC8)',
    'Constitution (CC1)',
    'Beneficial Owner Declaration',
    'BIPA Filing & Submission',
    'Digital Certificate Issued',
    'Bank-Ready Registration Documents',
  ],
}

const ptyLtdRegistration = {
  title: 'Pty Ltd Registration',
  description: 'Private Company registration for growing businesses that need a more formal structure, shareholding, and scalability.',
  price: 'From N$3,500',
  items: [
    'Name Reservation (Form CM5)',
    'Memorandum of Incorporation (MOI)',
    'Registration Forms (CM1 & CM29)',
    'Beneficial Owner Declaration',
    'BIPA Filing & Submission',
    'Digital Certificate Issued',
    'Full Remote Handling',
    'Priority Support',
  ],
}

const bipaSection = {
  title: 'BIPA Compliance',
  description: 'We handle all BIPA-related filings and submissions on your behalf. No office visits, no paperwork confusion — everything is managed remotely.',
  items: [
    'Annual Returns Filing',
    'Beneficial Ownership Updates',
    'Name Changes & Amendments',
    'Deregistration Support',
    'Compliance Status Checks',
  ],
}

const boFiling = {
  title: 'BO Filing',
  description: 'Beneficial Ownership declarations are now mandatory. We ensure your business stays compliant with the latest regulatory requirements.',
  items: [
    'Beneficial Owner Declaration',
    'Filing with BIPA',
    'Amendment Filings',
    'Compliance Confirmation',
  ],
}

const pricingComparison = {
  market: 'N$6,450+',
  smefrog: 'From N$800',
  savings: 'Save over N$2,950 compared to market rates',
}

export default function BusinessRegistrationPage() {
  return (
    <>
      {/* ─── Header ─── */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
              Business Registration
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-frog-light leading-tight">
              Register Smarter<span className="text-frog-green">.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-frog-muted text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              We simplify company registration through fast, affordable, fully remote compliance support.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CC Registration ─── */}
      <section className="pb-4 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="bg-frog-shell ring-1 ring-frog-green/25 p-1.5 rounded-[2rem]">
              <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                  {/* Left */}
                  <div className="md:w-1/3 shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-4">
                      <Building2 className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-xl md:text-2xl font-heading font-bold text-frog-light mb-2">
                      {ccRegistration.title}
                    </h2>
                    <p className="text-frog-muted text-sm leading-relaxed mb-4">
                      {ccRegistration.description}
                    </p>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-frog-green text-sm font-medium">
                        <Clock className="w-4 h-4" strokeWidth={1.5} />
                        {ccRegistration.turnaround}
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-frog-muted text-sm">Starting at</span>
                        <span className="text-2xl font-heading font-bold text-frog-light">{ccRegistration.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right — Items */}
                  <div className="flex-1">
                    <ul className="space-y-2.5">
                      {ccRegistration.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-frog-green" strokeWidth={2} />
                          </span>
                          <span className="text-frog-light text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Pty Ltd Registration ─── */}
      <section className="py-4 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="bg-frog-shell ring-1 ring-frog-hairline p-1.5 rounded-[2rem]">
              <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                  {/* Left */}
                  <div className="md:w-1/3 shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-4">
                      <Landmark className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-xl md:text-2xl font-heading font-bold text-frog-light mb-2">
                      {ptyLtdRegistration.title}
                    </h2>
                    <p className="text-frog-muted text-sm leading-relaxed mb-4">
                      {ptyLtdRegistration.description}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-frog-muted text-sm">Starting at</span>
                      <span className="text-2xl font-heading font-bold text-frog-light">{ptyLtdRegistration.price}</span>
                    </div>
                  </div>

                  {/* Right — Items */}
                  <div className="flex-1">
                    <ul className="space-y-2.5">
                      {ptyLtdRegistration.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-frog-green" strokeWidth={2} />
                          </span>
                          <span className="text-frog-light text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── BIPA & BO Filing ─── */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 border-t border-frog-hairline">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* BIPA Compliance */}
            <ScrollReveal>
              <div className="bg-frog-shell ring-1 ring-frog-hairline p-1.5 rounded-[2rem] h-full">
                <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8 h-full">
                  <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-4">
                    <Shield className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-frog-light mb-2">
                    {bipaSection.title}
                  </h2>
                  <p className="text-frog-muted text-sm leading-relaxed mb-4">
                    {bipaSection.description}
                  </p>
                  <ul className="space-y-2.5">
                    {bipaSection.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-frog-green shrink-0" />
                        <span className="text-frog-muted text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* BO Filing */}
            <ScrollReveal delay={0.06}>
              <div className="bg-frog-shell ring-1 ring-frog-hairline p-1.5 rounded-[2rem] h-full">
                <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8 h-full">
                  <div className="w-10 h-10 rounded-xl bg-frog-green/10 ring-1 ring-frog-green/20 flex items-center justify-center mb-4">
                    <FileCheck className="w-5 h-5 text-frog-green" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-frog-light mb-2">
                    {boFiling.title}
                  </h2>
                  <p className="text-frog-muted text-sm leading-relaxed mb-4">
                    {boFiling.description}
                  </p>
                  <ul className="space-y-2.5">
                    {boFiling.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-frog-green shrink-0" />
                        <span className="text-frog-muted text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Pricing Comparison ─── */}
      <section className="pb-24 md:pb-32 lg:pb-40 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="bg-frog-shell ring-1 ring-frog-green/25 p-1.5 rounded-[2rem]">
              <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8">
                <div className="text-center mb-8">
                  <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
                    Pricing Comparison
                  </span>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-frog-light">
                    See the Difference
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Market */}
                  <div className="rounded-2xl bg-frog-shell ring-1 ring-frog-hairline p-6 text-center">
                    <p className="text-frog-muted text-xs uppercase tracking-wider mb-2">Typical Market</p>
                    <p className="text-2xl md:text-3xl font-heading font-bold text-frog-muted line-through">{pricingComparison.market}</p>
                  </div>

                  {/* SMEfrog */}
                  <div className="rounded-2xl bg-frog-green/[0.08] ring-1 ring-frog-green/30 p-6 text-center">
                    <p className="text-frog-green text-xs uppercase tracking-wider mb-2">SMEfrog</p>
                    <p className="text-2xl md:text-3xl font-heading font-bold text-frog-green">{pricingComparison.smefrog}</p>
                  </div>
                </div>

                <p className="text-center text-frog-green text-sm font-medium mt-6">
                  {pricingComparison.savings}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 border-t border-frog-hairline relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-frog-green/[0.06] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-frog-light mb-4">
              Ready to Register Your Business?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <p className="text-frog-muted text-base mb-8">
              Get started with affordable, remote business registration today.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/pricing"
                className="group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                Register Your Business
                <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </span>
              </Link>
              <a
                href="https://wa.me/264813411522"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 ring-1 ring-frog-green/30 text-frog-green rounded-full px-7 py-3.5 text-sm font-medium bg-frog-green/[0.05] hover:bg-frog-green/[0.1] active:scale-[0.98] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Chat on WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
