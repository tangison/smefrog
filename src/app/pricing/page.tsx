'use client'

import { Check, ArrowRight, MessageCircle, Crown, Sparkles, Minus } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

/* ─── Data ─────────────────────────────────────────── */
const ccPackages = [
  {
    name: 'BASIC',
    price: '800',
    features: ['Name Reservation', 'Form CC8', 'Form CC1', 'Submission Handling'],
    featured: false,
  },
  {
    name: 'ADVANCED',
    price: '1,200',
    features: ['Everything in Basic', 'BO Filing', 'Digital Certificate', 'Compliance Handling'],
    featured: false,
  },
  {
    name: 'FULL',
    price: '1,750',
    features: ['Everything in Advanced', 'Remote Support', 'WhatsApp Assistance', 'Bank-Ready Documents', 'Priority Communication'],
    featured: true,
  },
]

const comparisonFeatures = [
  { feature: 'Name Reservation', basic: true, advanced: true, full: true },
  { feature: 'Form CC8', basic: true, advanced: true, full: true },
  { feature: 'Form CC1', basic: true, advanced: true, full: true },
  { feature: 'Submission Handling', basic: true, advanced: true, full: true },
  { feature: 'BO Filing', basic: false, advanced: true, full: true },
  { feature: 'Digital Certificate', basic: false, advanced: true, full: true },
  { feature: 'Compliance Handling', basic: false, advanced: true, full: true },
  { feature: 'Remote Support', basic: false, advanced: false, full: true },
  { feature: 'WhatsApp Assistance', basic: false, advanced: false, full: true },
  { feature: 'Bank-Ready Documents', basic: false, advanced: false, full: true },
  { feature: 'Priority Communication', basic: false, advanced: false, full: true },
]

const ptyltdFeatures = [
  'Form CM5',
  'MOI Documents',
  'CM1 & CM29',
  'BO Declaration',
  'BIPA Filing',
  'Digital Certificate',
  'Full Remote Handling',
  'Priority Support',
]

/* ─── Reusable ─────────────────────────────────────── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
      {children}
    </span>
  )
}

function DoubleBezel({ children, className = '', highlight = false }: { children: React.ReactNode; className?: string; highlight?: boolean }) {
  const ringClass = highlight ? 'ring-frog-green/25' : 'ring-frog-hairline'
  return (
    <div className={`bg-frog-shell ring-1 ${ringClass} p-1.5 rounded-[2rem] ${className}`}>
      <div className="bg-frog-card rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 md:p-8 h-full">
        {children}
      </div>
    </div>
  )
}

/* ─── Page ──────────────────────────────────────────── */
export default function PricingPage() {
  const easing = 'transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]'
  const arrowEasing = 'transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]'

  return (
    <>
      {/* HEADER - LIGHT */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Eyebrow>Startup-Friendly Pricing</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#1A1A1A] leading-tight">
              Transparent Pricing.<br />No Hidden Costs.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-[#6B7280] text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
              Professional support without inflated consultant pricing. What you see is what you pay.
            </p>
          </ScrollReveal>

          {/* Quick price nav pills */}
          <ScrollReveal delay={0.18}>
            <div className="flex flex-wrap items-center gap-3 mt-10">
              <a
                href="#cc-packages"
                className={`inline-flex items-center gap-2 bg-[#F3F4F6] hover:bg-frog-green/10 text-[#374151] hover:text-frog-green rounded-full px-5 py-2.5 text-sm font-medium ${easing}`}
              >
                CC Registration
                <span className="text-frog-green font-semibold">from N$800</span>
              </a>
              <a
                href="#pty-ltd"
                className={`inline-flex items-center gap-2 bg-[#F3F4F6] hover:bg-frog-green/10 text-[#374151] hover:text-frog-green rounded-full px-5 py-2.5 text-sm font-medium ${easing}`}
              >
                Pty Ltd
                <span className="text-frog-green font-semibold">N$3,500</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CC REGISTRATION PACKAGES - DARK */}
      <section id="cc-packages" className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={0.06}>
            <Eyebrow>CC Registration</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-frog-light mb-4">
              Close Corporation Packages
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p className="text-frog-muted text-base max-w-xl mb-12 leading-relaxed">
              Choose the level of support that fits your needs. Every package includes professional handling of your registration.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ccPackages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.06}>
                <DoubleBezel highlight={pkg.featured} className="h-full">
                  <div className="flex flex-col h-full">
                    {/* Tier + Badge */}
                    <div className="flex items-center gap-2 mb-5">
                      <span className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20">
                        {pkg.name}
                      </span>
                      {pkg.featured && (
                        <span className="rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] font-semibold bg-frog-green text-frog-black flex items-center gap-1">
                          <Crown className="w-3 h-3" strokeWidth={1.5} />
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-base font-heading text-frog-muted">N$</span>
                      <span className="text-4xl font-heading font-bold text-frog-light">{pkg.price}</span>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-frog-hairline mb-6" />

                    {/* Features */}
                    <ul className="space-y-2.5 flex-1 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-frog-green" strokeWidth={2} />
                          </span>
                          <span className="text-frog-muted text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    {pkg.featured ? (
                      <a
                        href="https://wa.me/264813411522"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group inline-flex items-center justify-center gap-2 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 active:scale-[0.98] ${easing}`}
                      >
                        Get Started
                        <span className={`w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${arrowEasing}`}>
                          <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </span>
                      </a>
                    ) : (
                      <a
                        href="https://wa.me/264813411522"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group inline-flex items-center justify-center gap-2 ring-1 ring-frog-green/30 text-frog-green rounded-full px-7 py-3.5 text-sm font-medium bg-frog-green/[0.05] hover:bg-frog-green/[0.1] active:scale-[0.98] ${easing}`}
                      >
                        Get Started
                        <span className={`w-7 h-7 rounded-full bg-frog-green/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${arrowEasing}`}>
                          <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </span>
                      </a>
                    )}
                  </div>
                </DoubleBezel>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON - LIGHT / EDITORIAL */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <Eyebrow>Compare Packages</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1A1A1A] mb-4">
              Feature Comparison
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-[#6B7280] text-base max-w-xl mb-12 leading-relaxed">
              See exactly what&apos;s included in each CC Registration package at a glance.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            {/* Editorial comparison table */}
            <div className="rounded-2xl border border-[#E5E7EB] overflow-hidden">
              {/* Header row */}
              <div className="grid grid-cols-4 bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <div className="p-4 md:p-5">
                  <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#9CA3AF]">Feature</span>
                </div>
                <div className="p-4 md:p-5 text-center border-l border-[#E5E7EB]">
                  <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#6B7280]">Basic</span>
                  <div className="text-[#1A1A1A] font-heading font-bold mt-0.5">N$800</div>
                </div>
                <div className="p-4 md:p-5 text-center border-l border-[#E5E7EB]">
                  <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#6B7280]">Advanced</span>
                  <div className="text-[#1A1A1A] font-heading font-bold mt-0.5">N$1,200</div>
                </div>
                <div className="p-4 md:p-5 text-center border-l border-[#E5E7EB] bg-frog-green/[0.04]">
                  <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.15em] font-semibold text-frog-green">
                    <Crown className="w-3 h-3" strokeWidth={1.5} />
                    Full
                  </span>
                  <div className="text-[#1A1A1A] font-heading font-bold mt-0.5">N$1,750</div>
                </div>
              </div>

              {/* Feature rows */}
              {comparisonFeatures.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-4 ${i < comparisonFeatures.length - 1 ? 'border-b border-[#F3F4F6]' : ''} hover:bg-[#FAFAFA] transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]`}
                >
                  <div className="p-4 md:p-5">
                    <span className="text-sm text-[#374151] font-medium">{row.feature}</span>
                  </div>
                  <div className="p-4 md:p-5 flex items-center justify-center border-l border-[#F3F4F6]">
                    {row.basic ? (
                      <span className="w-5 h-5 rounded-full bg-frog-green/15 flex items-center justify-center">
                        <Check className="w-3 h-3 text-frog-green" strokeWidth={2} />
                      </span>
                    ) : (
                      <Minus className="w-4 h-4 text-[#D1D5DB]" strokeWidth={1.5} />
                    )}
                  </div>
                  <div className="p-4 md:p-5 flex items-center justify-center border-l border-[#F3F4F6]">
                    {row.advanced ? (
                      <span className="w-5 h-5 rounded-full bg-frog-green/15 flex items-center justify-center">
                        <Check className="w-3 h-3 text-frog-green" strokeWidth={2} />
                      </span>
                    ) : (
                      <Minus className="w-4 h-4 text-[#D1D5DB]" strokeWidth={1.5} />
                    )}
                  </div>
                  <div className="p-4 md:p-5 flex items-center justify-center border-l border-[#F3F4F6] bg-frog-green/[0.02]">
                    {row.full ? (
                      <span className="w-5 h-5 rounded-full bg-frog-green/15 flex items-center justify-center">
                        <Check className="w-3 h-3 text-frog-green" strokeWidth={2} />
                      </span>
                    ) : (
                      <Minus className="w-4 h-4 text-[#D1D5DB]" strokeWidth={1.5} />
                    )}
                  </div>
                </div>
              ))}

              {/* CTA row */}
              <div className="grid grid-cols-4 border-t border-[#E5E7EB] bg-[#F9FAFB]">
                <div className="p-4 md:p-5" />
                <div className="p-4 md:p-5 flex items-center justify-center border-l border-[#E5E7EB]">
                  <a
                    href="https://wa.me/264813411522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium text-[#6B7280] hover:text-frog-green ${easing}`}
                  >
                    Choose Basic &rarr;
                  </a>
                </div>
                <div className="p-4 md:p-5 flex items-center justify-center border-l border-[#E5E7EB]">
                  <a
                    href="https://wa.me/264813411522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium text-[#6B7280] hover:text-frog-green ${easing}`}
                  >
                    Choose Advanced &rarr;
                  </a>
                </div>
                <div className="p-4 md:p-5 flex items-center justify-center border-l border-[#E5E7EB] bg-frog-green/[0.04]">
                  <a
                    href="https://wa.me/264813411522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center gap-1.5 bg-frog-green text-frog-black font-semibold rounded-full px-5 py-2 text-sm hover:bg-frog-green/90 active:scale-[0.98] ${easing}`}
                  >
                    Get Full
                    <ArrowRight className={`w-3.5 h-3.5 group-hover:translate-x-0.5 ${arrowEasing}`} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PTY LTD REGISTRATION - DARK */}
      <section id="pty-ltd" className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={0.06}>
            <Eyebrow>Scale Up</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-frog-light mb-12">
              Pty Ltd Registration
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <DoubleBezel highlight className="max-w-4xl">
              {/* Price comparison header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div>
                  <span className="inline-block rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-frog-green/10 text-frog-green border border-frog-green/20 mb-4">
                    SCALE UP PACKAGE
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-base font-heading text-frog-muted">N$</span>
                    <span className="text-5xl md:text-6xl font-heading font-bold text-frog-light">3,500</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:text-right">
                  {/* Market comparison card */}
                  <div className="bg-frog-shell ring-1 ring-frog-hairline rounded-xl p-4 md:p-5">
                    <div className="flex items-center gap-3 justify-end">
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-[0.15em] text-frog-muted/60 font-medium mb-1">Typical Market</p>
                        <p className="text-xl md:text-2xl font-heading font-bold text-frog-muted line-through">N$6,450+</p>
                      </div>
                      <div className="w-px h-10 bg-frog-hairline" />
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-[0.15em] text-frog-green/60 font-medium mb-1">SMEfrog</p>
                        <p className="text-xl md:text-2xl font-heading font-bold text-frog-green">N$3,500</p>
                      </div>
                    </div>
                  </div>
                  <span className="text-frog-green text-sm font-medium flex items-center gap-2 md:justify-end">
                    <Sparkles className="w-4 h-4" strokeWidth={1.5} />
                    Save over N$2,950 compared to market rates
                  </span>
                </div>
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {ptyltdFeatures.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-frog-green/15 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-frog-green" strokeWidth={2} />
                    </span>
                    <span className="text-frog-muted text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-frog-green/15">
                <p className="text-frog-muted text-sm">
                  Full remote handling - no office visits required.
                </p>
                <a
                  href="https://wa.me/264813411522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-frog-green/90 active:scale-[0.98] ${easing}`}
                >
                  Get Started
                  <span className={`w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${arrowEasing}`}>
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </span>
                </a>
              </div>
            </DoubleBezel>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA - DARK */}
      <section className="py-24 md:py-32 lg:py-40 px-4 md:px-6 bg-frog-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-frog-dark via-frog-green/10 to-frog-dark pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-frog-green/[0.08] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-frog-light mb-4">
              Ready to Get Started?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-frog-muted text-base md:text-lg mb-8">
              Choose your package and start your business registration today.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/264813411522"
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-2.5 bg-frog-green text-frog-black font-semibold rounded-full px-8 py-4 text-sm hover:bg-frog-green/90 active:scale-[0.98] ${easing}`}
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                Chat on WhatsApp
                <span className={`w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[0.5px] ${arrowEasing}`}>
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
